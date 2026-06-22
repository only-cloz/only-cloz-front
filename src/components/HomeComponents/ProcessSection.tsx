import { Globe2, Filter, Zap, BarChart3 } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const steps = [
  {
    step: '01',
    title: 'Audit & Cadrage',
    desc: 'Analyse de votre marché, définition de votre client idéal (ICP) et fixation des objectifs chiffrés. On ne lance rien sans avoir tout compris de votre cible.',
    icon: Globe2,
    color: 'from-[#7C3AED]/15 to-[#8B5CF6]/5',
    border: 'border-[#7C3AED]/20 group-hover:border-[#7C3AED]/50',
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
    color: 'from-[#8B5CF6]/15 to-[#7C3AED]/5',
    border: 'border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/50',
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
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Notre process"
          title="De zéro à votre premier RDV"
          subtitle="Un processus éprouvé, transparent et orienté résultats — en 4 étapes claires."
          highlight="premier RDV"
        />

        <div className="mt-5 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] hidden lg:block h-px bg-gradient-to-r from-transparent via-[#7C3AED]/15 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="group relative text-center">
                  {/* Step number bubble */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} border ${step.border} rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-105`}>
                    <span className="font-heading font-black text-xl text-[#111827]/40">{step.step}</span>
                  </div>

                  {/* Icon below bubble */}
                  <div className="w-9 h-9 bg-[#F9FAFB] border border-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto -mt-2 mb-5">
                    <step.icon size={16} className="text-[#7C3AED]" />
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#111827] mb-2.5">{step.title}</h3>
                  <p className="text-[#111827]/45 text-sm leading-relaxed px-2">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}