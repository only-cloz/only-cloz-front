import { Target, Shield, TrendingUp, Clock } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 500, suffix: '+', label: 'Leads livrés / mois', icon: Target, color: 'from-[#7C3AED]/10 to-[#8B5CF6]/5' },
  { value: 98,  suffix: '%', label: 'Conformité RGPD',     icon: Shield,    color: 'from-[#10B981]/10 to-[#34D399]/5' },
  { value: 3,   suffix: 'x', label: 'ROI moyen clients',   icon: TrendingUp, color: 'from-[#8B5CF6]/10 to-[#EC4899]/5' },
  { value: 48,  suffix: 'h', label: 'Délai de livraison',  icon: Clock,     color: 'from-[#F59E0B]/10 to-[#F97316]/5' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label, icon: Icon, color }, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-glass p-7 text-center group hover:border-[#7C3AED]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-[#7C3AED]" />
                  </div>
                  <div className="font-heading font-black text-4xl text-[#111827] mb-1.5">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </div>
                  <div className="text-[#111827]/40 text-xs tracking-wide">{label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}