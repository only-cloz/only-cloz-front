import React, { useState } from 'react'
import ServiceLayout from '../../components/layout/ServiceLayout'
import { 
  Megaphone, Search, Target, TrendingUp, BarChart3, Users,
  CheckCircle, ArrowRight, FileText, Award, Eye, Monitor
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SEA() {
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    { title: "Google Ads", description: "Search, Display, Shopping, YouTube." },
    { title: "Optimisation ROI", description: "Réduction du CPA et augmentation des conversions." },
    { title: "Remarketing", description: "Ciblez les visiteurs déjà intéressés." },
    { title: "Mots-clés négatifs", description: "Évitez les clics non pertinents." },
    { title: "Landing pages", description: "Pages à fort taux de conversion." },
    { title: "Reporting", description: "Transparence totale sur les performances." },
  ]

  const faqs = [
    { q: "Quel budget prévoir ?", a: "Nos prestations démarrent à partir de 900€/mois. Le budget dépend de votre secteur, votre zone géographique et vos objectifs." },
    { q: "Que comprend la prestation ?", a: "Audit initial, stratégie d'enchères, création d'annonces, optimisation continue et reporting mensuel." },
    { q: "SEO ou SEA ?", a: "Le SEO est durable mais long, le SEA est immédiat mais payant. Les deux sont complémentaires." },
    { q: "Comment mesurez-vous le ROI ?", a: "Nous suivons vos KPIs : ROAS, CPA, taux de conversion, et vous avez accès à un tableau de bord en temps réel." },
  ]

  return (
    <ServiceLayout
      title="SEA & Google Ads"
      description="Générez du trafic qualifié immédiatement avec des campagnes publicitaires rentables."
      icon={Megaphone}
      features={features}
    >
      {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <p className="text-sm text-[#7C3AED] mb-4">Google Ads Expert</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight">
            Des résultats immédiats
          </h1>
          <p className="text-[#111827]/60 text-lg mb-8 leading-relaxed">
            Apparaissez en tête des recherches dès demain. 
            Nous gérons vos enchères, vos annonces et vos landing pages.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all"
          >
            Demander un audit
            <ArrowRight size={16} />
          </Link>
        </div>
        
        {/* Stats minimalistes */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#111827] mb-1">+300%</div>
            <p className="text-xs text-[#111827]/40">conversions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#111827] mb-1">-45%</div>
            <p className="text-xs text-[#111827]/40">CPA</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#111827] mb-1">4.8x</div>
            <p className="text-xs text-[#111827]/40">ROAS</p>
          </div>
        </div>
      </div>

      {/* Prestations - grille simple */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-3">Nos services</h2>
          <p className="text-[#111827]/50">Une approche complète du référencement payant</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Audit complet", desc: "Analyse technique et stratégique de vos campagnes" },
            { title: "Stratégie d'enchères", desc: "Optimisation des budgets pour maximiser le ROI" },
            { title: "Création d'annonces", desc: "Textes et visuels optimisés pour la conversion" },
            { title: "Optimisation continue", desc: "A/B testing et ajustements quotidiens" },
            { title: "Landing pages", desc: "Pages de destination à fort taux de conversion" },
            { title: "Reporting mensuel", desc: "Suivi transparent de vos performances" },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-[#7C3AED]/10 pb-4">
              <h3 className="font-medium text-[#111827] mb-1">{item.title}</h3>
              <p className="text-sm text-[#111827]/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres clés - minimal */}
      <div className="border-t border-b border-[#7C3AED]/10 py-12 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#111827]">34</div>
            <p className="text-xs text-[#111827]/40 mt-1">experts SEA</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#111827]">340+</div>
            <p className="text-xs text-[#111827]/40 mt-1">projets actifs</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#111827]">4.9/5</div>
            <p className="text-xs text-[#111827]/40 mt-1">satisfaction</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#111827]">45+</div>
            <p className="text-xs text-[#111827]/40 mt-1">secteurs</p>
          </div>
        </div>
      </div>

      {/* Pourquoi nous */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-3">Pourquoi nous choisir</h2>
          <p className="text-[#111827]/50">Une approche transparente et orientée résultats</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827] mb-1">Équipe dédiée</h3>
              <p className="text-sm text-[#111827]/40">Des experts certifiés Google</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827] mb-1">Transparence</h3>
              <p className="text-sm text-[#111827]/40">Reporting détaillé et accessible</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827] mb-1">Résultats prouvés</h3>
              <p className="text-sm text-[#111827]/40">+300% de conversions en moyenne</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#7C3AED] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827] mb-1">Accompagnement</h3>
              <p className="text-sm text-[#111827]/40">Un interlocuteur unique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Livre blanc - minimal */}
      <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#7C3AED] mb-2">Ressource</p>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Du SEO au GEO</h3>
            <p className="text-[#111827]/50 text-sm mb-4">
              Maîtrisez votre visibilité sur les moteurs IA
            </p>
            <button className="text-sm text-[#111827] border border-[#111827]/20 px-5 py-2 rounded-full hover:bg-[#111827] hover:text-white transition-all inline-flex items-center gap-2">
              Télécharger
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#111827]/30">Google Partner</span>
          </div>
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

      {/* CTA finale - minimal */}
      <div className="text-center py-12 border-t border-[#7C3AED]/10">
        <h2 className="text-2xl font-bold text-[#111827] mb-3">
          Prêt à démarrer ?
        </h2>
        <p className="text-[#111827]/40 mb-6">
          Audit gratuit et sans engagement
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all"
        >
          Discuter de mon projet
          <ArrowRight size={16} />
        </Link>
      </div>
    </ServiceLayout>
  )
}