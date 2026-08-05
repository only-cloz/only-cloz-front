import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, Mail, Linkedin, Phone, ArrowRight, Globe, UsersRound, Crown } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

const services = [
  {
    icon: Filter,
    title: 'Campagnes pub sur-mesure',
    desc: 'Nous concevons et pilotons vos campagnes sur les canaux où se trouve votre cible.Un seul objectif : vous fournir des prospects prêts à être prendre RDV.',
    tags: ['LinkedIn', 'Meta', 'TikTok'],
    gradient: 'from-[#EAB308]/10 to-[#FACC15]/5',
    border: 'border-[#EAB308]/15 hover:border-[#EAB308]/40',
    iconColor: 'text-[#EAB308]',
  },
  {
    icon: Globe,
    title: 'Landing Pages ',
    desc: 'Nous créons ou optimisons vos supports pour maximiser chaque clic : design, copywriting, preuve sociale. Rien n\'est laissé au hasard.',
    tags: ['design', 'copywriting', 'preuve sociale'],
    gradient: 'from-[#FACC15]/10 to-[#EC4899]/5',
    border: 'border-[#FACC15]/15 hover:border-[#FACC15]/40',
    iconColor: 'text-[#FACC15]',
  },
  {
    icon: UsersRound,
    title: 'Qualification humaine ',
    desc: 'Chaque lead est contacté par nos services. Un collaborateur dédié appelle, vérifie, qualifie. Vous ne recevez que des prospects confirmés et intéressés par votre offre.',
    tags: ['appelle', 'vérifie', 'qualifie'],
    gradient: 'from-[#FACC15]/10 to-[#06B6D4]/5',
    border: 'border-[#FACC15]/15 hover:border-[#FACC15]/40',
    iconColor: 'text-[#FACC15]',
  },
  {
    icon: Crown,
    title: 'ROI mesurable',
    desc: 'Dashboard en temps réel, reporting transparent, KPIs clairs. Coût par lead, taux de qualification. Vous avez accès à l’ensemble des données.',
    tags: ['Dashboard en temps réel', 'reporting transparent', 'KPIs clairs'],
    gradient: 'from-[#F59E0B]/10 to-[#EAB308]/5',
    border: 'border-[#F59E0B]/15 hover:border-[#F59E0B]/40',
    iconColor: 'text-[#F59E0B]',
  },
]

export default function ServicesSection() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState(0)
  return (
    <section className="relative bg-white pt-16 sm:pt-20 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <SectionTitle
            label={t.services.label}
            title={t.services.title}
            subtitle={
              <>
      <span className="block">
        Nous <span className="inline-block text-center">vous</span> livrons des leads B2C ultra-qualifiés, 100% conformes RGPD.
      </span>
                <span className="block">Vous n’avez plus qu’à clozer.</span>
              </>
            }
            highlight={t.services.highlight}
            breakAfterHighlight
        />

        {/* Decorative service tabs removed per design request */}

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`card-glass p-5 h-full flex flex-col border ${service.border} group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="min-h-[7rem]">
                    <div className="w-12 h-12 rounded-xl bg-[#EAB308]/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#EAB308] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg group-hover:shadow-[#EAB308]/30">
                      <service.icon size={22} className="text-[#EAB308] transition-colors duration-300 group-hover:text-[#111827]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#111827] min-h-[4.5rem] leading-tight">{t.services.items[i].title}</h3>
                  </div>
                    <p className="text-[#111827]/60 text-sm leading-relaxed mb-3">{t.services.items[i].desc}</p>
                  <div className="mt-auto flex flex-col gap-1.5 items-start">
                    {t.services.items[i].tags.map((tag, j) => (
                      <span key={j} className="text-[11px] bg-white border border-[#EAB308]/15 px-2.5 py-1 rounded-full text-[#111827]/55 transition-colors duration-200 group-hover:border-[#EAB308]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline text-sm">
              {t.services.cta}
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}