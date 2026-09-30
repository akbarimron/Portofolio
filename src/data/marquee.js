import { creative } from './creative'
import { images } from './images'
import { coverPool, shuffle } from './covers'

// Kartu di marquee hero. Diundi ulang setiap halaman dimuat:
//  - kartu proyek (tetap, hanya urutannya yang diacak),
//  - kartu karya kreatif: gambar dari semua thumbnail karya di semua kategori (video, render, desain),
//    diambil bergiliran antarkategori supaya bervariasi, bukan satu gambar per kategori.
// Proyek IoT sengaja tidak ikut: bagian IoT hanya tampil di section Projects.
const projectCards = [
  { image: 'dppm-penelitian', label: 'DPPM UPI' },
  { image: 'studyduel', label: 'StudyDuel' },
  { image: 'room404', label: 'Room404' },
  { image: 'litabmas-dashboard', label: 'Litabmas UPI' },
]

const CREATIVE_CARDS = 16 // per set; dua set dipasang berdampingan untuk putaran tanpa putus
const WIDTHS = ['w-[20rem]', 'w-[24rem]', 'w-[26rem]', 'w-[28rem]']

// satu gambar dari tiap kategori bergantian, sampai jumlah terpenuhi
const creativeCards = () => {
  const lists = creative.map((c) => coverPool(c.id).map((cover) => ({ ...cover, label: c.title })))
  const out = []
  for (let n = 0; out.length < CREATIVE_CARDS && lists.some((l) => l[n]); n++) {
    for (const l of lists) if (l[n] && out.length < CREATIVE_CARDS) out.push(l[n])
  }
  return out
}

export const cards = shuffle([
  ...projectCards.map(({ image, ...c }) => ({ ...c, src: images[image] })),
  ...creativeCards(),
]).map((c, i) => ({ ...c, key: `${c.label}-${i}`, w: WIDTHS[i % WIDTHS.length] }))
