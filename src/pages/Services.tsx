import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Filter, Mail, Linkedin, Phone, BarChart3, CheckCircle2,
  ArrowRight, Zap, Globe2, Shield, TrendingUp, ChevronDown
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    id: 'leads',
    icon: Filter,
    title: 'Génération de leads B2B',
    tagline: 'Votre base de prospects sur-mesure',
    desc: 'Nous construisons des listes de prospects ultra-ciblées selon votre ICP. Chaque contact est enrichi, vérifié et qualifié manuellement avant livraison.',
    features: [
      'Ciblage par secteur, taille, géographie, technologie',
      'Enrichissement email + LinkedIn + téléphone',
      'Vérification en temps réel (taux bounce < 3%)',
      'Export CRM (Salesforce, HubSpot, Pipedrive)',
      '100% conforme RGPD',
      'Mise à jour hebdomadaire',
    ],
    results: { label: 'Leads/mois', value: '500+' },
    color: 'brand',
    gradient: 'from-brand-500/20 to-blue-500/10',
    borderActive: 'border-brand-500/50',
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Campagnes email outbound',
    tagline: 'Des emails froids qui convertissent',
    desc: 'Séquences d\'emails personnalisés à haute délivrabilité. Nous gérons domaines, warming, copywriting et A/B testing pour maximiser vos taux de réponse.',
    features: [
      'Setup domaines dédiés + warming',
      'Copywriting personnalisé par segment',
      'Séquences multi-steps (3 à 7 emails)',
      'A/B testing automatisé',
      'Taux d\'ouverture moyen : 45%',
      'Reporting hebdomadaire détaillé',
    ],
    results: { label: 'Taux ouverture moyen', value: '45%' },
    color: 'purple',
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderActive: 'border-purple-500/50',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    title: 'LinkedIn Outreach',
    tagline: 'Prospection LinkedIn automatisée & humaine',
    desc: 'Connexions ciblées, messages personnalisés et suivi automatisé sur LinkedIn. On gère votre présence de A à Z pour générer des conversations qualifiées.',
    features: [
      'Accès Sales Navigator inclus',
      'Ciblage précis des décideurs',
      'Messages ultra-personnalisés (IA + humain)',
      'Suivi et relances automatisés',
      'Gestion des réponses incluse',
      '30 à 80 RDV qualifiés/mois',
    ],
    results: { label: 'RDV LinkedIn/mois', value: '80+' },
    color: 'blue',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderActive: 'border-blue-500/50',
  },
  {
    id: 'phoning',
    icon: Phone,
    title: 'Phoning & Prise de RDV',
    tagline: 'Vos rendez-vous directement dans l\'agenda',
    desc: 'Nos agents qualifiés contactent vos prospects par téléphone et prennent des RDV directement dans votre agenda. Zéro effort de votre côté.',
    features: [
      'Agents natifs francophones',
      'Script personnalisé selon vos offres',
      'Prise de RDV dans votre agenda',
      'Qualification BANT incluse',
      'Enregistrement des appels',
      'Debrief hebdomadaire',
    ],
    results: { label: 'Taux de conversion appels', value: '22%' },
    color: 'gold',
    gradient: 'from-gold-500/20 to-orange-500/10',
    borderActive: 'border-gold-500/50',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '990',
    period: '/mois',
    desc: 'Pour tester et valider vos premières séquences B2B.',
    features: [
      '200 leads qualifiés/mois',
      'Campagne email (1 séquence)',
      'Reporting mensuel',
      'Support email',
      'RGPD conforme',
    ],
    cta: 'Démarrer',
    featured: false,
    color: 'border-white/10',
  },
  {
    name: 'Growth',
    price: '2 490',
    period: '/mois',
    desc: 'L\'offre complète pour accélérer votre croissance B2B.',
    features: [
      '500 leads qualifiés/mois',
      'Email + LinkedIn Outreach',
      'Reporting hebdomadaire',
      'Account manager dédié',
      'A/B testing inclus',
      'Intégration CRM',
    ],
    cta: 'Choisir Growth',
    featured: true,
    color: 'border-brand-500/50',
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    period: '',
    desc: 'Prospection multicanale full-service pour les grandes équipes.',
    features: [
      'Leads illimités',
      'Email + LinkedIn + Phoning',
      'Pilotage stratégique inclus',
      'Équipe dédiée',
      'SLA garanti',
      'Formation équipe commerciale',
    ],
    cta: 'Nous contacter',
    featured: false,
    color: 'border-white/10',
  },
]

