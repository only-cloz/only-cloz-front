import React, { useState } from 'react'
import ServiceLayout from '../../components/layout/ServiceLayout'
import { 
  Code2, Layout, ShoppingCart, Globe, Shield, Server,
  CheckCircle, ArrowRight, TrendingUp, Users, Heart, Target,
  Search, FileText, Clock
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CreationSite() {
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    { title: "Sites vitrine", description: "Design unique et navigation fluide." },
    { title: "E-commerce", description: "Shopify, WooCommerce, PrestaShop." },
    { title: "Responsive", description: "Expérience parfaite sur tous les écrans." },
    { title: "Optimisé SEO", description: "Structure technique propre." },
    { title: "CMS facile", description: "Administrez vous-même votre contenu." },
    { title: "Maintenance", description: "Solutions performantes et sécurisées." },
  ]

  const prestations = [
    { icon: Layout, title: "Site WordPress", description: "Site facilement administrable et bien référencé." },
    { icon: ShoppingCart, title: "Site Prestashop", description: "E-commerce performant pour vendre en ligne." },
    { icon: Server, title: "Refonte de site", description: "Audit et amélioration de votre site existant." },
    { icon: Shield, title: "Maintenance", description: "Sécurité et performances garanties." },
    { icon: Globe, title: "Site multilingue", description: "Visibilité sur tous vos marchés." },
    { icon: FileText, title: "Création de contenu", description: "Contenus optimisés SEO." },
  ]

  const faqs = [
    { q: "Quel budget prévoir ?", a: "À partir de 3 500€ pour un site vitrine, 6 500€ pour un e-commerce." },
    { q: "Quel est le délai ?", a: "Entre 4 et 12 semaines selon la complexité du projet." },
    { q: "Puis-je modifier mon site ?", a: "Oui, nous utilisons des CMS comme WordPress ou Prestashop." },
    { q: "Proposez-vous la maintenance ?", a: "Oui, des contrats de maintenance pour garantir sécurité et performances." },
  ]

  return (
    <ServiceLayout
      title="Création de site web"
      description="Développez votre présence en ligne avec un site sur mesure, performant et optimisé."
      icon={Code2}
      features={features}
    >
      {/* Hero minimal */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <p className="text-sm text-[#7C3AED] mb-4">Création sur mesure</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
            Votre site web,
            <br />
            <span className="text-[#7C3AED]">socle de votre stratégie</span>
          </h1>
          <p className="text-lg text-[#111827]/50 mb-8 leading-relaxed">
            Votre site est votre premier générateur d'opportunités commerciales 
            et le premier vecteur de votre image de marque.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all">
              Demander un devis
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111827]/10 text-sm hover:border-[#7C3AED] transition-all">
              Voir nos réalisations
            </Link>
          </div>
        </div>
        
        {/* Stats minimales */}
        <div className="space-y-4">
          <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
            <span className="text-[#111827]/50">Trafic organique</span>
            <span className="text-2xl font-bold text-[#111827]">+50%</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
            <span className="text-[#111827]/50">Consommateurs qui recherchent</span>
            <span className="text-2xl font-bold text-[#111827]">81%</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
            <span className="text-[#111827]/50">Confiance sans site</span>
            <span className="text-2xl font-bold text-[#111827]">56%</span>
          </div>
        </div>
      </div>

      {/* Types de sites - grille simple */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Solutions adaptées</h2>
          <p className="text-[#111827]/40">Sites vitrine, e-commerce ou application web</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "E-commerce", desc: "Vendez en ligne 24h/24", features: ["Shopify, WooCommerce", "Paiements sécurisés", "Gestion des stocks"] },
            { title: "Site vitrine", desc: "Valorisez votre image", features: ["Design unique", "Navigation fluide", "Optimisé SEO"] },
            { title: "Application web", desc: "Fonctionnalités avancées", features: ["Développement sur mesure", "API et intégrations", "Scalabilité"] },
          ].map((item, idx) => (
            <div key={idx} className="border border-[#7C3AED]/10 rounded-xl p-6 hover:border-[#7C3AED]/30 transition-all">
              <h3 className="text-lg font-bold text-[#111827] mb-1">{item.title}</h3>
              <p className="text-sm text-[#111827]/40 mb-4">{item.desc}</p>
              <ul className="space-y-1">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/50">
                    <CheckCircle size={12} className="text-[#7C3AED]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Prestations - grille 2x3 minimal */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Nos prestations</h2>
          <p className="text-[#111827]/40">Une gamme complète pour vous accompagner</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {prestations.map((item, idx) => (
            <div key={idx} className="border-b border-[#7C3AED]/10 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <item.icon size={16} className="text-[#7C3AED]" />
                <h3 className="font-medium text-[#111827]">{item.title}</h3>
              </div>
              <p className="text-sm text-[#111827]/40">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Méthodologie - timeline horizontale */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Méthodologie</h2>
          <p className="text-[#111827]/40">Une approche structurée en 5 phases</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "Évaluation", desc: "Brief et analyse" },
            { step: 2, title: "Conception", desc: "UX et arborescence" },
            { step: 3, title: "Design", desc: "Maquettes" },
            { step: 4, title: "Développement", desc: "Intégration" },
            { step: 5, title: "Mise en ligne", desc: "Déploiement" },
          ].map((phase, idx) => (
            <div key={idx} className="text-center">
              <div className="w-8 h-8 mx-auto bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#7C3AED] text-xs font-medium mb-2">
                {phase.step}
              </div>
              <p className="font-medium text-[#111827] text-sm">{phase.title}</p>
              <p className="text-xs text-[#111827]/30">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Atouts - grille simple */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Nos atouts</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { title: "22 ans d'expérience", desc: "Une expertise reconnue" },
            { title: "Interlocuteur dédié", desc: "Suivi personnalisé" },
            { title: "100% internalisé", desc: "Équipe pluridisciplinaire" },
            { title: "Optimisé SEO", desc: "Structure seo-friendly" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="font-medium text-[#111827] mb-1">{item.title}</h3>
              <p className="text-xs text-[#111827]/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ - accordéon minimal */}
      <div className="mb-24 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Questions fréquentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#7C3AED]/10">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-[#111827] font-medium">{faq.q}</span>
                <span className="text-[#111827]/30 text-xl">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <p className="text-[#111827]/50 text-sm pb-4">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA finale minimal */}
      <div className="text-center pt-12 border-t border-[#7C3AED]/10">
        <h2 className="text-2xl font-bold text-[#111827] mb-3">
          Prêt à donner vie à votre projet ?
        </h2>
        <p className="text-sm text-[#111827]/40 mb-6">
          Consulting stratégique offert de 30 minutes
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all"
        >
          Demander un devis
          <ArrowRight size={14} />
        </Link>
      </div>

    </ServiceLayout>
  )
}