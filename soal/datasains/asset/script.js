/* asset/script.js
   Versi final gabungan — simResults inline + official results full HTML + protections
   Paste menggantikan soal/keamanan/asset/script.js
*/
(function () {
    "use strict";

    // CONFIG
    const DEFAULT_TOTAL_TIME_SECONDS = 5400; // 1h30m
    const DEFAULT_PER_QUESTION_SECONDS = 90;
    const DISABLE_BACK_DEFAULT = true;

    // BANKS (from asset/soal.js)
    const MAIN_BANK = window.QUESTION_BANK || [];
    const SIM_BANK = window.SIMULATION_BANK || [];

    // STATE
    let state = {
        pool: [],
        index: 0,
        answers: {},
        score: 0,
        qTimer: null,
        qRemaining: 0,
        examTimer: null,
        examRemaining: 0,
        locked: {},
        simulation: false,
        fullscreenExitCount: 0,
        devtoolsCount: 0,
    };

    // UI refs (defensive queries)
    const qIndexEl = document.getElementById("qIndex");
    const qTotalEl = document.getElementById("qTotal");
    const questionText = document.getElementById("questionText");
    const choicesEl = document.getElementById("choices");
    const explainArea = document.getElementById("explainArea");
    const navPanel = document.getElementById("navPanel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const submitBtn = document.getElementById("submitBtn");
    const scoreEl = document.getElementById("score");
    const scaledScoreEl = document.getElementById("scaledScore");
    const exportBtn = document.getElementById("exportBtn");
    const perQuestionTimerEl = document.getElementById("perQuestionTimer");
    const overallTimerEl = document.getElementById("overallTimer");
    const progressBarInner = document.querySelector("#progressBar i");
    const startModal = document.getElementById("startModal");
    const simBtn = document.getElementById("simBtn");
    const beginBtn = document.getElementById("beginBtn");
    const watermarkEl = document.getElementById("watermark");
    const wmTime = document.getElementById("wmTime");
    const userNameEl = document.getElementById("userName");
    const PARTICIPANT_NAME = "Peserta";
    if (userNameEl) userNameEl.textContent = PARTICIPANT_NAME;

    // helpers
    function pad2(n) {
        return String(n).padStart(2, "0");
    }
    function formatHMS(sec) {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
    }
    function formatMS(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${pad2(m)}:${pad2(s)}`;
    }
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function escapeHtml(unsafe) {
        if (unsafe === null || unsafe === undefined) return "";
        return String(unsafe)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // watermark
    function updateWatermarkTime() {
        const d = new Date();
        const hh = pad2(d.getHours()),
            mm = pad2(d.getMinutes()),
            ss = pad2(d.getSeconds());
        if (wmTime) wmTime.textContent = `${hh}:${mm}:${ss}`;
        if (watermarkEl)
            watermarkEl.innerHTML = `Peserta: ${PARTICIPANT_NAME} — <span style="font-weight:700">${hh}:${mm}:${ss}</span>`;
    }
    setInterval(updateWatermarkTime, 1000);
    updateWatermarkTime();

    // prepare initial UI
    function prepare() {
        if (qTotalEl) qTotalEl.textContent = 0;
        buildNavPanel();
        updateScoreUI();
        updateProgress();
    }

    /* ----------------
       NAV PANEL
    -----------------*/
    function buildNavPanel() {
        if (!navPanel) return;
        navPanel.innerHTML = "";
        const frag = document.createDocumentFragment();
        state.pool.forEach((q, i) => {
            const btn = document.createElement("div");
            btn.className = "nav-item";
            if (i === state.index) btn.classList.add("current");
            if (state.answers[q.id]) btn.classList.add("answered");
            if (state.locked[q.id]) btn.classList.add("locked");
            btn.dataset.i = i;

            // number node
            const num = document.createElement("span");
            num.className = "nav-number";
            num.textContent = i + 1;
            btn.appendChild(num);

            // small badge showing chosen answer or dash
            const badge = document.createElement("span");
            badge.className = "ans-badge";
            badge.textContent = state.answers[q.id] || "-";
            btn.appendChild(badge);

            btn.addEventListener("click", () => {
                if (DISABLE_BACK_DEFAULT && state.locked[state.pool[i].id])
                    return;
                goto(i);
            });
            frag.appendChild(btn);
        });
        navPanel.appendChild(frag);
        highlightNav();
        updateSubmitVisibility();
    }

    function highlightNav() {
        if (!navPanel) return;
        Array.from(navPanel.children).forEach((b, idx) => {
            b.classList.toggle("current", idx === state.index);
            const q = state.pool[idx];
            b.classList.toggle("answered", !!state.answers[q.id]);
            b.classList.toggle("locked", !!state.locked[q.id]);
            b.classList.remove("correct", "incorrect", "unanswered");
            const sel = state.answers[q.id] || "";
            if (state.locked[q.id]) {
                if (sel === "") b.classList.add("unanswered");
                else if (sel === q.answerId) b.classList.add("correct");
                else b.classList.add("incorrect");
            } else {
                if (sel === "") b.classList.add("unanswered");
            }
        });
    }

    /* -------------
       START EXAM
    --------------*/
    function startExam(mode) {
        state.index = 0;
        state.score = 0;
        state.answers = {};
        state.locked = {};
        state.simulation = mode === "simulation";

        if (state.simulation) {
            state.pool =
                SIM_BANK && SIM_BANK.length
                    ? JSON.parse(JSON.stringify(SIM_BANK))
                    : [];
            shuffle(state.pool);
        } else {
            state.pool =
                MAIN_BANK && MAIN_BANK.length
                    ? JSON.parse(JSON.stringify(MAIN_BANK))
                    : [];
            shuffle(state.pool);
        }

        if (qTotalEl) qTotalEl.textContent = state.pool.length;

        state.examRemaining = state.simulation
            ? Math.max(
                  300,
                  state.pool.reduce(
                      (s, q) => s + (q.time || DEFAULT_PER_QUESTION_SECONDS),
                      0
                  )
              )
            : DEFAULT_TOTAL_TIME_SECONDS;

        if (overallTimerEl)
            overallTimerEl.textContent = formatHMS(state.examRemaining);

        if (state.examTimer) {
            clearInterval(state.examTimer);
            state.examTimer = null;
        }
        state.examTimer = setInterval(() => {
            state.examRemaining--;
            if (overallTimerEl)
                overallTimerEl.textContent = formatHMS(state.examRemaining);
            if (state.examRemaining <= 0) {
                clearInterval(state.examTimer);
                state.examTimer = null;
                onExamEnd();
            }
            updateSubmitVisibility();
        }, 1000);

        buildNavPanel();
        render();
    }

    /* ----------------
       RENDER QUESTION
    -----------------*/
    function render() {
        clearQTimer();
        const q = state.pool[state.index];
        if (!q) {
            if (questionText) questionText.textContent = "Tidak ada soal.";
            if (choicesEl) choicesEl.innerHTML = "";
            return;
        }

        if (questionText) questionText.textContent = q.question;
        if (choicesEl) choicesEl.innerHTML = "";

        q.choices.forEach((c) => {
            const el = document.createElement("div");
            el.className = "choice";
            el.tabIndex = 0;
            el.dataset.cid = c.id;

            const key = document.createElement("div");
            key.className = "key";
            key.textContent = c.id;
            const txt = document.createElement("div");
            txt.textContent = c.text;

            el.appendChild(key);
            el.appendChild(txt);

            if (state.answers[q.id] && state.answers[q.id] === c.id)
                el.classList.add("selected");

            el.addEventListener("click", () => {
                if (state.locked[q.id]) return;
                select(q.id, c.id);
            });
            el.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    el.click();
                }
            });

            choicesEl.appendChild(el);
        });

        if (qIndexEl) qIndexEl.textContent = state.index + 1;

        state.qRemaining = "time" in q ? q.time : DEFAULT_PER_QUESTION_SECONDS;
        if (perQuestionTimerEl)
            perQuestionTimerEl.textContent = formatMS(state.qRemaining);

        state.qTimer = setInterval(() => {
            state.qRemaining--;
            if (perQuestionTimerEl)
                perQuestionTimerEl.textContent = formatMS(state.qRemaining);
            if (state.qRemaining <= 0) {
                clearQTimer();
                onQuestionTimeUp();
            }
        }, 1000);

        if (state.locked[q.id]) showLocked(q);

        highlightNav();
        updateProgress();
        updateSubmitVisibility();
    }

    function clearQTimer() {
        if (state.qTimer) {
            clearInterval(state.qTimer);
            state.qTimer = null;
        }
    }

    function select(qid, cid) {
        state.answers[qid] = cid;
        Array.from(choicesEl.children).forEach((ch) =>
            ch.classList.remove("selected")
        );
        const chosen = Array.from(choicesEl.children).find(
            (ch) => ch.dataset.cid === cid
        );
        if (chosen) chosen.classList.add("selected");
        buildNavPanel();
        updateSubmitVisibility();
    }

    function onQuestionTimeUp() {
        const q = state.pool[state.index];
        const sel = state.answers[q.id] || null;
        lockQuestion(q, sel, true);
    }

    function lockQuestion(q, selected, dueToTimeout = false) {
        if (state.locked[q.id]) return;
        state.locked[q.id] = true;
        Array.from(choicesEl.children).forEach((ch) => {
            const cid = ch.dataset.cid;
            ch.classList.remove("correct", "incorrect");
            if (cid === q.answerId) ch.classList.add("correct");
            if (selected && cid === selected && cid !== q.answerId)
                ch.classList.add("incorrect");
            ch.classList.add("disabled");
        });
        if (selected === q.answerId && !q._scored) {
            state.score += q.points || 0;
            q._scored = true;
            updateScoreUI();
        }
        if (explainArea) {
            explainArea.innerHTML = "";
            const wrap = document.createElement("div");
            wrap.className = "explain";
            const title = document.createElement("strong");
            title.textContent = "Penjelasan:";
            const body = document.createElement("div");
            body.style.marginTop = "8px";
            body.textContent = q.explanation || "Tidak ada penjelasan.";
            const meta = document.createElement("div");
            meta.style.marginTop = "8px";
            meta.className = "muted";
            meta.textContent = `Jawaban: ${selected || "-"} | Kunci: ${
                q.answerId
            }${dueToTimeout ? " (Waktu habis)" : ""}`;
            wrap.appendChild(title);
            wrap.appendChild(body);
            wrap.appendChild(meta);
            explainArea.appendChild(wrap);
        }
        buildNavPanel();
        updateSubmitVisibility();
    }

    function showLocked(q) {
        Array.from(choicesEl.children).forEach((ch) => {
            const cid = ch.dataset.cid;
            if (cid === q.answerId) ch.classList.add("correct");
            const sel = state.answers[q.id];
            if (sel && cid === sel && cid !== q.answerId)
                ch.classList.add("incorrect");
            ch.classList.add("disabled");
        });
        if (explainArea) {
            explainArea.innerHTML = "";
            const wrap = document.createElement("div");
            wrap.className = "explain";
            const title = document.createElement("strong");
            title.textContent = "Penjelasan:";
            const body = document.createElement("div");
            body.style.marginTop = "8px";
            body.textContent = q.explanation || "";
            const meta = document.createElement("div");
            meta.style.marginTop = "8px";
            meta.className = "muted";
            meta.textContent = `Jawaban: ${
                state.answers[q.id] || "-"
            } | Kunci: ${q.answerId}`;
            wrap.appendChild(title);
            wrap.appendChild(body);
            wrap.appendChild(meta);
            explainArea.appendChild(wrap);
        }
    }

    function goto(i) {
        state.index = i;
        render();
    }

    function next() {
        if (!state.examTimer) return;
        if (state.index < state.pool.length - 1) state.index++;
        else state.index = 0;
        render();
    }

    function prev() {
        if (!state.examTimer) return;
        if (state.index > 0) state.index--;
        else state.index = state.pool.length - 1;
        render();
    }

    function updateScoreUI() {
        if (scoreEl) scoreEl.textContent = state.score;
        if (scaledScoreEl)
            scaledScoreEl.textContent = computeScaled().toFixed(2);
    }

    function computeScaled() {
        const max = state.pool.reduce((s, q) => s + (q.points || 0), 0) || 1;
        return (state.score / max) * 100;
    }

    function updateSubmitVisibility() {
        const total = state.pool.length;
        const answered = state.pool.filter((q) => !!state.answers[q.id]).length;
        const allAnswered = answered === total && total > 0;
        if (!submitBtn) return;
        if (
            allAnswered ||
            (state.examRemaining !== undefined && state.examRemaining <= 0)
        ) {
            submitBtn.classList.remove("hidden");
        } else {
            submitBtn.classList.add("hidden");
        }
    }

    function updateProgress() {
        const total = state.pool.length;
        const idx = state.index;
        const percent = total ? Math.round((idx / total) * 100) : 0;
        if (progressBarInner) progressBarInner.style.width = percent + "%";
    }

    function onExamEnd() {
        state.pool.forEach((q) => {
            if (!state.locked[q.id]) {
                const sel = state.answers[q.id] || null;
                if (sel === q.answerId && !q._scored) {
                    state.score += q.points || 0;
                    q._scored = true;
                }
                state.locked[q.id] = true;
            }
        });
        updateScoreUI();
        buildNavPanel();
        updateSubmitVisibility();
        alert('Waktu ujian habis. Tombol "Selesai & Lihat Nilai" akan muncul.');
    }

    /* ----------------------
       Submission & Results
    ---------------------- */

    function submitExam() {
        clearQTimer();
        if (state.examTimer) {
            clearInterval(state.examTimer);
            state.examTimer = null;
        }

        state.pool.forEach((q) => {
            if (!state.locked[q.id]) {
                const sel = state.answers[q.id] || null;
                if (sel === q.answerId && !q._scored) {
                    state.score += q.points || 0;
                    q._scored = true;
                }
                state.locked[q.id] = true;
            }
        });

        updateScoreUI();
        buildNavPanel();

        // SIMULATION: render results inline (same page) WITHOUT print/download
        if (state.simulation) {
            renderSimulationResultsInline();
            return;
        }

        // OFFICIAL: replace page with full results (same tab), print/download available
        const resultsHtml = generateResultsHTML(false);
        openResultsInSamePage(resultsHtml);
    }

    function exportCSV() {
        const rows = [
            ["question_id", "question", "selected", "correct", "points"],
        ];
        state.pool.forEach((q) => {
            rows.push([
                q.id,
                `"${(q.question || "").replace(/"/g, '""')}"`,
                state.answers[q.id] || "",
                q.answerId,
                q.points || 0,
            ]);
        });
        const csv = rows.map((r) => r.join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "hasil_ujian.csv";
        a.click();
        URL.revokeObjectURL(url);
    }

    /* ----------------------
       Results HTML generator (official)
    ---------------------- */

    function generateResultsHTML(forSimulation = false) {
        // forSimulation flag kept for compatibility
        return buildOfficialResultsHTMLString();
    }

    function buildOfficialResultsHTMLString() {
        const totalPoints =
            state.pool.reduce((s, q) => s + (q.points || 0), 0) || 1;
        const scaled = ((state.score / totalPoints) * 100).toFixed(2);

        const css = `
            :root{
                --bg:#ffffff; --card:#ffffff; --muted:#6b7280; --text:#0f172a;
                --accent-start:#06b6d4; --accent-end:#0284c7; --good:#10b981; --bad:#ef4444;
                --neutral:#cbd5e1; --glass:rgba(2,6,23,0.06);
                --radius:14px;
            }
            *{box-sizing:border-box}
            html,body{height:100%;margin:0;padding:0;background:linear-gradient(180deg, #f7fbff 0%, #ffffff 30%);font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:var(--text);-webkit-font-smoothing:antialiased;}
            .wrap{max-width:1100px;margin:28px auto;padding:20px}
            .header{
            display:flex;align-items:center;justify-content:space-between;gap:12px;
            background:linear-gradient(90deg,var(--accent-start),var(--accent-end));
            color:white;padding:18px;border-radius:12px;box-shadow:0 12px 30px rgba(2,6,23,0.08);
            }
            .brand{font-size:20px;font-weight:800}
            .meta{font-size:13px;opacity:0.95}
            .summary{display:flex;gap:12px;align-items:center;margin-top:16px}
            .score-card{
            background:var(--card);padding:18px;border-radius:12px;box-shadow:0 8px 24px rgba(2,6,23,0.04);min-width:220px;
            display:flex;flex-direction:column;align-items:center;justify-content:center;
            }
            .score-large{font-weight:900;font-size:28px;color:var(--accent-end)}
            .score-sub{font-size:13px;color:var(--muted);margin-top:6px}
            .progress-pill{padding:8px 12px;border-radius:999px;background:rgba(255,255,255,0.08);font-weight:700}
            .actions{display:flex;gap:10px;align-items:center}
            .btn{padding:8px 12px;border-radius:8px;background:var(--accent-end);color:white;text-decoration:none;font-weight:700}
            .btn.ghost{background:transparent;color:var(--text);border:1px solid rgba(2,6,23,0.06)}
            .content-area{margin-top:18px;display:grid;grid-template-columns:1fr 320px;gap:18px}
            .q-list{display:flex;flex-direction:column;gap:12px}
            .card-q{
            background:var(--card);border-radius:12px;padding:12px;border:1px solid var(--glass);box-shadow:0 8px 20px rgba(2,6,23,0.03);
            overflow:hidden;
            }
            .q-head{display:flex;justify-content:space-between;align-items:center;gap:12px;cursor:pointer}
            .q-title{font-weight:800}
            .q-meta{font-size:13px;color:var(--muted)}
            .q-body{margin-top:12px;max-height:0;overflow:hidden;transition:all .28s ease;padding:0 4px}
            .q-body.open{max-height:2000px;padding:12px 4px}
            .choices{display:grid;gap:8px}
            .choice{display:flex;gap:10px;align-items:center;padding:10px;border-radius:10px;background:linear-gradient(180deg, #fbfdff, #fff);border:1px solid rgba(2,6,23,0.04)}
            .choice.correct{border-left:4px solid var(--good);background:linear-gradient(90deg, rgba(16,185,129,0.04), #fff)}
            .choice.incorrect{border-left:4px solid var(--bad);background:linear-gradient(90deg, rgba(239,68,68,0.04), #fff)}
            .choice .key{width:44px;height:44px;border-radius:10px;background:linear-gradient(180deg, rgba(2,6,23,0.03), rgba(2,6,23,0.01));display:flex;align-items:center;justify-content:center;font-weight:900}
            .explain{margin-top:10px;padding:12px;border-radius:10px;background:linear-gradient(180deg,#fbfdff,#f7fbff);border:1px solid rgba(2,6,23,0.03)}
            .sidebar{position:relative}
            .toc-card{position:sticky;top:20px;background:var(--card);padding:14px;border-radius:12px;box-shadow:0 8px 20px rgba(2,6,23,0.03)}
            .toc-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:10px}
            .toc-item{padding:8px;border-radius:8px;background:rgba(2,6,23,0.03);text-align:center;font-weight:700;cursor:pointer;color:var(--text);border:1px solid rgba(2,6,23,0.04)}
            .toc-item.correct{background:linear-gradient(90deg, rgba(16,185,129,0.12), rgba(16,185,129,0.06));color:#064e3b;border-color: rgba(16,185,129,0.16)}
            .toc-item.incorrect{background:linear-gradient(90deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06));color:#7f1d1d;border-color: rgba(239,68,68,0.16)}
            .toc-item.unanswered{background:linear-gradient(90deg, rgba(148,163,184,0.12), rgba(148,163,184,0.06));color:#475569;border-color: rgba(148,163,184,0.16)}
            .legend{display:flex;gap:8px;margin-top:12px;align-items:center}
            .legend .dot{width:12px;height:12px;border-radius:3px;display:inline-block}
            .dot.good{background:var(--good)} .dot.bad{background:var(--bad)} .dot.neutral{background:var(--neutral)}
            @media (max-width:980px){
            .content-area{grid-template-columns:1fr}
            .toc-grid{grid-template-columns:repeat(8,1fr)}
            }
            @media print{
            body{background:white}
            .header,.actions,.toc-card{display:none}
            .q-body{max-height:none!important}
            .card-q{box-shadow:none;border:none}
            }
        `;

        // Build cards HTML
        let listHtml = "";
        state.pool.forEach((q, idx) => {
            const selected = state.answers[q.id] || "";
            const status =
                selected === ""
                    ? "unanswered"
                    : selected === q.answerId
                    ? "correct"
                    : "incorrect";
            let choicesHtml = "";
            q.choices.forEach((c) => {
                const cls =
                    c.id === q.answerId
                        ? "correct"
                        : selected && c.id === selected && c.id !== q.answerId
                        ? "incorrect"
                        : "";
                // escape text content
                choicesHtml += `<div class="choice ${cls}"><div class="key">${escapeHtml(
                    c.id
                )}</div><div>${escapeHtml(c.text)}</div></div>`;
            });
            listHtml += `
            <div class="card-q" data-qid="${escapeHtml(String(q.id))}">
                <div class="q-head" role="button" aria-expanded="false" data-idx="${idx}">
                    <div>
                        <div class="q-title">${idx + 1}. ${escapeHtml(
                q.question
            )}</div>
                        <div class="q-meta">Bobot: ${escapeHtml(
                            String(q.points || 0)
                        )} • Pilihan: ${escapeHtml(
                selected || "-"
            )} • Kunci: ${escapeHtml(q.answerId)}</div>
                    </div>
                    <div style="text-align:right">
                        <div class="progress-pill">${escapeHtml(
                            String(q.time || "—")
                        )}s</div>
                        <div style="margin-top:8px" class="q-meta">${
                            selected
                                ? status === "correct"
                                    ? "Benar"
                                    : "Salah"
                                : "Belum dijawab"
                        }</div>
                    </div>
                </div>
                <div class="q-body" id="body-${idx}">
                    <div class="choices">${choicesHtml}</div>
                    <div class="explain"><strong>Penjelasan:</strong><div style="margin-top:8px">${escapeHtml(
                        q.explanation || "Tidak ada penjelasan."
                    )}</div></div>
                </div>
            </div>
            `;
        });

        // TOC items
        let tocHtml = "";
        state.pool.forEach((q, idx) => {
            const selected = state.answers[q.id] || "";
            const status =
                selected === ""
                    ? "unanswered"
                    : selected === q.answerId
                    ? "correct"
                    : "incorrect";
            tocHtml += `<div class="toc-item ${status}" data-idx="${idx}">${
                idx + 1
            }</div>`;
        });

        // Full HTML
        const html = `<!doctype html>
        <html>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <title>Hasil Ujian — Pembahasan Interaktif</title>
            <style>${css}</style>
        </head>
        <body>
            <div class="wrap">
                <div class="header">
                    <div>
                        <div class="brand">${escapeHtml(
                            "Hasil Ujian — Pembahasan Interaktif"
                        )}</div>
                        <div class="meta">Peserta: ${escapeHtml(
                            PARTICIPANT_NAME
                        )} • ${escapeHtml(new Date().toLocaleString())}</div>
                    </div>
                    <div style="display:flex;align-items:center;gap:14px">
                        <div class="score-card">
                            <div class="score-large">${escapeHtml(
                                String(state.score)
                            )} / ${escapeHtml(String(totalPoints))}</div>
                            <div class="score-sub">Nilai: <strong>${escapeHtml(
                                String(scaled)
                            )}%</strong></div>
                        </div>
                        <div class="actions">
                            <a class="btn" href="../../../index.html">Kembali ke dashboard</a>
                            <a id="btn_print" class="btn ghost" href="#" onclick="window.print();return false;">Print / Save as PDF</a>
                        </div>
                    </div>
                </div>

                <div class="content-area">
                    <div class="q-list">
                        ${listHtml}
                    </div>

                    <aside class="sidebar">
                        <div class="toc-card">
                            <div style="font-weight:800">Daftar Soal</div>
                            <div class="muted" style="margin-top:6px">Klik nomor untuk lompat ke soal</div>
                            <div class="toc-grid" id="tocGrid">
                                ${tocHtml}
                            </div>
                            <div class="legend">
                                <div style="display:flex;flex-direction:column;gap:6px">
                                    <div style="font-weight:700">Legenda</div>
                                    <div style="display:flex;gap:8px;align-items:center"><div class="dot good"></div><div class="muted">Benar</div></div>
                                    <div style="display:flex;gap:8px;align-items:center"><div class="dot bad"></div><div class="muted">Salah</div></div>
                                    <div style="display:flex;gap:8px;align-items:center"><div class="dot neutral"></div><div class="muted">Belum dijawab</div></div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <script>
            (function(){
                // accordion behavior
                document.querySelectorAll('.q-head').forEach(head=>{
                    head.addEventListener('click', ()=>{
                        const idx = head.dataset.idx;
                        const body = document.getElementById('body-' + idx);
                        const expanded = head.getAttribute('aria-expanded') === 'true';
                        document.querySelectorAll('.q-body').forEach(b=>{ if(b.id !== body.id) b.classList.remove('open'); });
                        document.querySelectorAll('.q-head').forEach(h=>h.setAttribute('aria-expanded','false'));
                        if(!expanded){
                            body.classList.add('open'); head.setAttribute('aria-expanded','true');
                            setTimeout(()=> head.scrollIntoView({behavior:'smooth', block:'center'}), 120);
                        } else {
                            body.classList.remove('open'); head.setAttribute('aria-expanded','false');
                        }
                    });
                });

                // TOC click handler
                var toc = document.getElementById('tocGrid');
                if(toc) {
                    toc.addEventListener('click', function(e){
                        var item = e.target.closest('.toc-item');
                        if(!item) return;
                        var idx = item.dataset.idx;
                        var head = document.querySelector('.q-head[data-idx=\"' + idx + '\"]');
                        if(head) head.click();
                    });
                }

                // Generate downloadable HTML (this page)
                try{
                    const htmlContent = document.documentElement.outerHTML;
                    const blob = new Blob([htmlContent], {type: 'text/html'});
                    const url = URL.createObjectURL(blob);
                    if(a) a.href = url;
                }catch(e){ console.error(e) }
            })();
            </script>
        </body>
        </html>`;

        return html;
    }

    /**
     * Replace current document with results HTML (same tab). No auto-print.
     */
    function openResultsInSamePage(resultsHtml) {
        try {
            document.open();
            document.write(resultsHtml);
            document.close();
        } catch (e) {
            console.error("Gagal mengganti page dengan hasil: ", e);
            alert(
                "Terjadi masalah ketika menampilkan hasil. Membuka hasil di tab baru sebagai fallback."
            );
            const blob = new Blob([resultsHtml], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const newWindow = window.open(url, "_blank");
            if (!newWindow) {
                const a = document.createElement("a");
                a.href = url;
                a.download = "hasil_pembahasan.html";
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
            } else {
                setTimeout(() => URL.revokeObjectURL(url), 30000);
            }
        }
    }

    /* ----------------------
       NEW: Inline Simulation Results Renderer
       - Renders results & pembahasan inside current page (no new tab)
       - No Print/Download buttons
       - Shows two buttons: "Mulai Ujian" and optionally "Kembali"
    ---------------------- */
    function renderSimulationResultsInline() {
        // Remove any existing inline results first
        const existing = document.getElementById("simResultsInline");
        if (existing) existing.remove();

        // Build container
        const wrapper = document.createElement("div");
        wrapper.id = "simResultsInline";
        wrapper.style.boxSizing = "border-box";
        wrapper.style.padding = "18px";
        wrapper.style.maxWidth = "1100px";
        wrapper.style.margin = "20px auto";
        wrapper.style.background = "#fff";
        wrapper.style.borderRadius = "12px";
        wrapper.style.border = "1px solid rgba(2,6,23,0.06)";
        wrapper.style.boxShadow = "0 12px 36px rgba(2,6,23,0.06)";

        // Make wrapper scrollable so the page always shows a scrollbar
        wrapper.style.maxHeight = "75vh";
        wrapper.style.overflow = "auto";
        wrapper.tabIndex = -1; // allow focus()

        // Header
        const totalPoints =
            state.pool.reduce((s, q) => s + (q.points || 0), 0) || 1;
        const scaled = ((state.score / totalPoints) * 100).toFixed(2);
        const header = document.createElement("div");
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        header.style.gap = "12px";
        header.innerHTML = `<div><div style="font-weight:900;font-size:18px">Hasil Simulasi</div><div class="muted" style="margin-top:6px">Peserta: ${PARTICIPANT_NAME} • ${new Date().toLocaleString()}</div></div>
        <div style="display:flex;gap:10px;align-items:center">
        <div style="background:#fff;padding:12px;border-radius:10px;box-shadow:0 8px 24px rgba(2,6,23,0.04);text-align:center">
            <div style="font-weight:900;font-size:20px">${
                state.score
            } / ${totalPoints}</div>
            <div style="font-size:13px;color:#6b7280">Nilai: <strong>${scaled}%</strong></div>
        </div>
        </div>`;
        wrapper.appendChild(header);

        // Content: questions & pembahasan
        const list = document.createElement("div");
        list.style.marginTop = "16px";
        state.pool.forEach((q, idx) => {
            const selected = state.answers[q.id] || "";
            const status =
                selected === ""
                    ? "Belum dijawab"
                    : selected === q.answerId
                    ? "Benar"
                    : "Salah";
            const card = document.createElement("div");
            card.style.marginBottom = "12px";
            card.style.padding = "12px";
            card.style.borderRadius = "10px";
            card.style.border = "1px solid rgba(2,6,23,0.04)";
            card.style.background = "linear-gradient(180deg,#fff,#fbfdff)";
            const head = document.createElement("div");
            head.style.display = "flex";
            head.style.justifyContent = "space-between";
            head.style.alignItems = "center";
            head.innerHTML = `<div style="font-weight:800">${idx + 1}. ${
                q.question
            }</div><div style="color:#6b7280">${status} • Bobot ${
                q.points || 0
            }</div>`;
            const choicesWrap = document.createElement("div");
            choicesWrap.style.marginTop = "8px";
            q.choices.forEach((c) => {
                const ch = document.createElement("div");
                ch.style.padding = "8px";
                ch.style.borderRadius = "8px";
                ch.style.marginBottom = "6px";
                if (c.id === q.answerId) {
                    ch.style.color = "#064e3b";
                    ch.style.fontWeight = "700";
                } else if (
                    state.answers[q.id] &&
                    c.id === state.answers[q.id] &&
                    c.id !== q.answerId
                ) {
                    ch.style.color = "#7f1d1d";
                }
                ch.textContent = `${c.id}. ${c.text}`;
                choicesWrap.appendChild(ch);
            });
            const explain = document.createElement("div");
            explain.className = "explain";
            explain.style.marginTop = "10px";
            explain.innerHTML = `<strong>Pembahasan:</strong><div style="margin-top:8px">${escapeHtml(
                q.explanation || "Tidak ada penjelasan."
            )}</div>`;
            card.appendChild(head);
            card.appendChild(choicesWrap);
            card.appendChild(explain);
            list.appendChild(card);
        });
        wrapper.appendChild(list);

        // Actions (no print/download)
        const actions = document.createElement("div");
        actions.style.display = "flex";
        actions.style.gap = "8px";
        actions.style.marginTop = "12px";
        actions.style.justifyContent = "flex-end";
        const btnStartExam = document.createElement("button");
        btnStartExam.className = "btn";
        btnStartExam.textContent = "Mulai Ujian";
        btnStartExam.addEventListener("click", () => {
            // Hapus hasil simulasi
            const el = document.getElementById("simResultsInline");
            if (el) el.remove();

            // Tampilkan kembali UI utama
            const mainWrapper = document.getElementById("mainWrapper");
            if (mainWrapper) mainWrapper.style.display = "";

            // Kembalikan scroll body seperti awal
            document.body.style.overflow = "";
            document.body.style.height = "";
            document.documentElement.style.height = "";

            // Reset posisi scroll
            window.scrollTo({ top: 0, behavior: "instant" });

            // Tutup modal and start official
            if (startModal) startModal.classList.remove("visible");

            // Pastikan repaint before render
            setTimeout(() => {
                startExam("official");
                try {
                    document.documentElement.requestFullscreen();
                } catch (e) {}
            }, 30);
        });

        const btnBack = document.createElement("button");
        btnBack.className = "btn ghost";
        btnBack.textContent = "Kembali";
        btnBack.addEventListener("click", () => {
            const el = document.getElementById("simResultsInline");
            if (el) el.remove();
            const mainWrapper = document.getElementById("mainWrapper");
            if (mainWrapper) mainWrapper.style.display = "";
            document.body.style.overflow = "";
            window.scrollTo({ top: 0, behavior: "instant" });
            if (startModal) startModal.classList.remove("visible");
        });

        actions.appendChild(btnBack);
        actions.appendChild(btnStartExam);
        wrapper.appendChild(actions);

        // Inject: hide main exam UI and show wrapper
        const mainWrapper = document.getElementById("mainWrapper");
        if (mainWrapper) mainWrapper.style.display = "none";
        if (startModal) startModal.classList.remove("visible");

        // append wrapper after container
        const container = document.querySelector(".container") || document.body;
        container.appendChild(wrapper);

        // ensure body allows scrolling (important)
        document.body.style.overflow = "auto";

        // focus & scroll
        setTimeout(() => {
            wrapper.focus();
            wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
    }

    /* ----------------------
       Protections & heuristics
    ---------------------- */

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        }
        if (["a", "A", "b", "B", "c", "C", "d", "D"].includes(e.key)) {
            const key = e.key.toUpperCase();
            const q = state.pool[state.index];
            if (q && !state.locked[q.id]) {
                select(q.id, key);
            }
        }
        if (
            (e.key === "s" || e.key === "S") &&
            submitBtn &&
            !submitBtn.classList.contains("hidden")
        ) {
            submitExam();
        }
    });

    if (simBtn)
        simBtn.addEventListener("click", () => {
            if (startModal) startModal.classList.remove("visible");
            startExam("simulation");
            if (watermarkEl) watermarkEl.style.opacity = 0.12;
        });
    if (beginBtn)
        beginBtn.addEventListener("click", async () => {
            if (startModal) startModal.classList.remove("visible");
            startExam("official");
            try {
                await document.documentElement.requestFullscreen();
            } catch (e) {}
        });

    let fsDebounce = 0;
    document.addEventListener("fullscreenchange", () => {
        fsDebounce++;
        setTimeout(() => (fsDebounce = Math.max(0, fsDebounce - 1)), 500);
        if (fsDebounce > 1) return;
        if (
            !document.fullscreenElement &&
            !state.simulation &&
            state.examTimer
        ) {
            alert(
                "Anda keluar fullscreen. Kejadian ini dicatat. Jika terus berlanjut, ujian bisa disubmit otomatis."
            );
            state.fullscreenExitCount = (state.fullscreenExitCount || 0) + 1;
            if (state.fullscreenExitCount >= 3) {
                alert(
                    "Anda telah keluar fullscreen berulang kali. Ujian akan otomatis disubmit."
                );
                submitExam();
            }
        }
    });

    let devtoolsOpen = false;
    function detectDevTools() {
        try {
            const threshold = 160;
            const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
            const heightDiff = Math.abs(
                window.outerHeight - window.innerHeight
            );
            if (widthDiff > threshold || heightDiff > threshold) return true;
            const start = performance.now();
            // eslint-disable-next-line no-debugger
            debugger;
            const delta = performance.now() - start;
            if (delta > 100) return true;
        } catch (e) {}
        return false;
    }
    setInterval(() => {
        try {
            const d = detectDevTools();
            if (d && !devtoolsOpen) {
                devtoolsOpen = true;
                alert("Developer tools terdeteksi. Kejadian ini dicatat.");
                state.devtoolsCount = (state.devtoolsCount || 0) + 1;
                if (state.devtoolsCount >= 3 && !state.simulation) submitExam();
            } else if (!d && devtoolsOpen) {
                devtoolsOpen = false;
            }
        } catch (e) {}
    }, 1500);

    window.addEventListener("contextmenu", (e) => e.preventDefault());
    window.addEventListener("keydown", (e) => {
        if (e.key === "F12") e.preventDefault();
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C"))
            e.preventDefault();
        if (e.ctrlKey && (e.key === "U" || e.key === "S")) e.preventDefault();
    });
    document.addEventListener("selectstart", (e) => e.preventDefault());
    document.addEventListener("dragstart", (e) => e.preventDefault());

    window.addEventListener("beforeunload", function (e) {
        if (state.examTimer && !state.simulation) {
            const msg =
                "Anda sedang mengikuti ujian. Tinggalkan halaman akan menyebabkan ujian berakhir.";
            e.returnValue = msg;
            return msg;
        }
    });

    if (nextBtn)
        nextBtn.addEventListener("click", () => {
            if (!state.examTimer) startExam("official");
            else next();
        });
    if (prevBtn)
        prevBtn.addEventListener("click", () => {
            if (!state.examTimer) startExam("official");
            else prev();
        });
    if (submitBtn) submitBtn.addEventListener("click", submitExam);
    if (exportBtn) exportBtn.addEventListener("click", exportCSV);

    // init
    prepare();

    // expose helpers for debugging if needed (optional)
    try {
        window._quiz_state = state;
        window._quiz_helpers = {
            startExam,
            submitExam,
            exportCSV,
            renderSimulationResultsInline,
        };
    } catch (e) {}
})();
