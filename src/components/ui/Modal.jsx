import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { CloseIcon } from './Icons'
import { ease, dur } from '../../lib/motion'
import { useLang } from '../../i18n/context'

// Native <dialog>: focus is trapped, Esc closes, and the page behind becomes
// inert without extra code. `actions` sit next to the close button.
export default function Modal({ title, subtitle, actions, onClose, onKeyDown, wide = false, children }) {
  const ref = useRef(null)
  const { t } = useLang()

  useEffect(() => {
    const d = ref.current
    // StrictMode runs this effect twice in dev: don't reopen, and don't call
    // close() on cleanup (its `close` event would unmount the dialog right away).
    if (!d.open) d.showModal()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-3 backdrop:bg-ink-deep/80 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: dur.base, ease }}
        className={`mx-auto flex max-h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-ink-deep ${wide ? 'max-w-6xl' : 'max-w-5xl'}`}
      >
        <header className="flex flex-wrap items-start gap-x-4 gap-y-2 border-b border-mist p-5 md:flex-nowrap md:p-6">
          <div className="min-w-0 flex-1 basis-0">
            <h3 id="modal-title" className="text-xl font-semibold leading-snug text-ink [overflow-wrap:anywhere] md:text-2xl">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-body">{subtitle}</p>}
          </div>
          {/* HP: judul + tombol tutup di baris atas, tautan turun ke baris sendiri supaya teks tidak terhimpit */}
          <button
            type="button"
            autoFocus
            onClick={() => ref.current.close()}
            aria-label={t('close')}
            className="order-2 -mr-2 -mt-1 grid size-11 shrink-0 place-items-center rounded-lg hover:bg-ice md:order-3 md:m-0"
          >
            <CloseIcon />
          </button>
          <div className="order-3 -ml-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 empty:hidden md:order-2 md:ml-0 md:w-auto md:shrink-0 md:justify-end md:gap-2">
            {actions}
          </div>
        </header>
        {children}
      </motion.div>
    </dialog>
  )
}
