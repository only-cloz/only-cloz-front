import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceLayout from '../../components/layout/ServiceLayout'
import {
  Search, TrendingUp, Target, BarChart3, Zap, Globe,
  CheckCircle2, ArrowRight, Award, Users, Clock,
  Shield, LineChart, MapPin, Link2, Sparkles, ChevronRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Reveal on scroll
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <motion.section
      id={id}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function SEO() {
  const [activeTab, setActiveTab] = useState("audit")

  const features = [
    { title: "Audit technique complet", description: "Analyse approfondie de votre site pour détecter les freins SEO.", icon: Search },
    { title: "Stratégie de mots-clés", description: "Ciblage des termes à fort potentiel de conversion.", icon: Target },
    { title: "Optimisation on-page", description: "Amélioration des balises, contenu, et structure interne.", icon: BarChart3 },
    { title: "Netlinking qualitatif", description: "Acquisition de backlinks naturels et pertinents.", icon: Link2 },
    { title: "Suivi de performances", description: "Rapports mensuels et ajustements basés sur les données.", icon: LineChart },
    { title: "SEO local", description: "Apparition dans les résultats Google Maps et recherches locales.", icon: MapPin },
  ]

  const caseStudies = [
    {
      client: "Vertbaudet",
      industry: "E-commerce",
      result: "+156% de trafic organique",
      period: "en 12 mois",
      image: "👶"
    },
    {
      client: "Nohée",
      industry: "Résidences seniors",
      result: "+89% de leads qualifiés",
      period: "en 6 mois",
      image: "🏠"
    },
    {
      client: "Fortify",
      industry: "Cybersécurité",
      result: "Top 3 sur 45 mots-clés",
      period: "stratégiques",
      image: "🔒"
    }
  ]

  const stats = [
    { value: "93%", label: "des expériences en ligne commencent par un moteur de recherche", icon: Globe },
    { value: "+147%", label: "augmentation moyenne du trafic organique", icon: TrendingUp, highlight: true },
    { value: "Top 3", label: "positions clés atteintes pour nos clients", icon: Award },
    { value: "-62%", label: "réduction du coût d'acquisition client", icon: Zap },
  ]

  const benefits = [
    "Augmentation durable du trafic qualifié",
    "Meilleure visibilité sur les moteurs de recherche",
    "Réduction des coûts d'acquisition à long terme",
    "Crédibilité et confiance accrues auprès des prospects",
    "Avantage concurrentiel sur votre marché",
    "ROI mesurable et performances suivies mensuellement"
  ]

  const tabs = [
    { id: "audit", icon: Search, label: "Audit" },
    { id: "strategy", icon: Target, label: "Stratégie" },
    { id: "optimization", icon: BarChart3, label: "Optimisation" },
    { id: "performance", icon: LineChart, label: "Performance" }
  ]

  const phases: Record<string, { icon: React.ComponentType<any>; title: string; text: string; items: string[] }> = {
    audit: {
      icon: Search,
      title: "Phase 1 : Audit technique complet",
      text: "Nous analysons en profondeur votre site pour identifier les freins techniques, les opportunités d'optimisation et les axes d'amélioration prioritaires.",
      items: ["Analyse des performances (Core Web Vitals)", "Structure du site et maillage interne", "Balises meta et contenu dupliqué", "Erreurs de crawling et d'indexation"]
    },
    strategy: {
      icon: Target,
      title: "Phase 2 : Stratégie de contenu",
      text: "Nous définissons une stratégie éditoriale basée sur une analyse approfondie des mots-clés et de la concurrence pour attirer votre cible.",
      items: ["Recherche de mots-clés à fort potentiel", "Analyse des intentions de recherche", "Plan de création de contenu optimisé", "Stratégie de netlinking qualitatif"]
    },
    optimization: {
      icon: Zap,
      title: "Phase 3 : Optimisation on-site & off-site",
      text: "Nous mettons en œuvre les recommandations techniques et rédactionnelles tout en développant une stratégie d'acquisition de backlinks de qualité.",
      items: ["Optimisation des balises et contenus", "Amélioration de la vitesse et UX", "Création de backlinks naturels", "Optimisation SEO local"]
    },
    performance: {
      icon: BarChart3,
      title: "Phase 4 : Suivi et amélioration continue",
      text: "Nous suivons mensuellement vos performances et ajustons la stratégie en fonction des résultats et des évolutions des algorithmes.",
      items: ["Tableaux de bord personnalisés", "Rapports mensuels détaillés", "Veille algorithmique continue", "Recommandations d'optimisation"]
    }
  }

  const faqs = [
    { q: "Combien de temps pour voir les premiers résultats SEO ?", a: "Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement long terme qui génère des résultats durables." },
    { q: "Quelle différence entre SEO et SEA ?", a: "Le SEO génère du trafic organique gratuit mais nécessite du temps. Le SEA est payant mais permet d'obtenir des résultats immédiats. Idéalement, les deux sont complémentaires." },
    { q: "Proposez-vous un audit SEO gratuit ?", a: "Oui, nous proposons un audit SEO offert pour évaluer le potentiel de votre site et identifier les axes d'amélioration prioritaires." },
    { q: "Comment mesurez-vous les performances SEO ?", a: "Nous utilisons des tableaux de bord personnalisés avec vos KPIs : positions, trafic organique, taux de conversion, ROI, etc." },
  ]

  const expertise = [
    { value: "15+", label: "années d'expérience SEO" },
    { value: "50+", label: "experts certifiés" },
    { value: "7", label: "antennes en France" },
    { value: "100%", label: "méthodes White Hat" },
  ]

  const activePhase = phases[activeTab]

  return (
    <ServiceLayout
      title="SEO & Référencement Naturel"
      description="Boostez votre visibilité sur Google et attirez des clients qualifiés grâce à une stratégie SEO sur-mesure."
      icon={Search}
      features={features}
    >
      {/* Section Hero avec statistiques améliorées */}
      <section className="relative mb-20">
        {/* Halos décoratifs */}
        <div
            className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#FFF08A]/30 blur-3xl"/>
        <div className="pointer-events-none absolute top-32 -left-24 w-64 h-64 rounded-full bg-[#FFF08A]/20 blur-3xl"/>

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
              className="inline-flex items-center gap-2 bg-[#FFF08A]/20 border border-[#FFF08A]/30 rounded-full px-4 py-1.5 mb-5 mx-auto">
            <span className="text-xs font-semibold text-[#111827]">Expertise SEO</span>
          </div>

          {/* Titre */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight">
            Votre site mérite la première page
          </h2>

          {/* Description */}
          <p className="text-[#111827]/60 mb-7 leading-relaxed max-w-2xl mx-auto">
            93% des expériences en ligne commencent par un moteur de recherche.
            Être bien positionné sur Google n'est plus une option, c'est une nécessité.
            Notre équipe d'experts SEO vous accompagne pour obtenir un trafic durable et rentable.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/*<button*/}
            {/*    className="btn-primary inline-flex items-center gap-2 group">*/}
            {/*  Demander un audit gratuit*/}
            {/*  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>*/}
            {/*</button>*/}

            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Demander un audit gratuit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <button
                className="border-2 border-[#F97316]/20 text-[#111827] px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#F97316]/5 hover:border-[#F97316]/40 transition-all duration-300 inline-flex items-center gap-2 group">
              Découvrir la méthode
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </div>
      </section>
      <Section>
                  <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
                <motion.div
                    key={idx}
                    initial={{opacity: 0, scale: 0.94}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.4, delay: idx * 0.08}}
                    className={`relative overflow-hidden card-glass p-5 text-center group hover:-translate-y-1 transition-all ${
                        stat.highlight ? 'ring-1 ring-[#EAB308]/25 bg-gradient-to-br from-[#EAB308]/[0.06] to-[#FACC15]/[0.04]' : ''
                    }`}
                >
                  <div
                      className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#EAB308] to-[#FACC15] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"/>
                  <div
                      className="w-11 h-11 bg-[#EAB308]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-[#EAB308]/15 transition-all">
                    <stat.icon className="w-5 h-5 text-[#EAB308]"/>
                  </div>
                  <div
                      className={`text-2xl font-bold font-heading ${stat.highlight ? 'gradient-text' : 'text-[#111827]'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#111827]/50 mt-1.5 leading-snug">{stat.label}</div>
                </motion.div>
            ))}
          </div>
      </Section>

      {/* Section cas clients améliorée */}
      <Section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Ils nous ont fait confiance
          </h2>
          <p className="text-[#111827]/60">
            Découvrez les résultats obtenus pour nos clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="relative overflow-hidden card-glass p-6 hover:-translate-y-1.5 transition-all group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EAB308] to-[#FACC15] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="flex items-center gap-3 mb-5">
                <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl bg-[#EAB308]/[0.06] border border-[#EAB308]/10 group-hover:scale-105 transition-transform">
                  {study.image}
                </div>
                <div>
                  <h3 className="font-bold text-[#111827]">{study.client}</h3>
                  <p className="text-xs text-[#111827]/50">{study.industry}</p>
                </div>
              </div>
              <div className="mb-4 pt-4 border-t border-[#111827]/[0.06]">
                <span className="text-2xl font-bold font-heading gradient-text">{study.result}</span>
                <span className="text-sm text-[#111827]/50 ml-1">{study.period}</span>
              </div>
              <button className="text-[#EAB308] text-sm font-medium hover:underline inline-flex items-center gap-1">
                Voir l'étude de cas
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Méthodologie avec onglets */}
      <Section className="mb-20" id="methodology">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Notre méthodologie SEO
          </h2>
          <p className="text-[#111827]/60">
            Une approche structurée en 4 phases pour des résultats durables
          </p>
        </div>

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white shadow-md shadow-[#EAB308]/25'
                  : 'border border-[#EAB308]/15 hover:border-[#EAB308] hover:text-[#EAB308] hover:bg-[#EAB308]/[0.04] text-[#111827]/60'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="relative card-glass p-8 md:p-10 overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[#EAB308]/[0.05] blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EAB308] to-[#CA8A04] rounded-xl flex items-center justify-center shadow-md shadow-[#EAB308]/25">
                  <activePhase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#111827]">{activePhase.title}</h3>
              </div>
              <p className="text-[#111827]/60 mb-5">
                {activePhase.text}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {activePhase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/70 bg-[#EAB308]/[0.04] rounded-lg px-3 py-2.5">
                    <CheckCircle2 size={16} className="text-[#EAB308] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Pourquoi choisir Only Cloz */}
      <Section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Pourquoi choisir Only Cloz pour votre SEO ?
          </h2>
          <p className="text-[#111827]/60">
            Une expertise reconnue et des résultats prouvés
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#EAB308]/[0.07] to-[#FACC15]/[0.04] rounded-2xl p-7 border border-[#EAB308]/10">
            <h3 className="font-heading font-bold text-[#111827] mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#EAB308]" />
              Notre expertise
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {expertise.map((item, i) => (
                <div key={i} className="rounded-xl bg-white/60 border border-[#EAB308]/10 p-4">
                  <div className="text-3xl font-bold font-heading gradient-text">{item.value}</div>
                  <p className="text-xs text-[#111827]/50 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {benefits.slice(0, 6).map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 card-glass hover:-translate-y-0.5 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-[#EAB308]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EAB308]/15 transition-colors">
                  <CheckCircle2 size={16} className="text-[#EAB308]" />
                </div>
                <span className="text-sm text-[#111827]/75">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certification et garanties */}
      <Section className="mb-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#EAB308]/10 via-[#FACC15]/10 to-[#CA8A04]/10 rounded-2xl p-8 md:p-10 border border-[#EAB308]/15">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              { icon: Shield, title: "Google Partner", sub: "Certification officielle" },
              { icon: Users, title: "Équipe dédiée", sub: "Interlocuteur unique" },
              { icon: Clock, title: "Engagement résultats", sub: "Reporting mensuel" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/70 border border-[#EAB308]/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-[#EAB308]" />
                </div>
                <div className="text-left">
                  <p className="font-bold font-heading text-[#111827]">{item.title}</p>
                  <p className="text-xs text-[#111827]/50">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ SEO */}
      <Section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Questions fréquentes sur le SEO
          </h2>
          <p className="text-[#111827]/60">
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map((faq, i) => (
            <div key={i} className="relative card-glass p-6 pl-7 hover:-translate-y-1 transition-all overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#EAB308] to-[#FACC15]" />
              <h3 className="font-heading font-bold text-[#111827] mb-2">{faq.q}</h3>
              <p className="text-sm text-[#111827]/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final améliorée */}
      {/*<Section className="text-center py-4">*/}
      {/*  <div className="relative overflow-hidden bg-gradient-to-br from-[#EAB308]/[0.08] to-[#FACC15]/[0.05] rounded-3xl p-10 md:p-14 border border-[#EAB308]/15">*/}
      {/*    <div className="pointer-events-none absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#EAB308]/10 blur-3xl" />*/}
      {/*    <div className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#FACC15]/10 blur-3xl" />*/}
      {/*    <div className="relative">*/}
      {/*      <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-3">*/}
      {/*        Prêt à booster votre visibilité sur Google ?*/}
      {/*      </h3>*/}
      {/*      <p className="text-[#111827]/60 mb-7 max-w-md mx-auto">*/}
      {/*        Demandez votre audit SEO gratuit et découvrez comment nous pouvons vous aider à atteindre la première page.*/}
      {/*      </p>*/}
      {/*      <div className="flex flex-wrap gap-4 justify-center">*/}
      {/*        <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">*/}
      {/*          Demander un audit gratuit*/}
      {/*          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />*/}
      {/*        </Link>*/}
      {/*        <Link to="/resources/guides" className="btn-outline inline-flex items-center gap-2">*/}
      {/*          Télécharger notre guide SEO*/}
      {/*          <DownloadIcon size={16} />*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Section>*/}
      <Section className="text-center py-4">
        <div
            className="relative overflow-hidden bg-white rounded-3xl p-10 md:p-14 border border-[#111827]/[0.08] shadow-sm">
          {/* Halos décoratifs discrets */}
          <div
              className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#EAB308]/[0.06] blur-3xl"/>
          <div
              className="pointer-events-none absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#FACC15]/[0.06] blur-3xl"/>

          <div className="relative grid md:grid-cols-[1.2fr,1fr] gap-10 items-center text-left">
            {/* Colonne texte */}
            <div>
              <div
                  className="inline-flex items-center gap-2 bg-[#EAB308]/10 border border-[#EAB308]/15 rounded-full px-3 py-1 mb-5">
                <Sparkles size={14} className="text-[#EAB308]"/>
                <span className="text-sm font-medium text-[#EAB308]">Audit 100% gratuit, sans engagement</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-3 leading-tight">
                Prêt à booster votre visibilité sur Google ?
              </h3>
              <p className="text-[#111827]/60 mb-7 max-w-md">
                Demandez votre audit SEO gratuit et découvrez comment nous pouvons vous aider à atteindre la première
                page.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                  Demander un audit gratuit
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
                <Link to="/resources/guides" className="btn-outline inline-flex items-center gap-2 group">
                  <DownloadIcon size={16} className="group-hover:translate-y-0.5 transition-transform"/>
                  Télécharger notre guide SEO
                </Link>
              </div>
            </div>

            {/* Colonne stats / réassurance */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {icon: Shield, value: "Certifié", label: "Google Partner"},
                {icon: Users, value: "150+", label: "clients accompagnés"},
                {icon: Clock, value: "90 jours", label: "premiers résultats"},
                {icon: TrendingUp, value: "+180%", label: "trafic moyen"},
              ].map((item, i) => (
                  <div
                      key={i}
                      className="card-glass p-4 text-center hover:-translate-y-1 transition-all"
                  >
                    <div className="w-9 h-9 bg-[#EAB308]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <item.icon size={16} className="text-[#EAB308]"/>
                    </div>
                    <div className="font-heading font-bold text-[#111827] text-sm">{item.value}</div>
                    <div className="text-xs text-[#111827]/50 mt-0.5">{item.label}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </ServiceLayout>
  )
}

// Composant DownloadIcon
function DownloadIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
