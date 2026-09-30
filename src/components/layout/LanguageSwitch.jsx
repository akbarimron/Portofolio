import { motion } from 'motion/react'
import { useLang } from '../../i18n/context'
import { ease, dur } from '../../lib/motion'

const CODES = ['id', 'en']

// One button that flips the language. Both codes are shown so the visitor sees
// what is active and what the click will switch to; the label names the target.
export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang()
  const other = lang === 'id' ? 'en' : 'id'

  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      aria-label={`${t('lang.switch')}: ${t(`lang.${other}`)}`}
      className="grid min-h-11 place-items-center rounded-full px-0.5"
    >
      <span aria-hidden="true" className="flex rounded-full bg-ice p-0.5">
        {CODES.map((code) => (
          <span
            key={code}
            lang={code}
            className={`relative isolate rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${lang === code ? 'text-canvas' : 'text-body'}`}
          >
            {lang === code && (
              <motion.span
                layoutId="lang-pill"
                transition={{ duration: dur.base, ease }}
                className="absolute inset-0 -z-10 rounded-full bg-ink"
              />
            )}
            {code.toUpperCase()}
          </span>
        ))}
      </span>
    </button>
  )
}
