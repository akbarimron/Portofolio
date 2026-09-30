import { creative } from './creative'

// Thumbnail acak. Semuanya diundi SEKALI saat halaman dimuat, di level modul, jadi
// panel kategori, kartu marquee, dan daftar karya memakai undian yang sama selama
// halaman terbuka, dan berganti setiap di-refresh.
const shuffle = (a) => {
  const r = [...a]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

// gambar yang sudah dikunci oleh `thumb` satu karya dihindari saat mengundi, supaya tidak kembar
const order = Object.fromEntries(
  creative.map((c) => {
    const locked = new Set(c.items.map((i) => i.thumb ?? i.image).filter(Boolean))
    const free = c.covers.filter((x) => !locked.has(x))
    return [c.id, shuffle(free.length ? free : c.covers)]
  }),
)

// gambar sampul satu kategori
export const coverOf = (catId) => order[catId][0]

// thumbnail satu karya: `thumb` bila dikunci, selain itu bergilir dari undian kategori
export const thumbOf = (cat, item, index) => item.thumb ?? item.image ?? order[cat.id][index % order[cat.id].length]
