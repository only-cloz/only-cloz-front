import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Filter, Mail, Linkedin, Phone, BarChart3, CheckCircle2,
  ArrowRight, Zap, Globe2, Shield, TrendingUp, ChevronDown,
  Users, Calendar, MessageCircle, Headphones, Database, LayoutDashboard,
  Sparkles, Target, Award, ChevronUp, X, Check
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useI18n } from '../i18n'

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
    color: 'border-[#EAB308]/15',
    icon: Database,
    gradient: 'from-[#EAB308]/10 to-[#FACC15]/5',
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
    color: 'border-[#EAB308]/15',
    icon: MessageCircle,
    gradient: 'from-[#FACC15]/10 to-[#EC4899]/5',
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
    color: 'border-[#EAB308]/40',
    icon: Calendar,
    gradient: 'from-[#F59E0B]/10 to-[#EAB308]/5',
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
    a: 'Toutes nos bases de données respectent strictement le RGPD. Nous n\'utilisons que des sources légales (données publiques, opt-in B2C) et proposons un DPA (Data Processing Agreement) pour chaque client.',
  },
  {
    q: 'Quel délai pour recevoir mes premiers leads ?',
    a: 'Après validation de votre brief et de votre ICP, les premières livraisons de leads arrivent sous 48 à 72h ouvrées. Les campagnes d\'activation démarrent sous 5 à 7 jours.',
  },
  {
    q: 'Travaillez-vous avec tous les secteurs ?',
    a: 'Nous sommes spécialisés dans le B2C. Nous intervenons dans tous les secteurs : SaaS, services professionnels, industrie, logistique, finance, immobilier commercial, etc.',
  },
  {
    q: 'Puis-je tester sans engagement ?',
    a: 'Oui. Nous proposons un pilote de 30 jours pour valider la qualité de nos leads avant tout engagement plus long. Aucun frais cachés.',
  },
]

