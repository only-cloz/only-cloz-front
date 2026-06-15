import React from 'react'
import { Link } from 'react-router-dom'
import { Filter, Mail, Linkedin, Phone, ArrowRight } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const services = [
  {
    icon: Filter,
    title: 'Génération de leads B2B',
    desc: 'Bases de données ultra-ciblées : décideurs, secteurs, tailles d\'entreprises. Chaque lead est vérifié et qualifié avant livraison.',
    tags: ['LinkedIn', 'Email', 'Décideurs'],
    gradient: 'from-[#7C3AED]/10 to-[#8B5CF6]/5',
    border: 'border-[#7C3AED]/15 hover:border-[#7C3AED]/40',
    iconColor: 'text-[#7C3AED]',
  },
  {
    icon: Mail,
    title: 'Campagnes email outbound',
    desc: 'Séquences d\'emails froids personnalisés à haute délivrabilité. Taux d\'ouverture moyen de 45%.',
    tags: ['Cold email', 'Séquences', 'A/B test'],
    gradient: 'from-[#8B5CF6]/10 to-[#EC4899]/5',
    border: 'border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40',
    iconColor: 'text-[#8B5CF6]',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Outreach',
    desc: 'Connexions ciblées, messages personnalisés, suivi automatisé. On s\'occupe de votre prospection LinkedIn de A à Z.',
    tags: ['Sales Navigator', 'DMs', 'Automation'],
    gradient: 'from-[#3B82F6]/10 to-[#06B6D4]/5',
    border: 'border-[#3B82F6]/15 hover:border-[#3B82F6]/40',
    iconColor: 'text-[#3B82F6]',
  },
  {
    icon: Phone,
    title: 'Phoning & RDV',
    desc: 'Prise de rendez-vous qualifiés directement dans votre agenda. Nos agents traitent vos prospects jusqu\'à obtenir un oui.',
    tags: ['Phoning', 'RDV qualifiés', 'CRM'],
    gradient: 'from-[#F59E0B]/10 to-[#F97316]/5',
    border: 'border-[#F59E0B]/15 hover:border-[#F59E0B]/40',
    iconColor: 'text-[#F59E0B]',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Nos services"
          title="Prospection multicanale sur-mesure"
          subtitle="De la génération de leads à la prise de RDV qualifiés, nous couvrons chaque étape de votre pipeline commercial."
          highlight="multicanale"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`card-glass p-6 h-full border ${service.border} group transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-[#F9FAFB] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon size={20} className={service.iconColor} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111827] mb-2.5">{service.title}</h3>
                  <p className="text-[#111827]/45 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[11px] bg-[#F9FAFB] border border-[#7C3AED]/10 px-2.5 py-1 rounded-full text-[#111827]/40">
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
              Voir tous nos services
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}