import { easeOutCubic } from './rhythm'

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
export const ZOOM = 100 // orthographic camera: 1 world unit = 100 CSS px
export const ASPECT = 770 / 908 // width / height of the cutout

// The mascot lives on the portrait in About, at its bottom-left corner. The
// position is read live from the portrait's rectangle, so it scrolls with the page.
// It is a bust, so its bottom edge is hidden behind a platform of motion shapes,
// and it rises out from behind that platform once the bottom of the portrait
// comes into view. A pure function of scroll, so it reverses cleanly.
// Returns px: x (centre), clipY (screen y of the hiding edge), r (0 hidden .. 1 fully up),
// plat (0..1, how much of the shape platform is shown).
export function computePose({ vw, vh, desktop, fig }) {
  if (!fig) return { x: -9999, clipY: -9999, r: 0, plat: 0, mode: 'about' }
  // the stage (ring radius ~190px) stays inside the photo column, clear of the text,
  // and the man's face (centre of the photo) stays uncovered
  const x = fig.left + (desktop ? 100 : 135)
  const clipY = fig.bottom - (desktop ? 54 : 40)
  return {
    x,
    clipY,
    r: easeOutCubic(clamp((vh - 20 - clipY) / 240, 0, 1)),
    plat: easeOutCubic(clamp((vh + 50 - clipY) / 200, 0, 1)),
    mode: 'about',
  }
}
