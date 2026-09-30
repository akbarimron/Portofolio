import { useState } from 'react'
import { profile } from '../data/profile'

const CATEGORIES = ['Web & Software', 'Motion & Video', '3D']
const field =
  'w-full rounded-lg border border-mist bg-white px-4 py-3 text-base text-ink-deep placeholder:text-hint focus-visible:border-royal'

function validate({ name, email, message }) {
  const e = {}
  if (!name.trim()) e.name = 'Isi nama Anda.'
  if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Masukkan alamat email yang valid.'
  if (message.trim().length < 10) e.message = 'Tulis minimal 10 karakter.'
  return e
}

const compose = ({ name, email, message }, category) => {
  const subject = `[${category}] Pesan dari ${name}`
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
    const urls = compose(v, category)
    setLinks(urls)
    // Don't pass 'noopener' here: it makes window.open() return null even when the
    // tab opened, and we'd wrongly navigate this page away too. Cut the link by hand.
    const tab = window.open(urls.gmail, '_blank')
    if (tab) tab.opener = null
    else window.location.href = urls.gmail // popup really was blocked
  }

  const Err = ({ id }) =>
    errors[id] ? <p id={`${id}-err`} className="mt-1 text-sm text-error-text">{errors[id]}</p> : null
  const aria = (id) => ({ 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-err` : undefined })

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-2xl bg-canvas p-6 text-ink-deep md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nama</label>
          <input id="name" value={v.name} onChange={set('name')} autoComplete="name" placeholder="Nama Anda" className={field} {...aria('name')} />
          <Err id="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email Anda</label>
          <input id="email" type="email" value={v.email} onChange={set('email')} autoComplete="email" placeholder="email@contoh.com" className={field} {...aria('email')} />
          <Err id="email" />
        </div>
      </div>

      <div role="radiogroup" aria-label="Kategori pesan">
        <p className="mb-1.5 text-sm font-medium">Topik</p>
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
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Pesan</label>
        <textarea id="message" rows={4} value={v.message} onChange={set('message')} placeholder="Tulis tujuan kolaborasi, kebutuhan, atau jadwal." className={`${field} resize-none`} {...aria('message')} />
        <Err id="message" />
      </div>

      <button type="submit" className="min-h-12 w-full rounded-full bg-ink font-medium text-canvas transition-colors hover:bg-royal">
        Buka di Gmail, tinggal kirim
      </button>
      <p aria-live="polite" className="text-sm leading-relaxed text-body">
        {links ? (
          <>
            Gmail terbuka di tab baru, sudah tertuju ke {profile.email}. Tekan Kirim di sana.{' '}
            <a href={links.mailto} className="font-medium text-royal underline underline-offset-4">Tidak memakai Gmail? Buka aplikasi email lain.</a>
          </>
        ) : (
          `Pesan dikirim dari akun email Anda sendiri ke ${profile.email}.`
        )}
      </p>
    </form>
  )
}
