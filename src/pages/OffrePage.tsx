import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Filter, Mail, Linkedin, Phone, BarChart3, CheckCircle2,
  ArrowRight, Zap, Globe2, Shield, TrendingUp, ChevronDown,
  Users, Calendar, MessageCircle, Headphones, Database, LayoutDashboard,
  Sparkles, Target, Award, ChevronUp, X
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'

const pricingPlans = [
  {
    id: 'leads',
    name: 'CLOZ LEADS',
    price: '990',
    setup: '490',
    period: '/mois',
    tagline: 'Des leads exclusifs livrés directement dans votre pipeline',
    desc: 'Campagne sur-mesure et leads exclusifs livrés directement dans votre pipeline. Vous prospectez sans lever le petit doigt.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
    ],
    featured: false,
    color: 'border-[#7C3AED]/15',
    icon: Database,
    gradient: 'from-[#7C3AED]/10 to-[#8B5CF6]/5',
  },
  {
    id: 'ready',
    name: 'CLOZ READY',
    price: '1 490',
    setup: '690',
    period: '/mois',
    tagline: 'Leads préqualifiés, prêts à prendre RDV',
    desc: 'Campagne sur-mesure, préqualification WhatsApp et téléphone incluse. Vous ne recevez que des prospects confirmés, prêts à prendre RDV.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
      'Contact WhatsApp personnalisé avant l\'appel',
      'Appel de préqualification par un collaborateur dédié',
      'Vérification du profil, de l\'intérêt et du budget',
      'Fiche prospect complète livrée avec chaque lead qualifié',
      'Leads froids filtrés : seuls les leads chauds vous parviennent',
    ],
    featured: false,
    color: 'border-[#7C3AED]/15',
    icon: MessageCircle,
    gradient: 'from-[#8B5CF6]/10 to-[#EC4899]/5',
  },
  {
    id: 'done',
    name: 'CLOZ DONE',
    price: '2 490',
    setup: '990',
    period: '/mois',
    tagline: 'De la pub au RDV, on gère tout',
    desc: 'Campagne sur-mesure, préqualification et prise de rendez-vous directement dans votre agenda. Vous n\'avez plus qu\'à vous présenter et closer.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
      'Contact WhatsApp personnalisé avant l\'appel',
      'Appel de préqualification par un collaborateur dédié',
      'Vérification du profil, de l\'intérêt et du budget',
      'Fiche prospect complète transmise avant chaque rendez-vous',
      'Prise de rendez-vous téléphonique au nom de votre entreprise',
      'Confirmation du RDV par SMS et WhatsApp',
      'Synchronisation directe avec votre agenda',
      'Zéro prospection de votre côté : de la pub au RDV, on gère tout',
    ],
    featured: true,
    color: 'border-[#7C3AED]/40',
    icon: Calendar,
    gradient: 'from-[#F59E0B]/10 to-[#F97316]/5',
  },
]

const comparisonFeatures = [
  { category: 'Ciblage & Données', label: 'Étude des besoins & ICP', leads: true, ready: true, done: true },
  { category: 'Ciblage & Données', label: 'Création campagne pub sur-mesure', leads: true, ready: true, done: true },
  { category: 'Ciblage & Données', label: 'Leads 100% exclusifs', leads: true, ready: true, done: true },
  { category: 'Ciblage & Données', label: 'Ciblage multi-critères', leads: true, ready: true, done: true },
  { category: 'Qualité', label: 'Coordonnées vérifiées & à jour', leads: true, ready: true, done: true },
  { category: 'Qualité', label: 'Volume scalable', leads: true, ready: true, done: true },
  { category: 'Qualité', label: 'Livraison quotidienne ou hebdomadaire', leads: true, ready: true, done: true },
  { category: 'Intégrations', label: 'Intégration CRM en 1 clic', leads: true, ready: true, done: true },
  { category: 'Intégrations', label: 'Export CSV/Excel', leads: true, ready: true, done: true },
  { category: 'Intégrations', label: 'Tableau de bord en temps réel', leads: true, ready: true, done: true },
  { category: 'Préqualification', label: 'Contact WhatsApp personnalisé', leads: false, ready: true, done: true },
  { category: 'Préqualification', label: 'Appel de préqualification humain', leads: false, ready: true, done: true },
  { category: 'Préqualification', label: 'Vérification profil / intérêt / budget', leads: false, ready: true, done: true },
  { category: 'Préqualification', label: 'Fiche prospect complète', leads: false, ready: true, done: true },
  { category: 'Prise de RDV', label: 'Prise de RDV téléphonique', leads: false, ready: false, done: true },
  { category: 'Prise de RDV', label: 'Confirmation SMS & WhatsApp', leads: false, ready: false, done: true },
  { category: 'Prise de RDV', label: 'Synchronisation agenda', leads: false, ready: false, done: true },
]

