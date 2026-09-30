// Mengubah URL biasa (yang ditempel dari browser) menjadi sematan.
// Hasil: { kind: 'video' | 'tall', src, poster? } atau null jika situs tidak dikenali.
//   video = bingkai 16:9 (YouTube, Vimeo, Google Drive)
//   tall  = bingkai potret (Instagram, TikTok)
const yt = (id) =>
  id ? { kind: 'video', src: `https://www.youtube.com/embed/${id}`, poster: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` } : null

export function toEmbed(raw) {
  if (!raw) return null
  let u
  try { u = new URL(raw) } catch { return null }
  const host = u.hostname.replace(/^(www|m)\./, '')

  if (host === 'youtu.be') return yt(u.pathname.split('/')[1])
  if (host.endsWith('youtube.com')) {
    if (u.pathname === '/watch') return yt(u.searchParams.get('v'))
    const m = u.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]+)/)
    return m ? yt(m[1]) : null
  }

  if (host === 'instagram.com') {
    const m = u.pathname.match(/^\/(?:[\w.]+\/)?(p|reels?|tv)\/([\w-]+)/)
    if (!m) return null
    const type = m[1] === 'reels' ? 'reel' : m[1]
    return { kind: 'tall', src: `https://www.instagram.com/${type}/${m[2]}/embed/` }
  }

  if (host === 'drive.google.com') {
    const m = u.pathname.match(/\/file\/d\/([\w-]+)/)
    return m ? { kind: 'video', src: `https://drive.google.com/file/d/${m[1]}/preview` } : null
  }

  if (host === 'vimeo.com') {
    const m = u.pathname.match(/\/(\d+)/)
    return m ? { kind: 'video', src: `https://player.vimeo.com/video/${m[1]}` } : null
  }

  if (host === 'tiktok.com') {
    const m = u.pathname.match(/\/video\/(\d+)/)
    return m ? { kind: 'tall', src: `https://www.tiktok.com/embed/v2/${m[1]}` } : null
  }

  return null
}
