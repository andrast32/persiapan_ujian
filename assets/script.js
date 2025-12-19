/* assets/script.js
   Rendering & interactivity for index.html (dashboard)
*/

(function () {
    "use strict";

    const COURSES = [
        {
            id: "arsitektur",
            name: "Arsitektur dan Perancangan Bisnis Enterprise",
            tutor: "TUTON FST",
            progress: 100,
            color: "#7c3aed",
            path: "soal/arsitektur/soal.html",
        },
        {
            id: "etika",
            name: "Etika Profesi",
            tutor: "TUTON FST",
            progress: 100,
            color: "#60a5fa",
            path: "soal/etika/soal.html",
        },
        {
            id: "keamanan",
            name: "Keamanan Jaringan",
            tutor: "FST PRAKTIK",
            progress: 100,
            color: "#f59e0b",
            path: "soal/keamanan/soal.html",
        },
        {
            id: "pemrograman",
            name: "Pemrograman Berbasis Perangkat Bergerak",
            tutor: "TUTON FST",
            progress: 100,
            color: "#ef4444",
            path: "soal/pemrograman/soal.html",
        },
        {
            id: "kewirausahaan",
            name: "Kewirausahaan di Era Digital",
            tutor: "TUTON FST",
            progress: 100,
            color: "#10b981",
            path: "soal/kewirausahaan/soal.html",
        },
        {
            id: "pancasila",
            name: "Pancasila",
            tutor: "TUTON FST",
            progress: 100,
            color: "#06b6d4",
            path: "soal/pancasila/soal.html",
        },
        {
            id: "datasains",
            name: "Pengantar Sains Data",
            tutor: "TUTON FST",
            progress: 100,
            color: "#8b5cf6",
            path: "soal/datasains/soal.html",
        },
        {
            id: "tatakelola",
            name: "Tata Kelola Teknologi dan Informasi",
            tutor: "TUTON FST",
            progress: 100,
            color: "#f97316",
            path: "soal/tatakelola/soal.html",
        },
    ];

    // DOM refs
    const grid = document.getElementById("coursesGrid");
    const tpl = document.getElementById("cardTpl");
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const sortSelect = document.getElementById("sortSelect");
    const viewSelect = document.getElementById("viewSelect");
    const sideNav = document.getElementById("sideNav");

    // render side nav
    function renderSideNav() {
        sideNav.innerHTML = "";
        COURSES.forEach((c) => {
            const a = document.createElement("a");
            a.className = "side-link";
            a.href = c.path;
            a.dataset.id = c.id;
            a.innerHTML = `<div class="side-dot" style="background:${c.color}"></div><div class="side-label">${c.name}</div>`;
            sideNav.appendChild(a);
        });
    }

    // render grid
    function renderGrid(data) {
        grid.innerHTML = "";
        data.forEach((course) => {
            const node = tpl.content.cloneNode(true);
            const card = node.querySelector(".card");
            const media = node.querySelector(".card-media");
            const title = node.querySelector(".card-title");
            const sub = node.querySelector(".card-sub");
            const btn = node.querySelector(".enter-btn");
            const progressBar = node.querySelector(
                ".card-progress .progress-line i"
            );
            const progressText = node.querySelector(".progress-text");
            const menuBtn = node.querySelector(".card-menu");

            title.textContent = course.name;
            sub.textContent = course.tutor;
            media.style.background = `linear-gradient(135deg, ${course.color} 0%, rgba(255,255,255,0.06) 100%)`;
            progressBar.style.width = course.progress + "%";
            progressText.textContent = course.progress + "% complete";

            // click entire card navigates
            card.addEventListener("click", () => {
                window.location.href = course.path;
            });

            // enter button
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                window.location.href = course.path;
            });

            // small menu action
            menuBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                alert("Menu: opsi untuk " + course.name + "\n(placeholder)");
            });

            grid.appendChild(node);
        });
    }

    function applyFilters() {
        const q = (searchInput.value || "").trim().toLowerCase();
        let out = COURSES.filter((c) => {
            if (
                q &&
                !(
                    c.name.toLowerCase().includes(q) ||
                    c.tutor.toLowerCase().includes(q)
                )
            )
                return false;
            return true;
        });

        const sortBy = sortSelect.value;
        if (sortBy === "progress") out.sort((a, b) => b.progress - a.progress);
        else out.sort((a, b) => a.name.localeCompare(b.name));

        renderGrid(out);
    }

    // events
    searchInput.addEventListener("input", applyFilters);
    clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        applyFilters();
        searchInput.focus();
    });
    sortSelect.addEventListener("change", applyFilters);
    viewSelect.addEventListener("change", () => {
        document.body.classList.toggle(
            "list-view",
            viewSelect.value === "list"
        );
    });

    // keyboard: focus search with "/" key
    document.addEventListener("keydown", (e) => {
        if (e.key === "/") {
            if (document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
    });

    // initial
    document.getElementById("year").textContent = new Date().getFullYear();
    renderSideNav();
    renderGrid(COURSES);
})();
