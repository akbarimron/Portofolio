import SafeImage from './ui/SafeImage'
import { useLang } from '../i18n/context'

// A picture with its label; not a link. `copy` marks the duplicated second set of the loop,
// hidden from assistive tech so each picture is announced only once.
export default function MarqueeCard({ card, copy = false }) {
  const { t } = useLang()

  return (
    <li className={`shrink-0 ${card.w}`} aria-hidden={copy || undefined}>
      <div className="relative h-[22rem] overflow-hidden rounded-2xl md:h-[24rem]">
        <SafeImage
          src={card.src}
          fallback={card.fallback}
          alt={t('card.alt', { label: card.label })}
          eager
          className="absolute inset-0"
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-sm font-medium text-ink">
          {card.label}
        </span>
      </div>
    </li>
  )
}
