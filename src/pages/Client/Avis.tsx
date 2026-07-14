import { Link } from 'react-router-dom'
import { Star, Quote, ArrowRight } from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

// Avis repris de la section témoignages de la home.
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

export default function Avis() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#EAB308]/15 mb-6">
              <Star size={15} className="text-[#EAB308] fill-[#EAB308]" />
              <span className="text-sm font-medium text-[#111827]/80">Avis clients</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
              Ils nous font <span className="gradient-text">confiance</span>
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed mb-6">
              Des dirigeants et responsables commerciaux témoignent des résultats obtenus avec Only Cloz.
            </p>
            {/* Note globale */}
            <div className="inline-flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span className="font-bold text-[#111827]">4,9/5</span>
              <span className="text-[#111827]/40 text-sm">· 120+ clients</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Grille d'avis */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((tm, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-glass p-6 h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EAB308] to-[#FACC15]" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(tm.stars)].map((_, s) => (
                      <Star key={s} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote size={22} className="text-[#EAB308]/25" />
                </div>
                <p className="text-[#111827]/75 text-sm leading-relaxed mb-6 flex-1">"{tm.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#EAB308]/10">
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">{tm.name}</div>
                    <div className="text-xs text-[#111827]/50">{tm.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading font-bold text-lg gradient-text">{tm.metric}</div>
                    <div className="text-[10px] text-[#111827]/40">{tm.metaLabel}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Green featured CTA */}
        <ScrollReveal>
          <div className="feature-green relative rounded-[2rem] overflow-hidden p-12 md:p-16 text-center shadow-2xl mt-20">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Rejoignez nos clients satisfaits
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Discutons de vos objectifs et faisons de votre prospection un moteur de croissance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-10 rounded-full bg-[#FFE957] text-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#FFF08A]"
              >
                Démarrer un projet
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
