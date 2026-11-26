// Kolom:
//   text        ringkasan singkat (tampil di kartu)
//   role,period peran dan waktu, tampil di pop-up
//   highlights  butir-butir pekerjaan/fitur, tampil di pop-up
//   stackGroups teknologi per kelompok (kartu memakai gabungannya). Boleh diganti `stack` (daftar datar)
//   links       tautan luar [{ href, label }]
//   shots       isi galeri pop-up: image | video | app (lihat ui/Gallery.jsx). Tanpa shots = hanya sampul
//   hidden      true = disimpan tapi tidak ditampilkan
// Proyek penelitian dosen (IoT air, raket) ada di research.js
export const projects = [
  {
    id: 'dppm',
    title: 'Website DPPM UPI',
    role: 'Backend Programmer',
    text: 'Website resmi Direktorat Penelitian dan Pengabdian kepada Masyarakat UPI: pusat informasi program penelitian, direktori grup riset, pengumuman, dan dokumen resmi untuk sivitas akademika.',
    highlights: [
      'Direktori grup riset dengan pencarian dan penyaringan berdasarkan ketua dan tahun.',
      'Pusat unduhan dokumen resmi (SK, panduan, pengumuman) dengan penyaringan tahun dan kategori.',
      'Arsip pengumuman resmi per tahun dan tautan langsung ke sistem Litabmas.',
      'Antarmuka dua bahasa (Indonesia dan Inggris).',
    ],
    stackGroups: {
      Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      'Backend dan data': ['REST API', 'PostgreSQL'],
      Infrastruktur: ['Docker', 'Git & GitHub'],
    },
    image: 'dppm-penelitian', links: [{ href: 'https://dppm.upi.edu', label: 'dppm.upi.edu' }],
    shots: [
      { image: 'dppm-penelitian', title: 'Halaman Penelitian' },
      { image: 'dppm-grup-riset', title: 'Direktori Grup Riset' },
      { image: 'dppm-download', title: 'Download Dokumen' },
      { image: 'dppm-pengumuman', title: 'Pengumuman Resmi' },
    ],
  },
  {
    id: 'litabmas',
    title: 'Sistem Informasi Litabmas UPI',
    role: 'Backend Programmer',
    period: 'Mei 2026 - sekarang (magang)',
    text: 'Platform resmi DPPM UPI untuk pengajuan proposal dan pelaporan penelitian serta pengabdian kepada masyarakat, dipakai aktif oleh dosen se-UPI dan dikelola lewat panel admin.',
    highlights: [
      'Merancang logika back-end dan struktur basis data untuk alur pengajuan, review, dan pelaporan.',
      'Alur penuh: proposal, penilaian reviewer, laporan kemajuan, laporan akhir, hingga luaran.',
      'Panel admin untuk skema, instrumen, reviewer, mitra, timeline, dan log aktivitas.',
      'Catatan harian dengan verifikasi, rekap IKU dan TKT, serta insentif publikasi.',
      'Berjalan di produksi dan digunakan dosen di seluruh lingkungan UPI.',
    ],
    stackGroups: {
      Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      'Backend dan data': ['REST API', 'PostgreSQL'],
      Infrastruktur: ['Docker', 'Git & GitHub'],
    },
    image: 'litabmas-dashboard', links: [{ href: 'https://litabmas.upi.edu', label: 'litabmas.upi.edu' }],
    shots: [
      { image: 'litabmas-dashboard', title: 'Daftar Program (dashboard dosen)' },
      { image: 'litabmas-config', title: 'Panel admin: Config Data' },
    ],
  },
  {
    id: 'studyduel',
    title: 'StudyDuel',
    role: 'Fullstack',
    text: 'Aplikasi belajar mobile berbasis duel: pemain beradu soal secara langsung dalam mode 1 vs 1, 2 vs 2, dan offline. Diikutsertakan di LIDM 2026, kategori Inovasi Teknologi Digital Pendidikan.',
    highlights: [
      'Tiga mode battle: 1 vs 1, 2 vs 2, dan offline, dengan pilihan mata pelajaran, kelas, dan tingkat kesulitan.',
      'Sistem progres: XP, papan peringkat, badge, dan tantangan harian.',
      'Daftar teman dan undangan tantangan antarpemain.',
      'Dapat dicoba lewat simulasi perangkat Android (tautan "Coba simulasi") dan ditonton demonya di video.',
    ],
    stackGroups: {
      Aplikasi: ['Flutter', 'Dart', 'Android Studio'],
    },
    image: 'studyduel', fit: 'contain',
    links: [
      { href: 'https://appetize.io/app/b_mlanwjuigjts77lic4pdsgvop4?device=pixel7&osVersion=13.0&toolbar=true', label: 'Coba simulasi' },
      { href: 'https://youtu.be/08Av0wQqgjQ', label: 'Video demo' },
    ],
    shots: [
      { image: 'studyduel-ui-masuk', title: 'Desain UI: masuk dan daftar' },
      { image: 'studyduel-ui-beranda', title: 'Desain UI: beranda, toko, dan gacha' },
      { image: 'studyduel-ui-duel', title: 'Desain UI: mode duel' },
      { image: 'studyduel-ui-profil', title: 'Desain UI: teman, profil, dan badge' },
      { type: 'video', embed: 'https://www.youtube.com/embed/08Av0wQqgjQ', poster: 'https://i.ytimg.com/vi/08Av0wQqgjQ/hqdefault.jpg', title: 'Video demo (LIDM 2026, Inovasi Teknologi Digital Pendidikan)' },
    ],
  },
  {
    id: 'penaguru',
    title: 'PenaGuru',
    role: 'Mobile Developer',
    period: 'Mobile Programming (IK300), 2026',
    text: 'Aplikasi ruang kerja guru SMA/SMK untuk mencatat jurnal kelas, menyusun rapor, dan berkonsultasi strategi mengajar dengan asisten AI. Tugas besar pengganti UAS Mobile Programming, Kelompok 3.',
    highlights: [
      'Jurnal kelas: catat observasi per siswa dengan tag, skor 1-5 (pengetahuan, keterampilan, sikap), dan dikte suara. Bisa disimpan luring lalu disinkronkan.',
      'Dua peran dalam satu akun: guru mapel dan wali kelas, masing-masing dengan dashboard sendiri.',
      'Rapor mapel disusun dari jurnal, diajukan ke wali kelas untuk disetujui, lalu pesannya bisa dikirim ke orang tua lewat WhatsApp.',
      'Agenda asesmen dan asisten AI (Gemini) untuk saran strategi mengajar.',
      'Berjalan di Android dan web, dengan basis data PostgreSQL di Supabase dan row level security.',
    ],
    stackGroups: {
      Aplikasi: ['React Native (Expo)', 'TypeScript'],
      'Backend dan data': ['Supabase PostgreSQL', 'Google Gemini AI'],
      Infrastruktur: ['Vercel', 'Git & GitHub'],
    },
    image: 'penaguru-cover',
    links: [
      { href: 'https://penaguruku.vercel.app/', label: 'Coba web app' },
      { href: 'https://penaguruku.vercel.app/showcase/', label: 'Situs showcase' },
      { href: 'https://youtu.be/i6YzKEwpZQ8', label: 'Video demo' },
      { href: 'https://github.com/akbarimron/Penaguru-dashboard-app', label: 'GitHub' },
    ],
    shots: [
      { image: 'penaguru-cover', title: 'PenaGuru: ruang kerja cerdas dan asisten AI guru' },
      { image: 'penaguru-beranda', title: 'Beranda: sesi berikutnya, kelas perwalian, dan mapel' },
      { image: 'penaguru-kelas', title: 'Dashboard kelas: materi aktif dan capaian' },
      { image: 'penaguru-catat', title: 'Catat jurnal: mapel, siswa, dan dikte suara' },
      { image: 'penaguru-siswa', title: 'Profil siswa: capaian per ranah dan riwayat jurnal' },
      { image: 'penaguru-asisten', title: 'Asisten AI dan rapor mapel per guru' },
      { type: 'video', embed: 'https://www.youtube.com/embed/i6YzKEwpZQ8', poster: 'https://i.ytimg.com/vi/i6YzKEwpZQ8/hqdefault.jpg', title: 'Video demo PenaGuru (5 menit)' },
    ],
  },
  {
    id: 'room404',
    title: 'Room404',
    role: 'Game developer',
    text: 'Game horor first-person untuk proyek kuliah OOP. Pemain menyusuri lorong asrama yang gelap untuk mengumpulkan tiga boneka voodoo, lalu kembali ke pintu depan untuk kabur.',
    highlights: [
      'Misi jelas: kumpulkan tiga boneka voodoo, lalu keluar lewat pintu depan.',
      'Suasana dibangun lewat pencahayaan minim, lorong sempit, dan makhluk yang mengintai.',
      'Dirancang dengan prinsip pemrograman berorientasi objek sebagai tugas OOP.',
      'Dirilis gratis di itch.io.',
    ],
    stackGroups: { Game: ['Unity', 'C#'] },
    image: 'room404',
    links: [
      { href: 'https://hibareit.itch.io/room404', label: 'Main di itch.io' },
      { href: 'https://youtu.be/wBXuy1aJWyw', label: 'Video Room404' },
    ],
    shots: [
      { image: 'room404', title: 'Lorong asrama' },
      { image: 'room404-3', title: 'Koridor dan lemari' },
      { image: 'room404-4', title: 'Pintu ke ruangan' },
      { type: 'video', embed: 'https://www.youtube.com/embed/wBXuy1aJWyw', poster: 'https://i.ytimg.com/vi/wBXuy1aJWyw/hqdefault.jpg', title: 'Video Room404' },
    ],
  },
  {
    id: 'multiverse',
    title: 'Lost in MultiverseRPG',
    role: 'Game developer',
    text: 'RPG board-crawler 2D bergaya piksel 16-bit. Pemain terlempar ke multiverse yang memelintir jalanan kota menjadi papan petualangan penuh zombi sekolah, iblis, dan kejadian ganjil, lalu harus bertahan dan mencari jalan pulang.',
    highlights: [
      'Penjelajahan papan bercabang: pilih jalur lewat petak pertarungan, peti misteri, toko, dan tempat istirahat.',
      'Pertarungan bergiliran dengan QTE parry/dodge: waktu yang tepat memangkas damage musuh.',
      'Inventaris taktis, crafting, dan melempar item dari tas saat bertarung.',
      'Buku panduan di dalam game, kontrol keyboard dan mouse di PC serta sentuh di Android.',
      'Dirilis gratis di itch.io untuk Windows dan Android.',
    ],
    stackGroups: { Game: ['Godot Engine 4', 'GDScript'], Platform: ['Windows', 'Android'] },
    image: 'multiverse-cover',
    links: [{ href: 'https://hibareit.itch.io/lost-in-multiverserpg', label: 'Main di itch.io' }],
    shots: [
      { image: 'multiverse-cover', title: 'Lost in MultiverseRPG' },
      { image: 'multiverse-papan', title: 'Papan petualangan dan peta' },
      { image: 'multiverse-battle', title: 'Pertarungan bergiliran' },
      { image: 'multiverse-kondisi', title: 'Kondisi status karakter dan musuh' },
      { image: 'multiverse-tas', title: 'Tas dan perlengkapan' },
      { image: 'multiverse-guide', title: 'Buku panduan di dalam game' },
    ],
  },
  {
    id: 'grimoire',
    title: "Grimoire's Aegis: The Scholar Knight",
    role: 'Lead Programmer',
    period: 'Pengembangan Alat Permainan Edukatif, Kelompok 3',
    text: 'RPG edukasi 2D bergiliran untuk belajar algoritma pencarian dan pengurutan. Pemain menjadi Aegis, ksatria cendekiawan yang memulihkan The Great Index dari Raja Kekacauan lewat soal, teka-teki, dan pertarungan.',
    highlights: [
      'Materi Searching dan Sorting (Linear, Binary, Bubble, Selection, Insertion, Merge, Quick Sort) diajarkan lewat pertarungan dan peta labirin.',
      'Tujuh format soal, empat di antaranya mengharuskan pemain menjalankan algoritmanya sendiri, jadi yang diuji adalah pemahaman, bukan tebakan.',
      'Buku Materi dengan pseudocode dan contoh langkah demi langkah, bisa dibuka kapan saja.',
      'Rapor petualangan: nilai, ketepatan per materi, kelemahan, dan rencana belajar, dapat disimpan sebagai teks dan CSV.',
      'Dikerjakan tim lima orang; saya memegang arsitektur mesin dan pemrograman utama.',
    ],
    stackGroups: { Game: ['Unity', 'C#', 'Godot Engine'] },
    image: 'grimoire-judul',
    shots: [
      { image: 'grimoire-judul', title: 'Layar judul' },
      { image: 'grimoire-topik', title: 'Pilih materi: Array, Searching, dan Sorting' },
      { image: 'grimoire-battle', title: 'Pertarungan melawan kelompok monster' },
      { image: 'grimoire-soal', title: 'Soal Binary Search saat menyerang' },
      { image: 'grimoire-golem', title: 'Bos Golem Jurang: soal Selection Sort' },
      { image: 'grimoire-raja', title: 'Bos akhir: Raja Kekacauan' },
      { image: 'grimoire-teka-teki', title: 'Teka-teki Binary Search di rak terkunci' },
      { image: 'grimoire-buku', title: 'Buku Materi: pseudocode Binary Search' },
      { image: 'grimoire-toko', title: 'Toko perlengkapan' },
      { image: 'grimoire-bestiari', title: 'Bestiari monster' },
    ],
  },
]

export const visibleProjects = projects.filter((p) => !p.hidden)

// Daftar teknologi datar untuk kartu
export const techOf = (p) => (p.stackGroups ? Object.values(p.stackGroups).flat() : p.stack ?? [])
