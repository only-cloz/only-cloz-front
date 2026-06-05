import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300 group-hover:scale-110">
              <Zap size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              Only<span className="text-brand-400">Cloz</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
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
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6">
                <Link to="/contact" className="btn-primary w-full justify-center text-base">
                  Démarrer un projet
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
