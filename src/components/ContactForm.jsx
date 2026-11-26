import { useState } from 'react'
import { profile } from '../data/profile'
import { useLang } from '../i18n/context'

const CATEGORIES = ['Web & Software', 'Motion & Video', '3D']
const field =
  'w-full rounded-lg border border-mist bg-white px-4 py-3 text-base text-ink-deep placeholder:text-hint focus-visible:border-royal'

// returns i18n keys, not text, so an error already on screen follows a language switch
function validate({ name, email, message }) {
  const e = {}
  if (!name.trim()) e.name = 'form.errName'
  if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'form.errEmail'
  if (message.trim().length < 10) e.message = 'form.errMessage'
  return e
}

const compose = ({ name, email, message }, category, subject) => {
  const body = `${message}\n\n${name}\n${email}`
  const q = (s) => encodeURIComponent(s)
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${q(profile.email)}&su=${q(subject)}&body=${q(body)}`,
    mailto: `mailto:${profile.email}?subject=${q(subject)}&body=${q(body)}`,
  }
}

// The form posts to /api/contact (api/contact.js, a Vercel function) which emails the
// owner's Gmail directly. If that function is not configured or fails (dev server, missing
// env vars, SMTP error), the visitor gets Gmail / mailto links with everything prefilled,
// so a message is never lost.
// status: idle | sending | sent | fallback
export default function ContactForm() {
  const { t } = useLang()
  const [v, setV] = useState({ name: '', email: '', message: '', website: '' })
  const [category, setCategory] = useState(CATEGORIES[0])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [links, setLinks] = useState(null)

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending') return
    const found = validate(v)
    setErrors(found)
    setLinks(null)
    if (Object.keys(found).length) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...v, category }),
      })
      if (res.ok) {
        setStatus('sent')
        setV({ name: '', email: '', message: '', website: '' })
        return
      }
    } catch {
      // network error: fall through to the Gmail links
    }
    setLinks(compose(v, category, t('form.subject', { category, name: v.name })))
    setStatus('fallback')
  }

  const Err = ({ id }) =>
    errors[id] ? <p id={`${id}-err`} className="mt-1 text-sm text-error-text">{t(errors[id])}</p> : null
  const aria = (id) => ({ 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-err` : undefined })

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-2xl bg-canvas p-6 text-ink-deep md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">{t('form.name')}</label>
          <input id="name" value={v.name} onChange={set('name')} autoComplete="name" placeholder={t('form.namePh')} className={field} {...aria('name')} />
          <Err id="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">{t('form.email')}</label>
          <input id="email" type="email" value={v.email} onChange={set('email')} autoComplete="email" placeholder={t('form.emailPh')} className={field} {...aria('email')} />
          <Err id="email" />
        </div>
      </div>

      <div role="radiogroup" aria-label={t('form.topics')}>
        <p className="mb-1.5 text-sm font-medium">{t('form.topic')}</p>
        <div className="grid grid-cols-3 gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={category === c}
              onClick={() => setCategory(c)}
              className={`min-h-11 rounded-lg border px-2 text-sm font-medium transition-colors ${category === c ? 'border-ink bg-ink text-canvas' : 'border-mist bg-white text-body hover:border-royal hover:text-ink'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">{t('form.message')}</label>
        <textarea id="message" rows={4} value={v.message} onChange={set('message')} placeholder={t('form.messagePh')} className={`${field} resize-none`} {...aria('message')} />
        <Err id="message" />
      </div>

      {/* honeypot: hidden from people, filled in by bots; the server drops those messages */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="min-h-12 w-full rounded-full bg-ink font-medium text-canvas transition-colors hover:bg-royal disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>
      <p aria-live="polite" className="text-sm leading-relaxed text-body">
        {status === 'sent' && <span className="font-medium text-ink-deep">{t('form.done')}</span>}
        {status === 'fallback' && links && (
          <>
            {t('form.fail')}{' '}
            <a href={links.gmail} target="_blank" rel="noreferrer" className="font-medium text-royal underline underline-offset-4">{t('form.gmail')}</a>
            {' · '}
            <a href={links.mailto} className="font-medium text-royal underline underline-offset-4">{t('form.mailto')}</a>
          </>
        )}
        {(status === 'idle' || status === 'sending') && t('form.hint', { to: profile.email })}
      </p>
    </form>
  )
}
