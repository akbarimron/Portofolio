import { useCallback, useEffect, useMemo, useState } from 'react'
import { LangContext } from './context'
import { content } from './content'
import id from './ui.id'
import en from './ui.en'

export const LANGS = ['id', 'en']
const dictionaries = { id, en }
const KEY = 'lang'

// Urutan: ?lang=en di alamat (berguna untuk dibagikan), lalu pilihan yang tersimpan,
// lalu Indonesia. Penyimpanan bisa gagal (mode privat), jadi selalu dibungkus try.
function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (LANGS.includes(q)) return q
    const saved = window.localStorage.getItem(KEY)
    if (LANGS.includes(saved)) return saved
  } catch { /* tetap Indonesia */ }
  return 'id'
}

const fill = (text, vars) => (vars ? text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m)) : text)

export default function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return
    setLangState(next)
    try { window.localStorage.setItem(KEY, next) } catch { /* abaikan */ }
  }, [])

  const t = useCallback(
    (key, vars) => {
      const text = dictionaries[lang][key] ?? dictionaries.id[key]
      if (text === undefined) {
        if (import.meta.env.DEV) console.warn(`[i18n] kunci tidak ada: ${key}`)
        return key
      }
      return fill(text, vars)
    },
    [lang],
  )

  // tab, pembaca layar, dan hasil pencarian ikut bahasa yang dipilih
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t('meta.title')
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t, c: content[lang] }), [lang, setLang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
