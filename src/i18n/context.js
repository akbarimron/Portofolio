import { createContext, useContext } from 'react'

export const LangContext = createContext(null)

// { lang, setLang, t(key, vars), c }  c = seluruh data isi situs dalam bahasa aktif
export function useLang() {
  const v = useContext(LangContext)
  if (!v) throw new Error('useLang harus dipakai di dalam <LangProvider>')
  return v
}
