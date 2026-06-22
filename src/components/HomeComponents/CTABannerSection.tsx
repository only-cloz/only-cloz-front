import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

export default function CtaBannerSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#7C3AED]/15 p-12 md:p-20 text-center shadow-lg">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />

            <div className="relative z-10 max-w-2xl mx-auto">

              <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#111827] mb-5 tracking-tight leading-tight">
                Prêt à recevoir des{' '}
                <span className="gradient-text">RDV</span> ?
              </h2>

              <p className="text-[#111827]/45 text-base mb-10 leading-relaxed">
                Parlez-nous de vos besoins. Nous vous proposons un plan d'action personnalisé sous 24 heures.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-sm py-4 px-10 glow-brand">
                  Commencer maintenant
                  <ArrowRight size={16} />
                </Link>
                <Link to="/a-propos" className="btn-outline text-sm py-4 px-8">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}