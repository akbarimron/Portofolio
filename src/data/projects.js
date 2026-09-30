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
      { type: 'video', embed: 'https://www.youtube.com/embed/wBXuy1aJWyw', poster: 'https://i.ytimg.com/vi/wBXuy1aJWyw/hqdefault.jpg', title: 'Video Room404' },
      { image: 'room404', title: 'Lorong asrama' },
      { image: 'room404-3', title: 'Koridor dan lemari' },
      { image: 'room404-4', title: 'Pintu ke ruangan' },
    ],
  },
]

export const visibleProjects = projects.filter((p) => !p.hidden)

// Daftar teknologi datar untuk kartu
export const techOf = (p) => (p.stackGroups ? Object.values(p.stackGroups).flat() : p.stack ?? [])
