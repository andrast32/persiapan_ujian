// asset/soal.js
// QUESTION_BANK untuk Tata Kelola Teknologi Informasi (STSI4402)
// 50 soal x 2 poin = total 100 poin
window.QUESTION_BANK = [
    {
        id: "g001",
        question: "Apa definisi singkat dari tata kelola TI (IT governance)?",
        choices: [
            {
                id: "A",
                text: "Kumpulan proses dan struktur yang memastikan IT mendukung tujuan bisnis dan mengelola risiko",
            },
            { id: "B", text: "Teknik pemrograman untuk aplikasi enterprise" },
            { id: "C", text: "Hanya kebijakan keamanan jaringan" },
            { id: "D", text: "Manajemen helpdesk semata" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "IT governance memastikan keputusan TI selaras dengan strategi organisasi, mengelola risiko, dan mengoptimalkan nilai.",
    },
    {
        id: "g002",
        question:
            "Manakah kerangka kerja (framework) yang sering dipakai untuk tata kelola TI?",
        choices: [
            { id: "A", text: "COBIT" },
            { id: "B", text: "React" },
            { id: "C", text: "Node.js" },
            { id: "D", text: "Bootstrap" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "COBIT (Control Objectives for Information and Related Technologies) adalah framework populer untuk governance dan manajemen TI.",
    },
    {
        id: "g003",
        question:
            "Apa perbedaan utama antara governance dan management dalam konteks TI?",
        choices: [
            {
                id: "A",
                text: "Governance menetapkan arah/keputusan (what & why), management menjalankan & mengimplementasikan (how & who)",
            },
            {
                id: "B",
                text: "Governance hanya teknis, management hanya administratif",
            },
            { id: "C", text: "Tidak ada perbedaan" },
            { id: "D", text: "Governance melakukan coding" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Governance fokus pada arah strategis, kebijakan, dan pengawasan; management menangani pelaksanaan operasional dan delivery.",
    },
    {
        id: "g004",
        question: "Salah satu tujuan utama IT governance adalah ...",
        choices: [
            {
                id: "A",
                text: "Mengoptimalkan nilai TI bagi pemangku kepentingan sambil mengelola risiko",
            },
            { id: "B", text: "Menambah kompleksitas jaringan" },
            { id: "C", text: "Mengurangi jumlah pengguna" },
            { id: "D", text: "Menghapus sistem legacy" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "IT governance bertujuan menghasilkan nilai bisnis dari investasi TI dan mengatur risiko serta kepatuhan.",
    },
    {
        id: "g005",
        question:
            "Dalam COBIT, domain yang fokus pada penyediaan layanan dan dukungan adalah ...",
        choices: [
            {
                id: "A",
                text: "DAS (Deliver, Service and Support) — Dapat muncul dengan kata Deliver/Serve",
            },
            { id: "B", text: "Evaluate, Direct and Monitor (EDM)" },
            { id: "C", text: "Manage, Build and Acquire (MBA)" },
            { id: "D", text: "Tidak ada domain" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "COBIT model lama/baru punya kelompok proses seperti Deliver, Service and Support (atau Align, Plan and Organize tergantung versi) yang menangani delivery layanan TI.",
    },
    {
        id: "g006",
        question: "Apa kepanjangan dari SLA dan fungsinya?",
        choices: [
            {
                id: "A",
                text: "Service Level Agreement — mendefinisikan tingkat layanan yang diharapkan antara provider dan pelanggan",
            },
            { id: "B", text: "System Level Access — memberikan akses admin" },
            { id: "C", text: "Software License Agreement — hanya lisensi" },
            { id: "D", text: "Security Level Audit — audit keamanan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "SLA menetapkan metrik performa layanan (uptime, response time) dan konsekuensi jika tidak terpenuhi.",
    },
    {
        id: "g007",
        question: "Apa itu RACI matrix dan kegunaannya?",
        choices: [
            {
                id: "A",
                text: "Model tanggung jawab yang menentukan siapa Responsible, Accountable, Consulted, Informed untuk aktivitas",
            },
            { id: "B", text: "Metode enkripsi data" },
            { id: "C", text: "Protokol jaringan" },
            { id: "D", text: "Format backup file" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "RACI membantu kejelasan peran dan tanggung jawab dalam proses/proyek sehingga mengurangi kebingungan dan overlap.",
    },
    {
        id: "g008",
        question:
            "Dalam manajemen risiko TI, langkah pertama yang benar adalah ...",
        choices: [
            {
                id: "A",
                text: "Identifikasi aset dan ancaman (risk identification)",
            },
            { id: "B", text: "Membeli software antivirus" },
            { id: "C", text: "Mendeploy patch tanpa uji" },
            { id: "D", text: "Menonaktifkan logging" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Proses risk management dimulai dari identifikasi aset, ancaman, dan kerentanan sebelum analisis risiko dan mitigasi.",
    },
    {
        id: "g009",
        question:
            "Manakah pendekatan untuk menangani risiko yang paling tepat jika dampak besar tapi probabilitas kecil?",
        choices: [
            {
                id: "A",
                text: "Evaluasi cost-benefit dari kontrol; seringkali transfer (insurance) atau mitigasi",
            },
            { id: "B", text: "Abaikan saja" },
            { id: "C", text: "Selalu menghapus semua sistem" },
            { id: "D", text: "Meningkatkan probabilitas" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Risiko berdampak besar bisa dikurangi lewat kontrol atau dialihkan (insurance); keputusan berdasarkan analisis biaya-manfaat.",
    },
    {
        id: "g010",
        question: "Apa itu 'compliance' dalam konteks tata kelola TI?",
        choices: [
            {
                id: "A",
                text: "Kepatuhan terhadap peraturan, standar, dan kebijakan yang relevan",
            },
            { id: "B", text: "Implementasi UI/UX" },
            { id: "C", text: "Hanya backup data" },
            { id: "D", text: "Pengembangan aplikasi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Compliance memastikan organisasi mematuhi regulasi (mis. data protection), standar ISO, serta kebijakan internal.",
    },
    {
        id: "g011",
        question: "ISO 27001 adalah standar untuk ...",
        choices: [
            {
                id: "A",
                text: "Manajemen keamanan informasi (Information Security Management System - ISMS)",
            },
            { id: "B", text: "Quality management" },
            { id: "C", text: "Project management" },
            { id: "D", text: "UI design" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "ISO 27001 menetapkan persyaratan untuk membangun, menerapkan, memelihara, dan terus meningkatkan ISMS.",
    },
    {
        id: "g012",
        question: "Apa tujuan utama IT audit?",
        choices: [
            {
                id: "A",
                text: "Menilai efektivitas pengendalian TI, kepatuhan, dan integritas proses",
            },
            { id: "B", text: "Mengganti tim TI" },
            { id: "C", text: "Mengembangkan aplikasi" },
            { id: "D", text: "Hanya mengecek password" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "IT audit mengevaluasi kontrol internal TI dan memberikan assurance kepada manajemen/pemangku kepentingan.",
    },
    {
        id: "g013",
        question:
            "Dalam kerangka kerja COBIT, EDM singkatan dari ... dan fungsinya?",
        choices: [
            {
                id: "A",
                text: "Evaluate, Direct and Monitor — proses governance utama untuk mengarahkan organisasi",
            },
            { id: "B", text: "Encrypt Data Management" },
            { id: "C", text: "Enterprise Data Model" },
            { id: "D", text: "External Device Manager" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "EDM adalah domain governance di COBIT yang memfokuskan pada penilaian, pengarahan, dan pemantauan kinerja TI.",
    },
    {
        id: "g014",
        question:
            "Manakah metrik yang biasa digunakan untuk mengukur kinerja layanan TI?",
        choices: [
            {
                id: "A",
                text: "MTTR (Mean Time To Repair), MTBF, availability, SLA compliance",
            },
            { id: "B", text: "Lines of code only" },
            { id: "C", text: "Jumlah developer" },
            { id: "D", text: "Warna logo" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "MTTR, MTBF, dan metrik availability/SLA memberikan gambaran kualitas layanan dan keandalan sistem.",
    },
    {
        id: "g015",
        question:
            "Apa yang dimaksud dengan 'segregation of duties' (SoD) dalam governance?",
        choices: [
            {
                id: "A",
                text: "Prinsip membagi tugas agar tidak ada satu orang yang memegang kontrol penuh sehingga mengurangi fraud",
            },
            { id: "B", text: "Menyerahkan semua tugas ke satu orang" },
            { id: "C", text: "Menggabungkan semua peran TI" },
            { id: "D", text: "Hanya terkait hardware" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "SoD memisahkan tugas (mis. development vs deployment) untuk mencegah konflik kepentingan dan penyalahgunaan.",
    },
    {
        id: "g016",
        question:
            "Dalam manajemen perubahan (change management), langkah penting sebelum produksi adalah ...",
        choices: [
            {
                id: "A",
                text: "Uji coba (testing) dan assessment dampak serta approval change advisory board (CAB)",
            },
            { id: "B", text: "Langsung deploy di live tanpa testing" },
            { id: "C", text: "Hanya memberi tahu tim support" },
            { id: "D", text: "Menghapus log" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Perubahan harus diuji, di-review, dan disetujui untuk meminimalkan gangguan layanan dan risiko.",
    },
    {
        id: "g017",
        question: "Apa itu 'business continuity plan' (BCP)?",
        choices: [
            {
                id: "A",
                text: "Rencana untuk memastikan keberlangsungan operasi bisnis saat terjadi gangguan (disaster recovery termasuk)",
            },
            { id: "B", text: "Rencana pemasaran" },
            { id: "C", text: "SOP pengembangan fitur" },
            { id: "D", text: "Dokumen teknis API" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "BCP berisi strategi, proses, dan prosedur agar organisasi tetap beroperasi saat gangguan besar.",
    },
    {
        id: "g018",
        question:
            "Manakah kontrol teknis yang membantu melindungi data sensitif?",
        choices: [
            {
                id: "A",
                text: "Enkripsi data at-rest dan in-transit, akses berbasis peran, logging",
            },
            { id: "B", text: "Meningkatkan warna UI" },
            { id: "C", text: "Memperbesar ukuran server" },
            { id: "D", text: "Menghapus backup" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Enkripsi, kontrol akses, dan audit logging termasuk kontrol penting untuk keamanan data.",
    },
    {
        id: "g019",
        question:
            "Apa peran Chief Information Officer (CIO) dalam tata kelola TI?",
        choices: [
            {
                id: "A",
                text: "Mengawasi strategi TI dan memastikan alignment dengan tujuan bisnis",
            },
            { id: "B", text: "Menulis semua kode" },
            { id: "C", text: "Hanya bertanggung jawab hardware" },
            { id: "D", text: "Hanya menangani helpdesk" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "CIO bertanggung jawab atas strategi TI, investasi, dan hubungan antara TI dan unit bisnis.",
    },
    {
        id: "g020",
        question: "Apa pentingnya data governance dalam organisasi?",
        choices: [
            {
                id: "A",
                text: "Menetapkan kebijakan data, kualitas, kepemilikan, dan penggunaan yang bertanggung jawab",
            },
            { id: "B", text: "Menghapus data lama tanpa pencatatan" },
            { id: "C", text: "Hanya mem-backup data" },
            { id: "D", text: "Membiarkan siapa saja akses" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Data governance menetapkan aturan untuk kualitas, integritas, keamanan, dan tata kelola penggunaan data.",
    },
    {
        id: "g021",
        question: "Manakah yang merupakan contoh kontrol administratif?",
        choices: [
            {
                id: "A",
                text: "Kebijakan & prosedur, pelatihan karyawan, vendor management",
            },
            { id: "B", text: "Firewall" },
            { id: "C", text: "Enkripsi AES" },
            { id: "D", text: "Load balancer" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Kontrol administratif meliputi kebijakan, governance, dan aktivitas organisasi (non-teknis) untuk mengelola risiko.",
    },
    {
        id: "g022",
        question:
            "Ketika menilai vendor cloud, metrik yang penting untuk diperiksa adalah ...",
        choices: [
            {
                id: "A",
                text: "Compliance certifications, SLA uptime, security practices, data residency",
            },
            { id: "B", text: "Warna logo vendor" },
            { id: "C", text: "Jumlah font pada website vendor" },
            { id: "D", text: "Alamat kantor pusat saja" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Sertifikasi (ISO, SOC), SLA, metode enkripsi, dan lokasi data adalah faktor penting dalam vendor assessment.",
    },
    {
        id: "g023",
        question:
            "Apa fungsi Key Performance Indicators (KPI) dalam governance TI?",
        choices: [
            {
                id: "A",
                text: "Mengukur kinerja layanan/aktivitas TI terhadap target yang ditetapkan",
            },
            { id: "B", text: "Mengganti kebijakan" },
            { id: "C", text: "Mendeteksi bug" },
            { id: "D", text: "Menambah jumlah pengguna" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "KPI membantu menilai efektivitas, efisiensi, dan kontribusi TI terhadap tujuan organisasi.",
    },
    {
        id: "g024",
        question:
            "Dalam konteks risiko TI, 'threat' berbeda dari 'vulnerability' karena ...",
        choices: [
            {
                id: "A",
                text: "Threat adalah potensi kejadian berbahaya; vulnerability adalah kelemahan yang dapat dieksploitasi",
            },
            { id: "B", text: "Keduanya sama" },
            { id: "C", text: "Vulnerability adalah serangan nyata" },
            { id: "D", text: "Threat hanya perangkat keras" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Threat (ancaman) bisa mengeksploitasi vulnerability (celah/kelemahan) untuk menyebabkan dampak.",
    },
    {
        id: "g025",
        question: "Apa tujuan utama pengelolaan aset TI (IT asset management)?",
        choices: [
            {
                id: "A",
                text: "Mengetahui inventaris, umur, kepemilikan, dan siklus hidup aset untuk pengelolaan dan pengendalian",
            },
            { id: "B", text: "Hanya menghapus aset lama" },
            { id: "C", text: "Menambah aset tanpa catatan" },
            { id: "D", text: "Menyimpan aset di gudang tanpa monitoring" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Aset management membantu kontrol biaya, compliance, dan pengambilan keputusan terkait pembelian/retirement.",
    },
    {
        id: "g026",
        question: "Manakah aktivitas yang termasuk incident management?",
        choices: [
            {
                id: "A",
                text: "Identifikasi insiden, eskalasi, mitigasi, pemulihan, dan post-mortem",
            },
            { id: "B", text: "Hanya backup data" },
            { id: "C", text: "Mendesain UI" },
            { id: "D", text: "Meningkatkan bandwidth" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Incident management bertujuan mengembalikan layanan normal secepat mungkin dan meminimalkan dampak bisnis.",
    },
    {
        id: "g027",
        question: "Dalam konteks tata kelola, apa itu 'policy'?",
        choices: [
            {
                id: "A",
                text: "Dokumen formal yang menetapkan aturan, tanggung jawab, dan harapan perilaku",
            },
            { id: "B", text: "Script otomatis" },
            { id: "C", text: "Format file backup" },
            { id: "D", text: "Tool monitoring" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Policy memberikan panduan dan aturan yang wajib dipatuhi oleh organisasi dan karyawan.",
    },
    {
        id: "g028",
        question: "Apa yang dimaksud dengan 'risk appetite'?",
        choices: [
            {
                id: "A",
                text: "Tingkat risiko yang dapat diterima organisasi dalam mengejar tujuan bisnis",
            },
            { id: "B", text: "Jumlah risiko yang pasti terjadi" },
            { id: "C", text: "Tingkat keamanan tertinggi" },
            { id: "D", text: "Budget untuk TI" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Risk appetite adalah toleransi organisasi terhadap risiko dan menjadi dasar keputusan mitigasi/investasi kontrol.",
    },
    {
        id: "g029",
        question:
            "Manakah praktik terbaik dalam pengelolaan akses (access management)?",
        choices: [
            {
                id: "A",
                text: "Prinsip least privilege, review hak akses berkala, dan logging akses",
            },
            { id: "B", text: "Memberi semua akses ke semua pengguna" },
            { id: "C", text: "Menyimpan password di dokumen bersama" },
            { id: "D", text: "Tidak perlu revokasi akses saat pegawai keluar" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Least privilege, periodic access review, dan audit trail mengurangi risiko penyalahgunaan akses.",
    },
    {
        id: "g030",
        question: "Apa tujuan vendor management dalam tata kelola TI?",
        choices: [
            {
                id: "A",
                text: "Mengelola hubungan, kontrak, kinerja, dan risiko vendor untuk memastikan layanan yang konsisten",
            },
            { id: "B", text: "Hanya menandatangani kontrak" },
            { id: "C", text: "Menjadwalkan cuti vendor" },
            { id: "D", text: "Menyimpan vendor tanpa review" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Vendor management memastikan kepatuhan, SLA, dan mitigasi risiko terkait pihak ketiga.",
    },
    {
        id: "g031",
        question: "Apa itu 'change advisory board' (CAB)?",
        choices: [
            {
                id: "A",
                text: "Kelompok orang yang menilai dan menyetujui perubahan besar agar terkontrol",
            },
            { id: "B", text: "Tim backup" },
            { id: "C", text: "Unit pemasaran" },
            { id: "D", text: "Layanan cloud" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "CAB merepresentasikan pemangku kepentingan untuk menilai risiko dan dampak perubahan sebelum disetujui.",
    },
    {
        id: "g032",
        question: "Dalam audit TI, bukti yang paling kuat berasal dari ...",
        choices: [
            {
                id: "A",
                text: "Dokumen, log, konfigurasi sistem, dan hasil pengujian (evidence objective)",
            },
            { id: "B", text: "Wawancara saja" },
            { id: "C", text: "Opini sepihak tanpa bukti" },
            { id: "D", text: "Screenshot tanpa context" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Bukti objektif yang dapat diverifikasi seperti log & konfigurasi lebih andal daripada hanya pernyataan lisan.",
    },
    {
        id: "g033",
        question: "Apa peran 'data classification' dalam keamanan informasi?",
        choices: [
            {
                id: "A",
                text: "Mengelompokkan data berdasarkan sensitivitas untuk menentukan kontrol yang tepat",
            },
            { id: "B", text: "Menghapus data secara acak" },
            { id: "C", text: "Mengganti format file" },
            { id: "D", text: "Membuat lebih banyak salinan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Classification menentukan bagaimana data dilindungi, disimpan, dan diakses sesuai level sensitivitas.",
    },
    {
        id: "g034",
        question:
            "Manakah aktivitas yang termasuk dalam 'performance monitoring' TI?",
        choices: [
            {
                id: "A",
                text: "Pemantauan uptime, latency, penggunaan sumber daya, serta analisa tren",
            },
            { id: "B", text: "Hanya melihat dashboard sekali setahun" },
            { id: "C", text: "Menonaktifkan monitoring saat malam" },
            { id: "D", text: "Menghapus log setelah satu hari" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Monitoring berkelanjutan membantu deteksi dini masalah dan perencanaan kapasitas.",
    },
    {
        id: "g035",
        question:
            "Dalam konteks regulasi perlindungan data, praktik penting yang harus diperhatikan organisasi adalah ...",
        choices: [
            {
                id: "A",
                text: "Prinsip minimisasi data, persetujuan, hak subjek data, dan keamanan data",
            },
            {
                id: "B",
                text: "Mengumpulkan data sebanyak mungkin tanpa alasan",
            },
            { id: "C", text: "Membagikan data publik tanpa kontrol" },
            { id: "D", text: "Menyimpan password dalam teks jelas" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Prinsip privasi seperti minimisasi dan hak akses penting untuk kepatuhan terhadap aturan proteksi data.",
    },
    {
        id: "g036",
        question: "Apa tujuan melakukan business impact analysis (BIA)?",
        choices: [
            {
                id: "A",
                text: "Menilai dampak bisnis jika terjadi gangguan untuk menentukan prioritas pemulihan",
            },
            { id: "B", text: "Mengukur kecepatan internet" },
            { id: "C", text: "Menentukan UI aplikasi" },
            { id: "D", text: "Menambah jumlah server" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "BIA membantu memahami konsekuensi operasional dan finansial dari gangguan sehingga BCP/DR dapat diprioritaskan.",
    },
    {
        id: "g037",
        question:
            "Manakah tindakan mitigasi bila ditemukan celah keamanan kritis di sistem produksi?",
        choices: [
            {
                id: "A",
                text: "Segera lakukan isolasi/mitigasi sementara, patch, testing, dan rencana rollback/komunikasi",
            },
            { id: "B", text: "Mencatat dan menunggu sampai akhir bulan" },
            { id: "C", text: "Menghapus log audit" },
            { id: "D", text: "Menonaktifkan monitoring" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Respons cepat termasuk mitigasi sementara, patch teruji, dan komunikasi penting untuk mengurangi eksposur.",
    },
    {
        id: "g038",
        question:
            "Apa itu 'continuous monitoring' dan mengapa penting dalam governance TI?",
        choices: [
            {
                id: "A",
                text: "Pemantauan berkelanjutan atas kontrol, performa, dan risiko untuk deteksi dini dan kepatuhan",
            },
            { id: "B", text: "Monitoring sekali setahun" },
            { id: "C", text: "Hanya memonitor server database" },
            { id: "D", text: "Mentukan laporan manual tanpa automation" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Continuous monitoring meningkatkan visibilitas, memungkinkan respons cepat terhadap masalah dan memastikan control tetap efektif.",
    },
    {
        id: "g039",
        question:
            "Dalam procurement dan kontrak TI, klausul penting untuk dimasukkan adalah ...",
        choices: [
            {
                id: "A",
                text: "SLA, confidentiality, data handling, exit strategy, liability",
            },
            { id: "B", text: "Hanya harga tanpa layanan" },
            { id: "C", text: "Format warna antarmuka" },
            { id: "D", text: "Alamat email pembuat kontrak saja" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Kontrak harus mengatur layanan, keamanan, privasi, hak akses, dan proses pemutusan hubungan/transfer data.",
    },
    {
        id: "g040",
        question: "Apa arti 'least privilege' dan contohnya?",
        choices: [
            {
                id: "A",
                text: "Memberi akses minimal yang diperlukan — mis. user biasa tidak diberi akses admin",
            },
            { id: "B", text: "Memberi semua hak akses pada semua user" },
            { id: "C", text: "Menghapus hak akses sama sekali" },
            { id: "D", text: "Memberi akses berdasarkan lama kerja" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Least privilege membatasi akses sehingga mengurangi potensi penyalahgunaan dan dampak jika akun terkompromi.",
    },
    {
        id: "g041",
        question: "Manakah peran penting dari 'security policy' organisasi?",
        choices: [
            {
                id: "A",
                text: "Menetapkan aturan, tanggung jawab, dan prosedur untuk melindungi aset informasi",
            },
            { id: "B", text: "Menentukan desain logo" },
            { id: "C", text: "Hanya untuk tim keamanan jaringan" },
            { id: "D", text: "Mengganti SOP HR" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Security policy menjadi pedoman untuk implementasi kontrol, pelatihan, dan audit keamanan informasi.",
    },
    {
        id: "g042",
        question: "Apa itu 'segmentation' dalam konteks keamanan jaringan?",
        choices: [
            {
                id: "A",
                text: "Memisahkan jaringan menjadi zona untuk membatasi pergerakan lateral penyerang",
            },
            { id: "B", text: "Menghapus subnet" },
            { id: "C", text: "Menaikkan bandwidth" },
            { id: "D", text: "Menyalakan semua port" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Network segmentation mengurangi risiko penyebaran serangan dan mempermudah kontrol akses jaringan.",
    },
    {
        id: "g043",
        question: "Dalam konteks tata kelola, apa itu 'tone at the top'?",
        choices: [
            {
                id: "A",
                text: "Komitmen dan contoh perilaku pimpinan yang menentukan budaya governance dan kepatuhan",
            },
            { id: "B", text: "Nada suara tim helpdesk" },
            { id: "C", text: "Format dokumen" },
            { id: "D", text: "Warna tema aplikasi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Pemimpin organisasi menetapkan prioritas governance dan etika, memengaruhi implementasi kebijakan di seluruh organisasi.",
    },
    {
        id: "g044",
        question:
            "Manakah indikator yang menunjukkan perlunya peningkatan kontrol TI?",
        choices: [
            {
                id: "A",
                text: "Serangkaian insiden berulang, audit finding, dan ketidakpatuhan pada SLA",
            },
            { id: "B", text: "Tingkat kepuasan pengguna tinggi" },
            { id: "C", text: "Jumlah server meningkat" },
            { id: "D", text: "Dokumen kebijakan lengkap" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Insiden berulang atau temuan audit menunjukkan kelemahan kontrol yang harus diperbaiki.",
    },
    {
        id: "g045",
        question: "Apa itu 'third-party risk' dan bagaimana mengelolanya?",
        choices: [
            {
                id: "A",
                text: "Risiko yang timbul dari vendor/mitra; dikelola lewat due diligence, contract controls, dan monitoring",
            },
            { id: "B", text: "Risiko internal tim TI" },
            { id: "C", text: "Risiko terkait hardware only" },
            { id: "D", text: "Risiko yang selalu kecil" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Third-party risk assessment dan pemantauan membantu mengurangi eksposur dari pihak ketiga.",
    },
    {
        id: "g046",
        question:
            "Dalam reporting governance, siapa yang biasanya menerima laporan kinerja & risiko TI secara rutin?",
        choices: [
            { id: "A", text: "Dewan direksi (Board) dan manajemen puncak" },
            { id: "B", text: "Hanya tim helpdesk" },
            { id: "C", text: "Semua pemegang saham publik tanpa filter" },
            { id: "D", text: "Pihak eksternal tanpa NDA" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Board dan eksekutif perlu informasi untuk pengambilan keputusan strategis dan oversight.",
    },
    {
        id: "g047",
        question: "Apa peran 'control owner' dalam kerangka governance?",
        choices: [
            {
                id: "A",
                text: "Bertanggung jawab memastikan kontrol diterapkan dan berfungsi efektif",
            },
            { id: "B", text: "Hanya menandatangani dokumen" },
            { id: "C", text: "Menulis kode aplikasi" },
            { id: "D", text: "Menjadi auditor internal" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Control owner memelihara kontrol, melakukan self-assessment, dan memastikan evidence tersedia untuk audit.",
    },
    {
        id: "g048",
        question: "Manakah konsep yang membantu menjaga 'data integrity'?",
        choices: [
            {
                id: "A",
                text: "Checksums, hashing, access control, logging, validation",
            },
            { id: "B", text: "Menghapus semua index database" },
            { id: "C", text: "Menonaktifkan backup" },
            { id: "D", text: "Memberi akses penuh ke publik" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Integrity dipertahankan dengan mekanisme validasi, kontrol akses, dan audit trail yang kuat.",
    },
    {
        id: "g049",
        question:
            "Dalam pengelolaan proyek TI, apa manfaat penggunaan metodologi formal (mis. PRINCE2, PMBOK)?",
        choices: [
            {
                id: "A",
                text: "Memberi struktur, kontrol risiko proyek, dan tata kelola proyek yang terdokumentasi",
            },
            { id: "B", text: "Menghilangkan kebutuhan testing" },
            { id: "C", text: "Menambah biaya tanpa manfaat" },
            { id: "D", text: "Hanya berguna untuk proyek kecil" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Metodologi formal membantu manajemen scope, schedule, risiko, dan komunikasi pemangku kepentingan.",
    },
    {
        id: "g050",
        question:
            "Apa langkah terakhir yang ideal setelah implementasi sebuah kontrol baru?",
        choices: [
            {
                id: "A",
                text: "Monitoring efektivitas, review, dan dokumentasi hasil serta continuous improvement",
            },
            { id: "B", text: "Menonaktifkan kontrol lama tanpa review" },
            { id: "C", text: "Menghapus bukti implementasi" },
            { id: "D", text: "Langsung ganti vendor" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Implementasi harus diikuti pengukuran dan review untuk memastikan kontrol efektif dan disesuaikan bila perlu.",
    },
];

// SIMULATION_BANK: 10 soal mudah (1 poin tiap soal) — latihan singkat
window.SIMULATION_BANK = [
    {
        id: "sim_g01",
        question: "Apa kepanjangan SLA?",
        choices: [
            { id: "A", text: "Service Level Agreement" },
            { id: "B", text: "System Log Archive" },
            { id: "C", text: "Secure Login Access" },
            { id: "D", text: "Software License Area" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "SLA adalah perjanjian tingkat layanan antara penyedia layanan dan pelanggan.",
    },
    {
        id: "sim_g02",
        question: "Manakah yang merupakan praktik 'least privilege'?",
        choices: [
            {
                id: "A",
                text: "Memberi user hanya akses yang diperlukan untuk tugasnya",
            },
            { id: "B", text: "Memberi semua akses ke user" },
            { id: "C", text: "Menonaktifkan semua akun" },
            { id: "D", text: "Membagikan password" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Least privilege membatasi akses sehingga mengurangi potensi penyalahgunaan.",
    },
    {
        id: "sim_g03",
        question: "ISO 27001 berhubungan dengan ...",
        choices: [
            { id: "A", text: "Keamanan informasi (ISMS)" },
            { id: "B", text: "Manajemen mutu" },
            { id: "C", text: "Pengembangan software" },
            { id: "D", text: "Desain grafis" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "ISO 27001 menetapkan persyaratan sistem manajemen keamanan informasi.",
    },
    {
        id: "sim_g04",
        question: "RACI membantu organisasi untuk ...",
        choices: [
            {
                id: "A",
                text: "Menetapkan peran dan tanggung jawab pada proses/proyek",
            },
            { id: "B", text: "Menentukan warna dashboard" },
            { id: "C", text: "Melakukan backup saja" },
            { id: "D", text: "Mengingat password" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "RACI memetakan siapa yang Responsible, Accountable, Consulted, dan Informed.",
    },
    {
        id: "sim_g05",
        question: "Business Continuity Plan (BCP) bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Memastikan operasi bisnis tetap berjalan saat gangguan",
            },
            { id: "B", text: "Mempercepat pengembangan fitur" },
            { id: "C", text: "Menambah akses publik" },
            { id: "D", text: "Menghapus data lama" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "BCP mempersiapkan proses pemulihan agar bisnis tetap beroperasi selama insiden besar.",
    },
    {
        id: "sim_g06",
        question: "COBIT fokus pada ...",
        choices: [
            { id: "A", text: "Governance & management of enterprise IT" },
            { id: "B", text: "Hanya development software" },
            { id: "C", text: "Hardware procurement" },
            { id: "D", text: "Desain grafis" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "COBIT menyediakan framework praktik terbaik untuk governance dan manajemen TI.",
    },
    {
        id: "sim_g07",
        question: "Kontrol administratif contohnyalah ...",
        choices: [
            { id: "A", text: "Kebijakan keamanan dan pelatihan karyawan" },
            { id: "B", text: "Firewall rules" },
            { id: "C", text: "Enkripsi AES" },
            { id: "D", text: "Load balancing" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Kontrol administratif adalah kebijakan, prosedur, dan aktivitas manajerial.",
    },
    {
        id: "sim_g08",
        question: "Apa itu 'incident management'?",
        choices: [
            {
                id: "A",
                text: "Proses menangani dan memulihkan insiden layanan TI",
            },
            { id: "B", text: "Membuat desain antarmuka" },
            { id: "C", text: "Menghapus server" },
            { id: "D", text: "Menjadwalkan meeting" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Incident management fokus pada pemulihan layanan dan minimisasi dampak bisnis.",
    },
    {
        id: "sim_g09",
        question: "Third-party risk management melibatkan ...",
        choices: [
            { id: "A", text: "Due diligence, kontrak, monitoring vendor" },
            { id: "B", text: "Memberi akses penuh ke vendor tanpa audit" },
            { id: "C", text: "Menghapus vendor lama tanpa catatan" },
            { id: "D", text: "Menjadwalkan demo produk" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "Manajemen pihak ketiga memastikan vendor memenuhi standar keamanan dan SLA.",
    },
    {
        id: "sim_g10",
        question: "MTTR artinya ...",
        choices: [
            {
                id: "A",
                text: "Mean Time To Repair — rata-rata waktu pemulihan dari kegagalan",
            },
            { id: "B", text: "Maximum Transfer Time Rate" },
            { id: "C", text: "Mean Time To Respond" },
            { id: "D", text: "Minimum Time To Recovery" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "MTTR mengukur efektivitas respon dan pemulihan layanan ketika terjadi gangguan.",
    },
];
