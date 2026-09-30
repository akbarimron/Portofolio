// Bukti/dokumentasi di pop-up. `dummy: true` = gambar pengganti sementara (berlabel
// "CONTOH SEMENTARA"). Ganti dengan foto atau pindaian asli: simpan di public/images/
// lalu tulis { image: 'kunci-di-images.js', title: '...' } tanpa dummy, atau { src: '/images/x.jpg', title }.
export const dummy = (kind, title) => ({ image: `ph-${kind}`, title, dummy: true })
