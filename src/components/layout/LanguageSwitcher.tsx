import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '../../i18n'
import type { Lang } from '../../i18n/translations'

/* ── Mini drapeaux SVG (rendu fiable cross-plateforme) ── */
const FrFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[3px] block">
    <rect width="20" height="14" fill="#FFFFFF" />
    <rect width="6.67" height="14" fill="#0055A4" />
    <rect x="13.33" width="6.67" height="14" fill="#EF4135" />
  </svg>
)

const UsFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[3px] block">
    <rect width="20" height="14" fill="#B22234" />
    <rect y="2" width="20" height="2" fill="#FFFFFF" />
    <rect y="6" width="20" height="2" fill="#FFFFFF" />
    <rect y="10" width="20" height="2" fill="#FFFFFF" />
    <rect width="9" height="8" fill="#3C3B6E" />
  </svg>
)

const EsFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-[3px] block">
    <rect width="20" height="14" fill="#AA151B" />
    <rect y="3.5" width="20" height="7" fill="#F1BF00" />
  </svg>
)

const LANGS = [
  { code: 'en', label: 'English',  short: 'EN', Flag: UsFlag },
  { code: 'fr', label: 'Français', short: 'FR', Flag: FrFlag },
  { code: 'es', label: 'Español',  short: 'ES', Flag: EsFlag },
] as const

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = (code: Lang) => {
    setLang(code)
    setOpen(false)
  }

  const active = LANGS.find(l => l.code === lang) ?? LANGS[1]
  const ActiveFlag = active.Flag

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-full text-sm font-medium transition-all duration-200"
        style={{ color: 'var(--oc-text-muted)' }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--oc-text)'; e.currentTarget.style.background = 'rgba(234,179,8,0.06)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--oc-text-muted)'; e.currentTarget.style.background = 'transparent' }}
        aria-label="Changer la langue"
      >
        <ActiveFlag />
        <span>{active.short}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="mega-glass absolute top-full right-0 mt-3 rounded-2xl overflow-hidden min-w-[168px] p-1.5"
          >
            {LANGS.map(item => {
              const Flag = item.Flag
              const isActive = item.code === lang
              return (
                <button
                  key={item.code}
                  onClick={() => select(item.code)}
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm transition-all"
                  style={{ color: isActive ? 'var(--oc-violet)' : 'var(--oc-text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(234,179,8,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  <Flag />
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  {isActive && <Check size={14} style={{ color: 'var(--oc-violet)' }} />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
