import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  // Par défaut, le thème est clair (comme votre CSS)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Vérifier le thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Par défaut : thème clair
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
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#7C3AED]/10"
      aria-label="Changer le thème"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Moon size={18} className="text-[#111827]/80 hover:text-[#7C3AED]" />
        ) : (
          <Sun size={18} className="text-[#7C3AED]" />
        )}
      </motion.div>
    </motion.button>
  )
}