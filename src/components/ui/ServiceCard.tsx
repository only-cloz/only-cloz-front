import React from 'react'
import { LucideIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  /** Tailwind gradient classes for the hover background */
  hoverGradient?: string
  /** Icon color class */
  iconColor?: string
  /** Top border accent color (CSS color string) */
  accentColor?: string
  delay?: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  tags,
  hoverGradient = 'from-[#7C3AED]/8 to-[#8B5CF6]/4',
  iconColor     = 'text-[#7C3AED]',
  accentColor   = '#7C3AED',
  delay         = 0,
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="card-glass p-6 h-full group relative overflow-hidden transition-all duration-400 hover:-translate-y-2"
        style={{ '--accent': accentColor } as React.CSSProperties}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
        />

        {/* Hover gradient fill */}
        <div className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10">
          {/* Icon wrapper */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}
          >
            <Icon size={20} className={iconColor} />
          </div>

          <h3 className="font-heading font-bold text-base mb-3 text-[#111827]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-5 text-[#111827]/45">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, j) => (
              <span key={j} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}