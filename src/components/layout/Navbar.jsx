import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import useActiveSection from '../../hooks/useActiveSection'
import { useLang } from '../../i18n/context'
import LanguageSwitch from './LanguageSwitch'
import { MenuIcon, CloseIcon } from '../ui/Icons'
import { nav, sectionIds } from '../../data/nav'
import { ease, dur } from '../../lib/motion'

// The navbar is the one glass surface on the page (backdrop blur), so it
// stays readable over the hero scene while everything else is solid.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const { t } = useLang()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div className="relative mx-auto flex h-14 max-w-[1320px] items-center justify-between rounded-2xl border border-mist/80 bg-canvas/90 px-4 backdrop-blur-xl">
        <a href="#top" className="font-semibold tracking-tight">
          Akbar <span className="text-royal">Imron</span>
        </a>

        <nav aria-label={t('nav.main')} className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? 'true' : undefined}
              className={`relative isolate rounded-lg px-3 py-2 text-sm transition-colors ${active === n.id ? 'text-ink' : 'text-body hover:text-ink'}`}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ duration: dur.base, ease }}
                  className="absolute inset-0 -z-10 rounded-lg bg-ice"
                />
              )}
              {t(`nav.${n.id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitch />
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-royal sm:px-5"
          >
            {t('nav.contact')}
          </a>
          <button
            type="button"
            aria-label={open ? t('nav.close') : t('nav.open')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg text-ink hover:bg-ice xl:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label={t('nav.mobile')}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: dur.quick, ease }}
              className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-mist bg-canvas p-2 xl:hidden"
            >
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base ${active === n.id ? 'bg-ice text-ink' : 'text-body'}`}
                >
                  {t(`nav.${n.id}`)}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
