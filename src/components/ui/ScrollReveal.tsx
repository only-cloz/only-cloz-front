import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay    = 0,
  direction = 'up',
  distance  = 32,
  className = '',
}: ScrollRevealProps) {
  const initial = {
    opacity: 0,
    y: direction === 'up'   ? distance  : 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    scale: direction === 'up' ? 0.98 : 1,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],   /* expo-out — feels premium */
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}