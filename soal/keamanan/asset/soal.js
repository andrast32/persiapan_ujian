// soal.js
// Tempatkan di: soal/keamanan/asset/soal.js
// window.QUESTION_BANK -> 50 soal (2 poin tiap soal -> total 100)
// window.SIMULATION_BANK -> 10 soal latihan mudah & relevan (dengan pembahasan)

window.QUESTION_BANK = [
    {
        id: "q001",
        question:
            "Apa kepanjangan dari CIA triad yang menjadi dasar keamanan informasi?",
        choices: [
            { id: "A", text: "Confidentiality, Integrity, Availability" },
            { id: "B", text: "Confidentiality, Integrity, Authentication" },
            { id: "C", text: "Control, Integrity, Availability" },
            { id: "D", text: "Confidentiality, Identification, Availability" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "CIA triad adalah prinsip dasar keamanan informasi: Confidentiality (kerahasiaan), Integrity (keterpastian data tetap benar), dan Availability (ketersediaan layanan/data ketika diperlukan).",
    },
    {
        id: "q002",
        question:
            "Algoritma kriptografi simetris menggunakan kunci yang sama untuk enkripsi dan dekripsi. Contoh algoritma simetris yang umum adalah …",
        choices: [
            { id: "A", text: "RSA" },
            { id: "B", text: "AES" },
            { id: "C", text: "Diffie-Hellman" },
            { id: "D", text: "DSA" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "AES (Advanced Encryption Standard) adalah algoritma kriptografi simetris yang umum digunakan. RSA dan DSA bersifat asimetris; Diffie-Hellman adalah protokol pertukaran kunci.",
    },
    {
        id: "q003",
        question:
            "Manakah yang bukan termasuk tujuan utama penggunaan Public Key Infrastructure (PKI)?",
        choices: [
            { id: "A", text: "Autentikasi identitas" },
            { id: "B", text: "Distribusi kunci simetris secara aman" },
            {
                id: "C",
                text: "Menyediakan confidentiality melalui enkripsi public-key",
            },
            { id: "D", text: "Menghapus kebutuhan otorisasi dalam sistem" },
        ],
        answerId: "D",
        points: 2,
        time: 90,
        explanation:
            "PKI menyediakan autentikasi, penandatanganan digital, dan pertukaran kunci, tapi tidak menghapus kebutuhan otorisasi — otorisasi tetap diperlukan terpisah.",
    },
    {
        id: "q004",
        question:
            "Serangan 'Man-in-the-Middle' (MitM) pada jaringan biasanya memungkinkan penyerang melakukan …",
        choices: [
            { id: "A", text: "Pemutusan fisik kabel" },
            { id: "B", text: "Menyisipkan dan/atau mengubah pesan yang lewat" },
            { id: "C", text: "Mempercepat transmisi paket" },
            { id: "D", text: "Mengurangi latensi jaringan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "MitM melibatkan intersepsi komunikasi antara dua pihak sehingga penyerang dapat membaca, memasukkan, atau memodifikasi pesan.",
    },
    {
        id: "q005",
        question:
            "Perbedaan utama antara IDS (Intrusion Detection System) dan IPS (Intrusion Prevention System) adalah …",
        choices: [
            {
                id: "A",
                text: "IDS dapat memblokkir lalu lintas, IPS hanya mendeteksi",
            },
            {
                id: "B",
                text: "IDS hanya mendeteksi intrusi, IPS dapat mencegah/men-block",
            },
            { id: "C", text: "Keduanya sama fungsi dan implementasinya" },
            { id: "D", text: "IPS hanya mencatat log, IDS merespon aktif" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "IDS bersifat passif—mendeteksi dan memberi peringatan; IPS berada 'inline' dan mampu memblokir atau memutus lalu lintas berbahaya.",
    },
    {
        id: "q006",
        question:
            "Protokol transport yang lebih aman untuk remote shell adalah …",
        choices: [
            { id: "A", text: "Telnet" },
            { id: "B", text: "SSH" },
            { id: "C", text: "FTP" },
            { id: "D", text: "TFTP" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "SSH (Secure Shell) menawarkan enkripsi dan autentikasi untuk remote shell, sedangkan Telnet mentransmisikan data tanpa enkripsi.",
    },
    {
        id: "q007",
        question:
            "SSL/TLS digunakan untuk mengamankan sesi HTTP. Saat HTTPS memakai sertifikat yang valid, mana yang benar?",
        choices: [
            {
                id: "A",
                text: "Koneksi adalah terenkripsi dan server terautentikasi",
            },
            { id: "B", text: "Hanya data dikompresi, tidak terenkripsi" },
            {
                id: "C",
                text: "Server tidak perlu sertifikat untuk terautentikasi",
            },
            { id: "D", text: "TLS membuat alamat IP menjadi anonim" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "HTTPS (HTTP over TLS) memberikan enkripsi lalu lintas dan autentikasi server melalui sertifikat yang dikeluarkan oleh CA (Certificate Authority).",
    },
    {
        id: "q008",
        question:
            "Hash function yang sering digunakan untuk integritas data (cryptographic hash) sebaiknya memiliki sifat-sifat: preimage resistance, second-preimage resistance, dan …",
        choices: [
            { id: "A", text: "Collision resistance" },
            { id: "B", text: "Reversibility" },
            { id: "C", text: "Symmetry" },
            { id: "D", text: "Predictability" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Collision resistance berarti sulit menemukan dua input berbeda yang menghasilkan hash sama — sifat penting untuk hash kriptografi.",
    },
    {
        id: "q009",
        question:
            "Manakah contoh protokol untuk VPN yang beroperasi di lapisan jaringan dan mendukung enkripsi seluruh paket IP?",
        choices: [
            { id: "A", text: "SSL VPN" },
            { id: "B", text: "IPSec" },
            { id: "C", text: "HTTPS" },
            { id: "D", text: "SIP" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "IPSec bekerja pada layer jaringan (IP) untuk mengenkripsi seluruh paket IP antara endpoints VPN.",
    },
    {
        id: "q010",
        question:
            "ARP spoofing (poisoning) dapat digunakan untuk melakukan serangan apa di jaringan lokal?",
        choices: [
            { id: "A", text: "Eavesdropping / Man-in-the-Middle" },
            { id: "B", text: "DNS zone transfer" },
            { id: "C", text: "BGP hijacking" },
            { id: "D", text: "Cross-site scripting" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "ARP spoofing memetakan alamat MAC ke IP secara salah sehingga lalu lintas dialihkan ke penyerang—umumnya untuk MITM atau sniffing.",
    },
    {
        id: "q011",
        question:
            "Serangan Distributed Denial of Service (DDoS) bertujuan untuk …",
        choices: [
            { id: "A", text: "Mendapatkan akses admin ke server" },
            {
                id: "B",
                text: "Membanjiri layanan sehingga tidak tersedia bagi pengguna sah",
            },
            { id: "C", text: "Mencuri kredensial pengguna" },
            { id: "D", text: "Mengubah konfigurasi DNSSEC" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "DDoS menggunakan banyak host untuk menumpuk trafik/permintaan ke target sehingga sumber daya habis dan layanan tidak tersedia.",
    },
    {
        id: "q012",
        question:
            "Jenis firewall yang bisa memeriksa payload paket (stateful inspection) dan membuat keputusan berdasarkan status koneksi disebut …",
        choices: [
            { id: "A", text: "Packet-filtering firewall" },
            { id: "B", text: "Stateful firewall" },
            { id: "C", text: "Application proxy firewall" },
            { id: "D", text: "Hardware NAT" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Stateful firewall memantau state koneksi TCP/UDP dan dapat membuat keputusan berdasarkan session state, bukan hanya header paket.",
    },
    {
        id: "q013",
        question: "Kunci privat RSA digunakan untuk …",
        choices: [
            { id: "A", text: "Mengenkripsi pesan untuk penerima" },
            {
                id: "B",
                text: "Mendekripsi pesan yang dienkripsi dengan kunci publik pemilik privat",
            },
            { id: "C", text: "Menyebarkan kunci simetris" },
            { id: "D", text: "Mengganti hash function" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Dalam RSA, penerima menyimpan kunci privat yang digunakan untuk mendekripsi pesan yang telah dienkripsi dengan kunci publiknya. Kunci privat juga dipakai untuk menandatangani digital.",
    },
    {
        id: "q014",
        question: "TLS certificate chain trust berawal dari …",
        choices: [
            { id: "A", text: "Root CA yang ter-trusted" },
            { id: "B", text: "Client yang mengeluarkan sertifikat" },
            { id: "C", text: "DNS server" },
            { id: "D", text: "Router terdekat" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Kepercayaan pada certificate chain dimulai dari Root CA (Certificate Authority) yang sudah dipercaya oleh sistem (mis. ada di trust store). Sertifikat lainnya diverifikasi sampai root.",
    },
    {
        id: "q015",
        question:
            "Teknik 'salting' dalam penyimpanan password bertujuan untuk …",
        choices: [
            { id: "A", text: "Mempercepat proses hashing" },
            { id: "B", text: "Mencegah serangan rainbow table" },
            { id: "C", text: "Membuat hashing reversible" },
            { id: "D", text: "Menyimpan password dalam plain text" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Salt adalah nilai acak yang ditambahkan ke password sebelum hashing agar dua password yang sama menghasilkan hash berbeda; ini mencegah precomputed rainbow table attacks.",
    },
    {
        id: "q016",
        question: "Port TCP 22 tipikal digunakan untuk layanan …",
        choices: [
            { id: "A", text: "HTTP" },
            { id: "B", text: "SSH" },
            { id: "C", text: "HTTPS" },
            { id: "D", text: "FTP" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Port 22 adalah port standar untuk SSH (Secure Shell). HTTP default port 80; HTTPS 443; FTP 21.",
    },
    {
        id: "q017",
        question: "Fungsi dari DNSSEC adalah …",
        choices: [
            { id: "A", text: "Menyediakan enkripsi penuh seluruh DNS query" },
            {
                id: "B",
                text: "Menandatangani zona DNS untuk memastikan integritas dan otentisitas data DNS",
            },
            { id: "C", text: "Mengganti DNS dengan IP statis" },
            { id: "D", text: "Mengubah TTL setiap record" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "DNSSEC menambahkan signature kriptografi pada data DNS untuk memverifikasi asal dan integritas record, mengurangi risiko spoofing/DNS cache poisoning.",
    },
    {
        id: "q018",
        question: "WPA2 (Wi-Fi Protected Access II) berbeda dari WEP karena …",
        choices: [
            { id: "A", text: "WPA2 menggunakan enkripsi RC4 seperti WEP" },
            {
                id: "B",
                text: "WPA2 menggunakan AES-based CCMP yang jauh lebih aman",
            },
            { id: "C", text: "WPA2 tidak memerlukan password" },
            { id: "D", text: "WEP lebih aman daripada WPA2" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "WPA2 menggunakan AES-CCMP untuk memastikan enkripsi yang kuat. WEP menggunakan RC4 dan memiliki banyak kelemahan.",
    },
    {
        id: "q019",
        question: "Apa itu 'least privilege' dalam konteks kontrol akses?",
        choices: [
            { id: "A", text: "Memberi semua izin kepada semua user" },
            {
                id: "B",
                text: "Memberikan hak minimum yang diperlukan agar tugas dapat dilakukan",
            },
            { id: "C", text: "Membiarkan user memilih izin sendiri" },
            { id: "D", text: "Menolak semua akses" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Prinsip least privilege berarti memberi akun/entitas hanya izin yang dibutuhkan untuk menjalankan tugas, mengurangi risiko penyalahgunaan.",
    },
    {
        id: "q020",
        question: "Serangan 'SQL injection' tergolong ke ranah …",
        choices: [
            { id: "A", text: "Network-layer attack" },
            { id: "B", text: "Application-layer attack" },
            { id: "C", text: "Physical attack" },
            { id: "D", text: "Cryptographic attack" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "SQL injection memanfaatkan celah di level aplikasi (input validation) untuk menyisipkan perintah SQL berbahaya ke database.",
    },
    {
        id: "q021",
        question:
            "BGP hijacking biasanya memengaruhi aspek keamanan jaringan pada ...",
        choices: [
            {
                id: "A",
                text: "Routing Internet sehingga lalu lintas dialihkan ke rute yang salah",
            },
            { id: "B", text: "Layer fisik kabel jaringan" },
            { id: "C", text: "Autentikasi HTTP" },
            { id: "D", text: "Kompresi paket TCP" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "BGP hijacking melibatkan pengumuman rute yang salah sehingga lalu lintas Internet dialihkan (hijack) ke AS penyerang, yang dapat menyebabkan intercept atau pemutusan akses.",
    },
    {
        id: "q022",
        question:
            "Metode apa yang biasa dipakai untuk memperkuat keamanan Wi-Fi publik agar pengguna tidak mudah terkena MitM?",
        choices: [
            { id: "A", text: "Menggunakan captive portal tanpa enkripsi" },
            { id: "B", text: "Memaksa penggunaan HTTPS dan VPN" },
            { id: "C", text: "Menonaktifkan MAC filtering" },
            { id: "D", text: "Menggunakan WEP" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Di jaringan publik, anjuran adalah gunakan layanan melalui HTTPS dan/atau VPN supaya sesi terenkripsi end-to-end. WEP tidak aman; captive portal tanpa TLS rentan.",
    },
    {
        id: "q023",
        question: "MAC (Message Authentication Code) dipakai untuk …",
        choices: [
            { id: "A", text: "Menyediakan confidentiality data" },
            {
                id: "B",
                text: "Menyediakan integritas dan otentikasi pesan dengan kunci simetris",
            },
            { id: "C", text: "Menandatangani pesan secara public-key" },
            { id: "D", text: "Menyimpan log jaringan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "MAC menggunakan kunci simetris untuk mengecek integritas dan autentikasi pesan (mis. HMAC). Ini berbeda dari digital signature (asymmetric).",
    },
    {
        id: "q024",
        question:
            "Saat melakukan hardening server, langkah yang paling tepat adalah …",
        choices: [
            {
                id: "A",
                text: "Menjalankan semua layanan default untuk kompatibilitas",
            },
            {
                id: "B",
                text: "Mematikan layanan yang tidak perlu dan menutup port yang tidak digunakan",
            },
            { id: "C", text: "Meningkatkan logging tidak penting" },
            { id: "D", text: "Menghilangkan semua authentication" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Hardening berarti mengurangi permukaan serangan: mematikan layanan tak perlu, menutup port, memperbarui sistem, menerapkan konfigurasi aman.",
    },
    {
        id: "q025",
        question: "Apa itu 'port scanning' dan mengapa hal itu berbahaya?",
        choices: [
            {
                id: "A",
                text: "Proses menguji port untuk mengetahui layanan yang berjalan; bisa digunakan penyerang untuk menemukan target",
            },
            { id: "B", text: "Membuka port fisik pada router" },
            { id: "C", text: "Menutup semua port untuk keamanan" },
            { id: "D", text: "Menambah bandwidth port" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Port scanning memeriksa port layanan untuk menemukan celah; digunakan oleh penyerang untuk inventarisasi target, sehingga mendeteksi aktivitas ini penting.",
    },
    {
        id: "q026",
        question:
            "Salah satu metode otentikasi dua faktor (2FA) yang lebih aman adalah …",
        choices: [
            { id: "A", text: "Menggunakan password yang lebih panjang saja" },
            {
                id: "B",
                text: "One-time password (OTP) via authenticator app atau hardware token",
            },
            { id: "C", text: "Menggunakan username dua kali" },
            { id: "D", text: "Menginstal ulang OS" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "2FA yang kuat menggunakan faktor kedua seperti OTP dari authenticator app atau hardware token (mis. YubiKey), lebih aman daripada SMS (rentan SIM swap).",
    },
    {
        id: "q027",
        question:
            "Apa fungsi VLAN (Virtual LAN) dalam konteks keamanan jaringan?",
        choices: [
            {
                id: "A",
                text: "Menggabungkan semua host dalam satu broadcast domain",
            },
            {
                id: "B",
                text: "Memisahkan jaringan logis untuk membatasi broadcast dan menerapkan segmentasi keamanan",
            },
            { id: "C", text: "Mengganti routing BGP" },
            { id: "D", text: "Meningkatkan kecepatan prosesor server" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "VLAN memisahkan network secara logis sehingga dapat membatasi penyebaran broadcast dan menerapkan kebijakan keamanan berbeda per segmen.",
    },
    {
        id: "q028",
        question:
            "Manakah teknik mitigasi yang efektif untuk mengurangi risiko serangan brute-force pada login?",
        choices: [
            {
                id: "A",
                text: "Meningkatkan timeout dan lockout, menambahkan 2FA, serta rate-limiting",
            },
            {
                id: "B",
                text: "Menggunakan password singkat agar mudah ditebak",
            },
            { id: "C", text: "Menonaktifkan logging" },
            { id: "D", text: "Menurunkan level enkripsi" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Mitigasi brute-force termasuk account lockout setelah percobaan gagal, rate-limiting, penggunaan 2FA, dan password policy kuat.",
    },
    {
        id: "q029",
        question: "SSL stripping attack bertujuan untuk …",
        choices: [
            {
                id: "A",
                text: "Mengubah koneksi HTTPS menjadi HTTP sehingga trafik tidak terenkripsi",
            },
            { id: "B", text: "Menggandakan sertifikat TLS" },
            { id: "C", text: "Menghapus cookie browser" },
            { id: "D", text: "Mengupgrade TLS ke versi lebih aman" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "SSL stripping menyerang dengan menurunkan koneksi HTTPS ke HTTP (mis. pada redirect) sehingga komunikasi menjadi tidak terenkripsi dan mudah disadap.",
    },
    {
        id: "q030",
        question:
            "Fungsi NAT (Network Address Translation) dalam konteks keamanan jaringan adalah …",
        choices: [
            { id: "A", text: "Membuka semua port untuk akses publik" },
            {
                id: "B",
                text: "Menyembunyikan alamat IP internal di balik alamat IP publik, sehingga memberikan lapisan pemisahan",
            },
            { id: "C", text: "Menonaktifkan firewall" },
            { id: "D", text: "Mengganti DNS secara otomatis" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "NAT menerjemahkan alamat IP privat ke publik dan sebaliknya; ini menyembunyikan alamat internal dari internet publik sehingga membantu menambah lapisan proteksi.",
    },
    {
        id: "q031",
        question: "Penggunaan 'honeypot' bertujuan untuk …",
        choices: [
            { id: "A", text: "Menjebak dan mempelajari perilaku penyerang" },
            { id: "B", text: "Menghapus serangan dari log" },
            { id: "C", text: "Meningkatkan bandwidth server" },
            { id: "D", text: "Mengganti policy backup" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Honeypot adalah sistem umpan yang dirancang untuk menarik penyerang sehingga perilaku mereka bisa dimonitor dan dianalisis.",
    },
    {
        id: "q032",
        question:
            "Log aggregation dan analitik di SIEM (Security Information and Event Management) membantu …",
        choices: [
            { id: "A", text: "Menghapus semua log secara otomatis" },
            {
                id: "B",
                text: "Mendeteksi pola serangan dan korelasi kejadian untuk respon cepat",
            },
            { id: "C", text: "Mempercepat enkripsi" },
            { id: "D", text: "Mengganti firewall" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "SIEM mengumpulkan log dari berbagai sumber, mengkorelasikan kejadian, dan membantu deteksi ancaman serta insiden keamanan.",
    },
    {
        id: "q033",
        question:
            "Manakah yang merupakan kontrol keamanan fisik yang baik untuk ruang server?",
        choices: [
            { id: "A", text: "Akses terbuka untuk semua staf" },
            {
                id: "B",
                text: "Kontrol akses berbasis kartu, CCTV, dan lingkungan berkendali",
            },
            {
                id: "C",
                text: "Menempatkan kabel di jalur umum tanpa penandaan",
            },
            { id: "D", text: "Mematikan sistem pendingin pada malam hari" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Kontrol akses fisik meliputi kartu akses, pengawasan CCTV, kontrol lingkungan (pendingin, detektor kebakaran) dan pembatasan akses ke personel berwenang.",
    },
    {
        id: "q034",
        question:
            "Manakah teknik yang efektif untuk mengamankan remote access dari staf jarak jauh?",
        choices: [
            {
                id: "A",
                text: "Memaksa penggunaan remote desktop tanpa enkripsi",
            },
            {
                id: "B",
                text: "Penggunaan VPN dengan MFA (multi-factor authentication)",
            },
            { id: "C", text: "Membagikan kredensial secara publik" },
            { id: "D", text: "Menggunakan port random tanpa otentikasi" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "VPN + MFA meningkatkan keamanan remote access dengan enkripsi tunnel dan faktor otentikasi tambahan.",
    },
    {
        id: "q035",
        question:
            "Apa tujuan melakukan vulnerability assessment dan penetration testing (VAPT)?",
        choices: [
            { id: "A", text: "Menguji kinerja server saja" },
            {
                id: "B",
                text: "Menemukan kelemahan keamanan dan menguji exploitability untuk memperbaiki sebelum dieksploitasi",
            },
            { id: "C", text: "Menghapus backup" },
            { id: "D", text: "Menonaktifkan sistem keamanan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "VAPT mencari dan mengeksploitasi kelemahan secara terkontrol untuk menemukan risiko sehingga dapat diperbaiki.",
    },
    {
        id: "q036",
        question:
            "Manakah mekanisme yang menjamin non-repudiation (ketidakmungkinan menyangkal) secara kriptografi?",
        choices: [
            { id: "A", text: "Penggunaan hash tanpa penandatanganan" },
            {
                id: "B",
                text: "Digital signature menggunakan private key pemilik",
            },
            { id: "C", text: "Menggunakan password bersama" },
            { id: "D", text: "Menyimpan log tanpa signature" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Digital signature dengan private key memungkinkan pembuktian bahwa pengirim tertentu menandatangani pesan sehingga memberikan non-repudiation.",
    },
    {
        id: "q037",
        question: "Pada layer OSI manakah switch biasanya beroperasi?",
        choices: [
            { id: "A", text: "Layer 1 (Physical)" },
            { id: "B", text: "Layer 2 (Data Link)" },
            { id: "C", text: "Layer 3 (Network)" },
            { id: "D", text: "Layer 4 (Transport)" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Switch tradisional bekerja di Layer 2, menggunakan MAC address untuk pengiriman frame. Router beroperasi di Layer 3.",
    },
    {
        id: "q038",
        question:
            "Manakah metode pengamanan terbaik untuk API publik yang sensitif?",
        choices: [
            { id: "A", text: "Menggunakan API key saja tanpa rate limiting" },
            {
                id: "B",
                text: "Menggunakan OAuth2 / mutual TLS + rate limiting dan input validation",
            },
            { id: "C", text: "Membiarkan semua endpoint terbuka" },
            { id: "D", text: "Menggunakan FTP untuk transfer API" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "OAuth2 atau mTLS memberikan autentikasi kuat; rate limiting dan input validation mencegah abuse dan injection pada API.",
    },
    {
        id: "q039",
        question: "Apa itu 'session hijacking' dalam konteks web security?",
        choices: [
            {
                id: "A",
                text: "Mencuri atau menggunakan session token/cookie untuk mengambil alih sesi pengguna",
            },
            { id: "B", text: "Mengeksploitasi hardware server" },
            { id: "C", text: "Mempercepat waktu sesi" },
            { id: "D", text: "Mengganti layout halaman" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Session hijacking menggunakan token sesi (cookie) yang dicuri untuk berpura-pura menjadi pengguna tersebut.",
    },
    {
        id: "q040",
        question: "Manakah praktik konfigurasi server web yang aman?",
        choices: [
            { id: "A", text: "Menampilkan versi server di header HTTP" },
            {
                id: "B",
                text: "Men-disable directory listing, mengupdate patch, dan membatasi metode HTTP yang diizinkan",
            },
            { id: "C", text: "Mengizinkan semua metode HTTP tanpa filter" },
            { id: "D", text: "Menggunakan default password admin" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Mengurangi informasi yang bocor (hide server version), patching, menonaktifkan directory listing, membatasi metode (mis. hanya GET/POST yang diperlukan) adalah praktik keamanan.",
    },
    {
        id: "q041",
        question:
            "Manakah algoritma hash yang TIDAK lagi dianggap aman untuk penggunaan kriptografi modern?",
        choices: [
            { id: "A", text: "SHA-256" },
            { id: "B", text: "MD5" },
            { id: "C", text: "SHA-3" },
            { id: "D", text: "BLAKE2" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "MD5 rentan terhadap collision dan tidak disarankan untuk penggunaan keamanan kriptografi; SHA-256, SHA-3, BLAKE2 lebih aman.",
    },
    {
        id: "q042",
        question:
            "Manakah langkah pertama ketika menanggapi insiden keamanan (incident response)?",
        choices: [
            { id: "A", text: "Menghapus seluruh data segera" },
            {
                id: "B",
                text: "Mendeteksi dan mengidentifikasi kejadian, lalu mengisolasi sistem yang terdampak",
            },
            { id: "C", text: "Mengumumkan insiden ke publik tanpa analisis" },
            { id: "D", text: "Mengganti seluruh infrastruktur" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Incident response dimulai dengan deteksi dan identifikasi insiden, lalu isolasi untuk mencegah penyebaran, baru kemudian eradikasi dan recovery.",
    },
    {
        id: "q043",
        question:
            "Untuk menjamin confidentiality data at rest, teknik yang paling umum digunakan adalah …",
        choices: [
            {
                id: "A",
                text: "Full disk encryption atau file-level encryption",
            },
            { id: "B", text: "Menonaktifkan filesystem" },
            { id: "C", text: "Menghapus enkripsi network" },
            { id: "D", text: "Menggunakan cleartext backup" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Encryption at rest (full disk atau file-level) menjaga agar data tetap terenkripsi saat tidak digunakan, sehingga melindungi jika media dicuri.",
    },
    {
        id: "q044",
        question:
            "Sebelum menerapkan perubahan konfigurasi keamanan pada produksi, praktik terbaik adalah …",
        choices: [
            { id: "A", text: "Langsung deploy ke produksi agar cepat" },
            {
                id: "B",
                text: "Melakukan testing pada environment staging dan change review/approval",
            },
            { id: "C", text: "Menghapus backup sebelum deploy" },
            { id: "D", text: "Mematikan monitoring" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Testing di staging, code/config review, dan change approval meminimalkan risiko kesalahan dan downtime saat perubahan diterapkan ke produksi.",
    },
    {
        id: "q045",
        question: "Manakah contoh kontrol preventif yang bersifat teknis?",
        choices: [
            { id: "A", text: "Pelatihan kesadaran keamanan" },
            { id: "B", text: "Firewall, IAM, enkripsi" },
            { id: "C", text: "Analisis forensik setelah insiden" },
            { id: "D", text: "Inspeksi fisik bangunan" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Kontrol preventif teknis termasuk firewall, Identity & Access Management, enkripsi untuk mencegah terjadinya insiden.",
    },
    {
        id: "q046",
        question: "Keamanan lapisan aplikasi web dapat diperkuat dengan ...",
        choices: [
            {
                id: "A",
                text: "Input validation, prepared statements, dan CSP (Content Security Policy)",
            },
            { id: "B", text: "Meningkatkan ukuran server saja" },
            { id: "C", text: "Membuka semua port aplikasi" },
            { id: "D", text: "Menghapus HTTPS" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Input validation dan prepared statements mencegah injection; CSP membantu mitigasi XSS; ini adalah praktik keamanan aplikasi.",
    },
    {
        id: "q047",
        question:
            "Kapan sertifikat digital dianggap kadaluarsa atau tidak valid?",
        choices: [
            { id: "A", text: "Jika berada di dalam rentang tanggal valid" },
            {
                id: "B",
                text: "Jika tanggal saat ini di luar periode validitas atau sertifikat dicabut",
            },
            { id: "C", text: "Jika private key dicadangkan" },
            { id: "D", text: "Jika DNS bekerja normal" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Sertifikat valid jika tanda tangan valid dan saat sekarang berada dalam periode validitas; jika sudah lewat tanggal atau dicabut (CRL/OCSP) maka tidak valid.",
    },
    {
        id: "q048",
        question: "Threat modeling membantu arsitek keamanan melakukan …",
        choices: [
            { id: "A", text: "Merekayasa ulang hardware" },
            {
                id: "B",
                text: "Mengidentifikasi ancaman potensial, asset, dan attack surface untuk mitigasi",
            },
            { id: "C", text: "Menghapus semua test case" },
            { id: "D", text: "Mempublikasikan data sensitif" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "Threat modeling adalah proses sistematis untuk mengidentifikasi ancaman, menentukan prioritas risiko, dan merancang mitigasi dalam arsitektur.",
    },
    {
        id: "q049",
        question:
            "Manakah faktor paling penting saat memilih algoritma enkripsi untuk komunikasi realtime (low-latency)?",
        choices: [
            {
                id: "A",
                text: "Kecepatan dan efisiensi enkripsi serta kekuatan keamanan",
            },
            { id: "B", text: "Hanya ukuran kunci paling besar" },
            {
                id: "C",
                text: "Kompleksitas implementasi tanpa mempertimbangkan performa",
            },
            { id: "D", text: "Menonaktifkan enkripsi untuk kecepatan" },
        ],
        answerId: "A",
        points: 2,
        time: 90,
        explanation:
            "Untuk realtime, perlu menyeimbangkan performa (latency) dan keamanan; memilih algoritma yang efisien dan kuat (mis. AES-GCM) penting.",
    },
    {
        id: "q050",
        question:
            "Manakah langkah yang tepat untuk mengamankan koneksi IoT dengan resource terbatas?",
        choices: [
            { id: "A", text: "Tidak perlu enkripsi karena perangkat kecil" },
            {
                id: "B",
                text: "Menggunakan lightweight crypto (mis. DTLS, COAP dengan keamanan) dan segmentasi jaringan",
            },
            { id: "C", text: "Mematikan semua autentikasi" },
            { id: "D", text: "Menggunakan telnet untuk akses remote" },
        ],
        answerId: "B",
        points: 2,
        time: 90,
        explanation:
            "IoT harus diamankan dengan protokol ringan (DTLS, secure CoAP), segmentasi jaringan, dan manajemen identitas untuk perangkat.",
    },
];

// ================================
// SIMULATION_BANK: 10 soal latihan mudah & relevan (dengan pembahasan)
// ================================
window.SIMULATION_BANK = [
    {
        id: "s001",
        question: "Apa tujuan utama menggunakan HTTPS dibanding HTTP?",
        choices: [
            { id: "A", text: "Mempercepat loading halaman" },
            {
                id: "B",
                text: "Menyediakan enkripsi dan autentikasi server sehingga data aman saat transit",
            },
            { id: "C", text: "Menghilangkan kebutuhan DNS" },
            { id: "D", text: "Mengganti format HTML menjadi binary" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "HTTPS menambahkan lapisan TLS pada HTTP, yang mengenkripsi data saat transit dan memverifikasi identitas server lewat sertifikat, sehingga melindungi dari penyadapan dan MitM.",
    },
    {
        id: "s002",
        question: "Port default untuk HTTPS adalah …",
        choices: [
            { id: "A", text: "80" },
            { id: "B", text: "22" },
            { id: "C", text: "443" },
            { id: "D", text: "8080" },
        ],
        answerId: "C",
        points: 1,
        time: 30,
        explanation:
            "Port standar untuk HTTPS adalah 443. HTTP default berada di port 80; SSH di port 22.",
    },
    {
        id: "s003",
        question:
            "Manakah tindakan paling dasar untuk mencegah serangan brute-force pada login?",
        choices: [
            { id: "A", text: "Mengijinkan percobaan tanpa batas" },
            {
                id: "B",
                text: "Implementasikan account lockout, rate limiting, atau CAPTCHA",
            },
            { id: "C", text: "Menyimpan password dalam plain text" },
            { id: "D", text: "Gunakan username yang sama untuk semua user" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Account lockout, rate limiting, dan CAPTCHA memperlambat atau memblokir upaya brute-force, sehingga mengurangi kemungkinan penyerang menebak password.",
    },
    {
        id: "s004",
        question: "RSA adalah contoh algoritma …",
        choices: [
            { id: "A", text: "Simetris" },
            { id: "B", text: "Asimetris (public-key)" },
            { id: "C", text: "Hash" },
            { id: "D", text: "Compression" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "RSA menggunakan pasangan kunci publik/privat (asymmetric). Algoritma simetris contoh: AES. Hash contoh: SHA-256.",
    },
    {
        id: "s005",
        question: "Apa fungsi 'salt' saat menyimpan password hash?",
        choices: [
            { id: "A", text: "Membuat hash menjadi lebih pendek" },
            {
                id: "B",
                text: "Menambah randomness untuk mencegah penggunaan rainbow table",
            },
            { id: "C", text: "Mengganti password menjadi plain text" },
            { id: "D", text: "Mempercepat login" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Salt (nilai acak) ditambahkan ke password sebelum hashing agar hashing dua password yang sama menghasilkan nilai berbeda, sehingga mencegah precomputed attack seperti rainbow table.",
    },
    {
        id: "s006",
        question:
            "Manakah metode yang paling tepat untuk mengamankan koneksi remote admin secara umum?",
        choices: [
            { id: "A", text: "Gunakan Telnet tanpa enkripsi" },
            {
                id: "B",
                text: "Gunakan SSH dengan key-based authentication dan nonaktifkan login password jika memungkinkan",
            },
            {
                id: "C",
                text: "Membuka port admin ke publik tanpa pembatasan IP",
            },
            { id: "D", text: "Gunakan default credential" },
        ],
        answerId: "B",
        points: 1,
        time: 60,
        explanation:
            "SSH dengan autentikasi berbasis kunci lebih aman daripada password; juga disarankan membatasi akses berdasarkan IP dan menutup port yang tidak perlu.",
    },
    {
        id: "s007",
        question: "Apa tujuan penggunaan VPN ketika menggunakan Wi-Fi publik?",
        choices: [
            { id: "A", text: "Membuka semua port yang diblokir" },
            {
                id: "B",
                text: "Membuat koneksi terenkripsi sehingga data pengguna tidak mudah disadap",
            },
            { id: "C", text: "Menonaktifkan enkripsi browser" },
            { id: "D", text: "Mengganti ISP pengguna" },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "VPN membuat tunnel terenkripsi antara perangkat dan server VPN sehingga melindungi traffic pengguna di jaringan publik dari penyadapan atau MitM.",
    },
    {
        id: "s008",
        question:
            "Apa yang paling tepat dilakukan jika menerima email phishing yang meminta kredensial?",
        choices: [
            { id: "A", text: "Mengklik link dan memasukkan kredensial" },
            {
                id: "B",
                text: "Melaporkan ke tim keamanan, hapus email, dan jangan masukkan data",
            },
            { id: "C", text: "Mencetak email dan menyimpannya" },
            {
                id: "D",
                text: "Mengirim kredensial ke pengirim untuk verifikasi",
            },
        ],
        answerId: "B",
        points: 1,
        time: 45,
        explanation:
            "Tindakan aman adalah tidak memasukkan kredensial, melaporkan ke tim keamanan atau admin, dan menghapus email. Interaksi lebih lanjut bisa memperbesar risiko.",
    },
    {
        id: "s009",
        question: "Apa perbedaan utama antara IP address dan MAC address?",
        choices: [
            {
                id: "A",
                text: "IP adalah identifier pada layer jaringan; MAC adalah identifier fisik pada layer data-link",
            },
            { id: "B", text: "Keduanya sama fungsi dan format" },
            {
                id: "C",
                text: "MAC digunakan untuk routing antar-AS di internet",
            },
            { id: "D", text: "IP selalu statis, MAC selalu dinamis" },
        ],
        answerId: "A",
        points: 1,
        time: 45,
        explanation:
            "IP address bekerja di layer 3 untuk routing; MAC address berfungsi di layer 2 sebagai alamat fisik pada LAN. MAC biasanya melekat pada NIC (bisa di-spoof).",
    },
    {
        id: "s010",
        question:
            "Manakah tindakan sederhana untuk memperkuat keamanan Wi-Fi rumah?",
        choices: [
            { id: "A", text: "Menggunakan password default dari pabrik" },
            {
                id: "B",
                text: "Mengaktifkan WPA2/WPA3, ubah password SSID, dan update firmware router",
            },
            { id: "C", text: "Menonaktifkan enkripsi agar lebih cepat" },
            { id: "D", text: "Membiarkan SSID tersebar tanpa proteksi" },
        ],
        answerId: "B",
        points: 1,
        time: 60,
        explanation:
            "Menggunakan enkripsi kuat (WPA2/WPA3), mengganti password default, dan memperbarui firmware adalah langkah dasar untuk mengamankan jaringan Wi-Fi rumah.",
    },
];
