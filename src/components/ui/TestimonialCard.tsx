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
      <div className="card-glass p-7 h-full flex flex-col group relative overflow-hidden transition-all duration-400 hover:-translate-y-1.5 border border-[--oc-border] shadow-sm hover:shadow-lg">
        {/* Background quote mark */}
        <Quote
          size={64}
          className="absolute -top-3 -right-3 opacity-[0.04] pointer-events-none"
          strokeWidth={1}
          style={{ color: 'var(--oc-violet-dark)' }}
        />

        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: stars }).map((_, j) => (
            <Star key={j} size={13} className="fill-[var(--oc-violet-dark)] text-[var(--oc-violet-dark)]" />
          ))}
        </div>

        {/* Author (top) */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, var(--oc-violet), var(--oc-violet-light))' }}
          >
            {avatar}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#111827]">{name}</div>
            <div className="text-xs text-[#111827]/30">{role}</div>
          </div>
        </div>

        {/* Quote centered */}
        <div className="flex-1 flex items-center">
          <p className="text-sm leading-relaxed italic text-[#111827]/45 text-center px-2">"{quote}"</p>
        </div>

        {/* Divider */}
        <div className="divider-glow mt-6 mb-4" />

        {/* Metric bottom */}
        {metric && (
          <div className="mt-3 pt-3 border-t border-[--oc-border] flex items-center justify-between">
            <div className="text-2xs text-[#111827]/30">{metaLabel}</div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full font-semibold text-sm" style={{ background: 'rgba(255,233,87,0.10)', color: 'var(--oc-violet-dark)' }}>{metric}</div>
          </div>
        )}

        {/* Bottom accent hover line */}
        <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(234,179,8,0.3), transparent)' }}
        />
      </div>
    </ScrollReveal>
  )
}