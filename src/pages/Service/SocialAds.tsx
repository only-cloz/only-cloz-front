import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, CheckCircle, ArrowRight, Play, Zap } from 'lucide-react'

export default function SocialAdsSaaS() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: "Facebook Ads", icon: Facebook, features: ["Ciblage comportemental", "Retargeting avancé", "Lookalike audiences"] },
    { name: "Instagram Ads", icon: Instagram, features: ["Stories immersives", "Shopping intégré", "Reels sponsorisés"] },
    { name: "LinkedIn Ads", icon: Linkedin, features: ["Ciblage B2C", "InMails sponsorisés", "Lead gen forms"] },
  ]

  const steps = [
    { title: "Audit", description: "Analyse de vos campagnes actuelles", duration: "Semaine 1" },
    { title: "Stratégie", description: "Définition des objectifs", duration: "Semaine 2" },
    { title: "Déploiement", description: "Lancement des campagnes", duration: "Semaine 3" },
    { title: "Optimisation", description: "A/B testing continu", duration: "Continue" },
  ]

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero minimal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm text-[#7C3AED] mb-4">Social Ads</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
              Publicité <br />sur les réseaux
            </h1>
            <p className="text-lg text-[#111827]/50 mb-8 leading-relaxed">
              Maximisez votre ROI avec des campagnes data-driven sur Facebook, Instagram et LinkedIn.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all">
                Commencer
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111827]/10 text-sm hover:border-[#7C3AED] transition-all">
                <Play size={14} /> Démo
              </button>
            </div>
          </div>
          
          {/* Stats minimales */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
              <span className="text-[#111827]/50">ROI moyen</span>
              <span className="text-2xl font-bold text-[#111827]">+320%</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
              <span className="text-[#111827]/50">CTR</span>
              <span className="text-2xl font-bold text-[#111827]">4.8%</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
              <span className="text-[#111827]/50">CPA</span>
              <span className="text-2xl font-bold text-[#111827]">€12.50</span>
            </div>
          </div>
        </div>

        {/* Tabs minimales */}
        <div className="mb-24">
          <div className="flex gap-8 border-b border-[#7C3AED]/10 mb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 pb-3 text-sm transition-all ${
                  activeTab === idx
                    ? 'border-b-2 border-[#7C3AED] text-[#111827]'
                    : 'text-[#111827]/40 hover:text-[#111827]'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="pt-6"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-4">{tabs[activeTab].name}</h3>
                  <ul className="space-y-2">
                    {tabs[activeTab].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#111827]/60 text-sm">
                        <CheckCircle size={14} className="text-[#7C3AED]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-[#7C3AED]/10 pl-8">
                  <p className="text-xs uppercase tracking-wider text-[#7C3AED] mb-2">Cas client</p>
                  <p className="text-[#111827] font-medium mb-3">+280% de conversions en 3 mois</p>
                  <Link to="/contact" className="text-sm text-[#111827]/40 hover:text-[#7C3AED] transition-all">
                    Voir l'étude →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Méthodologie - timeline horizontale */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-[#111827] text-center mb-12">Méthodologie</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 mx-auto bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#7C3AED] text-sm font-medium mb-3">
                  {idx + 1}
                </div>
                <p className="text-xs text-[#7C3AED] mb-1">{step.duration}</p>
                <h3 className="font-medium text-[#111827] mb-1">{step.title}</h3>
                <p className="text-xs text-[#111827]/40">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing minimal */}
        <div>
          <h2 className="text-2xl font-bold text-[#111827] text-center mb-12">Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "900€", period: "/mois", features: ["1 plateforme", "Reporting mensuel"] },
              { name: "Business", price: "2 500€", period: "/mois", features: ["3 plateformes", "Reporting hebdo", "Support prioritaire"], popular: true },
              { name: "Enterprise", price: "Sur mesure", period: "", features: ["Illimité", "Dashboard temps réel", "Account dédié"] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border ${
                  plan.popular
                    ? 'border-[#7C3AED] bg-[#F9FAFB]'
                    : 'border-[#7C3AED]/10'
                }`}
              >
                {plan.popular && (
                  <p className="text-xs text-[#7C3AED] mb-2">Recommandé</p>
                )}
                <h3 className="text-lg font-bold text-[#111827] mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#111827]">{plan.price}</span>
                  <span className="text-[#111827]/40 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#111827]/50">
                      <CheckCircle size={12} className="text-[#7C3AED]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-2 rounded-full text-sm transition-all ${
                    plan.popular
                      ? 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                      : 'border border-[#111827]/20 text-[#111827] hover:border-[#7C3AED] hover:text-[#7C3AED]'
                  }`}
                >
                  Choisir
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA finale minimal */}
        <div className="text-center mt-24 pt-12 border-t border-[#7C3AED]/10">
          <h2 className="text-xl font-bold text-[#111827] mb-3">
            Prêt à lancer vos campagnes ?
          </h2>
          <p className="text-sm text-[#111827]/40 mb-6">
            Audit gratuit de votre stratégie actuelle
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-all"
          >
            Discuter de mon projet
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  )
}