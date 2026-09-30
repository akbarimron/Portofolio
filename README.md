# Portofolio Muhamad Akbar Imron

React 19 + Vite + Tailwind v4. Animasi dengan `motion`, karakter 3D dengan `three` + `@react-three/fiber`. Tanpa backend.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di dist/
npm run preview
```

## Mengubah isi

Semua teks ada di `src/data/`, tidak perlu menyentuh komponen.

| File | Isi |
| --- | --- |
| `profile.js` | nama, peran, email, Instagram, biografi |
| `images.js` | URL gambar proyek dan karya (foto Anda di `public/images/akbar.jpg`) |
| `marquee.js` | kartu foto yang bergeser di hero |
| `academic.js`, `experience.js`, `awards.js`, `projects.js`, `stack.js` | konten tiap section |
| `research.js` | penelitian dosen (IoT air, raket). Yang `confidential: true` hanya tampil singkat |
| `details.js`, `proofs.js` | isi pop-up organisasi, asistensi, dan prestasi, serta gambar buktinya |
| `creative.js` | empat kategori (Cinematic, 3D, Motion, Story Telling): `list` = daftar karya dari Portfolio, `works` = cuplikan di galeri pop-up |
| `documents.js` | nama file CV dan Portfolio |

Tautan sosial di `profile.js` dan `link` di `projects.js` yang kosong tidak ditampilkan. Tiap proyek punya `role`, `text` (ringkasan di kartu), `highlights`, dan `stackGroups` (teknologi per kelompok) yang tampil di pop-up, serta `links`. Proyek bisa punya `shots` (gambar atau video YouTube) yang tampil di pop-up saat gambar kartu diklik; tanpa `shots` hanya gambar sampulnya. Proyek dengan `hidden: true` (sekarang: raket bulu tangkis IMU) disimpan tetapi tidak ditampilkan; hapus barisnya untuk menampilkannya lagi.

## CV dan Portfolio

Simpan dua file PDF di `public/docs/` dengan nama persis:

- `CV-Muhamad-Akbar-Imron.pdf`
- `Portfolio-Muhamad-Akbar-Imron.pdf`

File CV dan Portfolio Anda sudah terpasang di folder itu. Tombol **Pratinjau** (pop-up dengan PDF) dan **Unduh PDF** di section "CV & Portfolio" otomatis aktif. Sebelum file ada, tombolnya nonaktif dan halaman memberi tahu file belum diunggah. Nama file bisa diganti di `src/data/documents.js`.

## Form kontak

Tidak ada backend. Tombol "Buka di Gmail, tinggal kirim" membuka jendela tulis Gmail yang sudah tertuju ke `akbarimrons@gmail.com`, lengkap dengan subjek dan isi pesan. Pengunjung hanya menekan Kirim dari akun Gmail mereka sendiri. Untuk yang tidak memakai Gmail, tersedia tautan cadangan ke aplikasi email (`mailto:`). Alamat email diubah di `src/data/profile.js`.

## Karya kreatif: menambah video

Di `src/data/creative.js` ada empat kategori (Cinematic, 3D, Motion, Story Telling) berisi daftar karya dari Portfolio. Klik satu kategori di halaman untuk membuka pop-up. Di dalamnya ada tab untuk berpindah kategori dan daftar karya yang bisa diklik.

Untuk menampilkan videonya, isi `url` pada karya yang sesuai. Cukup tempel URL dari browser:

```js
{ title: 'After Movie Genbi Night 2026', url: 'https://www.instagram.com/reel/XXXXXXXX/' },
{ title: 'Head Explode VFX Short Video',  url: 'https://youtu.be/XXXXXXXXXXX' },
```

Yang didukung: YouTube (watch, youtu.be, shorts), Instagram (post, reel, tv), Google Drive (`/file/d/.../view`), Vimeo, dan TikTok. Konversi ke sematan ada di `src/lib/embed.js`. URL yang tidak dikenali (misalnya profil Instagram) ditampilkan sebagai tautan "Buka sumber" tanpa bingkai yang rusak. Karya tanpa `url` menampilkan gambar cuplikan dengan keterangan bahwa video belum ditambahkan.

**Thumbnail acak.** `covers` di tiap kategori adalah kumpulan gambar cuplikan. Thumbnail panel kategori, kartu marquee di hero, dan daftar karya diundi dari sana setiap halaman dimuat ulang (`src/data/covers.js`). Isi `thumb` pada satu karya untuk mengunci thumbnail-nya.

## Pop-up organisasi, asistensi, dan prestasi

Klik satu baris di section Organisasi & Asistensi atau Prestasi & Penghargaan untuk membuka penjelasan rinci. Isinya ada di `src/data/details.js` (kunci = `id` di `experience.js` dan `awards.js`): `facts`, `paragraphs`, `points`, dan `proofs` (galeri bukti).

Gambar bukti yang berlabel **CONTOH SEMENTARA** adalah pengganti (`src/data/proofs.js`, gambar di `public/images/placeholder/`). Untuk memasang yang asli, simpan foto atau pindaian di `public/images/`, lalu ganti `dummy('sertifikat', '...')` dengan `{ src: '/images/nama-file.jpg', title: '...' }`. Pop-up otomatis menyembunyikan catatan "contoh sementara" kalau tidak ada lagi gambar dummy.


## Karakter 3D

Karakter dibuat dari gambar Pixar Anda: latar dihapus, lalu dijadikan boneka 3D dengan relief kedalaman. Di belakangnya tidak ada lingkaran latar, supaya foto tetap terlihat. Animasinya berjalan di shader (`src/components/three/mascot/`):

- napas, ayunan badan, kepala berputar pelan, lengan yang menunjuk berayun di siku
- mata melirik ke arah yang berganti sendiri lalu kepala menyusul (tidak mengikuti kursor)
- berkedip acak, kadang dua kali
- hanya ada di section About. Ia bertumpuk di foto Anda (sudut kiri bawah), muncul dari balik panggung bentuk motion graphic (halo, busur berputar, cincin orbit, bentuk melayang) yang juga menutupi tepi potongan di bawahnya. Posisinya dibaca langsung dari kotak foto (`#about-photo`), jadi ikut bergeser bersama halaman

Aset (`public/mascot/akbar.webp` dan `akbar-depth.png`) dibuat ulang dengan:

```bash
pip install rembg onnxruntime scipy opencv-python-headless pillow
python tools/make-mascot.py gambar.png --crop 440 20 1210 928
```

Jika Anda memakai gambar lain, titik mata, leher, dan siku di `shader.js` perlu diukur ulang.

## Alur animasi halaman pertama

1. Hero bergerak sampai bagian bawahnya menyentuh dasar layar, lalu terpin.
2. Seketika itu juga section About naik menutupinya (tanpa jeda).
3. Karakter 3D hanya ada di section About (`journey.js`). Ia muncul dari balik panggung bentuk (`mascot/Shapes.jsx`) saat bagian bawah foto terlihat. Kanvasnya baru dipasang menjelang itu, jadi hero tidak membebani GPU.

## Sistem motion

Karakter "Premium": satu kurva masuk `cubic-bezier(0.05, 0.7, 0.1, 1)`, tiga durasi (0.2 / 0.55 / 1 detik), satu pola masuk (naik + fade), jeda stagger 60 ms. Semua ada di `src/lib/motion.js`.

Pengguna dengan `prefers-reduced-motion` mendapat halaman tanpa gerak: marquee jadi baris yang bisa digulir manual, karakter 3D tidak ditampilkan, dan animasi scroll dimatikan.
