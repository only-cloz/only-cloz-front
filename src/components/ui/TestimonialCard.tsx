import React from 'react'
import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatar: string
  stars: number
  /** Optional highlighted metric (e.g. "×4 RDV") */
  metric?: string
  metaLabel?: string
  delay?: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote, name, role, avatar, stars, metric, metaLabel, delay = 0,
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="card-glass p-7 h-full flex flex-col group relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5">
        {/* Background quote mark */}
        <Quote
          size={64}
          className="absolute -top-3 -right-3 opacity-[0.04] text-[#EAB308] pointer-events-none"
          strokeWidth={1}
        />

        {/* Metric badge top-right */}
        {metric && (
          <div className="absolute top-5 right-5 text-right">
            <div className="font-heading font-black text-lg gradient-text leading-none">{metric}</div>
            {metaLabel && (
              <div className="text-2xs mt-0.5 text-[#111827]/30">{metaLabel}</div>
            )}
          </div>
        )}

        {/* Stars */}
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: stars }).map((_, j) => (
            <Star key={j} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm leading-relaxed flex-1 mb-6 italic text-[#111827]/45">
          "{quote}"
        </p>

        {/* Divider */}
        <div className="divider-glow mb-5" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #EAB308, #A78BFA)' }}
          >
            {avatar}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#111827]">{name}</div>
            <div className="text-xs text-[#111827]/30">{role}</div>
          </div>
        </div>

        {/* Bottom accent hover line */}
        <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(234,179,8,0.3), transparent)' }}
        />
      </div>
    </ScrollReveal>
  )
}