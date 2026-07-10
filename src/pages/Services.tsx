import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Layout, Users, Calendar, CheckCircle2,
  ArrowRight, Zap, Shield, TrendingUp, ChevronDown,
  MapPin, Clock, Sparkles, BarChart3, Award, Activity
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useI18n } from '../i18n'

// Services B2C
const services = [
  {
    id: 'campagnes',
    icon: Target,
    title: 'Campagnes pub ultra ciblées',
    tagline: 'Attirez les bons prospects',
    desc: 'Nous créons et pilotons vos campagnes sur Meta, TikTok et LinkedIn pour attirer uniquement des prospects qui correspondent à votre client idéal.',
    features: [
      'Ciblage par zone géographique, âge, comportement et intention d\'achat',
      'Créatifs visuels et textes conçus pour convertir, pas pour faire joli',
      'Budget publicitaire 100% transparent, sans commission cachée',
      'Leads consentis et conformes RGPD',
      'Optimisation continue',
    ],
    stat: '72%',
    statLabel: 'taux de conversion moyen',
  },
  {
    id: 'landing',
    icon: Layout,
    title: 'Landing pages optimisées',
    tagline: 'Convertissez chaque visiteur',
    desc: 'Nous concevons des pages de vente pensées pour convertir chaque visiteur en prospect qualifié.',
    features: [
      'Design mobile-first, chargement en moins de 3 secondes',
      'Copywriting orienté conversion',
      'Un seul objectif par page',
      'Formulaire de capture optimisé',
      'Cohérence totale avec vos campagnes pub',
      'Compatible avec tous vos outils CRM',
    ],
    stat: '+40%',
    statLabel: 'conversion moyenne',
  },
  {
    id: 'qualification',
    icon: Users,
    title: 'Qualification humaine',
    tagline: 'Là où tous utilisent l\'IA, nous mettons un humain',
    desc: 'Chaque prospect est rappelé, écouté et validé par un collaborateur dédié avant de vous être transmis.',
    features: [
      'Rappel téléphonique dans les 2 heures',
      'Contact WhatsApp avant l\'appel',
      'Vérification du profil, projet, budget et disponibilité',
      'Leads froids filtrés, seuls les prospects chauds vous parviennent',
      'Fiche prospect complète transmise avant chaque échange',
      'Disponible du lundi au samedi',
    ],
    stat: '72%',
    statLabel: 'taux de conversion RDV',
  },
  {
    id: 'rdv',
    icon: Calendar,
    title: 'Livraison du RDV',
    tagline: 'Votre seul travail : vous présenter et closer',
    desc: 'Nous gérons tout le reste, de la pub au rendez-vous confirmé et livré directement dans votre agenda.',
    features: [
      'RDV 100% exclusif, jamais revendu, jamais partagé',
      'Prise de rendez-vous au nom de votre entreprise',
      'Confirmation par SMS et WhatsApp pour zéro no-show',
      'Synchronisation directe avec votre agenda ou CRM',
      'Fiche prospect complète transmise avant chaque rendez-vous',
      'Dashboard en temps réel pour suivre chaque RDV',
    ],
    stat: '-85%',
    statLabel: 'de no-show',
  },
]

// Avantages bloc
const avantages = [
  { icon: Shield, title: 'Vos RDV, rien que vos RDV', desc: 'Zéro partage, zéro revente. Ce lead est le vôtre.' },
  { icon: MapPin, title: 'Là où vous travaillez, pas ailleurs', desc: 'Chaque prospect est dans votre zone.' },
  { icon: Users, title: 'Qualifié par un humain', desc: 'Profil, budget, intention : tout est validé.' },
  { icon: TrendingUp, title: '72% de conversion', desc: 'Un prospect qualifié par un humain vaut dix formulaires.' },
]

