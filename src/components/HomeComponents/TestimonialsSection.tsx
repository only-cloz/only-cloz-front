import { Star } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

const testimonials = [
  {
    quote: 'Only Cloz a transformé notre pipeline commercial. En trois mois, nous avons multiplié par quatre nos rendez-vous qualifiés. Vraiment impressionnant.',
    name: 'Thomas Dupont',
    role: 'CEO — TechScale SAS',
    metric: '×4',
    metaLabel: 'RDV qualifiés — 3 mois',
    stars: 5,
  },
  {
    quote: 'Qualité irréprochable des leads, conformité RGPD vérifiée, et un suivi transparent au quotidien. Je recommande sans réserve.',
    name: 'Marie Laurent',
    role: 'Head of Sales — B2C Experts',
    metric: '98%',
    metaLabel: 'Conformité RGPD',
    stars: 5,
  },
  {
    quote: 'ROI de ×3.5 dès le premier trimestre. L\'équipe est proactive, les résultats parlent d\'eux-mêmes.',
    name: 'Pierre Morel',
    role: 'Directeur Commercial — Fintech Pro',
    metric: '×3.5',
    metaLabel: 'ROI — premier trimestre',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const { t: tr } = useI18n()
  const total = String(testimonials.length).padStart(2, '0')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header éditorial */}
        <div className="flex items-end justify-between border-b border-[--oc-border] pb-6 mb-12">
          <div>
            <p className="text-[10px] tracking-[0.16em] uppercase text-[--oc-text-faint] mb-1.5">
              {tr.testimonials.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[--oc-text] leading-tight">
              {tr.testimonials.titlePrefix}<span className="gradient-text">{tr.testimonials.highlight}</span>
            </h2>
          </div>
          <span className="text-[10px] tracking-[0.12em] uppercase text-[--oc-text-faint] hidden md:block">
            {total} {tr.testimonials.countLabel}
          </span>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const index = String(i + 1).padStart(2, '0')
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass flex flex-col p-7 h-full hover:border-[--oc-border-bright] transition-colors duration-300">

                  {/* Métrique + index */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[32px] font-bold leading-none tracking-tight text-[--oc-violet]">
                        {t.metric}
                      </div>
                      <div className="text-[10px] text-[--oc-text-faint] tracking-wide mt-1">
                        {tr.testimonials.items[i].metaLabel}
                      </div>
                    </div>
                    <span className="text-[11px] text-[--oc-text-faint] tabular-nums">
                      {index}
                    </span>
                  </div>

                  {/* Étoiles */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="h-px bg-[--oc-border] mb-5" />

                  {/* Citation */}
                  <p className="text-sm leading-relaxed text-[--oc-text-muted] flex-1 mb-6">
                    {tr.testimonials.items[i].quote}
                  </p>

                  {/* Auteur */}
                  <div className="flex items-center gap-2.5 pt-5 border-t border-[--oc-border]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[--oc-violet] opacity-40 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-[--oc-text]">{t.name}</div>
                      <div className="text-[11px] text-[--oc-text-faint]">{tr.testimonials.items[i].role}</div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}