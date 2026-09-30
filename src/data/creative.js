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
      { title: 'After Movie Orientasi Asrama 2025', url: 'https://youtu.be/HF6AeH16qT0', highlight: true },
      { title: 'Teaser Orientasi Asrama 2025', url: 'https://youtu.be/MMkrpJ0C4UY', highlight: true },
      { title: 'After Movie Genbi Night 2026', url: 'https://youtu.be/cKywpYLCYM0', highlight: true },
      { title: 'Cinematography IBAF UPI Expo 2026', url: 'https://youtu.be/mapxJG4ZONA', highlight: true },
      { title: 'After Movie Malam Keakraban Asrama 2025', url: 'https://youtu.be/yRB18kzD4cI' },
      { title: 'After Movie Bakti Sosial Asrama 2025', url: 'https://youtu.be/AFo_xC158aQ' },
      { title: 'After Movie Gebyar Ramadhan 2025', url: 'https://youtu.be/43NzqY8sKyg' },
      { title: 'Cinematography Tari Tradisional', url: 'https://youtu.be/NA7yZiGsEII' },
      { title: 'Short Movie Fantasy Theme, 30 menit', url: 'https://youtu.be/HN16RZ3S1OM' },
      { title: 'Head Explode VFX Short Video', url: 'https://youtu.be/KRtnu9bvbgs' },
      { title: 'VFX Commission Super Power', url: 'https://youtu.be/r27mf5YhOug' },
      { title: 'Video Microteaching LIDM UPI 2025', url: 'https://youtu.be/V-bXqz4Wwqs' },
      { title: 'Video Simulasi Pembelajaran Tatap Muka (PAT) MTsN 1 Banyuwangi, karya saat MTs', url: 'https://youtu.be/ZHsNNpx2r_8' },
    ],
  },
  {
    id: 'model3d', title: '3D',
    text: 'Pemodelan dan render 3D: logo, bangunan, ruangan, dan diorama, lengkap dengan pencahayaan dan material.',
    tools: '3D modelling dan render',
    covers: ['3d-asrama-depan', '3d-asrama-samping', '3d-asrama-fasad', '3d-asrama-kamar', '3d-asrama-meja', '3d-pantai-isometrik', '3d-pantai-pondok', '3d-pantai-malam', '3d-pantai-meja', '3d-rumah-siang', '3d-rumah-dekat', '3d-rumah-malam', '3d-rumah-gelap'],
    items: [
      { title: '3D Logo Kabinet Adhyayana Asrama UPI 2025', url: 'https://youtu.be/ok1ee64_Exw' },
      {
        title: '3D Gedung Asrama UPI', url: 'https://youtu.be/beqFirOuV7o', thumb: '3d-asrama-depan',
        previews: ['3d-asrama-depan', '3d-asrama-samping', '3d-asrama-fasad', '3d-asrama-kamar', '3d-asrama-meja'],
      },
      {
        title: '3D Small Isometric Beach', url: 'https://youtu.be/dxlJYzWW3Qc', thumb: '3d-pantai-isometrik',
        previews: ['3d-pantai-isometrik', '3d-pantai-pondok', '3d-pantai-meja', '3d-pantai-malam'],
      },
      {
        title: '3D House in Jungle, Night and Day', url: 'https://youtu.be/4I0BmvCEn4o', thumb: '3d-rumah-siang',
        previews: ['3d-rumah-siang', '3d-rumah-dekat', '3d-rumah-malam', '3d-rumah-gelap'],
      },
      { title: '3D Simulasi RECLAIM (PKM-VGK)', url: 'https://youtu.be/QvC3nx21HAI', thumb: 'reclaim-blender' },
    ],
  },
  {
    id: 'motion', title: 'Motion',
    text: 'Motion graphic dan animasi bercerita: twibbon animasi, logo entrance, mograph, dan video storytelling berbasis STEM.',
    tools: 'Motion graphic dan animasi',
    more: true,
    covers: ['vfx', 'cin-olka', 'story-asti'],
    items: [
      { title: 'Twibbon Orientasi Asrama 2025', url: 'https://youtube.com/shorts/vW4hjjaTk3w' },
      { title: 'Logo Entrance DPM KEMAKOM UPI 2025', url: 'https://youtu.be/S2QkIUqsNEk' },
      { title: 'Animated Mograph Sosialisasi Aspirasi', url: 'https://youtu.be/ojDl7Xh4zVA' },
      { title: 'Motion Graphic Sistem Operasi', url: 'https://youtu.be/Fn78n2xAM7Q' },
      { title: 'Animated Storytelling Educational Video (DIMASTI AMLI 2025)', url: 'https://youtu.be/CODfqjJPLc0' },
      { title: 'Video Project Introduction RECLAIM (PKM-VGK)', url: 'https://youtu.be/9-bovWanRYs' },
      { title: 'Video The Creators Behind the Project RECLAIM (PKM-VGK)', url: 'https://youtu.be/CrwyAHrYXNw' },
    ],
  },
  {
    id: 'design', title: 'Design',
    text: 'Aset desain dan ilustrasi: poster, vector art, maskot, desain UI aplikasi, peta, dan logo.',
    tools: 'Desain grafis dan ilustrasi',
    covers: [
      'design-poster-calisthenics', 'ink-monster', 'design-vector-karakter', 'design-maskot',
      'design-ui-app', 'design-logo-reclaim', 'design-logo-reconsume',
      'design-kulityea-logo', 'design-kulityea-kemasan',
      'design-pkpmi-santunan', 'design-pkpmi-kebajikan', 'design-pkpmi-berbagi', 'design-pkpmi-cawangan', 'design-pkpmi-terimakasih',
    ],
    // Karya desain berupa gambar: `image` (kunci di images.js) ditampilkan langsung, tanpa `url` video.
    // Bila satu karya punya beberapa gambar, pakai `tabs: [{ label, image }]`.
    // `tall: true` = gambar potret: tampil tinggi, bukan bingkai 16:9. Pada `tabs`, `frame: 'tall' | 'wide'` per tab.
    // `noCover: true` = tidak ikut diputar sebagai sampul kategori (gambarnya terlalu lebar/kecil).
    items: [
      { title: 'Poster Brutalism Calisthenics: No Weights, Pills, Shakes', image: 'design-poster-calisthenics', tall: true },
      {
        // aset 2D untuk media pembelajaran unplugged inkART; tab = lembar aset
        title: 'Character Design 2D untuk inkART', image: 'ink-monster',
        tabs: [
          { label: 'Monster', image: 'ink-monster' },
          { label: 'Poligon', image: 'ink-poligon' },
          { label: 'Alam dan lingkungan', image: 'ink-alam' },
          { label: 'Hewan', image: 'ink-hewan' },
          { label: 'Kendaraan dan tokoh', image: 'ink-kendaraan-tokoh' },
        ],
      },
      { title: 'Vector Art 2D: karakter manusia', image: 'design-vector-karakter', tall: true },
      { title: 'Drawing: karakter Perry, maskot tas belanja', image: 'design-maskot' },
      { title: 'Desain UI aplikasi Calisthenics (Calisknow)', image: 'design-ui-app' },
      {
        // layar-layar aplikasi StudyDuel; lembar lebar memakai bingkai `wide`, yang potret `tall`
        title: 'Desain UI/UX aplikasi StudyDuel', image: 'studyduel-ui-duel', noCover: true,
        tabs: [
          { label: 'Masuk dan daftar', image: 'studyduel-ui-masuk', frame: 'tall' },
          { label: 'Beranda, toko, dan gacha', image: 'studyduel-ui-beranda', frame: 'wide' },
          { label: 'Mode duel', image: 'studyduel-ui-duel', frame: 'wide' },
          { label: 'Teman, profil, dan badge', image: 'studyduel-ui-profil', frame: 'wide' },
        ],
      },
      { title: 'Logo RECLAIM', image: 'design-logo-reclaim' },
      { title: 'Logo REconsume', image: 'design-logo-reconsume' },
      {
        // satu karya, beberapa gambar: `tabs` memunculkan tab untuk berpindah gambar; `image` = sampulnya
        title: 'KulitYea: Logo dan Kemasan Tropical Orange', image: 'design-kulityea-kemasan',
        tabs: [
          { label: 'Logo', image: 'design-kulityea-logo' },
          { label: 'Kemasan', image: 'design-kulityea-kemasan' },
        ],
      },
      {
        // poster organisasi PKPMI Bandung (Persatuan Kebangsaan Pelajar Malaysia di Indonesia, Cawangan Bandung)
        title: 'Desain Poster PKPMI Bandung', image: 'design-pkpmi-santunan', tall: true,
        tabs: [
          { label: 'Santunan', image: 'design-pkpmi-santunan' },
          { label: 'Kebajikan', image: 'design-pkpmi-kebajikan' },
          { label: 'Berbagi Rezeki', image: 'design-pkpmi-berbagi' },
          { label: 'Cawangan Bandung', image: 'design-pkpmi-cawangan' },
          { label: 'Terima Kasih', image: 'design-pkpmi-terimakasih' },
        ],
      },
    ],
  },
]
