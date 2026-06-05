import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Vérifier le thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else if (prefersDark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      // Passer en mode clair
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      // Passer en mode sombre
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
      aria-label="Changer le thème"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Moon size={18} className="text-white/80 hover:text-white" />
        ) : (
          <Sun size={18} className="text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  )
}