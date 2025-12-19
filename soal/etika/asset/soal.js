// asset/soal.js
// QUESTION_BANK untuk Etika Profesi (UT STSI4305)
// 50 soal x 2 poin = total 100 poin
window.QUESTION_BANK = [
    {
        id: "e001",
        question: "Apa definisi etika profesi?",
        choices: [
            {
                id: "A",
                text: "Aturan hukum yang harus diikuti setiap profesional",
            },
            {
                id: "B",
                text: "Kumpulan prinsip moral dan standar perilaku yang mengatur praktik suatu profesi",
            },
            { id: "C", text: "Strategi perusahaan untuk meningkatkan profit" },
            { id: "D", text: "Panduan teknis pemrograman" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Etika profesi adalah rangkaian prinsip moral dan standar perilaku (kode etik) yang membimbing tindakan dan keputusan para profesional dalam suatu bidang.",
    },
    {
        id: "e002",
        question: "Manakah tujuan utama kode etik profesi?",
        choices: [
            { id: "A", text: "Menghasilkan keuntungan lebih besar" },
            {
                id: "B",
                text: "Melindungi kepentingan publik, menjaga integritas profesi, dan memberi pedoman perilaku",
            },
            { id: "C", text: "Menghalangi pemula masuk ke profesi" },
            { id: "D", text: "Menyusun kontrak kerja" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Kode etik membantu melindungi masyarakat, mempertahankan reputasi profesi, dan memberikan pedoman bagi profesional untuk bertindak secara etis.",
    },
    {
        id: "e003",
        question: "Prinsip 'confidentiality' dalam etika profesi berarti ...",
        choices: [
            { id: "A", text: "Membuka semua data klien ke publik" },
            {
                id: "B",
                text: "Menjaga kerahasiaan informasi klien dan tidak menyalahgunakannya",
            },
            { id: "C", text: "Menghapus semua catatan klien setelah 1 hari" },
            { id: "D", text: "Berbagi data dengan rekan tanpa izin" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Confidentiality mengharuskan profesional untuk menjaga informasi sensitif klien agar tidak bocor atau dipakai untuk keuntungan pribadi tanpa izin.",
    },
    {
        id: "e004",
        question:
            "Konflik kepentingan (conflict of interest) terjadi ketika ...",
        choices: [
            {
                id: "A",
                text: "Kepentingan pribadi dapat mempengaruhi objektivitas profesional",
            },
            { id: "B", text: "Semua keputusan dibuat publik" },
            { id: "C", text: "Profesional menolak menerima proyek" },
            { id: "D", text: "Tidak ada yang berkaitan dengan pekerjaan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Konflik kepentingan muncul saat kepentingan pribadi (mis. finansial) berpotensi mempengaruhi keputusan profesional, sehingga harus diungkap dan dikelola.",
    },
    {
        id: "e005",
        question: "Prinsip 'integrity' dalam konteks profesi berarti ...",
        choices: [
            { id: "A", text: "Berbohong untuk keuntungan tim" },
            {
                id: "B",
                text: "Bertindak jujur, konsisten, dan dapat dipercaya",
            },
            { id: "C", text: "Menghindari aturan" },
            { id: "D", text: "Menjiplak pekerjaan orang lain" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Integrity berarti bertindak secara jujur, adil, dan konsisten, sehingga profesional dapat dipercaya oleh publik dan rekan kerja.",
    },
    {
        id: "e006",
        question: "Whistleblowing profesional adalah tindakan ...",
        choices: [
            {
                id: "A",
                text: "Melaporkan pelanggaran atau perilaku ilegal/etik kepada pihak berwenang atau publik",
            },
            { id: "B", text: "Mengabaikan pelanggaran di tempat kerja" },
            { id: "C", text: "Menyebarkan gosip tentang rekan" },
            { id: "D", text: "Memperoleh keuntungan dari informasi rahasia" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Whistleblowing adalah melaporkan pelanggaran etika atau hukum untuk melindungi publik atau integritas organisasi, sering disertai prosedur perlindungan pelapor.",
    },
    {
        id: "e007",
        question: "Privasi data menurut etika profesi menuntut ...",
        choices: [
            {
                id: "A",
                text: "Mengumpulkan sebanyak mungkin data tanpa pemberitahuan",
            },
            {
                id: "B",
                text: "Menghormati hak individu atas informasi pribadi dan mendapatkan persetujuan sebelum pemrosesan",
            },
            {
                id: "C",
                text: "Membagikan data klien ke pemasok tanpa persetujuan",
            },
            { id: "D", text: "Menghapus data setelah 1 bulan tanpa alasan" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Etika menuntut penghormatan terhadap privasi, pengumpulan data yang proporsional, transparansi, dan persetujuan/izin untuk pemrosesan data pribadi.",
    },
    {
        id: "e008",
        question:
            "Apa yang dimaksud 'informed consent' dalam pengumpulan data?",
        choices: [
            { id: "A", text: "Mengumpulkan data tanpa memberi tahu responden" },
            {
                id: "B",
                text: "Memberi tahu tujuan, risiko, dan meminta persetujuan yang jelas dari subjek data",
            },
            { id: "C", text: "Menjual data ke pihak ketiga" },
            { id: "D", text: "Menyimpan data selamanya" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Informed consent berarti subjek diberi penjelasan tujuan, penggunaan, risiko, dan memberikan persetujuan yang sadar sebelum data dikumpulkan atau diproses.",
    },
    {
        id: "e009",
        question: "Manakah contoh pelanggaran etika profesional di bidang TI?",
        choices: [
            {
                id: "A",
                text: "Memperoleh izin pemilik sebelum menggunakan data sensitif",
            },
            {
                id: "B",
                text: "Menggunakan kredensial klien untuk keuntungan pribadi",
            },
            { id: "C", text: "Melaporkan bug kepada pihak terkait" },
            { id: "D", text: "Melakukan dokumentasi yang baik" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Menggunakan kredensial klien secara tidak sah untuk keuntungan pribadi adalah contoh pelanggaran etika dan hukum.",
    },
    {
        id: "e010",
        question:
            "Mekanisme pengendalian kepatuhan etika di organisasi biasanya meliputi ...",
        choices: [
            {
                id: "A",
                text: "Kebijakan, kode etik, pelatihan, audit, dan saluran pelaporan",
            },
            { id: "B", text: "Hanya menyebarkan email tanpa pelatihan" },
            { id: "C", text: "Mengabaikan pelanggaran" },
            { id: "D", text: "Mengganti manajemen setiap bulan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Program kepatuhan terdiri dari kebijakan tertulis, kode etik, pelatihan karyawan, audit berkala, dan mekanisme pelaporan yang aman.",
    },
    {
        id: "e011",
        question:
            "Hak kekayaan intelektual (IP) yang melindungi karya perangkat lunak biasanya berupa ...",
        choices: [
            {
                id: "A",
                text: "Hak paten, hak cipta, dan lisensi perangkat lunak",
            },
            { id: "B", text: "Hanya hak atas tanah" },
            { id: "C", text: "Kepemilikan hardware" },
            { id: "D", text: "Tidak ada perlindungan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Perangkat lunak dapat dilindungi oleh hak cipta (copyright), kadang paten (untuk algoritma/teknik tertentu), dan dipublikasikan di bawah lisensi tertentu.",
    },
    {
        id: "e012",
        question:
            "Perbedaan antara plagiarisme dan kolaborasi yang sah adalah ...",
        choices: [
            {
                id: "A",
                text: "Plagiarisme mengklaim karya orang lain sebagai milik sendiri; kolaborasi mengakui kontributor",
            },
            { id: "B", text: "Keduanya sama" },
            { id: "C", text: "Kolaborasi selalu ilegal" },
            { id: "D", text: "Plagiarisme hanya diizinkan dalam penelitian" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Plagiarisme adalah mengambil karya orang lain tanpa atribusi. Kolaborasi sah melibatkan pengakuan kontribusi dan kesepakatan tentang hak kepemilikan.",
    },
    {
        id: "e013",
        question:
            "Prinsip 'professional competence' menuntut seorang profesional untuk ...",
        choices: [
            {
                id: "A",
                text: "Terus memperbarui keterampilan dan hanya mengambil pekerjaan yang kompeten dikerjakan",
            },
            { id: "B", text: "Mengabaikan perkembangan bidang" },
            {
                id: "C",
                text: "Mengambil pekerjaan di luar kemampuan tanpa belajar",
            },
            {
                id: "D",
                text: "Mengandalkan orang lain untuk selalu menyelesaikan pekerjaannya",
            },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Professional competence berarti menjaga keterampilan dan pengetahuan tetap mutakhir serta bertanggung jawab hanya menerima tugas yang sesuai kompetensi.",
    },
    {
        id: "e014",
        question: "Etika penggunaan AI menuntut pertimbangan utama seperti ...",
        choices: [
            {
                id: "A",
                text: "Transparansi, fairness, akuntabilitas, dan mitigasi bias",
            },
            { id: "B", text: "Menghilangkan dokumentasi model" },
            {
                id: "C",
                text: "Memprioritaskan akurasi di atas segalanya tanpa pertimbangan lain",
            },
            { id: "D", text: "Menghindari pengujian" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Etika AI menuntut transparansi (penjelasan), fairness (mengurangi bias), akuntabilitas, privasi, dan mitigasi dampak sosial.",
    },
    {
        id: "e015",
        question:
            "Responsible disclosure (pengungkapan kerentanan yang bertanggung jawab) berarti ...",
        choices: [
            {
                id: "A",
                text: "Mengumumkan kerentanan ke publik sebelum memberi waktu perbaikan",
            },
            {
                id: "B",
                text: "Melaporkan kerentanan kepada pemilik sistem dan memberi waktu perbaikan sebelum publikasi",
            },
            {
                id: "C",
                text: "Memanfaatkan kerentanan untuk keuntungan sendiri",
            },
            { id: "D", text: "Mengabaikan kerentanan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Responsible disclosure melaporkan kerentanan kepada pemilik untuk perbaikan terlebih dahulu, meminimalkan risiko eksploitasi sebelum perbaikan tersedia.",
    },
    {
        id: "e016",
        question:
            "Prinsip utilitarianisme dalam etika profesional menilai tindakan berdasarkan ...",
        choices: [
            {
                id: "A",
                text: "Konsekuensi — memilih tindakan yang menghasilkan manfaat terbesar bagi kebanyakan orang",
            },
            { id: "B", text: "Aturan kaku tanpa mempertimbangkan hasil" },
            { id: "C", text: "Hanya kepentingan pribadi" },
            { id: "D", text: "Jumlah peraturan yang dilanggar" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Utilitarianisme menilai etika tindakan berdasarkan hasilnya; tindakan baik jika memberikan manfaat terbesar bagi jumlah orang terbanyak.",
    },
    {
        id: "e017",
        question: "Pendekatan deontologis (duty-based) menekankan ...",
        choices: [
            {
                id: "A",
                text: "Kewajiban moral dan aturan yang harus diikuti terlepas dari konsekuensi",
            },
            { id: "B", text: "Menghitung manfaat semata" },
            { id: "C", text: "Mengutamakan keuntungan" },
            { id: "D", text: "Mengabaikan prinsip" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Deontologi menekankan kepatuhan terhadap kewajiban atau aturan moral (duty) sebagai dasar tindakan etis, bukan semata akibat.",
    },
    {
        id: "e018",
        question:
            "Manakah yang merupakan praktik etis dalam penelitian melibatkan manusia?",
        choices: [
            {
                id: "A",
                text: "Mendapatkan persetujuan tertulis (informed consent) dari peserta",
            },
            {
                id: "B",
                text: "Menggunakan data tanpa izin karena alasan penelitian",
            },
            { id: "C", text: "Memanipulasi data agar cocok dengan hipotesis" },
            { id: "D", text: "Menunda pelaporan pelanggaran" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Etika penelitian manusia memerlukan informed consent, perlindungan privasi, dan perlakuan adil terhadap partisipan.",
    },
    {
        id: "e019",
        question: "Peran audit forensik digital dalam konteks etika adalah ...",
        choices: [
            {
                id: "A",
                text: "Mengumpulkan dan melestarikan bukti digital sesuai prosedur hukum dan etika",
            },
            { id: "B", text: "Menghapus bukti untuk menutupi insiden" },
            { id: "C", text: "Mengakses data tanpa otorisasi" },
            { id: "D", text: "Mengganti investigasi polisi" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Forensik digital harus mengumpulkan bukti secara hati-hati untuk menjaga integritas, chain of custody, dan memenuhi persyaratan hukum dan etika.",
    },
    {
        id: "e020",
        question:
            "Ketika menemui bug yang berpotensi menyebabkan kerugian, tindakan etis seorang pengembang adalah ...",
        choices: [
            { id: "A", text: "Menyembunyikan bug untuk menghindari masalah" },
            {
                id: "B",
                text: "Melaporkan dan mempercepat perbaikan sesuai prosedur organisasi",
            },
            { id: "C", text: "Menunggu sampai ada yang mengeluh" },
            { id: "D", text: "Menjual exploit ke pihak ketiga" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Pengembang etis harus melaporkan bug dan membantu mitigasi agar potensi kerugian publik atau organisasi diminimalkan.",
    },
    {
        id: "e021",
        question:
            "Konsep 'due diligence' pada kontrak atau proyek TI menandakan ...",
        choices: [
            {
                id: "A",
                text: "Melakukan pemeriksaan dan evaluasi risiko yang wajar sebelum mengambil keputusan",
            },
            { id: "B", text: "Menerima semua risiko tanpa analisis" },
            { id: "C", text: "Mengabaikan regulasi" },
            { id: "D", text: "Menetapkan harga lebih tinggi tanpa alasan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Due diligence melibatkan penilaian teknis, hukum, dan etis untuk memastikan keputusan informasi dan mitigasi risiko dilakukan secara bijaksana.",
    },
    {
        id: "e022",
        question:
            "Manakah kewajiban profesional berkaitan dengan keamanan siber?",
        choices: [
            {
                id: "A",
                text: "Mengabaikan update keamanan untuk menghemat biaya",
            },
            {
                id: "B",
                text: "Memastikan praktik keamanan sesuai standar dan melindungi data pengguna",
            },
            { id: "C", text: "Mengumbar kredensial kepada publik" },
            { id: "D", text: "Menyimpan password dalam plain text" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Profesional bertanggung jawab menerapkan kontrol keamanan, memperbarui sistem, dan melindungi data dari akses tidak sah.",
    },
    {
        id: "e023",
        question: "Etika penyimpanan dan retention data yang baik mencakup ...",
        choices: [
            {
                id: "A",
                text: "Menyimpan data hanya selama diperlukan dan mengamankan penghapusan ketika tidak relevan",
            },
            { id: "B", text: "Menyimpan data selamanya tanpa manajemen" },
            { id: "C", text: "Menghapus data secara acak" },
            { id: "D", text: "Membagikan data dengan siapa saja" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Praktik retensi yang etis menyimpan data sesuai kebutuhan, mematuhi regulasi, dan menghapus data secara aman bila tidak lagi diperlukan.",
    },
    {
        id: "e024",
        question: "Lisensi perangkat lunak 'open source' berarti ...",
        choices: [
            {
                id: "A",
                text: "Kode dapat dilihat dan digunakan sesuai persyaratan lisensi tertentu (mis. MIT, GPL)",
            },
            { id: "B", text: "Tidak boleh digunakan sama sekali" },
            { id: "C", text: "Hanya untuk orang tertentu" },
            { id: "D", text: "Wajib menjual software" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Open source berarti kode tersedia publik dengan hak yang diatur lisensi; masing-masing lisensi menentukan apa yang boleh dan tidak boleh dilakukan.",
    },
    {
        id: "e025",
        question:
            "Etika profesional menuntut transparansi dalam hubungan dengan klien, yang berarti ...",
        choices: [
            { id: "A", text: "Menyembunyikan biaya tambahan" },
            {
                id: "B",
                text: "Mengungkapkan biaya, batasan, dan potensi risiko proyek",
            },
            { id: "C", text: "Memberikan janji yang tidak realistis" },
            { id: "D", text: "Menutupi kegagalan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Transparansi mencakup komunikasi jujur tentang biaya, kemampuan, keterbatasan, dan risiko agar klien membuat keputusan berdasarkan informasi.",
    },
    {
        id: "e026",
        question: "Perbedaan antara etika dan hukum adalah ...",
        choices: [
            {
                id: "A",
                text: "Hukum bersifat wajib secara hukum; etika bersifat prinsip moral yang mungkin lebih ketat daripada hukum",
            },
            { id: "B", text: "Etika selalu lebih longgar daripada hukum" },
            { id: "C", text: "Hukum tidak pernah berhubungan dengan etika" },
            { id: "D", text: "Tidak ada perbedaan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Hukum adalah aturan yang ditegakkan secara legal; etika adalah standar moral—sesuatu bisa legal tetapi tetap tidak etis, dan sebaliknya.",
    },
    {
        id: "e027",
        question:
            "Dalam konteks profesional TI, 'acceptable use policy' (AUP) menjelaskan ...",
        choices: [
            {
                id: "A",
                text: "Aturan penggunaan sumber daya TI (mis. jaringan, email) oleh pengguna",
            },
            { id: "B", text: "Cara merusak sistem" },
            { id: "C", text: "Panduan investasi" },
            { id: "D", text: "Hanya untuk administrasi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "AUP menetapkan perilaku yang diizinkan dan dilarang saat menggunakan fasilitas TI organisasi untuk melindungi aset dan reputasi.",
    },
    {
        id: "e028",
        question:
            "Bagaimana etika profesional memandang pengembangan perangkat lunak yang berpotensi membahayakan publik?",
        choices: [
            {
                id: "A",
                text: "Profesional harus mempertimbangkan dampak sosial dan menolak proyek yang berisiko tinggi tanpa mitigasi",
            },
            { id: "B", text: "Mengabaikan risiko demi keuntungan" },
            {
                id: "C",
                text: "Selalu mengikuti perintah atasan tanpa pertimbangan",
            },
            { id: "D", text: "Mendukung proyek tanpa kajian" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Profesional harus menilai dampak sosial, etis, dan melakukan due diligence; jika berisiko serius terhadap publik, proyek harus direvisi atau ditolak.",
    },
    {
        id: "e029",
        question: "Mekanisme 'audit trail' memiliki peran etis karena ...",
        choices: [
            {
                id: "A",
                text: "Memungkinkan akuntabilitas dan penelusuran tindakan untuk tujuan investigasi dan kepatuhan",
            },
            { id: "B", text: "Membuat data sulit dilihat" },
            { id: "C", text: "Menghambat transparansi" },
            { id: "D", text: "Tidak penting" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Audit trail merekam tindakan dan perubahan sehingga memudahkan akuntabilitas, forensik, dan kepatuhan terhadap kebijakan/aturan.",
    },
    {
        id: "e030",
        question: "Etika pemeliharaan data sensitif mengharuskan ...",
        choices: [
            {
                id: "A",
                text: "Enkripsi data saat penyimpanan dan transfer serta pembatasan akses",
            },
            { id: "B", text: "Menyimpan kunci enkripsi di tempat terbuka" },
            { id: "C", text: "Membagikan rahasia kepada semua pegawai" },
            { id: "D", text: "Menonaktifkan otentikasi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Prinsip keamanan dasar: enkripsi untuk data at-rest dan in-transit serta kontrol akses untuk mencegah kebocoran.",
    },
    {
        id: "e031",
        question:
            "Manakah yang merupakan pelanggaran etika dalam konteks penggunaan lisensi perangkat lunak?",
        choices: [
            {
                id: "A",
                text: "Menggunakan perangkat lunak berlisensi secara ilegal atau melanggar ketentuan lisensi",
            },
            { id: "B", text: "Mengecek lisensi sebelum penggunaan" },
            { id: "C", text: "Mematuhi persyaratan lisensi open-source" },
            { id: "D", text: "Mendokumentasikan penggunaan lisensi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Menggunakan atau mendistribusikan perangkat lunak tanpa mematuhi lisensi adalah pelanggaran hukum dan etika profesional.",
    },
    {
        id: "e032",
        question:
            "Ketika menghadapi tekanan untuk memalsukan hasil pengujian, langkah etis yang benar adalah ...",
        choices: [
            {
                id: "A",
                text: "Menolak dan melaporkan tekanan tersebut sesuai mekanisme organisasi",
            },
            { id: "B", text: "Melakukan pemalsuan demi menyenangkan atasan" },
            { id: "C", text: "Menghapus bukti pengujian" },
            { id: "D", text: "Membiarkan pihak lain bertanggung jawab" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Profesional harus menolak tindakan tidak etis, mempertahankan integritas, dan menggunakan jalur pelaporan internal atau eksternal jika diperlukan.",
    },
    {
        id: "e033",
        question:
            "Etika terkait remote work (kerja jarak jauh) mencakup hal berikut, kecuali ...",
        choices: [
            {
                id: "A",
                text: "Menjaga profesionalisme dan keamanan data saat bekerja dari luar kantor",
            },
            {
                id: "B",
                text: "Mengabaikan kebijakan akses dan memindahkan data sensitif ke perangkat pribadi tanpa izin",
            },
            { id: "C", text: "Menggunakan saluran komunikasi aman" },
            { id: "D", text: "Menjaga privasi rekan kerja" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Selama remote work perlu menjaga keamanan dan mematuhi kebijakan; memindahkan data sensitif ke perangkat pribadi tanpa izin merupakan pelanggaran.",
    },
    {
        id: "e034",
        question: "Manakah prinsip etis dalam pengelolaan proyek pengadaan TI?",
        choices: [
            {
                id: "A",
                text: "Transparansi proses tender, menghindari nepotisme, dan memastikan nilai terbaik untuk publik/organisasi",
            },
            { id: "B", text: "Memberi kontrak pada teman tanpa proses" },
            { id: "C", text: "Menyembunyikan spesifikasi" },
            { id: "D", text: "Membuat dokumentasi palsu" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Pengadaan yang etis memerlukan prosedur terbuka, evaluasi objektif, dan pencegahan konflik kepentingan.",
    },
    {
        id: "e035",
        question:
            "Dalam konteks profesional, 'professional negligence' berarti ...",
        choices: [
            {
                id: "A",
                text: "Gagal memenuhi standar kompetensi yang diharapkan sehingga merugikan pihak lain",
            },
            { id: "B", text: "Kerja melebihi ekspektasi" },
            { id: "C", text: "Selalu mematuhi semua aturan" },
            { id: "D", text: "Mengabaikan pelatihan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Professional negligence terjadi bila profesional tidak bertindak sesuai standar umum profesi dan menyebabkan kerugian pihak lain.",
    },
    {
        id: "e036",
        question: "Etika komunikasi di lingkungan kerja menuntut ...",
        choices: [
            {
                id: "A",
                text: "Komunikasi jujur, sopan, dan menghormati kerahasiaan",
            },
            { id: "B", text: "Menyebarkan rumor dan fitnah" },
            { id: "C", text: "Mengumbar informasi sensitif tanpa izin" },
            { id: "D", text: "Menggunakan bahasa kasar bebas" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Komunikasi profesional harus jujur, jelas, sopan, dan menjaga kerahasiaan sesuai kebutuhan.",
    },
    {
        id: "e037",
        question:
            "Manakah yang termasuk praktik etis terkait penggunaan data pelanggan untuk marketing?",
        choices: [
            {
                id: "A",
                text: "Mendapatkan persetujuan (consent) dan memberi opsi keluar (opt-out)",
            },
            { id: "B", text: "Menggunakan data tanpa pemberitahuan" },
            { id: "C", text: "Menjual data tanpa kontrak" },
            { id: "D", text: "Memanipulasi profil pengguna" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Penggunaan data marketing harus mematuhi prinsip privasi: persetujuan, transparansi, dan opsi untuk berhenti menerima komunikasi.",
    },
    {
        id: "e038",
        question: "Etika terkait media sosial profesional meliputi ...",
        choices: [
            {
                id: "A",
                text: "Tidak memposting konten yang merusak reputasi organisasi dan menjaga garis antara pribadi dan profesional",
            },
            { id: "B", text: "Membeberkan rahasia internal secara publik" },
            { id: "C", text: "Memposting data pelanggan tanpa izin" },
            {
                id: "D",
                text: "Menggunakan akun perusahaan untuk aktivitas pribadi ekstrem",
            },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Penggunaan media sosial harus mempertimbangkan dampak reputasi dan privasi; konten sensitif harus dihindari.",
    },
    {
        id: "e039",
        question:
            "Dalam etika profesi, tanggung jawab akuntabilitas berarti ...",
        choices: [
            {
                id: "A",
                text: "Bertanggung jawab atas tindakan, keputusan, dan siap menghadapi konsekuensi",
            },
            { id: "B", text: "Menyalahkan orang lain atas kesalahan sendiri" },
            { id: "C", text: "Mengabaikan laporan masalah" },
            { id: "D", text: "Menutupi kesalahan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Akuntabilitas berarti profesional menerima tanggung jawab atas pekerjaan dan bersikap transparan tentang hasil dan kesalahan.",
    },
    {
        id: "e040",
        question:
            "Bagaimana etika menuntun pengelolaan vulnerability disclosure dalam organisasi?",
        choices: [
            {
                id: "A",
                text: "Menetapkan prosedur untuk menerima laporan, merespons, dan memperbaiki kerentanan sambil melindungi pelapor",
            },
            { id: "B", text: "Mengabaikan pelaporan dari pihak luar" },
            { id: "C", text: "Menghukum pelapor tanpa pemeriksaan" },
            { id: "D", text: "Menyembunyikan informasi sampai dieksploitasi" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Organisasi etis memiliki kebijakan yang jelas untuk menangani laporan kerentanan secara bertanggung jawab, termasuk perlindungan pelapor.",
    },
    {
        id: "e041",
        question:
            "Apakah tanggung jawab etis profesional ketika dipaksa melakukan tindakan ilegal oleh atasan?",
        choices: [
            { id: "A", text: "Mematuhi perintah tanpa pertimbangan" },
            {
                id: "B",
                text: "Menolak, mencari nasihat hukum/etik, dan melaporkan jika perlu",
            },
            { id: "C", text: "Membalas dengan tindakan ilegal" },
            { id: "D", text: "Mengundurkan diri saja tanpa melapor" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Profesional tidak boleh melakukan tindakan ilegal; harus menolak, meminta nasihat, dan melaporkan jika ada pelanggaran hukum/etik.",
    },
    {
        id: "e042",
        question:
            "Apa itu 'digital divide' dan mengapa relevan dalam etika profesi TI?",
        choices: [
            {
                id: "A",
                text: "Kesenjangan akses teknologi di antara kelompok masyarakat; relevan karena profesional harus mempertimbangkan inklusi",
            },
            { id: "B", text: "Perbedaan antar server" },
            { id: "C", text: "Kesenjangan ukuran layar" },
            { id: "D", text: "Hanya masalah teknis" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Digital divide adalah ketidaksetaraan akses teknologi; profesional etis mempertimbangkan dampak sosial dan inklusi ketika merancang solusi.",
    },
    {
        id: "e043",
        question:
            "Manakah praktik etis terkait penggunaan data anonim untuk penelitian?",
        choices: [
            {
                id: "A",
                text: "Menghapus identitas dan memastikan risiko re-identifikasi diminimalkan",
            },
            {
                id: "B",
                text: "Menggunakan data pribadi tanpa langkah anonimisasi",
            },
            {
                id: "C",
                text: "Menjual dataset ke pihak komersial tanpa perjanjian",
            },
            { id: "D", text: "Menerbitkan data mentah lengkap" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Saat menggunakan data untuk penelitian, langkah anonimisasi dan mitigasi re-identifikasi penting untuk melindungi privasi individu.",
    },
    {
        id: "e044",
        question:
            "Etika terkait 'surveillance' (pengawasan) dalam organisasi menuntut ...",
        choices: [
            {
                id: "A",
                text: "Keseimbangan antara keamanan dan privasi, pemberitahuan, dan pembatasan penggunaan data",
            },
            { id: "B", text: "Pengawasan total tanpa pemberitahuan" },
            { id: "C", text: "Penggunaan data untuk mengintimidasi karyawan" },
            { id: "D", text: "Menjual rekaman ke pihak ketiga" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Pengawasan etis mensyaratkan transparansi, proporsionalitas, dan perlindungan privasi serta kepatuhan terhadap hukum.",
    },
    {
        id: "e045",
        question:
            "Pada situasi di mana hukum dan etika bertentangan, seorang profesional sebaiknya ...",
        choices: [
            {
                id: "A",
                text: "Mengikuti hukum, tetapi mempertimbangkan langkah etis, meminta nasihat hukum/etik jika perlu",
            },
            {
                id: "B",
                text: "Selalu mengikuti peraturan internal tanpa mempertimbangkan hukum negara",
            },
            { id: "C", text: "Mengabaikan hukum" },
            { id: "D", text: "Mengambil keputusan sepihak" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Hukum mengikat; profesional harus mematuhi hukum, namun jika ada konflik etis, harus mencari nasihat dan mengejar solusi yang meminimalkan kerugian dan mematuhi hukum.",
    },
    {
        id: "e046",
        question: "Manakah prinsip etis terkait aksesibilitas digital?",
        choices: [
            {
                id: "A",
                text: "Menyediakan akses bagi pengguna dengan disabilitas adalah tanggung jawab etis untuk inklusi",
            },
            { id: "B", text: "Aksesibilitas tidak penting" },
            { id: "C", text: "Hanya desain untuk pengguna puncak" },
            { id: "D", text: "Mengabaikan perangkat assistive" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Aksesibilitas memastikan layanan dapat digunakan oleh semua orang, termasuk penyandang disabilitas, dan merupakan kewajiban etis dalam desain inklusif.",
    },
    {
        id: "e047",
        question: "Practices untuk mengurangi bias algoritmik mencakup ...",
        choices: [
            {
                id: "A",
                text: "Dataset yang representatif, validasi fairness, dan audit berkala",
            },
            { id: "B", text: "Mengandalkan satu dataset kecil" },
            { id: "C", text: "Tidak melakukan pengujian" },
            { id: "D", text: "Menyembunyikan performa model" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Mengurangi bias memerlukan dataset representatif, pengujian fairness, transparansi, dan pemantauan terhadap dampak model.",
    },
    {
        id: "e048",
        question:
            "Etika profesi menekankan pentingnya 'continuing professional development' (CPD) karena ...",
        choices: [
            {
                id: "A",
                text: "Teknologi berubah cepat; profesional harus terus belajar agar kompeten",
            },
            { id: "B", text: "Tidak perlu belajar setelah lulus" },
            { id: "C", text: "CPD hanya untuk manajer" },
            { id: "D", text: "Mengganti pengalaman kerja" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "CPD membantu profesional mengikuti perkembangan, menjaga kompetensi, dan memberikan layanan yang aman dan efektif.",
    },
    {
        id: "e049",
        question: "Praktik etis saat menggunakan open data meliputi ...",
        choices: [
            {
                id: "A",
                text: "Memverifikasi keandalan, mencantumkan sumber, dan mempertimbangkan privasi jika data berisiko",
            },
            { id: "B", text: "Mengklaim sebagai data sendiri tanpa atribusi" },
            { id: "C", text: "Menyebarluaskan data sensitif tanpa verifikasi" },
            { id: "D", text: "Memodifikasi data menjadi menyesatkan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Walau data terbuka, etika menuntut verifikasi kualitas, atribusi sumber, dan mitigasi risiko privasi.",
    },
    {
        id: "e050",
        question:
            "Kode etik profesional sering kali menuntut 'public interest' sebagai prioritas. Maksudnya ...",
        choices: [
            {
                id: "A",
                text: "Profesional harus menempatkan kepentingan publik / keselamatan umum di atas kepentingan pribadi atau klien bila terjadi benturan",
            },
            { id: "B", text: "Menolak semua proyek swasta" },
            {
                id: "C",
                text: "Mengutamakan keuntungan organisasi di atas keselamatan publik",
            },
            { id: "D", text: "Mengabaikan hukum" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Prioritas kepentingan publik berarti keselamatan, hak, dan kesejahteraan masyarakat harus dipertimbangkan ketika keputusan profesional memiliki dampak luas.",
    },
];

// SIMULATION_BANK: 10 soal mudah (1 poin tiap soal) — latihan
window.SIMULATION_BANK = [
    {
        id: "sim_e01",
        question: "Apa itu 'plagiarisme'?",
        choices: [
            { id: "A", text: "Mengutip sumber dengan benar" },
            {
                id: "B",
                text: "Mengklaim karya orang lain sebagai milik sendiri tanpa atribusi",
            },
            { id: "C", text: "Menulis kode asli" },
            { id: "D", text: "Menyimpan catatan penelitian" },
        ],
        answerId: "B",
        points: 1,
        time: 60,
        explanation:
            "Plagiarisme adalah mengambil karya orang lain tanpa memberi kredit yang tepat.",
    },
    {
        id: "sim_e02",
        question: "Salah satu prinsip etika profesional adalah ...",
        choices: [
            { id: "A", text: "Dishonesty" },
            { id: "B", text: "Integrity (kejujuran)" },
            { id: "C", text: "Nepotism" },
            { id: "D", text: "Corruption" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Integrity atau kejujuran adalah prinsip dasar etika profesional.",
    },
    {
        id: "sim_e03",
        question:
            "Apa yang harus dilakukan jika menemukan data pribadi sensitif di proyek?",
        choices: [
            {
                id: "A",
                text: "Laporkan dan lindungi aksesnya sesuai kebijakan privasi",
            },
            { id: "B", text: "Sebarkan ke tim tanpa izin" },
            { id: "C", text: "Hapus secara sembunyi" },
            { id: "D", text: "Gunakan untuk eksperimen tanpa dokumentasi" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "Data sensitif harus dilindungi dan dilaporkan sesuai kebijakan organisasi.",
    },
    {
        id: "sim_e04",
        question: "Open source license MIT mengizinkan ...",
        choices: [
            {
                id: "A",
                text: "Penggunaan, modifikasi, dan distribusi hampir tanpa batas dengan atribusi",
            },
            { id: "B", text: "Dilarang menggunakan kode" },
            { id: "C", text: "Hanya untuk penggunaan non-komersial" },
            { id: "D", text: "Memerlukan royalti" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Lisensi MIT sangat permisif, mengizinkan penggunaan dan modifikasi dengan atribusi.",
    },
    {
        id: "sim_e05",
        question: "Whistleblower biasanya melaporkan ...",
        choices: [
            { id: "A", text: "Pelanggaran etika atau hukum dalam organisasi" },
            { id: "B", text: "Kegiatan sosial" },
            { id: "C", text: "Hanya masalah keuangan pribadi" },
            { id: "D", text: "Jadwal libur" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "Whistleblower menyoroti praktik yang melanggar hukum atau etika demi kepentingan publik.",
    },
    {
        id: "sim_e06",
        question: "Prinsip 'least privilege' berarti ...",
        choices: [
            { id: "A", text: "Memberi semua akses ke semua orang" },
            { id: "B", text: "Memberi hak minimum yang diperlukan" },
            { id: "C", text: "Menghapus kontrol akses" },
            { id: "D", text: "Membagikan password" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Least privilege memberikan akses minimum yang diperlukan agar tugas dapat diselesaikan.",
    },
    {
        id: "sim_e07",
        question:
            "Etika profesional mengharuskan pemberian atribusi ketika ...",
        choices: [
            {
                id: "A",
                text: "Menggunakan ide, kutipan, atau karya orang lain",
            },
            { id: "B", text: "Menulis kode sendiri" },
            { id: "C", text: "Menghapus sumber" },
            { id: "D", text: "Tidak mengacu pada sumber apapun" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Memberi atribusi mengakui pemilik asli dan mencegah plagiarisme.",
    },
    {
        id: "sim_e08",
        question: "Responsible disclosure ditujukan untuk ...",
        choices: [
            { id: "A", text: "Mengumumkan exploit publik secepatnya" },
            { id: "B", text: "Memberi waktu perbaikan sebelum publikasi" },
            { id: "C", text: "Menggunakan exploit untuk keuntungan" },
            { id: "D", text: "Mengabaikan bug" },
        ],
        answerId: "B",
        points: 1,
        time: 60,
        explanation:
            "Responsible disclosure memungkinkan vendor memperbaiki kerentanan sebelum informasi dipublikasikan.",
    },
    {
        id: "sim_e09",
        question: "Akses data tanpa otorisasi adalah ...",
        choices: [
            { id: "A", text: "Praktik etis yang baik" },
            { id: "B", text: "Pelanggaran privasi dan mungkin ilegal" },
            { id: "C", text: "Selalu diperbolehkan" },
            { id: "D", text: "Tidak relevan" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Akses tanpa otorisasi melanggar privasi dan hukum di banyak yurisdiksi.",
    },
    {
        id: "sim_e10",
        question: "Continuing Professional Development (CPD) berarti ...",
        choices: [
            {
                id: "A",
                text: "Belajar sepanjang karier untuk menjaga kompetensi",
            },
            { id: "B", text: "Menghentikan pembelajaran setelah lulus" },
            { id: "C", text: "Hanya mengandalkan pengalaman lama" },
            { id: "D", text: "Tidak relevan bagi profesional" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "CPD mendorong pembelajaran kontinu agar profesional tetap kompeten seiring perkembangan bidang.",
    },
];
