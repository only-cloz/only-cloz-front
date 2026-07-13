import React from 'react'
import ScrollReveal from './ScrollReveal'

interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
  highlight?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  highlight,
  align = 'center',
}: SectionTitleProps) {
  // Wrap the highlight word in a gradient span
  const renderTitle = () => {
    if (!highlight) return title
    const idx = title.indexOf(highlight)
    if (idx === -1) return title
    return (
      <>
        {title.slice(0, idx)}
        <span className="gradient-text">{highlight}</span>
        {title.slice(idx + highlight.length)}
      </>
    )
  }

  const isCenter = align === 'center'

  return (
    <ScrollReveal>
      <div className={`${isCenter ? 'text-center mx-auto' : ''} max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
        {/* Eyebrow */}
        <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] pulse-dot" />
            {label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="heading-display text-3xl md:text-4xl lg:text-5xl mb-5 text-[#111827]"
          style={{ letterSpacing: '-0.03em' }}
        >
          {renderTitle()}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base md:text-lg leading-relaxed text-[#111827]/45">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}