// Leads récents (Dashboard style)
const recentLeads = [
  { name: 'Michelle MAGNIN', time: '18:23', status: 'Lead chaud', avatar: 'MM', gradient: 'from-[#7C3AED] to-[#6D28D9]' },
  { name: 'Philippe RENPIN', time: '18:07', status: 'Lead chaud', avatar: 'PR', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
  { name: 'Laure HENOULD', time: '17:57', status: 'Lead chaud', avatar: 'LH', gradient: 'from-[#F59E0B] to-[#F97316]' },
  { name: 'Héloïse MARTIN', time: '17:46', status: 'Lead tiède', avatar: 'HM', gradient: 'from-[#7C3AED] to-[#6D28D9]' },
]

const upcomingRdvs = [
  { name: 'Julie RENAUD', time: '15:00', date: 'Aujourd\'hui', avatar: 'JR', gradient: 'from-[#7C3AED] to-[#6D28D9]' },
  { name: 'Lucas MARTIN', time: '17:45', date: 'Aujourd\'hui', avatar: 'LM', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
  { name: 'Éric LEFÈVRE', time: '09:00', date: 'Demain', avatar: 'EL', gradient: 'from-[#F59E0B] to-[#F97316]' },
  { name: 'Lise MICHEL', time: '14:00', date: 'Demain', avatar: 'LM', gradient: 'from-[#7C3AED] to-[#8B5CF6]' },
  { name: 'Claire DUBOIS', time: '16:00', date: 'Demain', avatar: 'CD', gradient: 'from-[#7C3AED] to-[#6D28D9]' },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '990',
    period: '/mois',
    desc: 'Pour tester et valider vos premières campagnes B2C.',
    features: ['50 leads qualifiés/mois', 'Campagne Meta Ads', 'Landing page simple', 'Reporting mensuel'],
    cta: 'Démarrer',
    featured: false,
  },
  {
    name: 'Growth',
    price: '2 490',
    period: '/mois',
    desc: 'L\'offre complète pour accélérer votre acquisition B2C.',
    features: ['150 leads qualifiés/mois', 'Meta + TikTok + LinkedIn', 'Landing pages optimisées', 'Qualification humaine', 'Livraison RDV', 'Dashboard temps réel'],
    cta: 'Choisir Growth',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    period: '',
    desc: 'Solution full-service pour les grandes équipes.',
    features: ['Leads illimités', 'Multi-canaux + Qualification', 'Pilotage stratégique', 'Account manager dédié', 'SLA garanti'],
    cta: 'Nous contacter',
    featured: false,
  },
]

const faqs = [
  { q: 'Comment garantissez-vous la conformité RGPD ?', a: 'Chaque prospect a donné son consentement explicite, conformément à la législation en vigueur.' },
  { q: 'Quel délai pour recevoir mes premiers leads B2C ?', a: 'Après validation de votre brief, les premières campagnes sont lancées sous 48h. Les leads arrivent sous 5 à 7 jours.' },
  { q: 'Travaillez-vous avec tous les secteurs B2C ?', a: 'Oui : immobilier, formation, assurance, services à la personne, e-commerce, auto-école, etc.' },
  { q: 'Puis-je tester sans engagement ?', a: 'Oui. Pilote de 30 jours sur le plan Starter pour valider la qualité avant engagement.' },
]

export default function Services() {
  const { t } = useI18n()
  const [activeService, setActiveService] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="overflow-hidden bg-white">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[100px] orb-1" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[100px] orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#7C3AED]/15 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles size={14} className="text-[#F59E0B]" />
              <span className="text-xs font-medium text-[#111827]/70">{t.servicesPage.heroBadge}</span>
            </div>

            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              <span className="text-[#111827]">{t.servicesPage.heroTitle1}</span>
              <br />
              <span className="gradient-text">
                {t.servicesPage.heroTitleHighlight}
              </span>
              <br />
              <span className="text-[#111827]">{t.servicesPage.heroTitle2}</span>
            </h1>

            <p className="text-[#111827]/50 text-xl max-w-2xl mx-auto mb-8">
              {t.servicesPage.heroSubtitle}
            </p>

            <Link to="/contact" className="btn-primary">
              {t.servicesPage.heroCta}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DASHBOARD STYLE SECTION ── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
              {t.servicesPage.dashTitle1} <span className="gradient-text">{t.servicesPage.dashTitleHighlight}</span>
            </h2>
            <p className="text-[#111827]/50 text-lg max-w-2xl mx-auto">
              {t.servicesPage.heroSubtitle}
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">
                {t.servicesPage.heroCta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            
            {/* Carte - Nouveaux leads */}
            <ScrollReveal>
              <div className="card-glass overflow-hidden">
                <div className="p-5 border-b border-[#7C3AED]/10">
                  <h3 className="font-semibold text-[#111827] text-lg">{t.servicesPage.newLeads}</h3>
                </div>
                <div className="divide-y divide-[#7C3AED]/5">
                  {recentLeads.map((lead, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${lead.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                          {lead.avatar}
                        </div>
                        <div>
                          <p className="text-[#111827] font-medium">{lead.name}</p>
                          <p className="text-[#111827]/30 text-xs">{lead.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-medium">
                          {lead.status === 'Lead tiède' ? t.servicesPage.statusWarm : t.servicesPage.statusHot}
                        </span>
                        <TrendingUp size={14} className="text-[#7C3AED]" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-[#7C3AED]/10 bg-[#F9FAFB]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7C3AED]/15 flex items-center justify-center">
                        <TrendingUp size={14} className="text-[#7C3AED]" />
                      </div>
                      <span className="text-[#111827] font-semibold text-lg">57</span>
                      <span className="text-[#111827]/40 text-sm">{t.servicesPage.newLeads}</span>
                    </div>
                    <ArrowRight size={14} className="text-[#111827]/30" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Carte - Rendez-vous */}
            <ScrollReveal delay={0.1}>
              <div className="card-glass overflow-hidden">
                <div className="p-5 border-b border-[#7C3AED]/10">
                  <h3 className="font-semibold text-[#111827] text-lg">{t.servicesPage.appointments}</h3>
                </div>
                <div className="divide-y divide-[#7C3AED]/5">
                  {upcomingRdvs.map((rdv, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${rdv.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                          {rdv.avatar}
                        </div>
                        <div>
                          <p className="text-[#111827] font-medium">{rdv.name}</p>
                          <p className="text-[#111827]/30 text-xs">{rdv.date === 'Demain' ? t.servicesPage.tomorrow : t.servicesPage.today} {t.servicesPage.at} {rdv.time}</p>
                        </div>
                      </div>
                      <CheckCircle2 size={16} className="text-[#7C3AED]" />
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-[#7C3AED]/10 bg-gradient-to-r from-[#7C3AED]/5 to-[#8B5CF6]/5">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">MM</div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">PR</div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#F97316] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">LH</div>
                      <div className="w-7 h-7 rounded-full bg-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] text-[10px] font-bold border-2 border-white">+</div>
                    </div>
                    <span className="text-[#111827]/60 text-sm font-medium">{t.servicesPage.trustClients}</span>
                    <Award size={14} className="text-[#F59E0B]" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BLOC 4 AVANTAGES ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#111827]/60 text-sm tracking-wide">
              <span className="text-[#F59E0B]">✦</span> {t.servicesPage.advantagesBanner} <span className="text-[#F59E0B]">✦</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-glass p-6 hover:border-[#7C3AED]/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                    <avantage.icon size={22} className="text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg mb-2">{t.servicesPage.advantages[i].title}</h3>
                  <p className="text-[#111827]/45 text-sm">{t.servicesPage.advantages[i].desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label={t.servicesPage.methodLabel}
            title={t.servicesPage.methodTitle}
            highlight={t.servicesPage.methodHighlight}
          />

          {/* Service Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mt-12 mb-12">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === i
                    ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                    : 'bg-white text-[#111827]/60 hover:text-[#7C3AED] hover:bg-[#F9FAFB] border border-[#7C3AED]/15'
                }`}
              >
                <s.icon size={15} />
                {t.servicesPage.services[i].title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {services.map((service, i) => (
            activeService === i && (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-3 py-1.5 mb-4">
                    <service.icon size={12} className="text-[#7C3AED]" />
                    <span className="text-[#111827]/70">{t.servicesPage.services[i].tagline}</span>
                  </div>
                  <h2 className="font-bold text-4xl text-[#111827] mb-5">{t.servicesPage.services[i].title}</h2>
                  <p className="text-[#111827]/55 text-lg leading-relaxed mb-8">{t.servicesPage.services[i].desc}</p>
                  <ul className="space-y-3 mb-8">
                    {t.servicesPage.services[i].features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#111827]/70 text-sm">
                        <CheckCircle2 size={16} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    {t.servicesPage.startService}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="flex justify-center">
                  <div className="card-glass p-8 text-center w-full max-w-sm">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <div className="text-5xl font-bold text-[#111827] mb-2">{service.stat}</div>
                    <div className="text-[#111827]/50 text-sm mb-6">{t.servicesPage.services[i].statLabel}</div>
                    <div className="space-y-3">
                      {[Shield, CheckCircle2, Clock].map((Icon, k) => (
                        <div key={k} className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl px-4 py-3">
                          <Icon size={14} className="text-[#7C3AED]" />
                          <span className="text-[#111827]/60 text-sm">{t.servicesPage.serviceBadges[k]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle label={t.servicesPage.pricingLabel} title={t.servicesPage.pricingTitle} highlight={t.servicesPage.pricingHighlight} />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`relative card-glass p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${plan.featured ? 'shadow-[#7C3AED]/10 border-[#7C3AED]/30' : ''}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-xs font-bold px-4 py-1 rounded-full">
                      {t.servicesPage.popular}
                    </div>
                  )}
                  <h3 className="font-bold text-xl text-[#111827] mb-2">{plan.name}</h3>
                  <p className="text-[#111827]/45 text-sm mb-4">{t.servicesPage.plans[i].desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#111827]">{plan.price === 'Sur devis' ? t.servicesPage.onQuote : plan.price}</span>
                    <span className="text-[#111827]/40">{plan.period ? t.servicesPage.perMonth : ''}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {t.servicesPage.plans[i].features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-[#111827]/60 text-sm">
                        <CheckCircle2 size={14} className="text-[#7C3AED]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block text-center py-3 rounded-full font-semibold transition-all ${plan.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}`}>
                    {t.servicesPage.plans[i].cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle label={t.servicesPage.faqLabel} title={t.servicesPage.faqTitle} highlight={t.servicesPage.faqHighlight} />

          <div className="space-y-4 mt-12">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-[#111827]">{t.servicesPage.faqs[i].q}</span>
                    <ChevronDown size={18} className={`text-[#111827]/40 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      className="px-5 pb-5"
                    >
                      <p className="text-[#111827]/55 text-sm">{t.servicesPage.faqs[i].a}</p>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="card-glass border-[#7C3AED]/20 p-12 rounded-3xl glow-brand">
              <h2 className="font-bold text-4xl text-[#111827] mb-4">{t.servicesPage.ctaTitle}</h2>
              <p className="text-[#111827]/50 mb-8">{t.servicesPage.ctaText}</p>
              <Link to="/contact" className="btn-primary">
                {t.servicesPage.ctaBtn}
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}