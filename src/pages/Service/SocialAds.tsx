import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, CheckCircle, ArrowRight, Play, FileText, Users, BarChart3, Settings, Zap } from 'lucide-react'

export default function SocialAdsSaaS() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: "Facebook Ads", icon: Facebook, features: ["Ciblage comportemental", "Retargeting avancé", "Lookalike audiences"] },
    { name: "Instagram Ads", icon: Instagram, features: ["Stories immersives", "Shopping intégré", "Reels sponsorisés"] },
    { name: "LinkedIn Ads", icon: Linkedin, features: ["Ciblage B2B", "InMails sponsorisés", "Lead gen forms"] },
  ]

  const steps = [
    { title: "Audit", description: "Analyse de vos campagnes actuelles", duration: "Semaine 1" },
    { title: "Stratégie", description: "Définition des objectifs et KPI", duration: "Semaine 2" },
    { title: "Déploiement", description: "Lancement des campagnes", duration: "Semaine 3" },
    { title: "Optimisation", description: "A/B testing et ajustements", duration: "Continue" },
  ]

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero minimal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-500/10 rounded-full px-3 py-1 mb-6">
              <Zap size={14} className="text-brand-500" />
              <span className="text-sm font-medium text-brand-500">Plateforme certifiée</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Social Ads
              <span className="text-brand-500"> Performance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/60 mb-8">
              Maximisez votre retour sur investissement avec nos campagnes publicitaires data-driven.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3">Commencer</Link>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 hover:border-brand-500 transition-colors">
                <Play size={16} /> Voir la démo
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-500/5 to-blue-500/5 rounded-2xl p-8">
            <div className="space-y-4">
              {[
                { label: "ROI moyen", value: "+320%", change: "+45%" },
                { label: "CTR", value: "4.8%", change: "+1.2%" },
                { label: "CPA", value: "€12.50", change: "-23%" },
              ].map((metric, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white dark:bg-dark-800 rounded-xl">
                  <span className="text-gray-600 dark:text-white/60">{metric.label}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <span className="text-green-500 text-sm">▲ {metric.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs interactives */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-white/10 mb-8">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-t-lg transition-all ${
                  activeTab === idx
                    ? 'border-b-2 border-brand-500 text-brand-500'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{tabs[activeTab].name}</h3>
                  <ul className="space-y-3">
                    {tabs[activeTab].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-brand-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-brand-500 to-blue-500 rounded-xl p-6 text-white">
                  <p className="text-sm opacity-90 mb-2">Cas client</p>
                  <p className="font-semibold mb-4">+280% de conversions en 3 mois</p>
                  <Link to="/contact" className="text-sm underline opacity-90 hover:opacity-100">
                    Voir l'étude de cas →
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Notre méthodologie</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brand-500/20 hidden lg:block" />
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className="text-sm text-brand-500 font-semibold mb-1">{step.duration}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-white/60">{step.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "€900", features: ["1 plateforme", "Reporting mensuel", "Support email"], cta: "Commencer" },
            { name: "Business", price: "€2,500", features: ["3 plateformes", "Reporting hebdo", "Support prioritaire", "Dédicated account"], cta: "Commencer", popular: true },
            { name: "Enterprise", price: "Sur mesure", features: ["Illimité", "Dashboard temps réel", "Account stratégique", "Formation incluse"], cta: "Nous contacter" },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-brand-500 to-blue-500 text-white shadow-xl'
                  : 'bg-white dark:bg-dark-800 border border-gray-200 dark:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAIRE
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <div className="text-sm opacity-80 mb-6">/mois</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:shadow-lg'
                    : 'border border-gray-300 dark:border-white/20 hover:border-brand-500 hover:text-brand-500'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}