/* =========================================================
   BANK SOAL MSIM4401
   Praktikum Aplikasi Terintegrasi (Ionic Vue)
   ========================================================= */

window.QUESTION_BANK = [
    {
        id: "Q1",
        question: "Tujuan utama aplikasi InterPlace adalah …",
        choices: [
            { id: "A", text: "Mengedit foto secara otomatis" },
            {
                id: "B",
                text: "Menyimpan foto beserta waktu dan lokasi pengambilan",
            },
            { id: "C", text: "Membagikan foto ke media sosial" },
            { id: "D", text: "Merekam video perjalanan" },
        ],
        answerId: "B",
        explanation:
            "InterPlace dirancang untuk menyimpan foto disertai waktu dan koordinat lokasi secara otomatis.",
        points: 2,
    },

    {
        id: "Q2",
        question:
            "Plugin Capacitor yang digunakan untuk mengambil foto adalah …",
        choices: [
            { id: "A", text: "MediaPlugin" },
            { id: "B", text: "Camera" },
            { id: "C", text: "FileSystem" },
            { id: "D", text: "Storage" },
        ],
        answerId: "B",
        explanation:
            "Pengambilan foto dilakukan dengan Camera.getPhoto() dari @capacitor/core.",
        points: 2,
    },

    {
        id: "Q3",
        question:
            "Method yang digunakan untuk mendapatkan koordinat lokasi pengguna adalah …",
        choices: [
            { id: "A", text: "getGPS()" },
            { id: "B", text: "getLocation()" },
            { id: "C", text: "getCurrentPosition()" },
            { id: "D", text: "watchLocation()" },
        ],
        answerId: "C",
        explanation:
            "Plugin Geolocation menggunakan method getCurrentPosition() untuk memperoleh latitude dan longitude.",
        points: 2,
    },

    {
        id: "Q4",
        question:
            "Properti yang digunakan untuk menentukan sumber kamera atau galeri adalah …",
        choices: [
            { id: "A", text: "CameraResultType" },
            { id: "B", text: "CameraSource" },
            { id: "C", text: "allowEditing" },
            { id: "D", text: "quality" },
        ],
        answerId: "B",
        explanation:
            "CameraSource menentukan apakah foto diambil dari kamera atau galeri.",
        points: 2,
    },

    {
        id: "Q5",
        question:
            "Tipe hasil foto yang digunakan agar gambar dapat langsung ditampilkan adalah …",
        choices: [
            { id: "A", text: "Base64" },
            { id: "B", text: "Uri" },
            { id: "C", text: "DataUrl" },
            { id: "D", text: "Blob" },
        ],
        answerId: "C",
        explanation:
            "CameraResultType.DataUrl memungkinkan gambar langsung ditampilkan pada elemen img.",
        points: 2,
    },

    {
        id: "Q6",
        question:
            "Mengapa pada InterPlace digunakan $refs untuk menampilkan gambar?",
        choices: [
            { id: "A", text: "Agar gambar bisa dihapus otomatis" },
            { id: "B", text: "Agar semua gambar berubah bersamaan" },
            {
                id: "C",
                text: "Agar gambar sebelumnya tidak ikut berubah saat foto baru diambil",
            },
            { id: "D", text: "Agar performa kamera lebih cepat" },
        ],
        answerId: "C",
        explanation:
            "Penggunaan $refs mencegah gambar lama ikut berubah ketika foto baru diambil.",
        points: 2,
    },

    {
        id: "Q7",
        question:
            "Plugin yang digunakan untuk mengubah koordinat menjadi nama lokasi adalah …",
        choices: [
            { id: "A", text: "Geolocation" },
            { id: "B", text: "Maps" },
            { id: "C", text: "NativeGeocoder" },
            { id: "D", text: "LocationService" },
        ],
        answerId: "C",
        explanation:
            "NativeGeocoder digunakan untuk reverse geocoding (koordinat → alamat).",
        points: 2,
    },

    {
        id: "Q8",
        question:
            "Penyimpanan data user pada aplikasi InterPlace menggunakan …",
        choices: [
            { id: "A", text: "MySQL" },
            { id: "B", text: "Firebase" },
            { id: "C", text: "SQLite" },
            { id: "D", text: "IndexedDB" },
        ],
        answerId: "C",
        explanation: "Aplikasi menggunakan SQLite melalui Ionic Native SQLite.",
        points: 2,
    },

    {
        id: "Q9",
        question: "State login pada aplikasi dikelola menggunakan …",
        choices: [
            { id: "A", text: "Props" },
            { id: "B", text: "LocalStorage" },
            { id: "C", text: "Vuex" },
            { id: "D", text: "SessionStorage" },
        ],
        answerId: "C",
        explanation:
            "Vuex digunakan untuk state management seperti status login pengguna.",
        points: 2,
    },

    {
        id: "Q10",
        question:
            "Perintah untuk menjalankan aplikasi Ionic di browser adalah …",
        choices: [
            { id: "A", text: "ionic build" },
            { id: "B", text: "ionic serve" },
            { id: "C", text: "ionic run" },
            { id: "D", text: "ionic start" },
        ],
        answerId: "B",
        explanation:
            "ionic serve digunakan untuk menjalankan aplikasi di browser.",
        points: 2,
    },

    // ===============================
    // (Soal 11–50 sudah siap aku lanjutkan)
    // ===============================
    {
        id: "Q11",
        question: "Fungsi utama SQLite dalam aplikasi mobile adalah …",
        choices: [
            { id: "A", text: "Menyimpan data sementara di RAM" },
            { id: "B", text: "Menyimpan data secara lokal dan permanen" },
            { id: "C", text: "Mengirim data ke server" },
            { id: "D", text: "Menampilkan data ke UI" },
        ],
        answerId: "B",
        explanation:
            "SQLite digunakan sebagai database lokal untuk penyimpanan data secara permanen.",
        points: 2,
    },

    {
        id: "Q12",
        question: "Perintah SQL untuk membuat tabel adalah …",
        choices: [
            { id: "A", text: "INSERT TABLE" },
            { id: "B", text: "ADD TABLE" },
            { id: "C", text: "CREATE TABLE" },
            { id: "D", text: "MAKE TABLE" },
        ],
        answerId: "C",
        explanation:
            "CREATE TABLE digunakan untuk membuat tabel baru dalam database.",
        points: 2,
    },

    {
        id: "Q13",
        question:
            "Kolom yang tepat untuk menyimpan koordinat latitude adalah …",
        choices: [
            { id: "A", text: "INT" },
            { id: "B", text: "BOOLEAN" },
            { id: "C", text: "TEXT" },
            { id: "D", text: "REAL" },
        ],
        answerId: "D",
        explanation:
            "Latitude dan longitude disimpan dalam tipe REAL (angka desimal).",
        points: 2,
    },

    {
        id: "Q14",
        question:
            "Komponen Ionic yang digunakan sebagai container halaman adalah …",
        choices: [
            { id: "A", text: "ion-div" },
            { id: "B", text: "ion-card" },
            { id: "C", text: "ion-page" },
            { id: "D", text: "ion-header" },
        ],
        answerId: "C",
        explanation:
            "ion-page digunakan sebagai pembungkus utama halaman Ionic.",
        points: 2,
    },

    {
        id: "Q15",
        question: "Fungsi ion-content dalam Ionic adalah …",
        choices: [
            { id: "A", text: "Menampilkan navigasi" },
            { id: "B", text: "Menampilkan konten yang bisa di-scroll" },
            { id: "C", text: "Menampilkan footer" },
            { id: "D", text: "Menampilkan header" },
        ],
        answerId: "B",
        explanation:
            "ion-content menyediakan area konten utama yang mendukung scroll.",
        points: 2,
    },

    {
        id: "Q16",
        question:
            "Mengapa permission perlu ditambahkan untuk kamera dan lokasi?",
        choices: [
            { id: "A", text: "Agar aplikasi lebih cepat" },
            { id: "B", text: "Agar aplikasi bisa di-build" },
            { id: "C", text: "Untuk keamanan dan privasi pengguna" },
            { id: "D", text: "Untuk mempercantik UI" },
        ],
        answerId: "C",
        explanation:
            "Permission diperlukan untuk melindungi privasi dan keamanan pengguna.",
        points: 2,
    },

    {
        id: "Q17",
        question: "File konfigurasi Android permission berada di …",
        choices: [
            { id: "A", text: "package.json" },
            { id: "B", text: "capacitor.config.ts" },
            { id: "C", text: "AndroidManifest.xml" },
            { id: "D", text: "main.ts" },
        ],
        answerId: "C",
        explanation:
            "Permission Android didefinisikan dalam AndroidManifest.xml.",
        points: 2,
    },

    {
        id: "Q18",
        question: "Tujuan penggunaan v-model pada Vue adalah …",
        choices: [
            { id: "A", text: "Mengatur routing" },
            { id: "B", text: "Binding dua arah antara data dan input" },
            { id: "C", text: "Mengatur layout" },
            { id: "D", text: "Menghubungkan database" },
        ],
        answerId: "B",
        explanation:
            "v-model menghubungkan data dan input secara two-way binding.",
        points: 2,
    },

    {
        id: "Q19",
        question: "Event @click pada Vue digunakan untuk …",
        choices: [
            { id: "A", text: "Mengatur styling" },
            { id: "B", text: "Menjalankan fungsi saat diklik" },
            { id: "C", text: "Mengatur state" },
            { id: "D", text: "Mengirim data ke API" },
        ],
        answerId: "B",
        explanation: "@click digunakan untuk menangani event klik pada elemen.",
        points: 2,
    },

    {
        id: "Q20",
        question: "Tujuan utama penggunaan async/await adalah …",
        choices: [
            { id: "A", text: "Mempercepat UI" },
            { id: "B", text: "Menangani proses asynchronous lebih mudah" },
            { id: "C", text: "Mengurangi kode" },
            { id: "D", text: "Menghindari error" },
        ],
        answerId: "B",
        explanation:
            "async/await memudahkan penulisan dan pembacaan kode asynchronous.",
        points: 2,
    },

    {
        id: "Q21",
        question: "Data foto biasanya disimpan dalam database dalam bentuk …",
        choices: [
            { id: "A", text: "Object" },
            { id: "B", text: "Binary atau path file" },
            { id: "C", text: "Boolean" },
            { id: "D", text: "Integer" },
        ],
        answerId: "B",
        explanation:
            "Foto disimpan sebagai path file atau data binary, bukan objek langsung.",
        points: 2,
    },

    {
        id: "Q22",
        question: "Fungsi utama router dalam aplikasi Ionic Vue adalah …",
        choices: [
            { id: "A", text: "Menyimpan data" },
            { id: "B", text: "Mengatur navigasi antar halaman" },
            { id: "C", text: "Mengatur kamera" },
            { id: "D", text: "Mengatur database" },
        ],
        answerId: "B",
        explanation: "Router bertugas mengatur perpindahan antar halaman.",
        points: 2,
    },

    {
        id: "Q23",
        question:
            "Lifecycle hook yang dipanggil saat halaman pertama kali ditampilkan adalah …",
        choices: [
            { id: "A", text: "created()" },
            { id: "B", text: "mounted()" },
            { id: "C", text: "beforeDestroy()" },
            { id: "D", text: "updated()" },
        ],
        answerId: "B",
        explanation:
            "mounted() dipanggil ketika komponen sudah ditampilkan di DOM.",
        points: 2,
    },

    {
        id: "Q24",
        question: "Fungsi console.log() digunakan untuk …",
        choices: [
            { id: "A", text: "Menampilkan UI" },
            { id: "B", text: "Debugging aplikasi" },
            { id: "C", text: "Menyimpan data" },
            { id: "D", text: "Menjalankan query" },
        ],
        answerId: "B",
        explanation:
            "console.log membantu developer melihat nilai variabel saat debugging.",
        points: 2,
    },

    {
        id: "Q25",
        question: "File utama yang menjalankan aplikasi Ionic Vue adalah …",
        choices: [
            { id: "A", text: "index.html" },
            { id: "B", text: "main.ts" },
            { id: "C", text: "app.vue" },
            { id: "D", text: "router.ts" },
        ],
        answerId: "B",
        explanation: "main.ts adalah entry point aplikasi Ionic Vue.",
        points: 2,
    },

    {
        id: "Q26",
        question: "Perintah untuk membangun APK Android adalah …",
        choices: [
            { id: "A", text: "ionic serve" },
            { id: "B", text: "ionic build" },
            { id: "C", text: "ionic capacitor build android" },
            { id: "D", text: "ionic run android" },
        ],
        answerId: "C",
        explanation:
            "ionic capacitor build android digunakan untuk membangun APK.",
        points: 2,
    },

    {
        id: "Q27",
        question: "Tujuan pengujian aplikasi sebelum rilis adalah …",
        choices: [
            { id: "A", text: "Menambah fitur" },
            { id: "B", text: "Mengurangi ukuran APK" },
            { id: "C", text: "Menemukan bug dan kesalahan" },
            { id: "D", text: "Mengubah desain" },
        ],
        answerId: "C",
        explanation: "Testing dilakukan untuk memastikan aplikasi bebas bug.",
        points: 2,
    },

    {
        id: "Q28",
        question: "APK adalah singkatan dari …",
        choices: [
            { id: "A", text: "Android Program Kit" },
            { id: "B", text: "Android Package" },
            { id: "C", text: "Application Package" },
            { id: "D", text: "Android Package Kit" },
        ],
        answerId: "D",
        explanation: "APK adalah Android Package Kit.",
        points: 2,
    },

    {
        id: "Q29",
        question: "Fungsi utama GitHub dalam pengembangan aplikasi adalah …",
        choices: [
            { id: "A", text: "Menyimpan database" },
            { id: "B", text: "Version control dan kolaborasi" },
            { id: "C", text: "Menjalankan aplikasi" },
            { id: "D", text: "Mengedit UI" },
        ],
        answerId: "B",
        explanation:
            "GitHub digunakan untuk version control dan kolaborasi tim.",
        points: 2,
    },

    {
        id: "Q30",
        question: "Kesimpulan utama dari praktikum MSIM4401 adalah …",
        choices: [
            { id: "A", text: "Belajar desain UI saja" },
            { id: "B", text: "Belajar teori mobile" },
            {
                id: "C",
                text: "Membangun aplikasi mobile terintegrasi dari frontend hingga backend lokal",
            },
            { id: "D", text: "Belajar database server" },
        ],
        answerId: "C",
        explanation:
            "MSIM4401 menekankan pembangunan aplikasi mobile terintegrasi.",
        points: 2,
    },
    {
        id: "Q31",
        question: "Fungsi utama REST API dalam aplikasi mobile adalah …",
        choices: [
            { id: "A", text: "Mengatur tampilan UI" },
            { id: "B", text: "Menghubungkan aplikasi dengan database lokal" },
            { id: "C", text: "Pertukaran data antara client dan server" },
            { id: "D", text: "Mengatur permission Android" },
        ],
        answerId: "C",
        explanation:
            "REST API digunakan untuk komunikasi data antara client dan server.",
        points: 2,
    },

    {
        id: "Q32",
        question:
            "Format data yang paling umum digunakan pada REST API adalah …",
        choices: [
            { id: "A", text: "XML" },
            { id: "B", text: "CSV" },
            { id: "C", text: "JSON" },
            { id: "D", text: "TXT" },
        ],
        answerId: "C",
        explanation: "JSON ringan dan mudah diproses oleh aplikasi mobile.",
        points: 2,
    },

    {
        id: "Q33",
        question: "HTTP method yang digunakan untuk mengambil data adalah …",
        choices: [
            { id: "A", text: "POST" },
            { id: "B", text: "PUT" },
            { id: "C", text: "DELETE" },
            { id: "D", text: "GET" },
        ],
        answerId: "D",
        explanation: "GET digunakan untuk mengambil data dari server.",
        points: 2,
    },

    {
        id: "Q34",
        question: "Tujuan penggunaan loading indicator adalah …",
        choices: [
            { id: "A", text: "Memperindah UI" },
            {
                id: "B",
                text: "Memberi tahu pengguna bahwa proses sedang berjalan",
            },
            { id: "C", text: "Mempercepat proses" },
            { id: "D", text: "Mengurangi error" },
        ],
        answerId: "B",
        explanation: "Loading indicator memberi feedback ke pengguna.",
        points: 2,
    },

    {
        id: "Q35",
        question: "Komponen Ionic untuk menampilkan pesan pop-up adalah …",
        choices: [
            { id: "A", text: "ion-card" },
            { id: "B", text: "ion-toast" },
            { id: "C", text: "ion-grid" },
            { id: "D", text: "ion-item" },
        ],
        answerId: "B",
        explanation: "ion-toast digunakan untuk notifikasi singkat.",
        points: 2,
    },

    {
        id: "Q36",
        question: "State dalam aplikasi digunakan untuk …",
        choices: [
            { id: "A", text: "Menyimpan tampilan" },
            { id: "B", text: "Menyimpan data sementara aplikasi" },
            { id: "C", text: "Menyimpan database" },
            { id: "D", text: "Mengatur permission" },
        ],
        answerId: "B",
        explanation:
            "State menyimpan data yang berubah selama aplikasi berjalan.",
        points: 2,
    },

    {
        id: "Q37",
        question: "Keuntungan utama framework hybrid adalah …",
        choices: [
            { id: "A", text: "Lebih cepat dari native" },
            { id: "B", text: "Satu kode untuk banyak platform" },
            { id: "C", text: "Lebih aman" },
            { id: "D", text: "Lebih kecil ukuran aplikasi" },
        ],
        answerId: "B",
        explanation:
            "Hybrid memungkinkan satu basis kode untuk Android dan iOS.",
        points: 2,
    },

    {
        id: "Q38",
        question: "Capacitor berfungsi sebagai …",
        choices: [
            { id: "A", text: "Database manager" },
            { id: "B", text: "Bridge antara web dan native device" },
            { id: "C", text: "UI framework" },
            { id: "D", text: "Build tool" },
        ],
        answerId: "B",
        explanation:
            "Capacitor menjembatani web app dengan fitur native device.",
        points: 2,
    },

    {
        id: "Q39",
        question: "Contoh fitur native pada perangkat mobile adalah …",
        choices: [
            { id: "A", text: "HTML" },
            { id: "B", text: "CSS" },
            { id: "C", text: "Kamera" },
            { id: "D", text: "JavaScript" },
        ],
        answerId: "C",
        explanation: "Kamera adalah fitur native perangkat mobile.",
        points: 2,
    },

    {
        id: "Q40",
        question: "Pengujian aplikasi pada banyak perangkat bertujuan untuk …",
        choices: [
            { id: "A", text: "Menambah fitur" },
            { id: "B", text: "Memastikan kompatibilitas" },
            { id: "C", text: "Mengurangi ukuran file" },
            { id: "D", text: "Mengubah UI" },
        ],
        answerId: "B",
        explanation:
            "Testing multi-device memastikan aplikasi berjalan konsisten.",
        points: 2,
    },

    {
        id: "Q41",
        question: "Debugging adalah proses untuk …",
        choices: [
            { id: "A", text: "Menjalankan aplikasi" },
            { id: "B", text: "Menemukan dan memperbaiki error" },
            { id: "C", text: "Menghapus kode" },
            { id: "D", text: "Menyusun UI" },
        ],
        answerId: "B",
        explanation: "Debugging dilakukan untuk menemukan dan memperbaiki bug.",
        points: 2,
    },

    {
        id: "Q42",
        question: "Tools yang umum digunakan untuk debugging web adalah …",
        choices: [
            { id: "A", text: "Postman" },
            { id: "B", text: "Chrome DevTools" },
            { id: "C", text: "Firebase" },
            { id: "D", text: "GitHub" },
        ],
        answerId: "B",
        explanation: "Chrome DevTools membantu debugging aplikasi web/hybrid.",
        points: 2,
    },

    {
        id: "Q43",
        question: "Tujuan dokumentasi kode adalah …",
        choices: [
            { id: "A", text: "Mempercepat eksekusi" },
            { id: "B", text: "Memudahkan maintenance dan pengembangan" },
            { id: "C", text: "Mengurangi bug" },
            { id: "D", text: "Mengurangi ukuran file" },
        ],
        answerId: "B",
        explanation:
            "Dokumentasi memudahkan pemahaman dan pengembangan lanjutan.",
        points: 2,
    },

    {
        id: "Q44",
        question: "Version control berguna untuk …",
        choices: [
            { id: "A", text: "Menghapus error" },
            { id: "B", text: "Mengatur versi dan histori kode" },
            { id: "C", text: "Menjalankan aplikasi" },
            { id: "D", text: "Menyimpan database" },
        ],
        answerId: "B",
        explanation: "Version control mencatat perubahan kode.",
        points: 2,
    },

    {
        id: "Q45",
        question: "Branch dalam Git digunakan untuk …",
        choices: [
            { id: "A", text: "Menghapus kode lama" },
            {
                id: "B",
                text: "Mengembangkan fitur tanpa mengganggu branch utama",
            },
            { id: "C", text: "Menyimpan database" },
            { id: "D", text: "Mengunci kode" },
        ],
        answerId: "B",
        explanation: "Branch memungkinkan pengembangan fitur secara terpisah.",
        points: 2,
    },

    {
        id: "Q46",
        question: "Testing yang dilakukan oleh pengguna akhir disebut …",
        choices: [
            { id: "A", text: "Unit Testing" },
            { id: "B", text: "Integration Testing" },
            { id: "C", text: "User Acceptance Testing" },
            { id: "D", text: "System Testing" },
        ],
        answerId: "C",
        explanation: "UAT dilakukan oleh pengguna akhir.",
        points: 2,
    },

    {
        id: "Q47",
        question: "Tujuan utama rilis aplikasi adalah …",
        choices: [
            { id: "A", text: "Menghapus bug" },
            { id: "B", text: "Menyediakan aplikasi untuk pengguna" },
            { id: "C", text: "Menguji aplikasi" },
            { id: "D", text: "Mengedit kode" },
        ],
        answerId: "B",
        explanation: "Rilis bertujuan agar aplikasi bisa digunakan pengguna.",
        points: 2,
    },

    {
        id: "Q48",
        question: "Play Store digunakan untuk …",
        choices: [
            { id: "A", text: "Mengedit aplikasi" },
            { id: "B", text: "Mendistribusikan aplikasi Android" },
            { id: "C", text: "Menguji aplikasi" },
            { id: "D", text: "Menyimpan database" },
        ],
        answerId: "B",
        explanation: "Play Store adalah platform distribusi Android.",
        points: 2,
    },

    {
        id: "Q49",
        question: "Evaluasi aplikasi dilakukan untuk …",
        choices: [
            { id: "A", text: "Menambah ukuran aplikasi" },
            { id: "B", text: "Menilai kualitas dan kekurangan aplikasi" },
            { id: "C", text: "Menghapus fitur" },
            { id: "D", text: "Mengganti framework" },
        ],
        answerId: "B",
        explanation:
            "Evaluasi digunakan untuk perbaikan dan peningkatan kualitas.",
        points: 2,
    },

    {
        id: "Q50",
        question: "Capaian akhir mata kuliah MSIM4401 adalah …",
        choices: [
            { id: "A", text: "Mampu membuat desain UI saja" },
            { id: "B", text: "Mampu membangun aplikasi mobile siap pakai" },
            { id: "C", text: "Mampu membuat database server" },
            { id: "D", text: "Mampu membuat website statis" },
        ],
        answerId: "B",
        explanation:
            "Mahasiswa diharapkan mampu membangun aplikasi mobile fungsional.",
        points: 2,
    },
];

/* ---------------------------------------------------------
   BANK SIMULASI (lebih mudah, soal subset)
---------------------------------------------------------- */
window.SIMULATION_BANK = window.QUESTION_BANK.slice(0, 10);
