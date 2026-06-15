import React from 'react'
import { LucideIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** CSS hex or rgba string for this card's accent color */
  accentColor?: string
  delay?: number
}

export const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
  accentColor = '#7C3AED',
  delay = 0,
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="card-glass p-7 group transition-all duration-400 hover:-translate-y-1.5 relative overflow-hidden"
      >
        {/* Subtle accent corner glow on hover */}
        <div
          className="absolute -top-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: accentColor }}
        />

        <div className="relative z-10 flex items-start gap-5">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${accentColor}10`,
              border: `1px solid ${accentColor}20`,
            }}
          >
            <Icon size={18} style={{ color: accentColor }} />
          </div>

          <div>
            <h3
              className="font-heading font-bold text-xs tracking-widest uppercase mb-2.5"
              style={{ color: accentColor }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#111827]/45">
              {description}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}