const faqs = [
  {
    q: 'Comment garantissez-vous la conformité RGPD ?',
    a: 'Toutes nos bases de données respectent strictement le RGPD. Nous n\'utilisons que des sources légales (données publiques, opt-in B2B) et proposons un DPA (Data Processing Agreement) pour chaque client.',
  },
  {
    q: 'Quel délai pour recevoir mes premiers leads ?',
    a: 'Après validation de votre brief et de votre ICP, les premières livraisons de leads arrivent sous 48 à 72h ouvrées. Les campagnes d\'activation (email/LinkedIn) démarrent sous 5 à 7 jours.',
  },
  {
    q: 'Travaillez-vous avec tous les secteurs ?',
    a: 'Nous sommes spécialisés dans le B2B. Nous intervenons dans tous les secteurs : SaaS, services professionnels, industrie, logistique, finance, immobilier commercial, etc.',
  },
  {
    q: 'Puis-je tester sans engagement ?',
    a: 'Oui. Nous proposons un pilote de 30 jours sur le plan Starter pour valider la qualité de nos leads avant tout engagement plus long. Aucun frais cachés.',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 hero-gradient grid-bg">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 uppercase tracking-widest bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full mb-6">
              <Zap size={12} />
              Nos offres
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-6">
              Des services taillés pour
              <br />
              <span className="gradient-text">votre croissance</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Prospection multicanale, leads qualifiés, RDV commerciaux. Nous couvrons chaque étape de votre acquisition B2B.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES TABS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 section-padding">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeService === i
                    ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
                }`}
              >
                <s.icon size={15} />
                {s.title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>

          {/* Active service detail */}
          {services.map((service, i) => (
            activeService === i && (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-4 bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 rounded-full">
                    <service.icon size={12} />
                    {service.tagline}
                  </div>
                  <h2 className="font-heading font-bold text-4xl text-white mb-5 tracking-tight">{service.title}</h2>
                  <p className="text-white/55 text-lg leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/70 text-sm">
                        <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    Démarrer ce service
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Result card */}
                <div className="flex justify-center">
                  <div className={`card-glass p-10 w-full max-w-sm border ${service.borderActive} relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <service.icon size={30} className="text-brand-400" />
                      </div>
                      <div className="font-heading font-black text-6xl text-white mb-2">{service.results.value}</div>
                      <div className="text-white/50 text-sm mb-8">{service.results.label}</div>

                      <div className="space-y-3">
                        {[
                          { icon: Shield, text: '100% RGPD conforme' },
                          { icon: TrendingUp, text: 'ROI mesurable' },
                          { icon: Globe2, text: 'Livraison France & Europe' },
                        ].map(({ icon: Icon, text }, k) => (
                          <div key={k} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                            <Icon size={14} className="text-brand-400 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/40 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Tarifs"
            title="Investissez dans votre croissance"
            subtitle="Des offres claires, sans surprises. Commencez petit, scalez quand vous êtes prêts."
            highlight="croissance"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`card-glass p-8 flex flex-col h-full border ${plan.color} relative overflow-hidden ${plan.featured ? 'scale-105 shadow-2xl shadow-brand-500/20' : ''}`}>
                  {plan.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-blue-500/5" />
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                      <div className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Populaire
                      </div>
                    </>
                  )}
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl text-white mb-2">{plan.name}</h3>
                      <p className="text-white/45 text-sm">{plan.desc}</p>
                    </div>
                    <div className="mb-8">
                      <span className="font-heading font-black text-5xl text-white">{plan.price}</span>
                      <span className="text-white/40 text-lg">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                          <CheckCircle2 size={15} className="text-brand-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label="FAQ"
            title="Questions fréquentes"
            highlight="fréquentes"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass border border-white/5 hover:border-brand-500/20 transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="card-glass border border-brand-500/20 p-12 rounded-3xl glow-brand">
              <h2 className="font-heading font-bold text-4xl text-white mb-4 tracking-tight">
                Pas encore convaincu ?
              </h2>
              <p className="text-white/50 mb-8">Demandez un audit gratuit de votre stratégie de prospection actuelle.</p>
              <Link to="/contact" className="btn-primary">
                Audit gratuit offert
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
