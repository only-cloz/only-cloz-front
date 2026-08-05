import { Star } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

const testimonials = [
  {
    quote: 'Only Cloz a transformé notre pipeline commercial. En trois mois, nous avons multiplié par quatre nos rendez-vous qualifiés. Vraiment impressionnant.',
    name: 'William Fournié',
    role: 'CEO',
    metric: '×4',
    metaLabel: 'RDV qualifiés 3 mois',
    stars: 5,
  },
  {
    quote: 'Qualité irréprochable des leads, conformité RGPD vérifiée, et un suivi transparent au quotidien. Je recommande sans réserve.',
    name: 'Naël Ravatomanga ',
    role: 'Head of Sales',
    metric: '98%',
    metaLabel: 'Conformité RGPD',
    stars: 5,
  },
  {
    quote: 'ROI de ×3.5 dès le premier trimestre. L\'équipe est proactive, les résultats parlent d\'eux-mêmes.',
    name: 'Inès Foixet',
    role: 'Directeur Commercial',
    metric: '×3.5',
    metaLabel: 'ROI premier trimestre',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const { t: tr } = useI18n()
  const total = String(testimonials.length).padStart(2, '0')

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header éditorial */}
        <div className="flex items-end justify-between border-b border-[--oc-border] pb-4 mb-8">
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
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => {
            const index = String(i + 1).padStart(2, '0')
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass flex flex-col p-6 h-full border border-[--oc-border] shadow-sm hover:border-[--oc-border-bright] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                  {/* Auteur en haut */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, var(--oc-violet), var(--oc-violet-light))' }}>
                        {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[--oc-text]">{t.name}</div>
                        <div className="text-xs text-[#111827]/55">{tr.testimonials.items[i].role}</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[--oc-text-faint] tabular-nums">{index}</span>
                  </div>

                  {/* Étoiles */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="h-px bg-[--oc-border] mb-6" />

                  {/* Citation centrée */}
                  <div className="flex-1 flex items-center">
                    <p className="text-[15px] leading-relaxed text-[#111827]/80 text-center px-2">
                      {tr.testimonials.items[i].quote}
                    </p>
                  </div>

                  {/* Métrique en bas */}
                  <div className="mt-6 pt-4 border-t border-[--oc-border] flex items-center justify-between">
                    <div className="text-[11px] text-[#111827]/45 tracking-wide">{tr.testimonials.items[i].metaLabel}</div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-[--oc-violet]/10 text-[--oc-violet] rounded-full font-semibold text-sm">{t.metric}</div>
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