// Vercel serverless function: menerima form kontak lalu mengirimnya ke Gmail pemilik situs.
//
// Environment variable (Vercel, Project Settings, Environment Variables):
//   GMAIL_USER          alamat Gmail pengirim, mis. akbarimrons@gmail.com
//   GMAIL_APP_PASSWORD  App Password Google (16 karakter), BUKAN kata sandi akun
//   CONTACT_TO          (opsional) tujuan email; bawaannya sama dengan GMAIL_USER
//
// Tanpa variabel itu fungsi membalas 503 dan form di halaman beralih ke tautan Gmail.
import nodemailer from 'nodemailer'

const CATEGORIES = ['Web & Software', 'Motion & Video', '3D']
const EMAIL = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/

// satu baris saja: mencegah penyisipan header email lewat baris baru
const line = (s, max) => String(s ?? '').replace(/[\r\n\t]+/g, ' ').replace(/[<>"]/g, '').trim().slice(0, max)

export function parse(body) {
  const b = body && typeof body === 'object' ? body : {}
  const name = line(b.name, 80)
  const email = line(b.email, 120)
  const category = CATEGORIES.includes(b.category) ? b.category : CATEGORIES[0]
  const message = String(b.message ?? '').replace(/\r\n/g, '\n').trim().slice(0, 5000)
  const errors = []
  if (!name) errors.push('name')
  if (!EMAIL.test(email)) errors.push('email')
  if (message.length < 10) errors.push('message')
  return { name, email, category, message, errors }
}

export function buildMail({ name, email, category, message }, from, to) {
  return {
    from: { name: 'Portofolio', address: from },
    to,
    replyTo: { name, address: email },
    subject: `[${category}] Pesan dari ${name}`,
    text: `${message}\n\n--\n${name}\n${email}\nTopik: ${category}\nDikirim dari formulir kontak portofolio.`,
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!user || !pass) return res.status(503).json({ error: 'not_configured' })

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = null }
  }

  // kolom jebakan "website": manusia tidak melihatnya, bot mengisinya. Pura-pura berhasil.
  if (body && body.website) return res.status(200).json({ ok: true })

  const data = parse(body)
  if (data.errors.length) return res.status(400).json({ error: 'invalid', fields: data.errors })

  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } })
    await transporter.sendMail(buildMail(data, user, process.env.CONTACT_TO || user))
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact: gagal kirim email', err && err.code, err && err.message)
    return res.status(502).json({ error: 'send_failed' })
  }
}
