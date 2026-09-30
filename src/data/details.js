
// Penjelasan rinci untuk pop-up organisasi, asistensi, dan prestasi (kunci = id di
// experience.js / awards.js). Isi teks diambil dari CV dan Portfolio; gambar bukti
// masih contoh sementara (lihat proofs.js).
//   facts       pasangan label/nilai
//   paragraphs  penjelasan
//   points      rincian pekerjaan
//   proofs      galeri bukti/dokumentasi

export const experienceDetail = {
  genbi: {
    facts: { Periode: '2026 - sekarang', Lembaga: 'Generasi Baru Indonesia (GenBI), Bank Indonesia', Status: 'Aktif' },
    paragraphs: [
      'GenBI adalah komunitas penerima beasiswa Bank Indonesia. Saya bergabung sebagai penerima beasiswa kebanksentralan dan aktif dalam kegiatan komunitasnya.',
    ],
    points: [
      'Menyampaikan kebijakan kebanksentralan kepada mahasiswa dan masyarakat.',
      'Menjalankan kegiatan sosial kemasyarakatan.',
      'Menginisiasi program edukasi literasi finansial digital.',
      'Membuat after movie Genbi Night 2026.',
    ],
    proofs: [
      { image: 'genbi-wbd', title: 'World Book Day 2026, Bank Indonesia' },
      { image: 'genbi-sosial-1', title: 'Kegiatan sosial bersama anak-anak' },
      { image: 'genbi-sosial-2', title: 'Sesi edukasi dan kegiatan sosial di taman' },
      { image: 'genbi-olahraga', title: 'Foto bersama anggota GenBI di gedung olahraga' },
      { image: 'genbi-tim', title: 'Foto bersama anggota GenBI' },
      { image: 'genbi-night-sertifikat', title: 'GenBI Night, penerimaan penghargaan Best Intern Staff 2025/2026' },
    ],
    links: [{ label: 'Instagram @genbiupi', href: 'https://www.instagram.com/genbiupi/' }],
  },
  ibaf: {
    facts: { Periode: 'Jun 2025 - Jun 2026', Lembaga: 'UKM IBAF (Ideal Body and Fitness), Gymnasium UPI', Jabatan: 'Wakil Ketua Umum' },
    paragraphs: [
      'IBAF adalah unit kegiatan mahasiswa UPI di bidang kesehatan dan kebugaran (GYMUPI). Sebagai Wakil Ketua Umum, saya membantu memimpin organisasi dan mengoordinasikan program kerjanya.',
    ],
    points: [
      'Membantu memimpin dan mengoordinasikan program kerja organisasi.',
      'Membuat sinematografi untuk IBAF UPI Expo 2026.',
      'Mengembangkan website IBAF UPI sebagai fullstack developer.',
    ],
    proofs: [
      { image: 'cert-ibaf', title: 'Sertifikat Wakil Ketua Umum UKM IBAF UPI 2025-2026' },
      { image: 'ibaf-ruang', title: 'Foto bersama anggota dan pengurus IBAF UPI di ruang latihan' },
      { image: 'ibaf-gedung', title: 'Foto bersama anggota IBAF UPI di depan gedung olahraga' },
      { image: 'ibaf-arahan', title: 'Pengarahan sebelum latihan di luar ruangan' },
      { image: 'ibaf-gym', title: 'Foto bersama setelah latihan di ruang gym' },
    ],
    links: [{ label: 'Postingan Instagram IBAF', href: 'https://www.instagram.com/p/DOz_W6rk611/' }],
  },
  asrama: {
    facts: { Periode: '2024 - 2026', Lembaga: 'Kabinet Asrama Mahasiswa UPI Bumi Siliwangi', Divisi: 'Komunikasi dan Informasi (Kominfo)' },
    paragraphs: [
      'Di Divisi Kominfo saya mengelola publikasi, media sosial, dan dokumentasi kegiatan kepengurusan asrama, termasuk produksi video dan desain.',
    ],
    points: [
      'Memproduksi after movie Orientasi Asrama, Malam Keakraban, Bakti Sosial, dan Gebyar Ramadhan 2025.',
      'Membuat teaser dan twibbon animasi Orientasi Asrama 2025.',
      'Membuat 3D Logo Kabinet Asrama UPI 2025 dan model 3D gedung asrama.',
    ],
    proofs: [
      { image: 'cert-kominfo', title: 'Sertifikat Anggota Divisi Kominfo, Kabinet Adhyayana 2024/2025' },
      { image: 'kominfo-sampul', title: 'Sampul Kominfo, Kabinet Adhyayana' },
      { image: 'kominfo-tim-1', title: 'Foto bersama Divisi Kominfo' },
      { image: 'kominfo-tim-2', title: 'Sesi foto dan dokumentasi tim Kominfo' },
      { image: 'kominfo-tim-3', title: 'Kebersamaan tim Kominfo' },
      { image: 'kominfo-olka-putri', title: 'OLKA 2025, foto bersama di depan Asrama Putri' },
      { image: 'kominfo-olka-aula', title: 'OLKA 2025, foto bersama di aula' },
    ],
    links: [{ label: 'Instagram @asrama.upi', href: 'https://www.instagram.com/asrama.upi/' }],
  },
  dpm: {
    facts: { Periode: 'Jan 2025 - Jan 2026', Lembaga: 'DPM KEMAKOM, Departemen Pendidikan Ilmu Komputer UPI', Bidang: 'Badan Aspirasi' },
    paragraphs: [
      'DPM KEMAKOM adalah lembaga legislatif dan pengawas yang mengawasi kinerja BEM Kemakom serta menampung dan menyalurkan aspirasi mahasiswa. Saya bertugas di Badan Aspirasi.',
    ],
    points: [
      'Menyerap, menampung, dan mendokumentasikan aspirasi, keluhan, dan masukan mahasiswa Ilmu Komputer.',
      'Menjadi jembatan komunikasi antara mahasiswa, BEM Kemakom, dan pihak program studi.',
      'Membuat logo entrance DPM KEMAKOM UPI 2025 dan mograph sosialisasi aspirasi.',
    ],
    proofs: [
      { image: 'dpm-malam', title: 'Kebersamaan anggota DPM KEMAKOM di malam hari' },
      { image: 'dpm-kubah', title: 'Foto bersama anggota DPM KEMAKOM di area terbuka' },
      { image: 'dpm-almamater', title: 'Foto bersama anggota DPM KEMAKOM berjas almamater' },
      { image: 'dpm-gedung', title: 'Foto bersama di depan gedung pada malam hari' },
      { image: 'dpm-ruang', title: 'Foto bersama anggota DPM KEMAKOM di dalam ruangan' },
    ],
    links: [{ label: 'Instagram @blmkemakom', href: 'https://www.instagram.com/blmkemakom/' }],
  },
  sd: {
    facts: { Peran: 'Asisten praktikum', 'Mata kuliah': 'Struktur Data', Lembaga: 'FPMIPA UPI', Mahasiswa: '70+ mahasiswa' },
    paragraphs: ['Membimbing mahasiswa dalam praktikum Struktur Data, dari konsep memori sampai analisis kompleksitas.'],
    points: ['Pointer dan dereferencing.', 'Alokasi memori dinamis di C/C++.', 'Struktur Tree dan Graph.', 'Analisis kompleksitas Big-O.'],
    proofs: [
      { image: 'cert-strukdat', title: 'Sertifikat Asisten Dosen Praktikum Struktur Data 2025/2026' },
      { image: 'strukdat-lab', title: 'Sesi praktikum Struktur Data di laboratorium komputer' },
    ],
  },
  mat: {
    facts: { Peran: 'Asisten kuliah', 'Mata kuliah': 'Matematika Informatika dan Kalkulus', Lembaga: 'FPMIPA UPI' },
    paragraphs: ['Mengampu pemahaman matematika dasar untuk ilmu komputer.'],
    points: ['Logika proposisi dan aljabar boolean.', 'Teori graf untuk pemodelan jaringan.', 'Kalkulus diferensial sebagai dasar machine learning.'],
    proofs: [
      { image: 'matfor-selfie', title: 'Bersama sesama asisten Matematika Informatika dan Kalkulus' },
      { image: 'matfor-makan', title: 'Makan bersama dosen dan asisten' },
      { image: 'matfor-kelas', title: 'Sesi perkuliahan bersama mahasiswa' },
      { image: 'matfor-ujian', title: 'Mahasiswa mengerjakan soal di kelas' },
    ],
  },
  db: {
    facts: { Peran: 'Asisten praktikum', 'Mata kuliah': 'Basis Data', Lembaga: 'FPMIPA UPI' },
    paragraphs: ['Mendampingi mahasiswa dalam praktikum basis data relasional.'],
    points: ['Optimasi query SQL.', 'Normalisasi database.'],
    proofs: [
      { image: 'basdat-lab', title: 'Praktikum Basis Data di laboratorium komputer' },
      { image: 'basdat-asisten', title: 'Mendampingi mahasiswa saat praktikum' },
      { image: 'basdat-kelas', title: 'Mahasiswa mengerjakan praktikum' },
    ],
  },
  inkart: {
    facts: { Peran: 'Asisten peneliti', Kelompok: 'inkART Research Group', Sertifikat: 'No. 561/UN40.A4.5.5.1/KM.01.00/2025', Tanggal: '29 Agustus 2025' },
    paragraphs: [
      'Terlibat dalam riset inkART dengan fokus pada media pembelajaran unplugged.',
      'Sertifikat penghargaan ini diberikan atas dedikasi sebagai Asisten Penelitian pada riset "Kajian Taught Knowledge Elemen Berpikir Komputasional Terintegrasi Algoritma dan Pemrograman pada Informatika SMP melalui Didactic Engineering" tahun 2025. Sertifikat ditandatangani Ketua Program Studi Ilmu Pendidikan Komputer dan Ketua Penelitian Pembinaan dan Afirmasi Dosen Muda.',
    ],
    points: ['Membuat aset karakter 2D untuk media pembelajaran unplugged.'],
    proofs: [
      { image: 'cert-inkart', title: 'Sertifikat Penghargaan Asisten Penelitian, 29 Agustus 2025' },
      { image: 'ink-monster', title: 'Aset karakter monster: badan, mata, dan mulut' },
      { image: 'ink-poligon', title: 'Karakter poligon: tetragon sampai heptagon' },
      { image: 'ink-alam', title: 'Aset pohon, sungai, batu, gedung, dan rumah' },
      { image: 'ink-hewan', title: 'Aset hewan: kura-kura, burung hantu, domba, rubah, kelinci, singa, dan beruang' },
      { image: 'ink-kendaraan-tokoh', title: 'Aset kendaraan dan tokoh manusia' },
    ],
  },
  mentor: {
    facts: { Peran: 'Mentor', Lembaga: 'Asrama Mahasiswa UPI', Bidang: 'Karakter, kepemimpinan, dan akademik' },
    paragraphs: ['Mendampingi mahasiswa baru di asrama kampus dalam membentuk sikap akademik dan kepemimpinan.'],
    points: ['Membantu mahasiswa baru membentuk sikap akademik.', 'Memantau kemajuan studi.', 'Memimpin sesi tutoring terarah di asrama.'],
    proofs: [
      { image: 'mentor-putri', title: 'Foto bersama di depan Asrama Mahasiswa Putri' },
      { image: 'mentor-aula', title: 'Kebersamaan di aula asrama' },
      { image: 'mentor-makan', title: 'Makan bersama di asrama' },
      { image: 'mentor-sesi', title: 'Foto bersama sesi mentoring, 26 November 2024' },
    ],
    links: [{ label: 'Instagram @asrama.upi', href: 'https://www.instagram.com/asrama.upi/' }],
  },
}

