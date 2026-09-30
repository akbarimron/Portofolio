// Menggabungkan data Indonesia (dasar) dengan terjemahan Inggris (penimpa).
// - objek: digabung per kunci
// - array: digabung per indeks, jadi kunci gambar/URL di data dasar tetap terbawa
// - R(nilai): menggantikan seluruh nilai. Dipakai untuk objek yang KUNCI-nya ikut diterjemahkan
//   (mis. stackGroups dan facts), karena penggabungan biasa akan menyisakan kunci Indonesianya.
const REPLACE = Symbol('replace')

export const R = (value) => ({ [REPLACE]: value })

const plain = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

export function merge(base, over) {
  if (over === undefined) return base
  if (plain(over) && REPLACE in over) return over[REPLACE]
  if (Array.isArray(base) && Array.isArray(over)) {
    return Array.from({ length: Math.max(base.length, over.length) }, (_, i) => merge(base[i], over[i]))
  }
  if (plain(base) && plain(over)) {
    const out = { ...base }
    for (const k of Object.keys(over)) out[k] = merge(base[k], over[k])
    return out
  }
  return over
}

// daftar bersasis id: setiap entri digabung dengan penimpanya (jika ada)
export const mergeById = (list, over) => list.map((x) => merge(x, over[x.id]))
