import { creative } from './creative'
import { images } from './images'
import { toEmbed } from '../lib/embed'

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

// Sampul kategori = thumbnail semua karya di dalamnya: gambar yang dikunci (`thumb`/`image`),
// atau poster YouTube dari `url`. maxresdefault tidak punya bingkai hitam; mqdefault jadi cadangan
// bila video tidak punya versi besar. Karya tanpa gambar maupun video tidak ikut.
const sourceOf = (item) => {
  if (item.noCover) return null
  const key = item.thumb ?? item.image
  if (key) return { src: images[key] }
  const id = toEmbed(item.url)?.poster?.match(/\/vi\/([\w-]+)\//)?.[1]
  return id
    ? { src: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, fallback: `https://i.ytimg.com/vi/${id}/mqdefault.jpg` }
    : null
}

// `previews` (render galleries of a work) add many more pictures, so the pool is large and varied
const pools = Object.fromEntries(
  creative.map((c) => {
    const own = c.items
      .flatMap((i) => [sourceOf(i), ...(i.noCover ? [] : (i.previews ?? []).map((k) => ({ src: images[k] })))])
      .filter(Boolean)
    const unique = [...new Map(own.map((o) => [o.src, o])).values()]
    return [c.id, shuffle(unique.length ? unique : c.covers.map((k) => ({ src: images[k] })))]
  }),
)

export { shuffle }

// semua sampul satu kategori, urutan diundi sekali saat halaman dimuat; panel kategori memutarnya
export const coverPool = (catId) => pools[catId]

// sampul pertama, untuk kartu yang tidak berputar (marquee hero)
export const coverOf = (catId) => pools[catId][0]

// thumbnail satu karya: `thumb` bila dikunci, selain itu bergilir dari undian kategori
export const thumbOf = (cat, item, index) => item.thumb ?? item.image ?? order[cat.id][index % order[cat.id].length]
