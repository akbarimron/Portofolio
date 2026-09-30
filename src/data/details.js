import { dummy } from './proofs'

// Penjelasan rinci untuk pop-up organisasi, asistensi, dan prestasi (kunci = id di
// experience.js / awards.js). Isi teks diambil dari CV dan Portfolio; gambar bukti
// masih contoh sementara (lihat proofs.js).
//   facts       pasangan label/nilai
//   paragraphs  penjelasan
//   points      rincian pekerjaan
//   proofs      galeri bukti/dokumentasi

export const experienceDetail = {
  genbi: {
    facts: { Periode: '2025 - sekarang', Lembaga: 'Generasi Baru Indonesia (GenBI), Bank Indonesia', Status: 'Aktif' },
    paragraphs: [
      'GenBI adalah komunitas penerima beasiswa Bank Indonesia. Saya bergabung sebagai penerima beasiswa kebanksentralan dan aktif dalam kegiatan komunitasnya.',
    ],
    points: [
      'Menyampaikan kebijakan kebanksentralan kepada mahasiswa dan masyarakat.',
      'Menjalankan kegiatan sosial kemasyarakatan.',
      'Menginisiasi program edukasi literasi finansial digital.',
      'Membuat after movie Genbi Night 2026.',
    ],
    proofs: [dummy('dokumentasi', 'Dokumentasi kegiatan GenBI'), dummy('sertifikat', 'Bukti keanggotaan GenBI')],
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
    proofs: [dummy('dokumentasi', 'Dokumentasi kegiatan IBAF UPI'), dummy('dokumen', 'SK kepengurusan IBAF')],
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
    proofs: [dummy('dokumentasi', 'Dokumentasi Divisi Kominfo'), dummy('dokumen', 'SK kepengurusan Kabinet Asrama')],
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
    proofs: [dummy('dokumentasi', 'Dokumentasi kegiatan DPM'), dummy('dokumen', 'SK Badan Aspirasi')],
  },
  sd: {
    facts: { Peran: 'Asisten praktikum', 'Mata kuliah': 'Struktur Data', Lembaga: 'FPMIPA UPI', Mahasiswa: '70+ mahasiswa' },
    paragraphs: ['Membimbing mahasiswa dalam praktikum Struktur Data, dari konsep memori sampai analisis kompleksitas.'],
    points: ['Pointer dan dereferencing.', 'Alokasi memori dinamis di C/C++.', 'Struktur Tree dan Graph.', 'Analisis kompleksitas Big-O.'],
    proofs: [dummy('dokumentasi', 'Dokumentasi sesi praktikum'), dummy('dokumen', 'Surat tugas asisten praktikum')],
  },
  mat: {
    facts: { Peran: 'Asisten kuliah', 'Mata kuliah': 'Matematika Informatika dan Kalkulus', Lembaga: 'FPMIPA UPI' },
    paragraphs: ['Mengampu pemahaman matematika dasar untuk ilmu komputer.'],
    points: ['Logika proposisi dan aljabar boolean.', 'Teori graf untuk pemodelan jaringan.', 'Kalkulus diferensial sebagai dasar machine learning.'],
    proofs: [dummy('dokumentasi', 'Dokumentasi sesi asistensi'), dummy('dokumen', 'Surat tugas asisten')],
  },
  db: {
    facts: { Peran: 'Asisten praktikum', 'Mata kuliah': 'Basis Data', Lembaga: 'FPMIPA UPI' },
    paragraphs: ['Mendampingi mahasiswa dalam praktikum basis data relasional.'],
    points: ['Optimasi query SQL.', 'Normalisasi database.'],
    proofs: [dummy('dokumentasi', 'Dokumentasi sesi praktikum'), dummy('dokumen', 'Surat tugas asisten praktikum')],
  },
  inkart: {
    facts: { Peran: 'Asisten peneliti', Kelompok: 'inkART Research Group' },
    paragraphs: ['Terlibat dalam riset inkART dengan fokus pada media pembelajaran unplugged.'],
    points: ['Membuat aset karakter 2D untuk media pembelajaran unplugged.'],
    proofs: [dummy('dokumentasi', 'Contoh aset karakter 2D'), dummy('dokumen', 'Surat tugas asisten peneliti')],
  },
  mentor: {
    facts: { Peran: 'Mentor', Lembaga: 'Asrama Mahasiswa UPI', Bidang: 'Karakter, kepemimpinan, dan akademik' },
    paragraphs: ['Mendampingi mahasiswa baru di asrama kampus dalam membentuk sikap akademik dan kepemimpinan.'],
    points: ['Membantu mahasiswa baru membentuk sikap akademik.', 'Memantau kemajuan studi.', 'Memimpin sesi tutoring terarah di asrama.'],
    proofs: [dummy('dokumentasi', 'Dokumentasi sesi mentoring'), dummy('dokumen', 'Surat tugas mentor asrama')],
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
    proofs: [dummy('sertifikat', 'Surat penetapan penerima beasiswa'), dummy('dokumentasi', 'Dokumentasi kegiatan GenBI')],
  },
  lidm: {
    facts: { Capaian: 'Finalis', Kategori: 'Microteaching', Tahun: '2025', Tingkat: 'Universitas (UPI)' },
    paragraphs: ['Lolos ke babak final LIDM UPI 2025 pada kategori microteaching.'],
    points: [],
    proofs: [dummy('sertifikat', 'Sertifikat finalis LIDM 2025'), dummy('dokumentasi', 'Dokumentasi babak final')],
  },
  'pkm-vgk': {
    facts: { Capaian: 'Pendanaan', Skema: 'PKM Video Gagasan Konstruktif (VGK)', Penyelenggara: 'AMLI', Tahun: '2026' },
    paragraphs: [
      'Gagasan "RECLAIM" memulihkan lahan pascatambang yang terdegradasi melalui intervensi teknologi dan edukasi, sehingga lahan itu kembali menjadi sumber kehidupan yang produktif dan berkelanjutan untuk mendukung kemandirian pangan Indonesia.',
    ],
    points: ['Merancang identitas visual proyek, termasuk logo RECLAIM.'],
    proofs: [{ image: 'design-logo-reclaim', title: 'Logo RECLAIM' }, dummy('sertifikat', 'Surat keputusan pendanaan PKM-VGK')],
  },
  riseup: {
    facts: { Capaian: 'Pendanaan', Ajang: 'Rise Up Fest Entrepreneur', Produk: 'KulitTea (makanan dan minuman)', Tahun: '2026' },
    paragraphs: ['Memperoleh pendanaan dalam kompetisi bisnis Rise Up Fest untuk produk makanan dan minuman KulitTea.'],
    points: [],
    proofs: [dummy('sertifikat', 'Bukti pendanaan Rise Up Fest'), dummy('dokumentasi', 'Dokumentasi produk KulitTea')],
  },
  'pkm-gft': {
    facts: { Capaian: 'Medali Perunggu', Skema: 'PKM Gagasan Futuristik Tertulis (GFT)', Penyelenggara: 'AMLI', Tingkat: 'Nasional' },
    paragraphs: ['Kompetisi karya tulis ilmiah futuristik antar fakultas sains LPTK se-Indonesia.'],
    points: [],
    proofs: [dummy('sertifikat', 'Medali dan sertifikat PKM-GFT'), dummy('dokumentasi', 'Dokumentasi penyerahan medali')],
  },
  dimasti: {
    facts: { Capaian: 'Juara Harapan 2', Ajang: 'DIMASTI AMLI', Bidang: 'Story telling berbasis STEM', Tingkat: 'Nasional', Tahun: '2025' },
    paragraphs: ['Kompetisi nasional AMLI pada bidang story telling berbasis STEM. Karya yang saya buat adalah video animasi bercerita untuk pembelajaran.'],
    points: ['Menulis naskah dan membuat animated storytelling educational video.'],
    proofs: [{ image: 'story-asti', title: 'Cuplikan video animated storytelling' }, dummy('sertifikat', 'Piagam Juara Harapan 2')],
  },
}