export const awardDetail = {
  'genbi-beasiswa': {
    facts: { Jenis: 'Beasiswa', Pemberi: 'Bank Indonesia', Status: 'Aktif' },
    paragraphs: [
      'Beasiswa Kebanksentralan Bank Indonesia diberikan melalui seleksi prestasi akademik, kepemimpinan, dan rekam jejak organisasi. Proses seleksinya mencakup berkas, esai ekonomi digital, dan wawancara panel.',
      'Sebagai penerima, saya mewakili UPI di barisan Generasi Baru Indonesia untuk advokasi literasi kebanksentralan dan program kemasyarakatan.',
    ],
    points: [],
    proofs: [
      { image: 'genbi-wbd', title: 'World Book Day 2026, Bank Indonesia' },
      { image: 'genbi-sosial-1', title: 'Kegiatan sosial bersama anak-anak' },
      { image: 'genbi-sosial-2', title: 'Sesi edukasi dan kegiatan sosial di taman' },
      { image: 'genbi-olahraga', title: 'Foto bersama anggota GenBI di gedung olahraga' },
      { image: 'genbi-tim', title: 'Foto bersama anggota GenBI' },
      { image: 'genbi-night-sertifikat', title: 'GenBI Night, penerimaan penghargaan Best Intern Staff 2025/2026' },
    ],
    links: [{ label: 'Instagram @genbiupi', href: 'https://www.instagram.com/genbiupi/' }],
  },
  lidm: {
    facts: { Capaian: 'Finalis', Kategori: 'Microteaching', Tahun: '2025', Tingkat: 'Universitas (UPI)' },
    paragraphs: ['Lolos ke babak final LIDM UPI 2025 pada kategori microteaching.'],
    points: [],
    proofs: [
      { type: 'video', embed: 'https://www.youtube.com/embed/V-bXqz4Wwqs', poster: 'https://i.ytimg.com/vi/V-bXqz4Wwqs/hqdefault.jpg', title: 'Video LIDM UPI 2025' },
      { image: 'lidm-scratch', title: 'Materi "Belajar Coding Seru dengan Scratch!"' },
      { image: 'lidm-kelas', title: 'Foto bersama siswa di kelas' },
      { image: 'lidm-sekolah', title: 'Foto bersama di halaman sekolah' },
      { image: 'lidm-lorong', title: 'Foto bersama di depan Laboratorium IPA SMPN 6 Lembang' },
      { image: 'lidm-lab', title: 'Foto bersama di ruang laboratorium' },
      { image: 'lidm-siswa', title: 'Foto bersama salah satu siswa' },
      { image: 'lidm-tim', title: 'Foto bersama tim' },
    ],
  },
  'pkm-vgk': {
    facts: { Capaian: 'Pendanaan', Skema: 'PKM Video Gagasan Konstruktif (VGK)', Penyelenggara: 'AMLI', Tahun: '2026' },
    paragraphs: [
      'Gagasan "RECLAIM" memulihkan lahan pascatambang yang terdegradasi melalui intervensi teknologi dan edukasi, sehingga lahan itu kembali menjadi sumber kehidupan yang produktif dan berkelanjutan untuk mendukung kemandirian pangan Indonesia.',
    ],
    points: ['Merancang identitas visual proyek, termasuk logo RECLAIM.'],
    proofs: [
      { type: 'video', embed: 'https://www.youtube.com/embed/9-bovWanRYs', poster: 'https://i.ytimg.com/vi/9-bovWanRYs/hqdefault.jpg', title: 'Video Project Introduction RECLAIM' },
      { type: 'video', embed: 'https://www.youtube.com/embed/CrwyAHrYXNw', poster: 'https://i.ytimg.com/vi/CrwyAHrYXNw/hqdefault.jpg', title: 'Video The Creators Behind the Project RECLAIM' },
      { image: 'design-logo-reclaim', title: 'Logo RECLAIM' },
      { image: 'reclaim-instagram', title: 'Akun Instagram RECLAIM: logo dan tim PKM-VGK' },
      { type: 'video', embed: 'https://www.youtube.com/embed/QvC3nx21HAI', poster: 'https://i.ytimg.com/vi/QvC3nx21HAI/hqdefault.jpg', title: 'Video simulasi 3D RECLAIM' },
      { image: 'reclaim-blender', title: 'Simulasi 3D lahan tambang di Blender' },
      { image: 'reclaim-rapat', title: 'Rapat tim RECLAIM' },
      { image: 'reclaim-syuting', title: 'Persiapan pengambilan gambar video' },
      { image: 'reclaim-almamater', title: 'Foto bersama tim RECLAIM berjas almamater' },
    ],
    links: [{ label: 'Instagram @pkmamli.reclaim', href: 'https://www.instagram.com/pkmamli.reclaim/' }],
  },
  riseup: {
    facts: { Capaian: 'Pendanaan', Ajang: 'Rise Up Fest Entrepreneur', Produk: 'KulitYea (makanan dan minuman)', Tahun: '2026' },
    paragraphs: ['Memperoleh pendanaan dalam kompetisi bisnis Rise Up Fest untuk produk makanan dan minuman KulitYea.'],
    points: [],
    proofs: [
      { image: 'riseup-serbuk', title: 'Hasil serbuk dari berbagai kulit buah untuk KulitYea' },
      { image: 'riseup-kulit', title: 'Kulit buah yang dikeringkan sebagai bahan baku' },
      { image: 'riseup-tim-teh', title: 'Tim saat menyiapkan dan mencoba produk KulitYea' },
      { image: 'riseup-tim', title: 'Foto tim KulitYea' },
      { image: 'riseup-photobooth', title: 'Dokumentasi tim di Rise Up Fest' },
      { image: 'design-kulityea-logo', title: 'Logo KulitYea' },
      { image: 'design-kulityea-kemasan', title: 'Desain kemasan KulitYea Tropical Orange' },
    ],
  },
  'pkm-gft': {
    facts: { Capaian: 'Medali Perunggu', Skema: 'PKM Gagasan Futuristik Tertulis (GFT)', Penyelenggara: 'AMLI', Tingkat: 'Nasional' },
    paragraphs: ['Kompetisi karya tulis ilmiah futuristik antar fakultas sains LPTK se-Indonesia.'],
    points: [],
    proofs: [
      { image: 'cert-gft-medali', title: 'Sertifikat Peraih Medali Perunggu PKM AMLI 2025' },
      { image: 'cert-gft-tim', title: 'Sertifikat peserta tim PKM AMLI 2025' },
      { image: 'gft-awards', title: 'FPMIPA Awards, penerimaan sertifikat dan hadiah' },
      { image: 'gft-selfie', title: 'Bersama tim setelah penyerahan sertifikat' },
      { image: 'gft-tim-ruang', title: 'Persiapan tim sebelum presentasi' },
    ],
  },
  dimasti: {
    facts: { Capaian: 'Juara Harapan 1', Ajang: 'DIMASTI AMLI', Bidang: 'Story telling berbasis STEM', Tingkat: 'Nasional', Tahun: '2025' },
    paragraphs: ['Kompetisi nasional AMLI pada bidang story telling berbasis STEM. Karya yang saya buat adalah video animasi bercerita untuk pembelajaran.'],
    points: ['Menulis naskah dan membuat animated storytelling educational video.'],
    proofs: [
      { type: 'video', embed: 'https://www.youtube.com/embed/CODfqjJPLc0', poster: 'https://i.ytimg.com/vi/CODfqjJPLc0/hqdefault.jpg', title: 'Video karya story telling DIMASTI AMLI 2025' },
      { image: 'dimasti-poster', title: 'Poster karya story telling "Petualangan Menjelajah Sistem Tata Surya Bersama Asti"' },
      { image: 'dimasti-post', title: 'Pengumuman resmi UPI Kemahasiswaan untuk Tim Awang-Awang' },
      { image: 'dimasti-zoom', title: 'Awarding DIMAS-TI 2025 divisi Story Telling (STEAM)' },
      { image: 'dimasti-panggung', title: 'Penyerahan penghargaan di acara mahasiswa berprestasi FPMIPA UPI' },
      { image: 'dimasti-pose', title: 'Bersama tim dengan map sertifikat di acara penghargaan FPMIPA' },
      { image: 'dimasti-gedung', title: 'Tim Awang-Awang di depan gedung FPMIPA UPI' },
      { image: 'dimasti-selfie', title: 'Tim Awang-Awang di lobi FPMIPA UPI' },
    ],
  },
}
