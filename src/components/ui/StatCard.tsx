import React from 'react'
import { LucideIcon } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import ScrollReveal from './ScrollReveal'

interface StatCardProps {
  value: number
  suffix: string
  label: string
  icon: LucideIcon
  delay?: number
  accent?: string   // tailwind color class e.g. 'text-[#7C3AED]'
}

export const StatCard: React.FC<StatCardProps> = ({
  value, suffix, label, icon: Icon, delay = 0, accent = 'text-[#7C3AED]',
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="card-glass p-7 text-center group relative overflow-hidden cursor-default transition-all duration-400 hover:-translate-y-1.5">
        {/* Hover inner glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-11 h-11 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}
          >
            <Icon size={20} className={accent} />
          </div>

          {/* Value */}
          <div className="font-heading font-extrabold text-4xl mb-2 gradient-text">
            <AnimatedCounter end={value} suffix={suffix} flash />
          </div>

          {/* Label */}
          <div className="text-xs uppercase tracking-widest font-medium text-[#111827]/30">
            {label}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-px transition-all duration-500"
          style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, transparent)' }}
        />
      </div>
    </ScrollReveal>
  )
}