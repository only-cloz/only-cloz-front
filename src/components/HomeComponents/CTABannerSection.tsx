import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

export default function CtaBannerSection() {
  const { t } = useI18n()
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div
            className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center shadow-2xl"
            style={{ background: 'linear-gradient(160deg, #0B1A38 0%, #0A1730 55%, #060E1F 100%)' }}
          >
            {/* Diagonal texture */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 14px)',
              }}
            />

            {/* Ambient glow */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-72 rounded-full blur-[110px] pointer-events-none"
              style={{ background: 'rgba(234,179,8,0.35)' }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.9), transparent)' }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5 tracking-tight leading-tight">
                {t.cta.titlePrefix}
                <span style={{ color: '#FDE68A' }}>{t.cta.highlight}</span>{t.cta.titleSuffix}
              </h2>

              <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed">
                {t.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-10 rounded-full bg-[#FFE957] text-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#FFF08A] w-full sm:w-auto"
                >
                  {t.cta.primary}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/a-propos"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-8 rounded-full text-white border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60 w-full sm:w-auto"
                >
                  {t.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
