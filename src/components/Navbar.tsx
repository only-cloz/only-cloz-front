import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

// ─── Structure de navigation avec mega-menus (inspirée de noiise.com) ───────
const navLinks = [
  { path: '/', label: 'Accueil' },
  {
    path: '/expertises',
    label: 'Expertises',
    megaMenu: [
      {
        title: 'Acquisition',
        items: [
          { label: 'SEO / Référencement', path: '/services/seo' },
          { label: 'SEA / Google Ads', path: '/services/sea' },
          { label: 'Social Ads', path: '/services/social-ads' },
         
        ],
      },
      {
        title: 'Création',
        items: [
          { label: 'Création de site web', path: '/services/creation-site' },
          { label: 'Webdesign & UX', path: '/services/webdesign' },
          { label: 'Content Marketing', path: '/services/content' },
          { label: 'Social Media', path: '/services/social-media' },
        ],
      },

    ],
  },
 
  {
    path: '/Resources',
    label: "Resources",
    dropdown: [
      { label: 'blog', path: '/Resources/blog' },
      { label: 'livre blanc', path: '/Resources/livre-blanc' },
      { label: 'Video', path: '/Resources/video' },
      { label: 'Guide', path: '/Resources/guide' },
      
    ],
  },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
]

// ─── Mega-menu Desktop ───────────────────────────────────────────────────────
function MegaMenu({ columns }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-dark-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden min-w-[580px]"
    >
      {/* Flèche indicatrice */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-dark-900 border-l border-t border-black/10 dark:border-white/10 rotate-45 rounded-sm" />

      <div className="flex gap-0 p-6">
        {columns.map((col, i) => (
          <div key={i} className={`flex-1 ${i < columns.length - 1 ? 'border-r border-black/5 dark:border-white/5 pr-6 mr-6' : ''}`}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400 mb-3 pb-2 border-b border-black/5 dark:border-white/5">
              {col.title}
            </p>
            <ul className="flex flex-col gap-1">
              {col.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 hover:dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Dropdown simple Desktop ─────────────────────────────────────────────────
function Dropdown({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-dark-900 border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden min-w-[200px]"
    >
      {/* Flèche indicatrice */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-dark-900 border-l border-t border-black/10 dark:border-white/10 rotate-45 rounded-sm" />

      <ul className="p-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block px-4 py-2.5 rounded-xl text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 hover:dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150 whitespace-nowrap"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// ─── Composant NavItem Desktop ────────────────────────────────────────────────
function NavItem({ link, isActive }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)
  const hasChildren = link.megaMenu || link.dropdown

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    // Délai de 150ms avant fermeture (évite fermeture accidentelle)
    timerRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link.path}
        className={`relative flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          isActive
            ? 'dark:text-white text-gray-900'
            : 'dark:text-white/60 text-gray-600 hover:dark:text-white hover:text-gray-900'
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full border border-black/10 dark:border-white/10"
            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
          />
        )}
        <span className="relative z-10">{link.label}</span>
        {hasChildren && (
          <motion.span
            className="relative z-10"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.span>
        )}
      </Link>

      <AnimatePresence>
        {open && hasChildren && (
          link.megaMenu
            ? <MegaMenu columns={link.megaMenu} />
            : <Dropdown items={link.dropdown} />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Composant NavItem Mobile (accordéon) ────────────────────────────────────
function MobileNavItem({ link, isActive, index }) {
  const [open, setOpen] = useState(false)
  const hasChildren = link.megaMenu || link.dropdown

  // Aplatir les sous-items (mega-menu ou dropdown simple)
  const allSubItems = link.megaMenu
    ? link.megaMenu.flatMap((col) => [{ label: col.title, isTitle: true }, ...col.items])
    : link.dropdown || []

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      {hasChildren ? (
        <div>
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all ${
              isActive
                ? 'bg-brand-500/20 dark:text-brand-400 text-brand-600 border border-brand-500/30'
                : 'dark:text-white/70 text-gray-600 hover:dark:text-white hover:text-gray-900 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{link.label}</span>
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pl-4 pb-2 flex flex-col gap-0.5 mt-1">
                  {allSubItems.map((item, i) =>
                    item.isTitle ? (
                      <p key={i} className="text-xs font-bold uppercase tracking-widest text-brand-500 dark:text-brand-400 px-4 pt-3 pb-1">
                        {item.label}
                      </p>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 rounded-xl text-base text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          to={link.path}
          className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all ${
            isActive
              ? 'bg-brand-500/20 dark:text-brand-400 text-brand-600 border border-brand-500/30'
              : 'dark:text-white/70 text-gray-600 hover:dark:text-white hover:text-gray-900 hover:bg-black/5 dark:hover:bg-white/5'
          }`}
        >
          {link.label}
        </Link>
      )}
    </motion.div>
  )
}

// ─── Navbar principale ────────────────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer menu mobile au changement de route
  useEffect(() => { setIsOpen(false) }, [location])

  // Fermer menu mobile au clic en dehors (fonctionnalité noiise.com)
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Bloquer le scroll body quand le menu mobile est ouvert (fonctionnalité noiise.com)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-black/10 dark:border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300 group-hover:scale-110">
              <Zap size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight dark:text-white text-gray-900">
              Only<span className="text-brand-400">Cloz</span>
            </span>
          </Link>

          {/* Desktop nav — avec mega-menus au survol */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.path}
                link={link}
                isActive={
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path)
                }
              />
            ))}
          </nav>

          {/* CTA + ThemeToggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center dark:text-white/80 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Overlay sombre derrière le menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu mobile — accordéon avec sous-items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm bg-white dark:bg-dark-900 shadow-2xl md:hidden flex flex-col"
          >
            {/* Header du drawer */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/5">
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="font-heading font-bold text-lg dark:text-white text-gray-900">
                  Only<span className="text-brand-400">Cloz</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 dark:text-white/80 text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Liens de navigation avec accordéons */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <MobileNavItem
                  key={link.path}
                  link={link}
                  isActive={
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path)
                  }
                  index={i}
                />
              ))}
            </nav>

            {/* CTA en bas du drawer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-4 pb-6 pt-3 border-t border-black/5 dark:border-white/5"
            >
              <Link
                to="/contact"
                className="btn-primary w-full justify-center text-base"
                onClick={() => setIsOpen(false)}
              >
                Démarrer un projet
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
