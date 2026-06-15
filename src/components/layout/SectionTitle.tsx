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
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-[0.2em] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full w-fit">
          <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-pulse" />
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#111827] leading-tight tracking-tight ${maxWidth}`}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`text-[#111827]/50 text-base md:text-lg leading-relaxed ${maxWidth}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}