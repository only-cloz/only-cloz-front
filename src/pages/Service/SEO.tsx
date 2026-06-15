import React, { useState } from 'react'
import ServiceLayout from '../../components/layout/ServiceLayout'
import { 
  Search, TrendingUp, Target, BarChart3, Zap, Globe, 
  CheckCircle2, ArrowRight, Award, Users, Clock, 
  Eye, Sparkles, Shield, LineChart, PieChart, 
  ExternalLink, MapPin, Smartphone, Link2
} from 'lucide-react'
import { Link } from 'react-router-dom'

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

  return (
    <ServiceLayout
      title="SEO & Référencement Naturel"
      description="Boostez votre visibilité sur Google et attirez des clients qualifiés grâce à une stratégie SEO sur-mesure."
      icon={Search}
      features={features}
    >
      {/* Section Hero avec statistiques améliorées */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 rounded-full px-3 py-1 mb-4">
            <Search size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">Expertise SEO</span>
          </div>
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Votre site mérite la première page
          </h2>
          <p className="text-[#111827]/60 mb-6 leading-relaxed">
            93% des expériences en ligne commencent par un moteur de recherche. 
            Être bien positionné sur Google n'est plus une option, c'est une nécessité. 
            Notre équipe d'experts SEO vous accompagne pour obtenir un trafic durable et rentable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Demander un audit gratuit
              <ArrowRight size={16} />
            </Link>
            <button 
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline inline-flex items-center gap-2"
            >
              Découvrir la méthode
            </button>
          </div>
        </div>
        
        {/* Stats améliorées */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl p-4 text-center shadow-md border border-[#7C3AED]/10 hover:shadow-lg transition-all group ${
                stat.highlight ? 'bg-gradient-to-br from-[#7C3AED]/5 to-[#8B5CF6]/5' : ''
              }`}
            >
              <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div className={`text-2xl font-bold ${stat.highlight ? 'gradient-text' : 'text-[#111827]'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-[#111827]/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section cas clients améliorée */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Ils nous ont fait confiance
          </h2>
          <p className="text-[#111827]/60">
            Découvrez les résultats obtenus pour nos clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-[#7C3AED]/10 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{study.image}</div>
                <div>
                  <h3 className="font-bold text-[#111827]">{study.client}</h3>
                  <p className="text-xs text-[#111827]/50">{study.industry}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-2xl font-bold gradient-text">{study.result}</span>
                <span className="text-sm text-[#111827]/50 ml-1">{study.period}</span>
              </div>
              <button className="text-[#7C3AED] text-sm font-medium hover:underline inline-flex items-center gap-1">
                Voir l'étude de cas <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Méthodologie avec onglets */}
      <div className="mb-16" id="methodology">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Notre méthodologie SEO
          </h2>
          <p className="text-[#111827]/60">
            Une approche structurée en 4 phases pour des résultats durables
          </p>
        </div>
        
        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "audit", icon: Search, label: "Audit" },
            { id: "strategy", icon: Target, label: "Stratégie" },
            { id: "optimization", icon: BarChart3, label: "Optimisation" },
            { id: "performance", icon: LineChart, label: "Performance" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'border border-[#7C3AED]/15 hover:border-[#7C3AED] hover:text-[#7C3AED] text-[#111827]/60'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white rounded-xl p-8 border border-[#7C3AED]/10 shadow-sm">
          {activeTab === "audit" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Phase 1 : Audit technique complet</h3>
              </div>
              <p className="text-[#111827]/60 mb-4">
                Nous analysons en profondeur votre site pour identifier les freins techniques, 
                les opportunités d'optimisation et les axes d'amélioration prioritaires.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {["Analyse des performances (Core Web Vitals)", "Structure du site et maillage interne", "Balises meta et contenu dupliqué", "Erreurs de crawling et d'indexation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/60">
                    <CheckCircle2 size={16} className="text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "strategy" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Phase 2 : Stratégie de contenu</h3>
              </div>
              <p className="text-[#111827]/60 mb-4">
                Nous définissons une stratégie éditoriale basée sur une analyse approfondie 
                des mots-clés et de la concurrence pour attirer votre cible.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {["Recherche de mots-clés à fort potentiel", "Analyse des intentions de recherche", "Plan de création de contenu optimisé", "Stratégie de netlinking qualitatif"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/60">
                    <CheckCircle2 size={16} className="text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "optimization" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Phase 3 : Optimisation on-site & off-site</h3>
              </div>
              <p className="text-[#111827]/60 mb-4">
                Nous mettons en œuvre les recommandations techniques et rédactionnelles 
                tout en développant une stratégie d'acquisition de backlinks de qualité.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {["Optimisation des balises et contenus", "Amélioration de la vitesse et UX", "Création de backlinks naturels", "Optimisation SEO local"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/60">
                    <CheckCircle2 size={16} className="text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "performance" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Phase 4 : Suivi et amélioration continue</h3>
              </div>
              <p className="text-[#111827]/60 mb-4">
                Nous suivons mensuellement vos performances et ajustons la stratégie 
                en fonction des résultats et des évolutions des algorithmes.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {["Tableaux de bord personnalisés", "Rapports mensuels détaillés", "Veille algorithmique continue", "Recommandations d'optimisation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/60">
                    <CheckCircle2 size={16} className="text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Pourquoi choisir Only Cloz */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Pourquoi choisir Only Cloz pour votre SEO ?
          </h2>
          <p className="text-[#111827]/60">
            Une expertise reconnue et des résultats prouvés
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#7C3AED]/5 to-[#8B5CF6]/5 rounded-xl p-6 border border-[#7C3AED]/10">
            <h3 className="font-bold text-[#111827] mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#7C3AED]" />
              Notre expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold gradient-text">15+</div>
                <p className="text-xs text-[#111827]/50">années d'expérience SEO</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">50+</div>
                <p className="text-xs text-[#111827]/50">experts certifiés</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">7</div>
                <p className="text-xs text-[#111827]/50">antennes en France</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">100%</div>
                <p className="text-xs text-[#111827]/50">méthodes White Hat</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {benefits.slice(0, 6).map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#7C3AED]/10">
                <CheckCircle2 size={18} className="text-[#7C3AED] flex-shrink-0" />
                <span className="text-sm text-[#111827]/70">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification et garanties */}
      <div className="mb-16 bg-gradient-to-r from-[#7C3AED]/10 via-[#8B5CF6]/10 to-[#EC4899]/10 rounded-2xl p-8 text-center border border-[#7C3AED]/15">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#7C3AED]" />
            <div className="text-left">
              <p className="font-bold text-[#111827]">Google Partner</p>
              <p className="text-xs text-[#111827]/50">Certification officielle</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-[#7C3AED]" />
            <div className="text-left">
              <p className="font-bold text-[#111827]">Équipe dédiée</p>
              <p className="text-xs text-[#111827]/50">Interlocuteur unique</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-[#7C3AED]" />
            <div className="text-left">
              <p className="font-bold text-[#111827]">Engagement résultats</p>
              <p className="text-xs text-[#111827]/50">Reporting mensuel</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SEO */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Questions fréquentes sur le SEO
          </h2>
          <p className="text-[#111827]/60">
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#7C3AED]/10">
            <h3 className="font-bold text-[#111827] mb-2">Combien de temps pour voir les premiers résultats SEO ?</h3>
            <p className="text-sm text-[#111827]/60">Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le SEO est un investissement long terme qui génère des résultats durables.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#7C3AED]/10">
            <h3 className="font-bold text-[#111827] mb-2">Quelle différence entre SEO et SEA ?</h3>
            <p className="text-sm text-[#111827]/60">Le SEO génère du trafic organique gratuit mais nécessite du temps. Le SEA est payant mais permet d'obtenir des résultats immédiats. Idéalement, les deux sont complémentaires.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#7C3AED]/10">
            <h3 className="font-bold text-[#111827] mb-2">Proposez-vous un audit SEO gratuit ?</h3>
            <p className="text-sm text-[#111827]/60">Oui, nous proposons un audit SEO offert pour évaluer le potentiel de votre site et identifier les axes d'amélioration prioritaires.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#7C3AED]/10">
            <h3 className="font-bold text-[#111827] mb-2">Comment mesurez-vous les performances SEO ?</h3>
            <p className="text-sm text-[#111827]/60">Nous utilisons des tableaux de bord personnalisés avec vos KPIs : positions, trafic organique, taux de conversion, ROI, etc.</p>
          </div>
        </div>
      </div>

      {/* CTA final améliorée */}
      <div className="text-center py-8">
        <div className="bg-gradient-to-r from-[#7C3AED]/5 to-[#8B5CF6]/5 rounded-2xl p-8 border border-[#7C3AED]/15">
          <h3 className="text-2xl font-bold text-[#111827] mb-3">
            Prêt à booster votre visibilité sur Google ?
          </h3>
          <p className="text-[#111827]/60 mb-6 max-w-md mx-auto">
            Demandez votre audit SEO gratuit et découvrez comment nous pouvons vous aider à atteindre la première page.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Demander un audit gratuit
              <ArrowRight size={16} />
            </Link>
            <Link to="/resources/guides" className="btn-outline inline-flex items-center gap-2">
              Télécharger notre guide SEO
              <DownloadIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
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