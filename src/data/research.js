// Penelitian dosen yang saya ikuti. Field sama dengan projects.js (dipakai ProjectDialog).
// confidential: true = kartu singkat tanpa detail (belum dipublikasikan/dipatenkan).
export const research = [
  {
    id: 'water',
    title: 'IoT Smart Water Filtration System',
    role: 'Anggota tim peneliti',
    text: 'Perangkat pemantau dan penyaring air otomatis berbasis ESP32 yang membaca enam parameter kualitas air secara langsung dan menampilkannya pada layar di perangkat.',
    highlights: [
      'Memantau enam parameter: kekeruhan, TDS, ketinggian air, suhu, kekentalan, dan pH.',
      'Pengendali ESP32 yang membaca semua sensor dan menampilkan hasilnya pada layar perangkat.',
      'Dirakit sebagai prototipe fisik lengkap: casing cetak, pompa, dan jalur pipa.',
    ],
    stackGroups: {
      Pengendali: ['ESP32'],
      Sensor: ['Kekeruhan', 'TDS', 'Water level', 'Suhu', 'Kekentalan', 'pH'],
    },
    image: 'water-smpn-purwakarta', links: [],
    shots: [
      { image: 'water-smpn-purwakarta', title: 'Dokumentasi di SMPN 1 Purwakarta' },
      { image: 'water-tim', title: 'Dokumentasi bersama tim' },
      { image: 'water-1', title: 'Prototipe, tampak atas' },
      { image: 'water-2', title: 'Prototipe, tampak samping' },
    ],
  },
  {
    id: 'racket',
    confidential: true,
    title: 'Smart Badminton Racket',
    role: 'Anggota tim peneliti',
    text: 'Riset olahraga bersama dosen. Detail teknis belum dipublikasikan.',
  },
  {
    id: 'webdev',
    title: 'Pengembang Web Litabmas dan DPPM UPI',
    role: 'Pengembang web, mendukung penelitian dosen',
    period: 'Mei 2026 - sekarang (magang)',
    text: 'Membangun dan merawat situs resmi DPPM UPI serta Sistem Informasi Litabmas, tempat dosen se-UPI mengajukan proposal dan melaporkan penelitian serta pengabdian kepada masyarakat.',
    highlights: [
      'Merancang logika back-end dan basis data untuk alur proposal, penilaian reviewer, laporan kemajuan, hingga laporan akhir.',
      'Mengembangkan situs DPPM UPI: direktori grup riset, pusat unduhan dokumen, dan arsip pengumuman resmi.',
      'Membuat panel admin untuk skema, instrumen, reviewer, mitra, dan timeline.',
      'Ikut rapat pengembangan bersama tim DPPM untuk membahas kebutuhan sistem.',
    ],
    stackGroups: {
      Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      'Backend dan data': ['REST API', 'PostgreSQL'],
      Infrastruktur: ['Docker', 'Git & GitHub'],
    },
    image: 'rapat-litabmas-2',
    links: [
      { href: 'https://litabmas.upi.edu', label: 'litabmas.upi.edu' },
      { href: 'https://dppm.upi.edu', label: 'dppm.upi.edu' },
    ],
    shots: [
      { image: 'rapat-litabmas-2', title: 'Rapat pemaparan situs' },
      { image: 'litabmas-dashboard', title: 'Litabmas: daftar program (dashboard dosen)' },
      { image: 'litabmas-config', title: 'Litabmas: panel admin' },
      { image: 'dppm-penelitian', title: 'DPPM: halaman Penelitian' },
      { image: 'dppm-grup-riset', title: 'DPPM: direktori grup riset' },
      { image: 'rapat-litabmas-1', title: 'Rapat pengembangan sistem' },
    ],
  },
]