// Group features by category
const groupedFeatures = comparisonFeatures.reduce((acc, feature) => {
  if (!acc[feature.category]) acc[feature.category] = []
  acc[feature.category].push(feature)
  return acc
}, {} as Record<string, typeof comparisonFeatures>)

const faqs = [
  {
    q: 'Comment garantissez-vous la conformité RGPD ?',
    a: 'Toutes nos bases de données respectent strictement le RGPD. Nous n\'utilisons que des sources légales (données publiques, opt-in B2B) et proposons un DPA (Data Processing Agreement) pour chaque client.',
  },
  {
    q: 'Quel délai pour recevoir mes premiers leads ?',
    a: 'Après validation de votre brief et de votre ICP, les premières livraisons de leads arrivent sous 48 à 72h ouvrées. Les campagnes d\'activation démarrent sous 5 à 7 jours.',
  },
  {
    q: 'Travaillez-vous avec tous les secteurs ?',
    a: 'Nous sommes spécialisés dans le B2B. Nous intervenons dans tous les secteurs : SaaS, services professionnels, industrie, logistique, finance, immobilier commercial, etc.',
  },
  {
    q: 'Puis-je tester sans engagement ?',
    a: 'Oui. Nous proposons un pilote de 30 jours pour valider la qualité de nos leads avant tout engagement plus long. Aucun frais cachés.',
  },
]

