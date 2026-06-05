import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: ScrollRevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
