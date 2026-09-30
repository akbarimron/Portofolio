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

// No backend: the form opens a Gmail compose window already addressed to
// profile.email with subject and body filled in. The visitor only presses
// Send in their own account. A mailto: link covers people without Gmail.
export default function ContactForm() {
  const { t } = useLang()
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [category, setCategory] = useState(CATEGORIES[0])
  const [errors, setErrors] = useState({})
  const [links, setLinks] = useState(null)

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }))

  function submit(e) {
    e.preventDefault()
    const found = validate(v)
    setErrors(found)
    setLinks(null)
    if (Object.keys(found).length) return
    const urls = compose(v, category, t('form.subject', { category, name: v.name }))
    setLinks(urls)
    // Don't pass 'noopener' here: it makes window.open() return null even when the
    // tab opened, and we'd wrongly navigate this page away too. Cut the link by hand.
    const tab = window.open(urls.gmail, '_blank')
    if (tab) tab.opener = null
    else window.location.href = urls.gmail // popup really was blocked
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

      <button type="submit" className="min-h-12 w-full rounded-full bg-ink font-medium text-canvas transition-colors hover:bg-royal">
        {t('form.submit')}
      </button>
      <p aria-live="polite" className="text-sm leading-relaxed text-body">
        {links ? (
          <>
            {t('form.sent', { to: profile.email })}{' '}
            <a href={links.mailto} className="font-medium text-royal underline underline-offset-4">{t('form.mailto')}</a>
          </>
        ) : (
          t('form.hint', { to: profile.email })
        )}
      </p>
    </form>
  )
}