export default function OffrePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    leads: false,
    ready: false,
    done: false,
  })

  const toggleCardExpansion = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="overflow-hidden bg-white">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 hero-gradient">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={12} />
              Nos offres
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-tight mb-6">
              Nos 3 façons de ne plus
              <br />
              <span className="gradient-text">manquer de clients</span>
            </h1>
            <p className="text-[#111827]/50 text-xl max-w-2xl mx-auto">
              Du lead chaud au RDV qualifié : choisissez le niveau d'accompagnement qui vous convient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING CARDS WITH EXPANDABLE FEATURES ── */}
      <section className="py-24 relative">
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`card-glass p-8 flex flex-col h-full border ${plan.color} relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#7C3AED]/30 ${plan.featured ? 'shadow-xl shadow-[#7C3AED]/10' : ''}`}>
                  {plan.featured && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#8B5CF6]/3" />
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Award size={12} />
                        Recommandé
                      </div>
                    </>
                  )}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                        <plan.icon size={24} className="text-[#7C3AED]" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-[#111827]">{plan.name}</h3>
                    </div>

                    {/* Tagline */}
                    <p className="text-[#7C3AED] text-sm font-medium mb-3">{plan.tagline}</p>
                    
                    {/* Description */}
                    <p className="text-[#111827]/45 text-sm leading-relaxed mb-6">{plan.desc}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="font-heading font-black text-5xl text-[#111827]">{plan.price}</span>
                      <span className="text-[#111827]/40 text-lg">{plan.period}</span>
                      <div className="text-[#111827]/30 text-sm mt-1">
                        + Setup unique : {plan.setup} €
                      </div>
                    </div>

                    {/* Features list - with expand/collapse */}
                    <ul className="space-y-3 mb-4 flex-1">
                      {(expandedCards[plan.id] ? plan.features : plan.features.slice(0, 6)).map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#111827]/55 text-sm">
                          <CheckCircle2 size={15} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Show more/less button if there are more than 6 features */}
                    {plan.features.length > 6 && (
                      <button
                        onClick={() => toggleCardExpansion(plan.id)}
                        className="text-[#7C3AED] text-xs font-medium mb-6 flex items-center gap-1 hover:text-[#6D28D9] transition-colors w-fit"
                      >
                        {expandedCards[plan.id] ? (
                          <>Voir moins <ChevronUp size={14} /></>
                        ) : (
                          <>Voir plus ({plan.features.length - 6} autres fonctionnalités) <ChevronDown size={14} /></>
                        )}
                      </button>
                    )}

                    <Link
                      to="/contact"
                      className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                    >
                      Choisir {plan.name.split(' ')[1]}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE AMÉLIORÉ (STYLE REFERENCE) ── */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Comparatif détaillé"
            title="Trouvez l'offre qui vous correspond"
            subtitle="Découvrez en détail ce que chaque formule inclut"
            highlight="correspond"
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#7C3AED]/10 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#7C3AED]/10 bg-[#F9FAFB]">
                  <th className="text-left p-5 text-[#111827]/60 font-medium w-1/3">Fonctionnalités</th>
                  <th className="text-center p-5 text-[#111827] font-bold bg-[#7C3AED]/3">CLOZ LEADS</th>
                  <th className="text-center p-5 text-[#111827] font-bold bg-[#8B5CF6]/3">CLOZ READY</th>
                  <th className="text-center p-5 text-[#111827] font-bold bg-[#7C3AED]/8 relative">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      ⭐ RECOMMANDÉ
                    </span>
                    CLOZ DONE
                  </th>
                 </tr>
              </thead>
              <tbody>
                {Object.entries(groupedFeatures).map(([category, features], catIdx) => (
                  <React.Fragment key={category}>
                    {/* Category row */}
                    <tr className="bg-[#F3F4F6]">
                      <td colSpan={4} className="p-3 pl-5">
                        <span className="text-[#7C3AED] font-semibold text-xs uppercase tracking-wider">{category}</span>
                       </td>
                     </tr>
                    {features.map((feature, idx) => (
                      <tr key={idx} className="border-b border-[#7C3AED]/5 hover:bg-[#F9FAFB] transition-colors">
                        <td className="p-4 pl-5 text-[#111827]/70 text-sm">{feature.label}</td>
                        <td className="text-center p-4">
                          {feature.leads ? (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#7C3AED]/15">
                              <CheckCircle2 size={14} className="text-[#7C3AED]" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F3F4F6]">
                              <X size={12} className="text-[#111827]/20" />
                            </div>
                          )}
                         </td>
                        <td className="text-center p-4">
                          {feature.ready ? (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#8B5CF6]/15">
                              <CheckCircle2 size={14} className="text-[#8B5CF6]" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F3F4F6]">
                              <X size={12} className="text-[#111827]/20" />
                            </div>
                          )}
                         </td>
                        <td className="text-center p-4">
                          {feature.done ? (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#7C3AED]/15">
                              <CheckCircle2 size={14} className="text-[#7C3AED]" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F3F4F6]">
                              <X size={12} className="text-[#111827]/20" />
                            </div>
                          )}
                         </td>
                       </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-[#6D28D9] font-medium transition-colors"
            >
              Besoin d'une solution hybride ou sur-mesure ?
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Avantages"
            title="Pourquoi choisir Cloz ?"
            highlight="Cloz"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Leads 100% exclusifs',
                desc: 'Jamais revendus, jamais partagés. Vous êtes le seul à recevoir vos leads.',
              },
              {
                icon: Target,
                title: 'Ciblage sur-mesure',
                desc: 'Définition précise de votre ICP et campagne publicitaire personnalisée.',
              },
              {
                icon: LayoutDashboard,
                title: 'Pilotage en temps réel',
                desc: 'Tableau de bord pour suivre vos performances et ROI en direct.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-glass p-6 text-center border border-[#7C3AED]/10 hover:border-[#7C3AED]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-[#7C3AED]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[#111827]/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle
            label="FAQ"
            title="Questions fréquentes"
            highlight="fréquentes"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass border border-[#7C3AED]/10 hover:border-[#7C3AED]/20 transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium text-[#111827]">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#111827]/40 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-[#111827]/55 text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="card-glass border border-[#7C3AED]/20 p-12 rounded-3xl glow-brand relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-4xl text-[#111827] mb-4 tracking-tight">
                  Besoin d'une solution sur-mesure ?
                </h2>
                <p className="text-[#111827]/50 mb-8 max-w-lg mx-auto">
                  Combinez leads, préqualification et prise de RDV dans un package adapté à vos objectifs et votre budget.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                  Discuter de mon projet
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}