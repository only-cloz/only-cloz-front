import React from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  highlight?: string
}

export default function SectionTitle({ label, title, subtitle, align = 'center', highlight }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const maxWidth = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${alignClass}`}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 uppercase tracking-[0.2em] bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight ${maxWidth}`}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`text-white/50 text-base md:text-lg leading-relaxed ${maxWidth}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
