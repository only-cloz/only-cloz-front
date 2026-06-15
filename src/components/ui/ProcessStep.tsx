import React from 'react'
import { LucideIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const STEP_COLORS = [
  { number: '#7C3AED', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.20)' },
  { number: '#8B5CF6', bg: 'rgba(139,91,246,0.08)', border: 'rgba(139,91,246,0.20)' },
  { number: '#A78BFA', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.18)' },
  { number: '#C084FC', bg: 'rgba(192,132,252,0.06)', border: 'rgba(192,132,252,0.18)' },
]

interface ProcessStepProps {
  step: string
  title: string
  description: string
  icon: LucideIcon
  index?: number
  delay?: number
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step, title, description, icon: Icon, index = 0, delay = 0,
}) => {
  const colors = STEP_COLORS[index % STEP_COLORS.length]

  return (
    <ScrollReveal delay={delay}>
      <div className="group relative text-center">
        {/* Step bubble */}
        <div
          className="relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center mx-auto mb-4 transition-all duration-400 group-hover:scale-110"
          style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
        >
          <span
            className="font-heading font-black text-2xl leading-none"
            style={{ color: colors.number }}
          >
            {step}
          </span>

          {/* Glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ boxShadow: `0 0 20px ${colors.number}30` }}
          />
        </div>

        {/* Icon below bubble */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto -mt-1.5 mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.12)' }}
        >
          <Icon size={16} style={{ color: colors.number }} />
        </div>

        <h3 className="font-heading font-bold text-base mb-2.5 text-[#111827]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed px-2 text-[#111827]/45">
          {description}
        </p>
      </div>
    </ScrollReveal>
  )
}