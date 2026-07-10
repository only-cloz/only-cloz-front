import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang, Translation } from './translations'

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const I18nContext = createContext<I18nContextValue | null>(null)

function isLang(value: string | null): value is Lang {
  return value === 'fr' || value === 'en' || value === 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (isLang(saved)) setLangState(saved)
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}
