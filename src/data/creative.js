// Empat kategori karya kreatif (Cinematic, 3D, Motion, Design). Daftar judul dari Portfolio PDF.
//
// Cara menambah video: isi `url` pada karya yang sesuai, tempel saja URL dari browser.
// Yang didukung: YouTube (watch, youtu.be, shorts), Instagram (post, reel, tv),
// Google Drive (file/d/.../view), Vimeo, dan TikTok. Contoh:
//   { title: 'After Movie Genbi Night 2026', url: 'https://www.instagram.com/reel/XXXXXXXX/' },
//   { title: 'Head Explode VFX Short Video',  url: 'https://youtu.be/XXXXXXXXXXX' },
// Karya tanpa `url` menampilkan gambar cuplikan dan keterangan bahwa video belum ditambahkan.
//
// `covers` = kumpulan gambar cuplikan. Thumbnail kategori dan karya diambil acak
// dari sini setiap halaman dimuat ulang (lihat data/covers.js). `thumb` pada satu karya
// (kunci di images.js) mengunci thumbnail-nya.
export const creative = [
  {
    id: 'cinematic', title: 'Cinematic',
    text: 'After movie, cinematography, short movie, dan VFX. Penyutradaraan, pengambilan gambar, penyuntingan, sound design, dan color grading.',
    tools: 'Video editing, cinematography, VFX',
    more: true,
    covers: ['cin-arm', 'cin-montage', 'cin-olka'],
    items: [
      { title: 'After Movie Orientasi Asrama 2025', url: '' },
      { title: 'After Movie Malam Keakraban Asrama 2025', url: '' },
      { title: 'After Movie Bakti Sosial Asrama 2025', url: '' },
      { title: 'After Movie Gebyar Ramadhan 2025', url: '' },
      { title: 'After Movie Genbi Night 2026', url: '' },
      { title: 'Cinematography IBAF UPI Expo 2026', url: '' },
      { title: 'Cinematography Tari Tradisional', url: '' },
      { title: 'Short Movie Fantasy Theme, 30 menit', url: '' },
      { title: 'Head Explode VFX Short Video', url: '' },
      { title: 'Teaser Orientasi Asrama 2025', url: '' },
    ],
  },
  {
    id: 'model3d', title: '3D',
    text: 'Pemodelan dan render 3D: logo, bangunan, ruangan, dan diorama, lengkap dengan pencahayaan dan material.',
    tools: '3D modelling dan render',
    covers: ['3d-gedung', '3d-pulau', '3d-hutan', '3d-kamar', '3d-kamar2'],
    items: [
      { title: '3D Logo Kabinet Asrama UPI 2025', url: '' },
      { title: '3D Gedung Asrama UPI', url: '', thumb: '3d-gedung' },
      { title: '3D Small Isometric Beach', url: '', thumb: '3d-pulau' },
      { title: '3D House in Jungle, Night and Day', url: '', thumb: '3d-hutan' },
    ],
  },
  {
    id: 'motion', title: 'Motion',
    text: 'Motion graphic dan animasi bercerita: twibbon animasi, logo entrance, mograph, dan video storytelling berbasis STEM.',
    tools: 'Motion graphic dan animasi',
    more: true,
    covers: ['vfx', 'cin-olka', 'story-asti'],
    items: [
      { title: 'Twibbon Orientasi Asrama 2025', url: '' },
      { title: 'Logo Entrance DPM KEMAKOM UPI 2025', url: '' },
      { title: 'Animated Mograph Sosialisasi Aspirasi', url: '' },
      { title: 'Animated Storytelling Educational Video (DIMASTI AMLI 2025)', url: '', thumb: 'story-asti' },
    ],
  },
  {
    id: 'design', title: 'Design',
    text: 'Aset desain dan ilustrasi: poster, vector art, maskot, desain UI aplikasi, peta, dan logo.',
    tools: 'Desain grafis dan ilustrasi',
    covers: [
      'design-poster-calisthenics', 'design-poster-reses', 'design-vector', 'design-maskot',
      'design-ui-app', 'design-peta-olka', 'design-logo-reclaim', 'design-logo-reconsume',
    ],
    // Karya desain berupa gambar: `image` (kunci di images.js) ditampilkan langsung, tanpa `url` video.
    items: [
      { title: 'Poster Calisthenics: No Weights, Pills, Shakes', image: 'design-poster-calisthenics' },
      { title: 'Poster Reses Cosion', image: 'design-poster-reses' },
      { title: 'Vector Art: karakter dan hewan', image: 'design-vector' },
      { title: 'Drawing: maskot tas belanja', image: 'design-maskot' },
      { title: 'Desain UI aplikasi Calisthenics', image: 'design-ui-app' },
      { title: 'Peta persebaran pos ke pos OLKA', image: 'design-peta-olka' },
      { title: 'Logo RECLAIM', image: 'design-logo-reclaim' },
      { title: 'Logo REconsume', image: 'design-logo-reconsume' },
    ],
  },
]