export default function OffrePage() {
  const { t } = useI18n()
  const grouped = comparisonFeatures.reduce((acc, f, i) => {
    const cat = t.offresPage.comparison[i].category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push({ leads: f.leads, ready: f.ready, done: f.done, label: t.offresPage.comparison[i].label })
    return acc
  }, {} as Record<string, { leads: boolean; ready: boolean; done: boolean; label: string }[]>)
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/*<span className="inline-flex items-center gap-2 text-xs font-semibold text-[#EAB308] uppercase tracking-widest bg-[#EAB308]/10 border border-[#EAB308]/20 px-4 py-1.5 rounded-full mb-6">*/}
            {/*  <Sparkles size={12} />*/}
            {/*  {t.offresPage.heroBadge}*/}
            {/*</span>*/}
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-tight mb-6">
              {t.offresPage.h1a}
              <br />
              <span className="gradient-text">{t.offresPage.h1Highlight}</span>
            </h1>
            <p className="text-[#111827]/50 text-xl max-w-2xl mx-auto">
              {t.offresPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING CARDS WITH EXPANDABLE FEATURES ── */}

      <section className="py-24 relative">
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <div className="mt-8 grid lg:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                      className={`card-glass p-8 flex flex-col h-full border ${plan.color} relative overflow-visible transition-all duration-300 hover:-translate-y-1 hover:border-[#FFEA5E]/40 hover:shadow-xl hover:shadow-[#FFEA5E]/10 ${
                          plan.featured ? 'shadow-lg shadow-[#FFEA5E]/15 lg:scale-[1.03] mt-3 lg:mt-0' : ''
                      }`}
                  >
                    {plan.featured && (
                        <>
                          {/* Fond dégradé + bordure, contenu dans les coins arrondis */}
                          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFEA5E]/5 to-[#FFEA5E]/2"/>
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFEA5E] via-[#FFF38A] to-[#FFEA5E]"/>
                          </div>
                          {/* Badge qui dépasse au-dessus de la carte */}
                          <div
                              className="absolute -top-3 right-6 bg-[#FFEA5E] text-[#111827] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md shadow-[#FFEA5E]/20 z-20">
                            <Award size={12}/>
                            {t.offresPage.recommended}
                          </div>
                        </>
                    )}

                    <div className="relative z-10 flex flex-col flex-1">
                      {/* Icon & Name */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                            className="w-11 h-11 rounded-xl bg-[#FFEA5E]/15 flex items-center justify-center flex-shrink-0">
                          <plan.icon size={20} className="text-[#E5CB1B]"/>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#111827]">{plan.name}</h3>
                      </div>

                      {/* Tagline */}
                      <p className="text-[#E5CB1B] text-xs font-semibold mb-3 uppercase tracking-wide">
                        {t.offresPage.plans[i].tagline}
                      </p>

                      {/* Description */}
                      <p className="text-[#111827]/45 text-sm leading-relaxed mb-6">
                        {t.offresPage.plans[i].desc}
                      </p>

                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-[#111827]/[0.06]">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-heading font-bold text-4xl text-[#111827]">{plan.price}</span>
                          <span className="text-[#111827]/40 text-base">{t.offresPage.perMonth}</span>
                        </div>
                        <div
                            className="inline-flex items-center gap-1.5 text-[#111827]/40 text-xs mt-2.5 bg-[#111827]/[0.03] rounded-full px-2.5 py-1">
                          {t.offresPage.setupPrefix}{plan.setup} €
                        </div>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-3 mb-4 flex-1">
                        {(expandedCards[plan.id]
                                ? t.offresPage.plans[i].features
                                : t.offresPage.plans[i].features.slice(0, 6)
                        ).map((f, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-[#111827]/55 text-sm">
                              <CheckCircle2 size={15} className="text-[#E5CB1B] flex-shrink-0 mt-0.5"/>
                              <span className="leading-tight">{f}</span>
                            </li>
                        ))}
                      </ul>

                      {/* Show more/less button */}
                      {t.offresPage.plans[i].features.length > 6 && (
                          <button
                              onClick={() => toggleCardExpansion(plan.id)}
                              className="text-[#E5CB1B] text-xs font-semibold mb-6 flex items-center gap-1 hover:text-[#C4AD12] transition-colors w-fit"
                          >
                            {expandedCards[plan.id] ? (
                                <>
                                  {t.offresPage.seeLess} <ChevronUp size={14}/>
                                </>
                            ) : (
                                <>
                                  {t.offresPage.seeMore1}
                                  {t.offresPage.plans[i].features.length - 6}
                                  {t.offresPage.seeMore2} <ChevronDown size={14}/>
                                </>
                            )}
                          </button>
                      )}

                      {/* CTA */}
                      <Link
                          to="/contact"
                          className={`${plan.featured ? 'bg-[#FFEA5E] text-[#111827] hover:bg-[#FFE324]' : 'border-[#FFEA5E] text-[#111827] hover:bg-[#FFEA5E]/10'} w-full justify-center group flex items-center gap-2 py-2.5 px-4 rounded-xl font-medium transition-all duration-200`}
                      >
                        {t.offresPage.choose} {plan.name.split(' ')[1]}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/*<section className="py-24 relative">*/}
      {/*  <div className="relative max-w-7xl mx-auto px-6 section-padding">*/}
      {/*    <div className="mt-8 grid lg:grid-cols-3 gap-8">*/}
      {/*      {pricingPlans.map((plan, i) => (*/}
      {/*        <ScrollReveal key={i} delay={i * 0.1}>*/}
      {/*          <div className={`card-glass p-8 flex flex-col h-full border ${plan.color} relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#EAB308]/30 ${plan.featured ? 'shadow-xl shadow-[#EAB308]/10' : ''}`}>*/}
      {/*            {plan.featured && (*/}
      {/*              <>*/}
      {/*                <div className="absolute inset-0 bg-gradient-to-br from-[#EAB308]/5 to-[#FACC15]/3" />*/}
      {/*                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent" />*/}
      {/*                <div className="absolute top-4 right-4 bg-[#EAB308] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">*/}
      {/*                  <Award size={12} />*/}
      {/*                  {t.offresPage.recommended}*/}
      {/*                </div>*/}
      {/*              </>*/}
      {/*            )}*/}
      {/*            <div className="relative z-10 flex flex-col flex-1">*/}
      {/*              /!* Icon & Name *!/*/}
      {/*              <div className="flex items-center gap-3 mb-6">*/}
      {/*                <div className="w-12 h-12 rounded-xl bg-[#EAB308]/10 flex items-center justify-center">*/}
      {/*                  <plan.icon size={24} className="text-[#EAB308]" />*/}
      {/*                </div>*/}
      {/*                <h3 className="font-heading font-bold text-2xl text-[#111827]">{plan.name}</h3>*/}
      {/*              </div>*/}

      {/*              /!* Tagline *!/*/}
      {/*              <p className="text-[#EAB308] text-sm font-medium mb-3">{t.offresPage.plans[i].tagline}</p>*/}

      {/*              /!* Description *!/*/}
      {/*              <p className="text-[#111827]/45 text-sm leading-relaxed mb-6">{t.offresPage.plans[i].desc}</p>*/}

      {/*              /!* Price *!/*/}
      {/*              <div className="mb-6">*/}
      {/*                <span className="font-heading font-black text-5xl text-[#111827]">{plan.price}</span>*/}
      {/*                <span className="text-[#111827]/40 text-lg">{t.offresPage.perMonth}</span>*/}
      {/*                <div className="text-[#111827]/30 text-sm mt-1">*/}
      {/*                  {t.offresPage.setupPrefix}{plan.setup} €*/}
      {/*                </div>*/}
      {/*              </div>*/}

      {/*              /!* Features list - with expand/collapse *!/*/}
      {/*              <ul className="space-y-3 mb-4 flex-1">*/}
      {/*                {(expandedCards[plan.id] ? t.offresPage.plans[i].features : t.offresPage.plans[i].features.slice(0, 6)).map((f, j) => (*/}
      {/*                  <li key={j} className="flex items-start gap-3 text-[#111827]/55 text-sm">*/}
      {/*                    <CheckCircle2 size={15} className="text-[#EAB308] flex-shrink-0 mt-0.5" />*/}
      {/*                    <span className="leading-tight">{f}</span>*/}
      {/*                  </li>*/}
      {/*                ))}*/}
      {/*              </ul>*/}

      {/*              /!* Show more/less button if there are more than 6 features *!/*/}
      {/*              {t.offresPage.plans[i].features.length > 6 && (*/}
      {/*                <button*/}
      {/*                  onClick={() => toggleCardExpansion(plan.id)}*/}
      {/*                  className="text-[#EAB308] text-xs font-medium mb-6 flex items-center gap-1 hover:text-[#CA8A04] transition-colors w-fit"*/}
      {/*                >*/}
      {/*                  {expandedCards[plan.id] ? (*/}
      {/*                    <>{t.offresPage.seeLess} <ChevronUp size={14} /></>*/}
      {/*                  ) : (*/}
      {/*                    <>{t.offresPage.seeMore1}{t.offresPage.plans[i].features.length - 6}{t.offresPage.seeMore2} <ChevronDown size={14} /></>*/}
      {/*                  )}*/}
      {/*                </button>*/}
      {/*              )}*/}

      {/*              <Link*/}
      {/*                to="/contact"*/}
      {/*                className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}*/}
      {/*              >*/}
      {/*                {t.offresPage.choose} {plan.name.split(' ')[1]}*/}
      {/*                <ArrowRight size={16} />*/}
      {/*              </Link>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </ScrollReveal>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* ── COMPARISON TABLE AMÉLIORÉ (STYLE REFERENCE) ── */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label={t.offresPage.compLabel}
            title={t.offresPage.compTitle}
            subtitle={t.offresPage.compSubtitle}
            highlight={t.offresPage.compHighlight}
          />

<div className="mt-16 overflow-x-auto rounded-2xl border border-[#EAB308]/10 bg-white shadow-sm">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-[#EAB308]/10">
        <th className="text-left p-5 text-[#111827]/60 font-medium w-1/3 align-bottom">
          {t.offresPage.compFeaturesHeader}
        </th>
        <th className="text-center p-5 align-bottom">
          <span className="font-heading text-[#111827] font-bold text-lg block mb-3">CLOZ LEADS</span>
          <span className="inline-block bg-[#F3F4F6] text-[#111827]/40 text-xs font-medium px-4 py-1.5 rounded-full">
            {t.offresPage.compSoonTag}
          </span>
        </th>
        <th className="text-center p-5 align-bottom">
          <span className="font-heading text-[#111827] font-bold text-lg block mb-3">CLOZ READY</span>
          <span className="inline-block bg-[#FFE957] text-[#111111] text-xs font-semibold px-4 py-1.5 rounded-full">
            {t.offresPage.compStartFreeTag}
          </span>
        </th>
        <th className="text-center p-5 pt-8 relative align-bottom">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm shadow-[#EAB308]/30">
            {t.offresPage.compRecommendedTag}
          </span>
          <span className="font-heading text-[#111827] font-bold text-lg block mb-3">CLOZ DONE</span>
          <span className="inline-block bg-[#111111] text-white text-xs font-medium px-4 py-1.5 rounded-full">
            {t.offresPage.compDemoTag}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(grouped).map(([category, features], catIdx) => (
        <React.Fragment key={category}>
          {/* Category row */}
          <tr className="bg-[#FAF9F5]">
            <td colSpan={4} className="p-4 pl-5 border-b border-[#EAB308]/10">
              <span className="inline-flex items-center gap-2 text-[#CA8A04] font-semibold text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                {category}
              </span>
            </td>
          </tr>
          {features.map((feature, idx) => (
            <tr key={idx} className="border-b border-[#EAB308]/5 hover:bg-[#FAF9F5] transition-colors">
              <td className="p-4 pl-5 text-[#111827]/70 text-sm">{feature.label}</td>
              <td className="text-center p-4">
                {feature.leads ? (
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#008A60]">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                ) : (
                  <span className="text-[#111827]/25 text-sm">—</span>
                )}
              </td>
              <td className="text-center p-4">
                {feature.ready ? (
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#008A60]">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                ) : (
                  <span className="text-[#111827]/25 text-sm">—</span>
                )}
              </td>
              <td className="text-center p-4">
                {feature.done ? (
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#008A60]">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                ) : (
                  <span className="text-[#111827]/25 text-sm">—</span>
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
              className="inline-flex items-center gap-2 text-[#EAB308] hover:text-[#CA8A04] font-medium transition-colors"
            >
              {t.offresPage.hybridLink}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label={t.offresPage.whyLabel}
            title={t.offresPage.whyTitle}
            highlight={t.offresPage.whyHighlight}
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
                <div className="card-glass p-6 text-center border border-[#EAB308]/10 hover:border-[#EAB308]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#EAB308]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-[#EAB308]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">{t.offresPage.whyItems[i].title}</h3>
                  <p className="text-[#111827]/50 text-sm">{t.offresPage.whyItems[i].desc}</p>
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
            label={t.offresPage.faqLabel}
            title={t.offresPage.faqTitle}
            highlight={t.offresPage.faqHighlight}
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass border border-[#EAB308]/10 hover:border-[#EAB308]/20 transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium text-[#111827]">{t.offresPage.faqs[i].q}</span>
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
                        <p className="text-[#111827]/55 text-sm leading-relaxed">{t.offresPage.faqs[i].a}</p>
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
            <div className="card-glass border border-[#EAB308]/20 p-12 rounded-3xl glow-brand relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#EAB308]/5 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FACC15]/5 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-4xl text-[#111827] mb-4 tracking-tight">
                  {t.offresPage.ctaTitle}
                </h2>
                <p className="text-[#111827]/50 mb-8 max-w-lg mx-auto">
                  {t.offresPage.ctaText}
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                  {t.offresPage.ctaBtn}
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