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
    image: 'water-1', links: [],
    shots: [
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
]
