import { Star } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const testimonials = [
  {
    quote: 'Only Cloz a transformé notre pipeline commercial. En 3 mois, nous avons multiplié par 4 nos RDV qualifiés. Vraiment impressionnant.',
    name: 'Thomas Dupont',
    role: 'CEO — TechScale SAS',
    avatar: 'TD',
    stars: 5,
    metric: '×4 RDV',
    metaLabel: 'en 3 mois',
  },
  {
    quote: 'Qualité irréprochable des leads, conformité RGPD vérifiée, et un suivi transparent au quotidien. Je recommande à 100%.',
    name: 'Marie Laurent',
    role: 'Head of Sales — B2B Experts',
    avatar: 'ML',
    stars: 5,
    metric: '98%',
    metaLabel: 'conformité RGPD',
  },
  {
    quote: 'ROI de ×3.5 dès le premier trimestre. L\'équipe est proactive, les résultats parlent d\'eux-mêmes.',
    name: 'Pierre Morel',
    role: 'Directeur Commercial — Fintech Pro',
    avatar: 'PM',
    stars: 5,
    metric: '×3.5 ROI',
    metaLabel: 'dès le T1',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Témoignages"
          title="Ce que disent nos clients"
          subtitle="Des résultats concrets, des partenaires satisfaits."
          highlight="nos clients"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-glass p-7 relative group hover:border-[#7C3AED]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                {/* Metric badge */}
                <div className="absolute top-5 right-5 text-right">
                  <div className="font-heading font-black text-xl gradient-text">{t.metric}</div>
                  <div className="text-[10px] text-[#111827]/30">{t.metaLabel}</div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#111827]/60 text-sm leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#7C3AED]/10">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-xl flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{t.name}</div>
                    <div className="text-[11px] text-[#111827]/35">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}