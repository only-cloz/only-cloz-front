import { Globe2, Filter, Zap, BarChart3 } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

const steps = [
  {
    step: '01',
    title: 'Audit & Cadrage',
    desc: 'Analyse de votre marché, définition de votre client idéal (ICP) et fixation des objectifs chiffrés. On ne lance rien sans avoir tout compris de votre cible.',
    icon: Globe2,
    color: 'from-[#EAB308]/15 to-[#FACC15]/5',
    border: 'border-[#EAB308]/20 group-hover:border-[#EAB308]/50',
  },
  {
    step: '02',
    title: 'Activation des campagnes',
    desc: 'Création des visuels, des tunnels de conversion et lancement des campagnes sur les canaux adaptés à votre secteur. Chaque euro investi est tracé dès le premier jour.',
    icon: Zap,
    color: 'from-[#EC4899]/15 to-[#F472B6]/5',
    border: 'border-[#EC4899]/20 group-hover:border-[#EC4899]/50',
  },
  {
    step: '03',
    title: 'Qualification téléphonique',
    desc: 'Chaque prospect généré est contacté par un collaborateur dédié. Intérêt confirmé, profil vérifié, consentement recueilli. Seuls les leads chauds passent à l\'étape suivante.',
    icon: Filter,
    color: 'from-[#FACC15]/15 to-[#EAB308]/5',
    border: 'border-[#FACC15]/20 group-hover:border-[#FACC15]/50',
  },
  
  {
    step: '04',
    title: 'Livraison & pilotage',
    desc: 'Les rendez-vous qualifiés sont livrés directement dans votre CRM. Reporting hebdomadaire, KPIs clairs et optimisations continues. vous pilotez votre croissance en temps réel.',
    icon: BarChart3,
    color: 'from-[#10B981]/15 to-[#34D399]/5',
    border: 'border-[#10B981]/20 group-hover:border-[#10B981]/50',
  },
]

export default function ProcessSection() {
  const { t } = useI18n()
  return (
    <section className="py-24 bg-[#F9FAFB] border-y border-[rgba(17,24,39,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label={t.process.label}
          title={t.process.title}
          subtitle={t.process.subtitle}
          highlight={t.process.highlight}
        />

        <div className="mt-5 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] hidden lg:block h-px bg-gradient-to-r from-transparent via-[#EAB308]/15 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative text-center">
                  {/* Step number bubble */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#EAB308] to-[#CA8A04] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#EAB308]/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#EAB308]/30">
                    <span className="font-sans font-bold text-2xl text-[#111827] tabular-nums">{step.step}</span>
                  </div>

                  {/* Icon below bubble */}
                  <div className="w-9 h-9 bg-white border border-[#EAB308]/15 rounded-xl flex items-center justify-center mx-auto -mt-2 mb-5 shadow-sm">
                    <step.icon size={16} className="text-[#EAB308]" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#111827] mb-2.5">{t.process.steps[i].title}</h3>
                  <p className="text-[#111827]/45 text-sm leading-relaxed px-2">{t.process.steps[i].desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}