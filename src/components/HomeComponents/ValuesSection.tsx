import { Target, Eye, TrendingUp, Shield, Award, Users } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const values = [
  {
    icon: Target,
    title: 'PRÉCISION',
    desc: 'Secteur, géographie, comportement — chaque campagne est construite autour de vos critères. Zéro bruit, uniquement des opportunités réelles.',
    accent: 'text-[#7C3AED]',
    bg: 'from-[#7C3AED]/10 to-[#8B5CF6]/5',
  },
  {
    icon: Eye,
    title: 'TRANSPARENCE',
    desc: 'Reporting clair, KPIs mesurables, zéro jargon. Vous savez exactement ce que vous obtenez et pour quel résultat concret.',
    accent: 'text-[#06B6D4]',
    bg: 'from-[#06B6D4]/10 to-[#3B82F6]/5',
  },
  {
    icon: TrendingUp,
    title: 'RÉSULTATS',
    desc: 'Notre succès est lié au vôtre. Nous nous mesurons à vos taux de conversion, coût d\'acquisition et ROI. Pas aux métriques de vanité.',
    accent: 'text-[#10B981]',
    bg: 'from-[#10B981]/10 to-[#34D399]/5',
  },
  {
    icon: Shield,
    title: 'CONFORMITÉ',
    desc: 'Toutes nos bases de données et campagnes respectent scrupuleusement la réglementation RGPD européenne. Votre réputation est protégée.',
    accent: 'text-[#3B82F6]',
    bg: 'from-[#3B82F6]/10 to-[#6366F1]/5',
  },
  {
    icon: Award,
    title: 'QUALITÉ',
    desc: 'Chaque lead est qualifié manuellement. Nous préférons livrer moins pour livrer mieux. La performance de nos clients dépend de la qualité de nos données.',
    accent: 'text-[#F59E0B]',
    bg: 'from-[#F59E0B]/10 to-[#F97316]/5',
  },
  {
    icon: Users,
    title: 'PARTENARIAT',
    desc: 'Nous construisons une relation durable avec chacun de nos clients, basée sur la confiance, les résultats et un accompagnement long terme.',
    accent: 'text-[#8B5CF6]',
    bg: 'from-[#8B5CF6]/10 to-[#EC4899]/5',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Nos valeurs"
          title="Ce qui nous distingue"
          subtitle="Six principes fondamentaux qui guident chacune de nos décisions et garantissent votre satisfaction."
          highlight="distingue"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-glass p-7 group hover:border-[#7C3AED]/25 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-10 h-10 bg-[#F9FAFB] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <v.icon size={18} className={v.accent} />
                  </div>
                  <div>
                    <h3 className={`font-heading font-bold text-xs tracking-widest uppercase mb-2 ${v.accent}`}>{v.title}</h3>
                    <p className="text-[#111827]/50 text-sm leading-relaxed">{v.desc}</p>
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