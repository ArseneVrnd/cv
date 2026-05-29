import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { ui } from './ui.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'cv-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr'
    return window.localStorage.getItem(STORAGE_KEY) || 'fr'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  }, [])

  // pick(): resolve a { fr, en } object (or plain value) for the active language
  const pick = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value) && ('fr' in value || 'en' in value)) {
        return value[lang] ?? value.en ?? value.fr
      }
      return value
    },
    [lang],
  )

  // t(): shorthand for UI label dictionary lookups
  const t = useCallback((key) => ui[key]?.[lang] ?? key, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, pick, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
