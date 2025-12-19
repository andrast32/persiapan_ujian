// asset/soal.js
// QUESTION_BANK untuk Kewirausahaan di Era Digital (MKDI4203)
// 50 soal x 2 poin = total 100 poin
window.QUESTION_BANK = [
    {
        id: "k001",
        question: "Apa itu model bisnis 'Business Model Canvas' (BMC)?",
        choices: [
            {
                id: "A",
                text: "Alat visual untuk merancang dan menggambarkan komponen utama bisnis secara ringkas",
            },
            { id: "B", text: "Sebuah platform e-commerce" },
            { id: "C", text: "Software akuntansi untuk startup" },
            { id: "D", text: "Jenis kontrak pemasaran" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "BMC adalah kanvas 9 blok (customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure) untuk merancang model bisnis secara ringkas.",
    },
    {
        id: "k002",
        question: "Istilah MVP (Minimum Viable Product) berarti ...",
        choices: [
            { id: "A", text: "Produk final yang lengkap" },
            {
                id: "B",
                text: "Versi produk paling sederhana yang layak untuk diuji ke pasar",
            },
            { id: "C", text: "Dokumen rencana bisnis" },
            { id: "D", text: "Strategi pricing premium" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "MVP adalah versi produk dengan fitur inti yang cukup untuk menarik early adopters dan menguji asumsi pasar sebelum pengembangan lebih lanjut.",
    },
    {
        id: "k003",
        question:
            "Lean Startup menekankan siklus pembangunan yang sering disebut ...",
        choices: [
            { id: "A", text: "Design → Develop → Deliver" },
            { id: "B", text: "Build → Measure → Learn" },
            { id: "C", text: "Plan → Execute → Ignore" },
            { id: "D", text: "Buy → Market → Sell" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Lean Startup menganjurkan iterasi cepat: bangun produk (Build), ukur hasilnya (Measure), lalu ambil pembelajaran (Learn) untuk mengubah arah bila perlu.",
    },
    {
        id: "k004",
        question:
            "Apa keuntungan utama digital marketing dibanding pemasaran tradisional?",
        choices: [
            { id: "A", text: "Biaya selalu lebih tinggi" },
            {
                id: "B",
                text: "Kemampuan targeting, pengukuran (analytics), dan skala yang lebih baik",
            },
            { id: "C", text: "Tidak dapat diukur efektivitasnya" },
            { id: "D", text: "Hanya untuk perusahaan besar" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Digital marketing memungkinkan targeting audiens spesifik, tracking kampanye (metrics), testing A/B, dan skalabilitas yang lebih fleksibel.",
    },
    {
        id: "k005",
        question: "Search Engine Optimization (SEO) bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Mendapatkan peringkat lebih baik di mesin pencari untuk trafik organik",
            },
            { id: "B", text: "Mempercepat server" },
            { id: "C", text: "Meningkatkan harga produk" },
            { id: "D", text: "Mengganti UI website" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "SEO melibatkan optimasi konten, struktur situs, dan backlink untuk meningkatkan visibilitas organik pada mesin pencari seperti Google.",
    },
    {
        id: "k006",
        question: "Apa itu 'conversion rate' dalam konteks e-commerce?",
        choices: [
            {
                id: "A",
                text: "Persentase pengunjung yang melakukan aksi yang diinginkan (mis. pembelian)",
            },
            { id: "B", text: "Jumlah produk di stok" },
            { id: "C", text: "Kecepatan loading halaman" },
            { id: "D", text: "Biaya iklan per klik" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Conversion rate = conversion / total visitors; metrik penting untuk mengukur efektivitas funnel penjualan.",
    },
    {
        id: "k007",
        question: "Payment gateway berfungsi untuk ...",
        choices: [
            {
                id: "A",
                text: "Memproses pembayaran online antara pelanggan dan merchant",
            },
            { id: "B", text: "Menjalankan kampanye iklan" },
            { id: "C", text: "Mengelola inventori fisik" },
            { id: "D", text: "Memvalidasi email pengguna" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Payment gateway memfasilitasi otorisasi dan transfer dana secara aman, menghubungkan merchant, bank, dan penyedia kartu.",
    },
    {
        id: "k008",
        question:
            "Manakah metrik yang biasa dipakai untuk mengukur retention pengguna?",
        choices: [
            {
                id: "A",
                text: "DAU/WAU/MAU (Daily/Weekly/Monthly Active Users) dan cohort retention",
            },
            { id: "B", text: "Jumlah hosting" },
            { id: "C", text: "Resolusi gambar" },
            { id: "D", text: "Waktu build aplikasi" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Retention dilihat melalui metrik aktivitas pengguna (DAU/MAU) dan analisis cohort untuk melihat berapa banyak pengguna yang kembali setelah periode tertentu.",
    },
    {
        id: "k009",
        question: "Model revenue 'freemium' umumnya berarti ...",
        choices: [
            { id: "A", text: "Semua fitur berbayar tanpa versi gratis" },
            { id: "B", text: "Dasar gratis; fitur premium berbayar" },
            { id: "C", text: "Gratis selama 1 tahun lalu diblokir" },
            { id: "D", text: "Hanya versi mobile" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Freemium menawarkan core features gratis untuk menarik pengguna, lalu monetisasi lewat fitur atau layanan premium.",
    },
    {
        id: "k010",
        question:
            "Apa itu 'unit economics' dan mengapa penting untuk startup digital?",
        choices: [
            {
                id: "A",
                text: "Analisis biaya dan keuntungan per unit pelanggan untuk menentukan profitabilitas",
            },
            { id: "B", text: "Jumlah unit produk di gudang" },
            { id: "C", text: "Skema inventori" },
            { id: "D", text: "Model UI" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Unit economics menghitung LTV (lifetime value) vs CAC (customer acquisition cost) per pelanggan untuk menilai apakah bisnis dapat menguntungkan saat skala.",
    },
    {
        id: "k011",
        question: "Apa arti LTV (Lifetime Value) dalam bisnis digital?",
        choices: [
            {
                id: "A",
                text: "Total nilai yang diperkirakan diperoleh dari seorang pelanggan selama masa hubungan",
            },
            { id: "B", text: "Jumlah klik pada iklan" },
            { id: "C", text: "Jumlah server yang dibutuhkan" },
            { id: "D", text: "Rasio bounce rate" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "LTV menghitung pendapatan bersih yang dapat diharapkan dari satu pelanggan selama masa hubungan; penting untuk strategi pemasaran dan pricing.",
    },
    {
        id: "k012",
        question:
            "Customer discovery pada fase awal startup bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Memvalidasi masalah, kebutuhan dan segmen pelanggan melalui wawancara dan eksperimen",
            },
            { id: "B", text: "Mengumpulkan investor" },
            { id: "C", text: "Membangun infrastruktur IT saja" },
            { id: "D", text: "Membuat kanvas investor" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Customer discovery membantu memahami apakah ada masalah nyata yang layak diselesaikan dan siapa target pelanggan sebelum membangun produk.",
    },
    {
        id: "k013",
        question: "Growth hacking biasanya fokus pada ...",
        choices: [
            {
                id: "A",
                text: "Taktik kreatif dan terukur untuk pertumbuhan pengguna cepat dengan biaya rendah",
            },
            { id: "B", text: "Menambah jumlah pegawai" },
            { id: "C", text: "Meningkatkan biaya produksi" },
            { id: "D", text: "Hanya SEO" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Growth hacking memanfaatkan eksperimen marketing, produk, dan teknik viral untuk mencapai pertumbuhan pengguna yang cepat dan efisien.",
    },
    {
        id: "k014",
        question: "Marketplaces digital umumnya menghasilkan revenue dari ...",
        choices: [
            {
                id: "A",
                text: "Komisi transaksi, biaya listing, dan layanan premium",
            },
            { id: "B", text: "Hanya donasi" },
            { id: "C", text: "Menjual hardware" },
            { id: "D", text: "Menjual lisensi OS" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Marketplace biasanya mengambil komisi per transaksi, menawarkan fitur listing berbayar, dan layanan tambahan (promosi, fulfillment).",
    },
    {
        id: "k015",
        question: "Prinsip desain 'user-centered design' (UCD) menekankan ...",
        choices: [
            {
                id: "A",
                text: "Memprioritaskan kebutuhan dan pengalaman pengguna dalam proses desain",
            },
            { id: "B", text: "Menempatkan developer sebagai pusat" },
            { id: "C", text: "Memaksakan fitur tanpa penelitian" },
            { id: "D", text: "Hanya fokus pada visual" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "UCD melibatkan penelitian pengguna, prototyping, dan pengujian untuk memastikan solusi cocok dengan kebutuhan nyata pengguna.",
    },
    {
        id: "k016",
        question: "A/B testing digunakan untuk ...",
        choices: [
            {
                id: "A",
                text: "Menguji dua varian (A dan B) dari elemen produk/iklan untuk menentukan mana yang lebih efektif",
            },
            { id: "B", text: "Membagi biaya iklan dua kali lipat" },
            { id: "C", text: "Memperlambat rilis" },
            { id: "D", text: "Menghapus fitur" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "A/B testing mengukur perbedaan performa antara dua versi (mis. CTA, judul) secara statistik untuk mengambil keputusan berbasis data.",
    },
    {
        id: "k017",
        question: "Apa itu 'pivot' dalam konteks startup?",
        choices: [
            {
                id: "A",
                text: "Perubahan strategis pada model bisnis atau produk berdasarkan pembelajaran pasar",
            },
            { id: "B", text: "Penggabungan dengan perusahaan lain" },
            { id: "C", text: "Penambahan karyawan produk" },
            { id: "D", text: "Menutup perusahaan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Pivot adalah perubahan signifikan (mis. target pasar, fitur inti) yang dilakukan ketika asumsi awal terbukti tidak valid.",
    },
    {
        id: "k018",
        question:
            "Platform 'SaaS' (Software as a Service) biasanya menawarkan ...",
        choices: [
            {
                id: "A",
                text: "Aplikasi berbasis cloud diakses via subscription tanpa instalasi lokal",
            },
            { id: "B", text: "Perangkat keras saja" },
            { id: "C", text: "Sistem operasi open source" },
            { id: "D", text: "Hanya layanan hosting" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "SaaS menyediakan aplikasi melalui cloud, model berlangganan, maintenance oleh provider, dan akses via web.",
    },
    {
        id: "k019",
        question: "Influencer marketing efektif karena ...",
        choices: [
            {
                id: "A",
                text: "Memanfaatkan trust dan reach pengaruh individu terhadap audiens spesifik",
            },
            { id: "B", text: "Selalu mahal tanpa ROI" },
            { id: "C", text: "Hanya untuk produk fisik" },
            { id: "D", text: "Tidak membutuhkan strategi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Influencer dapat mendorong awareness dan konversi karena audiens mempercayai rekomendasi mereka; efektivitas tergantung kecocokan influencer dan brand.",
    },
    {
        id: "k020",
        question:
            "Apa fungsi analytics (mis. Google Analytics) untuk bisnis digital?",
        choices: [
            {
                id: "A",
                text: "Melacak perilaku pengguna, sumber trafik, dan performa kampanye untuk pengambilan keputusan",
            },
            { id: "B", text: "Mengganti desain web" },
            { id: "C", text: "Meningkatkan cache" },
            { id: "D", text: "Menghapus user data" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Analytics memberikan insight tentang pengguna dan performa sehingga bisnis dapat mengoptimalkan produk dan pemasaran.",
    },
    {
        id: "k021",
        question:
            "Strategi pricing 'penetration pricing' biasanya bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Masuk pasar dengan harga rendah untuk cepat mendapatkan pangsa pasar",
            },
            { id: "B", text: "Menetapkan harga sangat tinggi sejak awal" },
            { id: "C", text: "Menghindari kompetitor" },
            { id: "D", text: "Hanya untuk barang mewah" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Penetration pricing menggunakan harga rendah awal untuk menarik pelanggan dan meraih pangsa pasar sebelum menaikkan harga.",
    },
    {
        id: "k022",
        question: "Customer lifecycle meliputi fase berikut, kecuali ...",
        choices: [
            {
                id: "A",
                text: "Awareness, Acquisition, Activation, Retention, Revenue, Referral",
            },
            { id: "B", text: "Ideation tanpa interaksi pelanggan" },
            { id: "C", text: "Fokus pada long-term value pelanggan" },
            { id: "D", text: "Pengukuran metrik di tiap fase" },
        ],
        answerId: "B",
        points: 2,
        time: 120,
        explanation:
            "Customer lifecycle umum terdiri dari tahapan mulai dari awareness hingga referral; 'ideation tanpa interaksi' bukan bagian lifecycle pelanggan.",
    },
    {
        id: "k023",
        question: "Apa itu 'churn rate' dan mengapa penting?",
        choices: [
            {
                id: "A",
                text: "Persentase pelanggan yang berhenti berlangganan dalam periode tertentu; penting untuk mengukur retention",
            },
            { id: "B", text: "Jumlah kualitas produk" },
            { id: "C", text: "Kecepatan loading" },
            { id: "D", text: "Jumlah klik iklan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Churn rate mengindikasikan tingkat kehilangan pelanggan; menurunkannya biasanya lebih murah daripada mendapatkan pelanggan baru.",
    },
    {
        id: "k024",
        question:
            "Marketplace 'peer-to-peer' (P2P) berbeda dari 'retail' karena ...",
        choices: [
            {
                id: "A",
                text: "Menjadi perantara yang menghubungkan penjual individu dengan pembeli, bukan menjual inventori sendiri",
            },
            { id: "B", text: "Selalu menjual barang baru" },
            { id: "C", text: "Hanya bisnis B2B" },
            { id: "D", text: "Tidak butuh pembayaran" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "P2P marketplace menyediakan platform bagi individu atau pelaku usaha kecil untuk bertransaksi langsung sementara perusahaan tidak menahan inventori.",
    },
    {
        id: "k025",
        question: "Istilah 'virality coefficient' menggambarkan ...",
        choices: [
            {
                id: "A",
                text: "Seberapa banyak user baru yang dihasilkan per user yang ada via sharing/referensi",
            },
            { id: "B", text: "Ukuran server" },
            { id: "C", text: "Jumlah fitur dalam aplikasi" },
            { id: "D", text: "Tingkat bounce halaman" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Virality coefficient >1 berarti pertumbuhan organik; metrik ini menunjukkan kekuatan word-of-mouth dan push referral.",
    },
    {
        id: "k026",
        question: "Dalam e-commerce, 'fulfillment' merujuk pada ...",
        choices: [
            {
                id: "A",
                text: "Proses pemrosesan order: picking, packing, shipping, dan delivery",
            },
            { id: "B", text: "Desain UI" },
            { id: "C", text: "Pembayaran iklan" },
            { id: "D", text: "Penghapusan data" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Fulfillment mencakup keseluruhan proses sampai produk sampai ke pelanggan, dan berpengaruh besar pada customer satisfaction.",
    },
    {
        id: "k027",
        question: "Apa itu 'omnichannel' strategy dalam ritel digital?",
        choices: [
            {
                id: "A",
                text: "Pendekatan yang mengintegrasikan pengalaman pelanggan di berbagai channel (online & offline) secara mulus",
            },
            { id: "B", text: "Hanya menjual di satu platform" },
            { id: "C", text: "Menghapus toko fisik saja" },
            { id: "D", text: "Menggunakan satu metode pembayaran" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Omnichannel menyediakan pengalaman konsisten di website, mobile app, marketplace, dan toko fisik sehingga pelanggan dapat pindah-pindah channel tanpa kehilangan konteks.",
    },
    {
        id: "k028",
        question:
            "Hukum perlindungan data pribadi (mis. GDPR) memengaruhi bisnis digital karena ...",
        choices: [
            {
                id: "A",
                text: "Menetapkan aturan pengolahan data pribadi, persetujuan, hak subjek data, dan denda jika melanggar",
            },
            { id: "B", text: "Tidak berpengaruh pada bisnis online" },
            { id: "C", text: "Hanya untuk perusahaan besar" },
            { id: "D", text: "Menghapus kebutuhan keamanan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Regulasi seperti GDPR menetapkan kewajiban transparansi, izin, akses data, dan menyatakan konsekuensi hukum bagi pelanggaran privasi.",
    },
    {
        id: "k029",
        question: "'Bootstrapping' pada startup berarti ...",
        choices: [
            {
                id: "A",
                text: "Membiayai startup dengan sumber daya internal tanpa modal eksternal",
            },
            { id: "B", text: "Mengumpulkan uang dari VC saja" },
            { id: "C", text: "Melakukan IPO awal" },
            { id: "D", text: "Menjual perusahaan secepatnya" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Bootstrapping memprioritaskan penggunaan revenue, tabungan pendiri, dan efisiensi biaya untuk memulai dan mengembangkan bisnis.",
    },
    {
        id: "k030",
        question:
            "Manakah yg merupakan praktik baik untuk onboarding pengguna baru di produk digital?",
        choices: [
            {
                id: "A",
                text: "Tutorial singkat, progressive disclosure fitur, dan value-first experience",
            },
            { id: "B", text: "Menampilkan seluruh fitur sekaligus" },
            { id: "C", text: "Meminta pembayaran sebelum mencoba" },
            { id: "D", text: "Tidak memberikan panduan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Onboarding efektif membantu pengguna memahami nilai produk dengan cepat menggunakan tutorial, tips, dan pengalaman yang langsung memberikan manfaat.",
    },
    {
        id: "k031",
        question:
            "Affiliate marketing menghasilkan revenue bagi merchant melalui ...",
        choices: [
            {
                id: "A",
                text: "Komisi untuk affiliate ketika mereka menghasilkan penjualan atau lead",
            },
            { id: "B", text: "Menjual data customer ke affiliate" },
            { id: "C", text: "Memberi akses penuh ke dashboard" },
            { id: "D", text: "Menghapus sistem pembayaran" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Affiliate diberi link/kupon; ketika menghasilkan transaksi, affiliate menerima komisi sesuai perjanjian.",
    },
    {
        id: "k032",
        question:
            "Manakah faktor penting ketika memilih platform e-commerce untuk bisnis baru?",
        choices: [
            {
                id: "A",
                text: "Scalability, biaya, integrasi payment/shipping, SEO-friendliness, dan dukungan",
            },
            { id: "B", text: "Hanya warna tema" },
            { id: "C", text: "Jumlah logo yang disertakan" },
            { id: "D", text: "Hanya ukuran font" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Pertimbangan teknis dan bisnis seperti skalabilitas, biaya, kemudahan integrasi, optimasi SEO, dan dukungan developer sangat penting.",
    },
    {
        id: "k033",
        question: "Apa itu 'crowdfunding' dan salah satu manfaatnya?",
        choices: [
            {
                id: "A",
                text: "Pendanaan dari banyak individu; manfaat: validasi pasar dan permodalan tanpa VC",
            },
            { id: "B", text: "Pinjaman bank jangka panjang" },
            { id: "C", text: "Hanya untuk amal" },
            { id: "D", text: "Sistem barter" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Crowdfunding mengumpulkan dana dari publik sekaligus menguji minat pasar dan mempromosikan produk awal.",
    },
    {
        id: "k034",
        question: "Teknik 'content marketing' meliputi ...",
        choices: [
            {
                id: "A",
                text: "Membuat konten berkualitas (artikel, video, infografis) untuk menarik dan mempertahankan audiens",
            },
            { id: "B", text: "Hanya membeli iklan" },
            { id: "C", text: "Menghapus blog" },
            { id: "D", text: "Hanya memposting gambar tanpa strategi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Content marketing fokus menyediakan konten bernilai yang membangun trust dan SEO, bukan sekadar promosi langsung.",
    },
    {
        id: "k035",
        question: "Jenis model bisnis 'subscription' cocok ketika ...",
        choices: [
            {
                id: "A",
                text: "Produk/layanan memiliki nilai berulang sehingga pelanggan mau bayar berkala",
            },
            { id: "B", text: "Produk sekali pakai untuk event" },
            { id: "C", text: "Hanya layanan gratis" },
            { id: "D", text: "Hanya barang antik" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Subscription cocok untuk layanan kontinyu (SaaS, konten berlangganan) yang memberikan nilai berkelanjutan bagi pelanggan.",
    },
    {
        id: "k036",
        question: "Apa peran 'community building' bagi startup digital?",
        choices: [
            {
                id: "A",
                text: "Membangun hubungan dengan pengguna, meningkatkan retention, dan mendorong word-of-mouth",
            },
            { id: "B", text: "Mengeliminasi dukungan pelanggan" },
            { id: "C", text: "Mengganti pemasaran" },
            { id: "D", text: "Mengurangi kualitas produk" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Komunitas membantu produk berkembang melalui feedback, advocacy, dan loyalitas pengguna.",
    },
    {
        id: "k037",
        question: "Dalam konteks digital, 'network effects' terjadi ketika ...",
        choices: [
            {
                id: "A",
                text: "Nilai produk meningkat seiring bertambahnya pengguna",
            },
            { id: "B", text: "Produk jadi lebih mahal" },
            { id: "C", text: "Pengguna menurun" },
            { id: "D", text: "Hanya server bertambah" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Network effects penting untuk platform: semakin banyak pengguna, semakin berguna platform (contoh: marketplace, social network).",
    },
    {
        id: "k038",
        question:
            "Apa risiko utama ketika mengumpulkan data pengguna tanpa kontrol yang tepat?",
        choices: [
            {
                id: "A",
                text: "Pelanggaran privasi, kehilangan kepercayaan, dan sanksi regulasi",
            },
            { id: "B", text: "Meningkatkan konversi otomatis" },
            { id: "C", text: "Menurunkan biaya operasional tanpa konsekuensi" },
            { id: "D", text: "Selalu menguntungkan" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Pengumpulan data tanpa perlindungan dapat menimbulkan kebocoran, denda hukum, dan reputasi rusak yang sulit dipulihkan.",
    },
    {
        id: "k039",
        question: "Pentingnya 'storytelling' dalam brand marketing adalah ...",
        choices: [
            {
                id: "A",
                text: "Membantu membangun emosi, diferensiasi, dan koneksi dengan audiens",
            },
            { id: "B", text: "Hanya membuat teks panjang di halaman produk" },
            { id: "C", text: "Tidak relevan untuk bisnis digital" },
            { id: "D", text: "Mengganti keunikan produk" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Storytelling memudahkan audiens memahami nilai dan misi brand sehingga mendorong loyalitas.",
    },
    {
        id: "k040",
        question: "Apa itu 'unit economics negative' dan apa implikasinya?",
        choices: [
            {
                id: "A",
                text: "Biaya akuisisi lebih besar dari nilai yang dihasilkan per pelanggan; tidak berkelanjutan tanpa perubahan",
            },
            { id: "B", text: "Profit tinggi per unit" },
            { id: "C", text: "Tidak ada pelanggan" },
            { id: "D", text: "Revenue saham" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Jika CAC > LTV, bisnis kehilangan uang tiap pelanggan; perlu optimasi biaya atau peningkatan monetisasi untuk berkelanjutan.",
    },
    {
        id: "k041",
        question: "Strategi 'retargeting' berguna untuk ...",
        choices: [
            {
                id: "A",
                text: "Menarget pengguna yang sebelumnya mengunjungi situs namun belum konversi",
            },
            { id: "B", text: "Menarget pengguna baru acak" },
            { id: "C", text: "Meningkatkan bounce rate" },
            { id: "D", text: "Mengganti payment gateway" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Retargeting menunjukkan iklan kepada pengunjung sebelumnya untuk mendorong mereka kembali dan menyelesaikan konversi.",
    },
    {
        id: "k042",
        question: "Prinsip 'design for scalability' meliputi ...",
        choices: [
            {
                id: "A",
                text: "Menggunakan arsitektur terdistribusi, caching, decoupling, dan stateless services",
            },
            { id: "B", text: "Menulis kode spesifik untuk satu server" },
            { id: "C", text: "Menumpuk data dalam satu file" },
            { id: "D", text: "Mengurangi modularitas" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Scalability membutuhkan desain yang memungkinkan pertumbuhan (scale out), termasuk pemisahan komponen, caching, message queues, dan stateless services.",
    },
    {
        id: "k043",
        question: "Apa itu 'unit testing' dan perannya dalam produk digital?",
        choices: [
            {
                id: "A",
                text: "Pengujian bagian terkecil kode untuk memastikan fungsi bekerja; membantu kualitas dan kecepatan rilis",
            },
            { id: "B", text: "Mengganti QA manual sepenuhnya" },
            { id: "C", text: "Hanya untuk dokumentasi" },
            { id: "D", text: "Menunda rilis" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Unit testing memverifikasi logika komponen individual sehingga bug dapat ditemukan lebih awal dan mempermudah refactor.",
    },
    {
        id: "k044",
        question: "Manakah praktik etis terkait pemasaran digital?",
        choices: [
            {
                id: "A",
                text: "Transparansi data, tidak melakukan klaim menyesatkan, dan menghormati privacy/preferences pengguna",
            },
            {
                id: "B",
                text: "Menggunakan clickbait berlebihan tanpa klarifikasi",
            },
            { id: "C", text: "Menyembunyikan biaya tersembunyi" },
            { id: "D", text: "Menarget pengguna rentan tanpa batasan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Pemasaran etis melindungi konsumen dari klaim menyesatkan, memberikan informasi yang jelas, dan menghormati privasi.",
    },
    {
        id: "k045",
        question:
            "Apa keuntungan menggunakan API untuk integrasi layanan bisnis?",
        choices: [
            {
                id: "A",
                text: "Modularitas, interoperability, dan kemampuan integrasi antar sistem secara terstandarisasi",
            },
            { id: "B", text: "Membuat sistem menjadi monolitik" },
            { id: "C", text: "Menghilangkan dokumentasi" },
            { id: "D", text: "Menambah duplikasi data tanpa kontrol" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "API memungkinkan layanan berbeda berkomunikasi dengan kontrak terdefinisi sehingga mempermudah integrasi dan evolusi sistem.",
    },
    {
        id: "k046",
        question: "Strategi 'pricing anchoring' bertujuan untuk ...",
        choices: [
            {
                id: "A",
                text: "Menetapkan titik perbandingan harga agar pelanggan melihat nilai relatif",
            },
            { id: "B", text: "Mengacak harga" },
            { id: "C", text: "Menurunkan kualitas produk" },
            { id: "D", text: "Menghindari diskon" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Anchoring menampilkan harga acuan (mis. versi premium) sehingga opsi lain terlihat lebih menarik secara relatif.",
    },
    {
        id: "k047",
        question: "Manakah alasan startup butuh 'key partnerships' dalam BMC?",
        choices: [
            {
                id: "A",
                text: "Untuk mendapatkan sumber daya, akses pasar, teknologi, dan efisiensi operasional",
            },
            { id: "B", text: "Untuk mengganti tim inti" },
            { id: "C", text: "Untuk menghindari pelanggan" },
            { id: "D", text: "Hanya untuk menambah biaya" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Partnerships membantu mengisi gap kompetensi, mempercepat go-to-market, dan mengurangi biaya melalui kolaborasi.",
    },
    {
        id: "k048",
        question:
            "Apa peran 'customer feedback loop' dalam pengembangan produk digital?",
        choices: [
            {
                id: "A",
                text: "Mengumpulkan insight pengguna untuk iterasi produk dan peningkatan fitur",
            },
            { id: "B", text: "Mengabaikan saran pengguna" },
            { id: "C", text: "Mengganti testing teknis" },
            { id: "D", text: "Hanya untuk pemasaran" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Feedback loop memungkinkan tim memvalidasi asumsi, memperbaiki pain points, dan mengarahkan prioritas roadmap produk.",
    },
    {
        id: "k049",
        question:
            "Metode valuasi startup yang sering dipakai early-stage adalah ...",
        choices: [
            {
                id: "A",
                text: "Berbasis traction, revenue multiples, atau metode risiko/hipotesis; bukan hanya profit saat itu",
            },
            { id: "B", text: "Nilai selalu nol" },
            { id: "C", text: "Hanya menghitung aset fisik" },
            { id: "D", text: "Menggunakan harga jual toko" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Valuasi early-stage mempertimbangkan traction, potensi pasar, tim, dan risiko; model tradisional profit multiples sering kurang relevan.",
    },
    {
        id: "k050",
        question:
            "Mengapa 'ethical monetization' penting untuk bisnis digital jangka panjang?",
        choices: [
            {
                id: "A",
                text: "Membangun kepercayaan pelanggan, mengurangi reputational risk, dan memastikan keberlanjutan",
            },
            { id: "B", text: "Selalu meningkatkan revenue tanpa batas" },
            { id: "C", text: "Mengabaikan pengguna" },
            { id: "D", text: "Mengandalkan praktik manipulatif" },
        ],
        answerId: "A",
        points: 2,
        time: 120,
        explanation:
            "Monetisasi yang etis menjaga reputasi dan loyalitas, serta memenuhi regulasi dan nilai sosial sehingga bisnis lebih berkelanjutan.",
    },
];

// SIMULATION_BANK: 10 soal mudah (1 poin tiap soal) — latihan singkat
window.SIMULATION_BANK = [
    {
        id: "sim_k01",
        question: "Apa kepanjangan dari 'SEO'?",
        choices: [
            { id: "A", text: "Search Engine Optimization" },
            { id: "B", text: "Social Engagement Operation" },
            { id: "C", text: "Secure E-commerce Order" },
            { id: "D", text: "Simple Email Outreach" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "SEO = Search Engine Optimization, teknik untuk meningkatkan peringkat di mesin pencari.",
    },
    {
        id: "sim_k02",
        question: "Apa itu MVP?",
        choices: [
            { id: "A", text: "Minimum Viable Product" },
            { id: "B", text: "Most Valuable Partner" },
            { id: "C", text: "Marketing Value Plan" },
            { id: "D", text: "Monthly Variable Price" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "MVP adalah versi produk minimal yang dapat digunakan untuk mengumpulkan feedback pasar.",
    },
    {
        id: "sim_k03",
        question: "Contoh channel pemasaran digital adalah ...",
        choices: [
            { id: "A", text: "Email, social media, search ads" },
            { id: "B", text: "Only offline flyers" },
            { id: "C", text: "Fax machines" },
            { id: "D", text: "Telegraph" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Email, social media, dan search ads adalah channel efektif untuk menjangkau audiens digital.",
    },
    {
        id: "sim_k04",
        question:
            "Manakah metrik yang mengukur berapa lama pelanggan bertahan?",
        choices: [
            { id: "A", text: "Churn rate" },
            { id: "B", text: "Pageviews" },
            { id: "C", text: "Image size" },
            { id: "D", text: "Bandwidth usage" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Churn rate menunjukkan persentase pelanggan yang berhenti berlangganan dalam periode tertentu.",
    },
    {
        id: "sim_k05",
        question: "Apa tujuan A/B testing?",
        choices: [
            {
                id: "A",
                text: "Menguji dua varian untuk melihat mana yang lebih efektif",
            },
            { id: "B", text: "Menggandakan halaman" },
            { id: "C", text: "Menonaktifkan fitur" },
            { id: "D", text: "Meningkatkan biaya iklan" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "A/B test memberikan bukti data untuk memilih elemen yang menghasilkan konversi lebih baik.",
    },
    {
        id: "sim_k06",
        question: "Contoh platform crowdfunding populer adalah ...",
        choices: [
            { id: "A", text: "Kickstarter" },
            { id: "B", text: "Microsoft Word" },
            { id: "C", text: "Linux Kernel" },
            { id: "D", text: "Apache" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Kickstarter adalah platform crowdfunding untuk mengumpulkan dukungan publik terhadap proyek.",
    },
    {
        id: "sim_k07",
        question: "Apa itu CAC (Customer Acquisition Cost)?",
        choices: [
            {
                id: "A",
                text: "Biaya rata-rata untuk memperoleh satu pelanggan baru",
            },
            { id: "B", text: "Jumlah klik iklan" },
            { id: "C", text: "Biaya produksi per unit" },
            { id: "D", text: "Jumlah server" },
        ],
        answerId: "A",
        points: 1,
        time: 60,
        explanation:
            "CAC menghitung total biaya pemasaran dan sales dibagi jumlah pelanggan baru yang diperoleh.",
    },
    {
        id: "sim_k08",
        question: "Platform e-commerce yang berbasis marketplace contohnya ...",
        choices: [
            { id: "A", text: "Tokopedia, Bukalapak, Shopee" },
            { id: "B", text: "Notepad" },
            { id: "C", text: "MS Paint" },
            { id: "D", text: "Windows Calculator" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Tokopedia, Shopee, dan Bukalapak adalah contoh marketplace yang menghubungkan penjual dan pembeli.",
    },
    {
        id: "sim_k09",
        question: "Prinsip 'value proposition' adalah ...",
        choices: [
            {
                id: "A",
                text: "Alasan mengapa pelanggan memilih produk/layanan Anda (manfaat unik)",
            },
            { id: "B", text: "Harga tertinggi yang mungkin" },
            { id: "C", text: "Jumlah iklan" },
            { id: "D", text: "Ukuran tim" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Value proposition menjelaskan manfaat unik yang diberikan produk sehingga pelanggan memilihnya.",
    },
    {
        id: "sim_k10",
        question:
            "Apa keuntungan menggunakan analytics untuk kampanye digital?",
        choices: [
            {
                id: "A",
                text: "Mengetahui performa kampanye, optimasi, dan pengambilan keputusan berbasis data",
            },
            { id: "B", text: "Membuat kampanye otomatis gagal" },
            { id: "C", text: "Menghapus semua opini" },
            { id: "D", text: "Menambah biaya tanpa manfaat" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "Analytics membantu memantau metrik untuk mengoptimalkan kampanye dan mengalokasikan anggaran secara efektif.",
    },
];
