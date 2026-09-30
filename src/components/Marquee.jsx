import { useState } from 'react'
import MarqueeCard from './MarqueeCard'
import { cards } from '../data/marquee'
import { useLang } from '../i18n/context'

// Full-bleed strip that slides right to left in a seamless, endless loop: two identical
// sets side by side, moved by exactly one set width (-50%) with a pure CSS animation, so it
// stays smooth. The cards are pictures only: no links and no dragging, nothing that could
// move the strip suddenly. The button gives a permanent pause.
// With prefers-reduced-motion it becomes a plain horizontally scrollable row.
// 170s = the same pace as the old 8-card strip (70s), scaled to the longer, more varied row.
export default function Marquee() {
  const { t } = useLang()
  const [paused, setPaused] = useState(false)
  const set = 'flex shrink-0 gap-4 pr-4'

  return (
    <div>
      <div className="overflow-hidden motion-reduce:overflow-x-auto">
        <div
          style={paused ? { animationPlayState: 'paused' } : undefined}
          className="flex w-max animate-[marquee_170s_linear_infinite] motion-reduce:animate-none"
        >
          <ul className={set} aria-label={t('marquee.label')}>
            {cards.map((c) => <MarqueeCard key={c.key} card={c} />)}
          </ul>
          <ul className={`${set} motion-reduce:hidden`} aria-hidden="true">
            {cards.map((c) => <MarqueeCard key={c.key} card={c} copy />)}
          </ul>
        </div>
      </div>
      <div className="wrap mt-4 flex justify-end motion-reduce:hidden">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((v) => !v)}
          className="min-h-11 rounded-lg px-3 text-sm font-medium text-body hover:text-ink"
        >
          {paused ? t('marquee.play') : t('marquee.pause')}
        </button>
      </div>
    </div>
  )
}
