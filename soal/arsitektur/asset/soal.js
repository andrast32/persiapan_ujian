// asset/soal.js
// QUESTION_BANK untuk Arsitektur dan Perancangan Sistem Enterprise (UT STSI4306)
// 50 soal, masing-masing 2 poin => total 100 poin
window.QUESTION_BANK = [
    {
        id: "s001",
        question:
            "Apa tujuan utama arsitektur enterprise (Enterprise Architecture) dalam organisasi?",
        choices: [
            { id: "A", text: "Menggantikan sistem lama tanpa analisis" },
            {
                id: "B",
                text: "Menciptakan blueprint yang menyelaraskan TI dengan tujuan bisnis",
            },
            { id: "C", text: "Menambah jumlah server perusahaan" },
            {
                id: "D",
                text: "Mendelegasikan seluruh keputusan bisnis ke vendor",
            },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Arsitektur enterprise bertujuan menyediakan blueprint (model) yang menyelaraskan strategi TI dengan tujuan bisnis, membantu pengambilan keputusan, interoperabilitas, dan standarisasi. Pilihan lain salah karena terlalu sempit atau tidak relevan.",
    },
    {
        id: "s002",
        question:
            "Model arsitektur yang memisahkan layer presentasi, logika bisnis, dan data disebut ...",
        choices: [
            { id: "A", text: "Monolitik tanpa layer" },
            { id: "B", text: "Microkernel" },
            {
                id: "C",
                text: "Arsitektur berlapis (layered architecture / n-tier)",
            },
            { id: "D", text: "Event-sourcing" },
        ],
        answerId: "C",
        points: 2,
        time: 90,
        explanation:
            "Arsitektur berlapis (n-tier) memisahkan presentasi, logika bisnis, dan data ke layer berbeda sehingga meningkatkan pemeliharaan, skalabilitas, dan pemisahan concern.",
    },
    {
        id: "s003",
        question:
            "Prinsip 'separation of concerns' paling tepat dimaksudkan untuk ...",
        choices: [
            { id: "A", text: "Menggabungkan semua fungsi dalam satu modul" },
            {
                id: "B",
                text: "Memisahkan aspek sistem sesuai tanggung jawabnya",
            },
            { id: "C", text: "Menghilangkan dokumentasi" },
            { id: "D", text: "Memprioritaskan UI di atas keamanan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Separation of concerns memecah sistem menjadi bagian-bagian yang masing-masing menangani tanggung jawab spesifik, mempermudah pengembangan dan pemeliharaan.",
    },
    {
        id: "s004",
        question: "Manakah pernyataan yang benar mengenai microservices?",
        choices: [
            {
                id: "A",
                text: "Semua layanan harus di-deploy bersama-sama dalam satu binary",
            },
            {
                id: "B",
                text: "Setiap layanan kecil, independen, dan berkomunikasi lewat API",
            },
            {
                id: "C",
                text: "Microservices tidak memerlukan pengujian terpisah",
            },
            {
                id: "D",
                text: "Microservices menggantikan kebutuhan akan arsitek",
            },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Microservices adalah arsitektur yang membagi aplikasi menjadi layanan-layanan kecil, independent, dan saling berkomunikasi melalui API, meningkatkan skalabilitas dan otonomi tim.",
    },
    {
        id: "s005",
        question:
            "Dalam konteks sistem terdistribusi, CAP theorem menyatakan trade-off antara ...",
        choices: [
            {
                id: "A",
                text: "Consistency, Availability, Partition tolerance — hanya dua yang dapat dijamin simultan",
            },
            { id: "B", text: "Cost, Availability, Performance" },
            { id: "C", text: "Compatibility, Accuracy, Performance" },
            { id: "D", text: "Concurrency, Accessibility, Portability" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "CAP theorem: sistem terdistribusi tidak dapat menjamin consistency, availability, dan partition tolerance sekaligus; pada kondisi partition biasanya harus memilih antara consistency atau availability.",
    },
    {
        id: "s006",
        question:
            "Perbedaan utama antara ACID dan BASE pada database adalah ...",
        choices: [
            {
                id: "A",
                text: "ACID fokus pada konsistensi kuat; BASE memprioritaskan ketersediaan dan toleransi partisi",
            },
            { id: "B", text: "ACID hanya untuk NoSQL, BASE untuk SQL" },
            { id: "C", text: "ACID memperbolehkan inkonsistensi sementara" },
            { id: "D", text: "Tidak ada perbedaan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "ACID (Atomicity, Consistency, Isolation, Durability) menekankan konsistensi kuat; BASE (Basically Available, Soft state, Eventual consistency) lebih longgar untuk skala sistem terdistribusi.",
    },
    {
        id: "s007",
        question: "Apa fungsi utama API Gateway pada arsitektur microservices?",
        choices: [
            { id: "A", text: "Menyimpan semua data transaksi" },
            {
                id: "B",
                text: "Menggabungkan, men-route, dan mengamankan akses ke banyak layanan mikro",
            },
            { id: "C", text: "Menghapus kebutuhan dokumentasi API" },
            { id: "D", text: "Menjadi database sekunder" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "API Gateway bertindak sebagai titik masuk tunggal (single entry point) untuk klien, melakukan routing ke layanan mikro, agregasi hasil, otentikasi, rate limiting, dan lain-lain.",
    },
    {
        id: "s008",
        question: "Pattern arsitektur 'Facade' biasanya digunakan untuk ...",
        choices: [
            {
                id: "A",
                text: "Memberi antarmuka sederhana ke subsistem kompleks",
            },
            { id: "B", text: "Membuat kelas abstrak tanpa implementasi" },
            { id: "C", text: "Menerapkan enkripsi end-to-end" },
            { id: "D", text: "Menjalankan job batch setiap jam" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Facade menyederhanakan interaksi dengan subsistem kompleks dengan menyediakan antarmuka (interface) sederhana kepada klien.",
    },
    {
        id: "s009",
        question:
            "Dalam perancangan layanan enterprise, SLA (Service Level Agreement) berguna untuk ...",
        choices: [
            {
                id: "A",
                text: "Menentukan persyaratan kinerja dan ketersediaan layanan antara provider dan konsumen",
            },
            { id: "B", text: "Menentukan harga saham perusahaan" },
            { id: "C", text: "Mengganti kebutuhan backup" },
            { id: "D", text: "Meningkatkan ukuran paket data" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "SLA menetapkan metrik, target, dan konsekuensi untuk kinerja layanan (mis. uptime, response time) sehingga ekspektasi jelas antara penyedia dan pengguna layanan.",
    },
    {
        id: "s010",
        question: "Apa itu Enterprise Service Bus (ESB)?",
        choices: [
            { id: "A", text: "Sebuah database relasional" },
            {
                id: "B",
                text: "Middleware untuk menghubungkan layanan dan menangani integrasi pesan",
            },
            { id: "C", text: "Framework untuk frontend UI" },
            { id: "D", text: "Jenis firewall" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "ESB adalah middleware yang memfasilitasi integrasi antara layanan, menyediakan routing, transformasi pesan, orkestrasi, dan konektivitas dengan berbagai protokol.",
    },
    {
        id: "s011",
        question:
            "Orkestrasi vs Choreography dalam integrasi layanan: perbedaan utamanya adalah ...",
        choices: [
            {
                id: "A",
                text: "Orkestrasi terpusat mengatur alur; choreography adalah kolaborasi terdesentralisasi antar layanan",
            },
            { id: "B", text: "Keduanya sama persis" },
            { id: "C", text: "Choreography memerlukan database khusus" },
            { id: "D", text: "Orkestrasi hanya untuk UI" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Orkestrasi memakai kontrol terpusat (orchestrator) untuk mengatur proses; choreography mengandalkan setiap layanan bereaksi pada event tanpa controller pusat.",
    },
    {
        id: "s012",
        question:
            "Pattern 'Circuit Breaker' dalam microservices berguna untuk ...",
        choices: [
            { id: "A", text: "Memecah base data menjadi shard" },
            {
                id: "B",
                text: "Mencegah panggilan kontinu ke layanan yang gagal sehingga menghindari cascading failures",
            },
            { id: "C", text: "Mengatur load balancing round-robin" },
            { id: "D", text: "Mempercepat query database" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Circuit Breaker memblokir panggilan ke layanan yang sering gagal dan memberi waktu pemulihan, sehingga mengurangi beban dan mencegah kegagalan menyebar.",
    },
    {
        id: "s013",
        question: "Skalabilitas horizontal berarti ...",
        choices: [
            {
                id: "A",
                text: "Menambah kapasitas dengan meningkatkan spesifikasi satu server",
            },
            {
                id: "B",
                text: "Menambah lebih banyak instance/mesin secara paralel",
            },
            { id: "C", text: "Mengurangi jumlah server" },
            { id: "D", text: "Mengganti database relasional menjadi file" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Skalabilitas horizontal (scale out) menambah instance/machine untuk menyebarkan beban; berbeda dari vertical scaling (scale up) yang menaikkan kapasitas satu mesin.",
    },
    {
        id: "s014",
        question: "Caching pada lapisan arsitektur bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Mengurangi latency dan beban pada backend dengan menyimpan hasil yang sering diakses",
            },
            { id: "B", text: "Menghilangkan kebutuhan DB" },
            { id: "C", text: "Mengganti encryption" },
            { id: "D", text: "Menambah beban jaringan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Cache menyimpan data/response sering diakses untuk mengurangi waktu respon dan menurunkan beban pada sumber data utama.",
    },
    {
        id: "s015",
        question:
            "Desain database terdistribusi: 'sharding' adalah teknik untuk ...",
        choices: [
            {
                id: "A",
                text: "Membagi data ke beberapa node berdasarkan key untuk skala lebih baik",
            },
            {
                id: "B",
                text: "Menggandakan data penuh di setiap node tanpa partisi",
            },
            { id: "C", text: "Menghilangkan indexing" },
            { id: "D", text: "Menjadikan database read-only" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Sharding mempartisi dataset ke beberapa node berdasarkan sharding key sehingga beban penyimpanan dan operasi tersebar untuk skala.",
    },
    {
        id: "s016",
        question: "Pattern 'Event Sourcing' menyimpan ...",
        choices: [
            { id: "A", text: "Hanya state akhir setiap entitas" },
            { id: "B", text: "Deretan event yang menyebabkan perubahan state" },
            { id: "C", text: "Schema database tetap tanpa perubahan" },
            { id: "D", text: "Hanya log aplikasi" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Event sourcing menyimpan semua event (perubahan) sebagai sumber kebenaran; state saat ini dapat direkonstruksi dari urutan event tersebut.",
    },
    {
        id: "s017",
        question:
            "Dalam perancangan enterprise, 'loose coupling' penting karena ...",
        choices: [
            { id: "A", text: "Memaksa integrasi yang ketat antar modul" },
            {
                id: "B",
                text: "Mengurangi ketergantungan sehingga perubahan pada satu komponen tidak merusak lainnya",
            },
            { id: "C", text: "Menghilangkan dokumentasi API" },
            { id: "D", text: "Menambah ketergantungan vendor" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Loose coupling mengurangi ketergantungan antar komponen sehingga memudahkan pemeliharaan, deployment, dan evolusi sistem.",
    },
    {
        id: "s018",
        question:
            "Manakah keuntungan containerization (mis. Docker) dibanding VM tradisional?",
        choices: [
            { id: "A", text: "Lebih berat dan lambat di-boot" },
            {
                id: "B",
                text: "Isolasi proses ringan dan efisiensi sumber daya lebih baik",
            },
            { id: "C", text: "Membutuhkan hypervisor" },
            { id: "D", text: "Tidak bisa diorkestrasi" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Containers menyediakan isolasi proses yang lebih ringan (sharing kernel), boot lebih cepat, dan efisiensi sumber daya daripada VM yang memerlukan hypervisor.",
    },
    {
        id: "s019",
        question:
            "Desain sistem untuk 'high availability' (HA) biasanya melibatkan ...",
        choices: [
            { id: "A", text: "Single point of failure tanpa redundancy" },
            {
                id: "B",
                text: "Redundancy, failover, health checks, dan replikasi",
            },
            { id: "C", text: "Menggunakan hanya database lokal" },
            { id: "D", text: "Meninggalkan monitoring" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "HA memerlukan redundancy (instance/zone), mekanisme failover, monitoring, dan replikasi data agar layanan tetap tersedia meski komponen gagal.",
    },
    {
        id: "s020",
        question: "Bagaimana 'stateless service' mempermudah skalabilitas?",
        choices: [
            { id: "A", text: "Memaksa semua state disimpan pada instance" },
            {
                id: "B",
                text: "State disimpan di luar layanan (DB, cache), sehingga instance dapat ditambah/dikurangi tanpa replikasi state",
            },
            { id: "C", text: "Menghapus kebutuhan DB" },
            { id: "D", text: "Membatasi jumlah request" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Stateless services tidak menyimpan state klien di memori lokal sehingga instance dapat digandakan/dihapus tanpa sinkronisasi state.",
    },
    {
        id: "s021",
        question: "Pattern 'Bulkhead' dalam resiliency berarti ...",
        choices: [
            {
                id: "A",
                text: "Memastikan satu kegagalan mengisolasi area tertentu sehingga tidak merusak seluruh sistem",
            },
            { id: "B", text: "Menambah seluruh komponen menjadi satu module" },
            { id: "C", text: "Mengganti security dengan performance" },
            { id: "D", text: "Menghapus testing" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Bulkhead mengisolasi sumber daya dan komponen sehingga kegagalan terbatas tidak menyebabkan kegagalan sistem menyeluruh.",
    },
    {
        id: "s022",
        question: "Dalam integrasi sistem, 'message queue' berguna untuk ...",
        choices: [
            {
                id: "A",
                text: "Menyediakan komunikasi asynchronous dan decoupling antara producer dan consumer",
            },
            { id: "B", text: "Mengganti database utama" },
            { id: "C", text: "Menjalankan tugas secara sinkron" },
            { id: "D", text: "Menambah latency tanpa benefit" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Message queue memungkinkan komunikasi asynchronous, buffering, dan decoupling antara komponen yang memproduksi dan mengonsumsi pesan.",
    },
    {
        id: "s023",
        question:
            "Manakah metrik yang biasa dipakai untuk mengukur performa layanan enterprise?",
        choices: [
            {
                id: "A",
                text: "Uptime, latency (response time), throughput, error rate",
            },
            { id: "B", text: "Jumlah file logs saja" },
            { id: "C", text: "Waktu kompilasi kode" },
            { id: "D", text: "Jumlah baris kode" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Metrik penting: uptime (ketersediaan), latency, throughput (request/s), dan error rate untuk memantau kualitas layanan.",
    },
    {
        id: "s024",
        question:
            "Pattern 'CQRS' (Command Query Responsibility Segregation) memisahkan ...",
        choices: [
            {
                id: "A",
                text: "Command (tulis) dan Query (baca) ke model yang berbeda untuk optimasi",
            },
            { id: "B", text: "UI dan CSS" },
            { id: "C", text: "Database dan filesystem" },
            { id: "D", text: "Semua event ke satu tabel" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "CQRS memisahkan operasi tulis (command) dan baca (query), memungkinkan optimasi dan arsitektur berbeda (mis. read replica, view models).",
    },
    {
        id: "s025",
        question:
            "Manakah keuntungan menggunakan RESTful API dibanding SOAP dalam banyak arsitektur modern?",
        choices: [
            {
                id: "A",
                text: "REST sederhana, berbasis HTTP, mudah di-integrasikan dan ringan; SOAP lebih berat dan berbasis XML",
            },
            { id: "B", text: "REST memerlukan WSDL" },
            { id: "C", text: "SOAP lebih sederhana" },
            { id: "D", text: "REST tidak bisa digunakan untuk CRUD" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "REST menggunakan HTTP/JSON/URI sederhana; SOAP menggunakan XML, WS-*, dan biasanya lebih kompleks. Pilihan tergantung kebutuhan (mis. WS-Security kadang diperlukan).",
    },
    {
        id: "s026",
        question: "Dalam perancangan enterprise, 'governance' berarti ...",
        choices: [
            { id: "A", text: "Membiarkan pengembang bebas tanpa aturan" },
            {
                id: "B",
                text: "Menetapkan kebijakan, standar, proses, dan pengawasan untuk TI agar konsisten dengan tujuan organisasi",
            },
            { id: "C", text: "Hanya mengurus anggaran" },
            { id: "D", text: "Menghapus dokumentasi" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Governance menetapkan kebijakan, arsitektur standar, dan proses agar solusi TI aman, berkelanjutan, dan sesuai regulasi/tujuan organisasi.",
    },
    {
        id: "s027",
        question:
            "Keamanan pada arsitektur enterprise: prinsip 'least privilege' maksudnya ...",
        choices: [
            { id: "A", text: "Memberi semua akses ke semua user" },
            {
                id: "B",
                text: "Memberi hak minimum yang diperlukan untuk sebuah peran atau proses",
            },
            { id: "C", text: "Menghapus autentikasi" },
            { id: "D", text: "Mengizinkan akses publik ke database" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Least privilege berarti memberikan hak akses minimal yang diperlukan untuk melakukan tugas guna mengurangi risiko penyalahgunaan atau eksploitasi.",
    },
    {
        id: "s028",
        question: "Apa peran 'load balancer' dalam arsitektur terdistribusi?",
        choices: [
            {
                id: "A",
                text: "Mendistribusikan trafik masuk ke beberapa backend untuk ketersediaan dan skala",
            },
            { id: "B", text: "Menyimpan data pengguna" },
            { id: "C", text: "Mengganti database" },
            { id: "D", text: "Menjalankan job cron" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Load balancer membagi beban ke sejumlah server backend, meningkatkan ketersediaan dan skala; juga dapat memeriksa health check dan melakukan session affinity bila perlu.",
    },
    {
        id: "s029",
        question: "Manakah yang termasuk non-functional requirement (NFR)?",
        choices: [
            {
                id: "A",
                text: "Waktu tanggap maksimal 200 ms, ketersediaan 99.9%, enkripsi data at-rest",
            },
            { id: "B", text: "Daftar field tabel" },
            { id: "C", text: "Judul laporan" },
            { id: "D", text: "Nama pengembang" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "NFR menyangkut aspek kualitas sistem: performa, availability, security, maintainability, dsb. Pilihan A menampilkan contoh NFR.",
    },
    {
        id: "s030",
        question: "Dalam arsitektur, 'blue-green deployment' berguna untuk ...",
        choices: [
            {
                id: "A",
                text: "Mendeploy versi baru di lingkungan terpisah dan mengalihkan traffic jika stabil",
            },
            { id: "B", text: "Melakukan roll-forward tanpa cadangan" },
            { id: "C", text: "Menghapus deployment lama tanpa testing" },
            { id: "D", text: "Tidak berkaitan dengan deployment" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Blue-green deployment menyiapkan versi baru di lingkungan terpisah (green), lalu mengalihkan traffic dari yang lama (blue) saat valid, mengurangi downtime dan risiko.",
    },
    {
        id: "s031",
        question: "Manakah yang menjelaskan 'service contract' pada SOA?",
        choices: [
            {
                id: "A",
                text: "Dokumen yang menjelaskan API, format pesan, SLA, dan ekspektasi interoperabilitas",
            },
            { id: "B", text: "Hanya nama layanan" },
            { id: "C", text: "Database schema saja" },
            { id: "D", text: "Jenis server fisik" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Service contract mendefinisikan antarmuka layanan: pesan, protokol, format, SLA, error handling sehingga konsumen dan provider punya ekspektasi yang jelas.",
    },
    {
        id: "s032",
        question: "Analisis domain-driven design (DDD) menekankan ...",
        choices: [
            {
                id: "A",
                text: "Pemodelan domain nyata dan kolaborasi antara ahli domain dan pengembang",
            },
            { id: "B", text: "Hanya fokus pada UI" },
            { id: "C", text: "Menghapus model domain" },
            { id: "D", text: "Menggantikan testing" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "DDD menekankan pembuatan model yang mencerminkan konsep domain bisnis dan komunikasi erat antara ahli domain (domain experts) dan pengembang.",
    },
    {
        id: "s033",
        question:
            "Perbedaan antara orchestration engine (mis. BPMN engine) dan script custom adalah ...",
        choices: [
            {
                id: "A",
                text: "Engine BPM menyediakan tooling, visual modeling, monitoring, dan manajemen proses; script custom kurang standar",
            },
            { id: "B", text: "Script custom selalu lebih aman" },
            { id: "C", text: "Tidak ada perbedaan" },
            { id: "D", text: "Engine BPM hanya untuk database" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "BPM engine mendukung pemodelan visual (BPMN), eksekusi proses, monitoring, dan governance. Script custom lebih ad-hoc tanpa dukungan standar tersebut.",
    },
    {
        id: "s034",
        question:
            "Manakah teknik untuk memastikan konsistensi data di replikasi database yang butuh throughput tinggi?",
        choices: [
            { id: "A", text: "Synchronous replication selalu tanpa trade-off" },
            {
                id: "B",
                text: "Gunakan asynchronous replication dengan strategi conflict resolution dan eventual consistency jika throughput prioritas",
            },
            { id: "C", text: "Backup manual setiap jam" },
            { id: "D", text: "Tidak perlu replikasi" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Synchronous replication menjamin konsistensi tapi menurunkan throughput/latency; asynchronous + mekanisme resolusi cocok jika skalabilitas dan throughput prioritas.",
    },
    {
        id: "s035",
        question:
            "Apa peran 'orchestration' dalam konteks container (mis. Kubernetes)?",
        choices: [
            {
                id: "A",
                text: "Mengatur lifecycle containers: scheduling, scaling, self-healing, service discovery",
            },
            { id: "B", text: "Menyimpan images secara permanen" },
            { id: "C", text: "Menulis kode aplikasi" },
            { id: "D", text: "Mengganti CI/CD" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Kubernetes dan orchestrator lain mengelola scheduling container, scaling, penyembuhan otomatis (self-healing), dan network/service discovery.",
    },
    {
        id: "s036",
        question: "Desain API versioning penting karena ...",
        choices: [
            {
                id: "A",
                text: "Memungkinkan evolusi API tanpa memutus konsumen lama",
            },
            { id: "B", text: "Menghilangkan dokumentasi" },
            { id: "C", text: "Hanya untuk database" },
            { id: "D", text: "Mengganti load balancer" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Versioning API membantu menjaga kompatibilitas mundur (backward compatibility) sehingga perubahan tidak memutus klien yang bergantung pada versi lama.",
    },
    {
        id: "s037",
        question:
            "Teknik 'back-pressure' pada sistem event-driven membantu ...",
        choices: [
            {
                id: "A",
                text: "Menghindari konsumen kewalahan dengan mengurangi laju produksi pesan",
            },
            { id: "B", text: "Meningkatkan jumlah pesan tanpa batas" },
            { id: "C", text: "Mengganti queue dengan database" },
            { id: "D", text: "Mempercepat semua proses tanpa kontrol" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Back-pressure adalah mekanisme untuk menahan atau mengurangi kecepatan produksi saat konsumen tidak mampu mengikuti, sehingga mencegah overload.",
    },
    {
        id: "s038",
        question:
            "Manakah praktik CI/CD yang penting dalam konteks arsitektur enterprise?",
        choices: [
            {
                id: "A",
                text: "Automated testing, automated build, deployment pipelines, dan rollback capabilities",
            },
            { id: "B", text: "Manual deploy tanpa testing" },
            { id: "C", text: "Hanya commit langsung ke master" },
            { id: "D", text: "Menjalankan deploy satu kali per tahun" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "CI/CD otomatis termasuk testing, build, deployment, dan kemampuan rollback untuk mengurangi risiko dan mempercepat delivery.",
    },
    {
        id: "s039",
        question:
            "Desain logging terpusat pada enterprise (centralized logging) penting untuk ...",
        choices: [
            {
                id: "A",
                text: "Mempermudah pencarian, analisis insiden, dan korelasi antar komponen",
            },
            { id: "B", text: "Mengganti monitoring" },
            { id: "C", text: "Menghapus keamanan" },
            { id: "D", text: "Meningkatkan duplikasi data tanpa tujuan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Centralized logging (ELK/EFK, Splunk) memudahkan troubleshooting, korelasi event, dan pemantauan performa across components.",
    },
    {
        id: "s040",
        question: "Dalam perancangan data, normalisasi bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Mengurangi redundancy dan anomali pada operasi CRUD",
            },
            { id: "B", text: "Meningkatkan duplikasi data" },
            { id: "C", text: "Membuat query selalu lambat" },
            { id: "D", text: "Menambah join yang tidak perlu" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Normalisasi mengorganisasi tabel untuk mengurangi duplikasi data dan mencegah anomali update, insert, delete; trade-off antara normalisasi dan performa dibutuhkan.",
    },
    {
        id: "s041",
        question:
            "Apa fungsi 'reverse proxy' (mis. Nginx) dalam arsitektur web?",
        choices: [
            {
                id: "A",
                text: "Meneruskan request dari klien ke server backend, melakukan load balancing, SSL termination, dan caching",
            },
            { id: "B", text: "Menyimpan file user" },
            { id: "C", text: "Menjalankan database" },
            { id: "D", text: "Menulis log user di client" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Reverse proxy bertindak di depan server backend untuk routing, SSL offloading, caching, dan load balancing.",
    },
    {
        id: "s042",
        question: "OAuth2 digunakan untuk ...",
        choices: [
            {
                id: "A",
                text: "Delegated authorization (memberi token akses) tanpa berbagi kredensial",
            },
            { id: "B", text: "Menyimpan password dalam plain text" },
            { id: "C", text: "Mengganti HTTPS" },
            { id: "D", text: "Backup data" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "OAuth2 adalah framework untuk delegated authorization, memberikan token akses kepada aplikasi tanpa memaparkan kredensial user.",
    },
    {
        id: "s043",
        question:
            "Manakah pendekatan terbaik untuk migrasi sistem legacy menuju arsitektur berbasis layanan?",
        choices: [
            { id: "A", text: "Big bang migration tanpa testing" },
            {
                id: "B",
                text: "Incremental migration — strangler pattern, migrasi modul per modul",
            },
            { id: "C", text: "Menghentikan sistem lama tanpa cadangan" },
            { id: "D", text: "Menunggu sampai teknologi hilang" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Strangler pattern dan migrasi bertahap mengurangi risiko dengan memigrasikan fungsional satu per satu dan mempertahankan interoperabilitas.",
    },
    {
        id: "s044",
        question: "Apa itu 'idempotency' dan kenapa penting untuk API?",
        choices: [
            {
                id: "A",
                text: "Kemampuan operasi untuk dijalankan berkali-kali tanpa efek samping tambahan; penting untuk keamanan jaringan",
            },
            { id: "B", text: "Fitur UI" },
            { id: "C", text: "Membuat API selalu stateful" },
            { id: "D", text: "Tidak ada kaitan dengan API" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Idempotency memastikan request (mis. retry) tidak menimbulkan efek ganda (mis. dua kali bayar). Biasanya penting pada operasi yang mungkin di-retry.",
    },
    {
        id: "s045",
        question:
            "Dalam perancangan, 'anti-corruption layer' berfungsi untuk ...",
        choices: [
            {
                id: "A",
                text: "Mengisolasi dan menerjemahkan antarmuka sistem eksternal agar tidak 'mengotori' model domain internal",
            },
            { id: "B", text: "Menambal security holes otomatis" },
            { id: "C", text: "Menjadi lapisan UI" },
            { id: "D", text: "Menghapus dependensi" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Anti-corruption layer menerjemahkan dan mengisolasi model eksternal sehingga integrasi tidak merusak konsistensi model domain internal.",
    },
    {
        id: "s046",
        question:
            "Monitoring berbasis tracing (distributed tracing) berguna untuk ...",
        choices: [
            {
                id: "A",
                text: "Melacak perjalanan request antar layanan untuk menemukan bottleneck",
            },
            { id: "B", text: "Menyimpan file besar" },
            { id: "C", text: "Mengganti logs" },
            { id: "D", text: "Mengatur database replication" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Distributed tracing (Jaeger, Zipkin) membantu memetakan alur request di microservices dan mengidentifikasi latensi serta kegagalan.",
    },
    {
        id: "s047",
        question:
            "Bagaimana 'capacity planning' mendukung perancangan sistem enterprise?",
        choices: [
            {
                id: "A",
                text: "Memperkirakan kebutuhan sumber daya (CPU, memory, storage, bandwidth) untuk memenuhi beban saat ini dan masa depan",
            },
            { id: "B", text: "Hanya menambah kapasitas tanpa analisis" },
            { id: "C", text: "Menghapus monitoring" },
            { id: "D", text: "Menjadikan sistem non-scalable" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Capacity planning menganalisis beban dan trend untuk menentukan kebutuhan infrastruktur agar performa dan biaya optimal.",
    },
    {
        id: "s048",
        question: "Dalam integrasi data, ETL biasanya berarti ...",
        choices: [
            {
                id: "A",
                text: "Extract, Transform, Load — mengekstrak data dari sumber, mentransform, lalu memuat ke data target",
            },
            { id: "B", text: "Encrypt, Transfer, Log" },
            { id: "C", text: "Execute, Test, Launch" },
            { id: "D", text: "Tidak relevan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "ETL adalah proses ekstraksi data dari sumber, transformasi (cleansing, mapping), lalu loading ke data warehouse atau target lainnya.",
    },
    {
        id: "s049",
        question:
            "Manakah pernyataan yang benar mengenai 'thin client' vs 'thick client'?",
        choices: [
            {
                id: "A",
                text: "Thin client bergantung pada server untuk logika; thick client punya logika lebih banyak di sisi client",
            },
            { id: "B", text: "Thin client berarti tidak memerlukan server" },
            { id: "C", text: "Thick client selalu lebih ringan" },
            { id: "D", text: "Tidak ada perbedaan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Thin client memindahkan sebagian besar logika ke server; thick client (rich client) menjalankan logika lebih banyak di sisi client.",
    },
    {
        id: "s050",
        question:
            "Apa itu 'observability' dan bagaimana berbeda dari monitoring tradisional?",
        choices: [
            {
                id: "A",
                text: "Observability menyediakan kemampuan memahami sistem dari metrics, logs, dan traces; bersifat proaktif untuk investigasi root cause dibanding hanya alerting",
            },
            { id: "B", text: "Hanya mengganti logging" },
            { id: "C", text: "Hanya berfokus pada UI" },
            { id: "D", text: "Menghilangkan kebutuhan testing" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Observability memungkinkan tim memahami internal system state melalui metrics, logs, dan distributed traces sehingga investigasi masalah lebih efektif dibanding monitoring pasif.",
    },
];

// SIMULATION_BANK: 10 soal sangat mudah (untuk latihan), masing-masing 1 poin
window.SIMULATION_BANK = [
    {
        id: "sim001",
        question: "Apa singkatan dari 'API'?",
        choices: [
            { id: "A", text: "Application Programming Interface" },
            { id: "B", text: "Applied Program Interchange" },
            { id: "C", text: "Automated Process Integration" },
            { id: "D", text: "Application Performance Index" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "API = Application Programming Interface, antarmuka yang memungkinkan aplikasi berkomunikasi.",
    },
    {
        id: "sim002",
        question: "REST biasanya menggunakan format data ...",
        choices: [
            { id: "A", text: "JSON atau XML" },
            { id: "B", text: "Binary eksklusif" },
            { id: "C", text: "Spreadsheet format" },
            { id: "D", text: "PDF" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "REST API sering menggunakan JSON; XML juga dapat dipakai.",
    },
    {
        id: "sim003",
        question: "Manakah contoh database NoSQL?",
        choices: [
            { id: "A", text: "MongoDB" },
            { id: "B", text: "MySQL" },
            { id: "C", text: "PostgreSQL" },
            { id: "D", text: "Oracle DB" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation: "MongoDB adalah contoh database NoSQL (document store).",
    },
    {
        id: "sim004",
        question: "TLS digunakan untuk ...",
        choices: [
            { id: "A", text: "Mengamankan komunikasi jaringan (enkripsi)" },
            { id: "B", text: "Menambah ukuran file" },
            { id: "C", text: "Mengganti DNS" },
            { id: "D", text: "Backup data" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "TLS (Transport Layer Security) menyediakan enkripsi dan integritas untuk komunikasi.",
    },
    {
        id: "sim005",
        question: "Load balancer membantu ...",
        choices: [
            { id: "A", text: "Mendistribusikan trafik ke beberapa server" },
            { id: "B", text: "Meningkatkan biaya hosting" },
            { id: "C", text: "Menghapus API" },
            { id: "D", text: "Menuliskan logs ke file" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Load balancer mendistribusikan trafik untuk meningkatkan ketersediaan dan skalabilitas.",
    },
    {
        id: "sim006",
        question: "Microservices mempromosikan ...",
        choices: [
            {
                id: "A",
                text: "Layanan kecil, otonom, dan dapat di-deploy independen",
            },
            { id: "B", text: "Satu aplikasi monolitik besar" },
            { id: "C", text: "Kode yang tidak dapat diuji" },
            { id: "D", text: "Penghapusan API" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Microservices mendukung layanan kecil dan independen yang dapat dikembangkan dan dideploy terpisah.",
    },
    {
        id: "sim007",
        question: "Apa tujuan utama caching?",
        choices: [
            { id: "A", text: "Mengurangi waktu respon dan beban backend" },
            { id: "B", text: "Menambah latency" },
            { id: "C", text: "Menghapus database" },
            { id: "D", text: "Meningkatkan kompleksitas tanpa benefit" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Caching menyimpan data sementara untuk mengurangi akses ke sumber data utama sehingga mempercepat respons.",
    },
    {
        id: "sim008",
        question: "Apa itu 'orchestration' pada workflow?",
        choices: [
            { id: "A", text: "Kontrol terpusat atas alur proses bisnis" },
            { id: "B", text: "Penghapusan proses" },
            { id: "C", text: "Menyimpan data di cloud" },
            { id: "D", text: "Membuat UI" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "Orchestration mengarahkan dan mengontrol eksekusi langkah proses dari satu titik pusat.",
    },
    {
        id: "sim009",
        question: "Manakah contoh message broker populer?",
        choices: [
            { id: "A", text: "RabbitMQ" },
            { id: "B", text: "Photoshop" },
            { id: "C", text: "Excel" },
            { id: "D", text: "VSCode" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "RabbitMQ adalah contoh message broker untuk komunikasi asynchronous antar layanan.",
    },
    {
        id: "sim010",
        question: "Prinsip 'DRY' (Don't Repeat Yourself) bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Menghindari duplikasi logika sehingga mudah pemeliharaan",
            },
            { id: "B", text: "Menggandakan kode di banyak tempat" },
            { id: "C", text: "Menambah boilerplate" },
            { id: "D", text: "Menghapus dokumentasi" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "DRY mencegah duplikasi sehingga perubahan hanya di satu tempat, mengurangi bug dan beban pemeliharaan.",
    },
];
