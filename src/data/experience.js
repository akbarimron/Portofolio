// Urutan tampil: GenBI, UKM IBAF, Kabinet Asrama, DPM KEMAKOM, lalu asistensi.
// group: 'leadership' | 'teaching'
export const experience = [
  {
    id: 'genbi', group: 'leadership', meta: '2026 - sekarang',
    title: 'Generasi Baru Indonesia (GenBI)', org: 'Komunitas Penerima Beasiswa Bank Indonesia',
    text: 'Menyampaikan kebijakan kebanksentralan, menjalankan kegiatan sosial, dan menginisiasi program edukasi literasi finansial digital.',
  },
  {
    id: 'ibaf', group: 'leadership', meta: 'Jun 2025 - Jun 2026',
    title: 'Wakil Ketua Umum UKM IBAF UPI', org: 'Ideal Body and Fitness, Gymnasium UPI',
    text: 'Membantu memimpin dan mengoordinasikan program kerja organisasi mahasiswa di bidang kesehatan dan kebugaran (GYMUPI) di lingkungan UPI.',
  },
  {
    id: 'asrama', group: 'leadership', meta: '2024 - 2026',
    title: 'Divisi Kominfo, Kabinet Asrama', org: 'Asrama Mahasiswa UPI Bumi Siliwangi',
    text: 'Mengelola publikasi, media sosial, dan dokumentasi kegiatan kepengurusan asrama, termasuk produksi video dan aftermovie.',
  },
  {
    id: 'dpm', group: 'leadership', meta: 'Jan 2025 - Jan 2026',
    title: 'Badan Aspirasi, DPM KEMAKOM', org: 'Dewan Perwakilan Mahasiswa Ilmu Komputer UPI',
    text: 'Menjalankan fungsi legislasi, mengawasi kinerja eksekutif himpunan, dan menyalurkan aspirasi mahasiswa departemen secara transparan dan akuntabel.',
  },
  {
    id: 'sd', group: 'teaching', meta: 'Asisten praktikum',
    title: 'Asisten Praktikum Struktur Data', org: 'FPMIPA UPI, algoritma dan operasi pointer',
    text: 'Membimbing 70+ mahasiswa dalam pointer dereferencing, alokasi memori dinamis di C/C++, struktur Tree dan Graph, serta analisis kompleksitas Big-O.',
  },
  {
    id: 'mat', group: 'teaching', meta: 'Asisten kuliah',
    title: 'Asisten Matematika Informatika & Kalkulus', org: 'FPMIPA UPI, logika proposisi, graf, diferensial',
    text: 'Mengampu aljabar boolean, teori graf untuk pemodelan jaringan, dan kalkulus diferensial sebagai dasar machine learning.',
  },
  {
    id: 'db', group: 'teaching', meta: 'Asisten praktikum',
    title: 'Asisten Praktikum Basis Data', org: 'FPMIPA UPI, pemodelan relasional',
    text: 'Mendampingi optimasi query SQL dan normalisasi database.',
  },
  {
    id: 'inkart', group: 'teaching', meta: 'Riset',
    title: 'Asisten Peneliti inkART', org: 'inkART Research Group',
    text: 'Membuat aset karakter 2D untuk media pembelajaran unplugged.',
  },
  {
    id: 'mentor', group: 'teaching', meta: 'Asrama',
    title: 'Mentor Asrama Mahasiswa UPI', org: 'Bimbingan karakter, kepemimpinan, dan akademik',
    text: 'Membantu mahasiswa baru membentuk sikap akademik, memantau kemajuan studi, dan memimpin sesi tutoring di asrama kampus.',
  },
]

export const filters = [
  { id: 'all', label: 'Semua' },
  { id: 'leadership', label: 'Organisasi' },
  { id: 'teaching', label: 'Asistensi & mentoring' },
]
