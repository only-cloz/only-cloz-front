import React from 'react'
import ServiceLayout from '../../components/ServiceLayout'
import { Search, TrendingUp, Target, BarChart3, Zap, Globe } from 'lucide-react'

export default function SEO() {
  const features = [
    { title: "Audit technique complet", description: "Analyse approfondie de votre site pour détecter les freins SEO." },
    { title: "Stratégie de mots-clés", description: "Ciblage des termes à fort potentiel de conversion." },
    { title: "Optimisation on-page", description: "Amélioration des balises, contenu, et structure interne." },
    { title: "Netlinking qualitatif", description: "Acquisition de backlinks naturels et pertinents." },
    { title: "Suivi de performances", description: "Rapports mensuels et ajustements basés sur les données." },
    { title: "SEO local", description: "Apparition dans les résultats Google Maps et recherches locales." },
  ]

  return (
    <ServiceLayout
      title="SEO & Référencement Naturel"
      description="Boostez votre visibilité sur Google et attirez des clients qualifiés grâce à une stratégie SEO sur-mesure."
      icon={Search}
      features={features}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Votre site mérite la première page
            </h2>
            <p className="text-gray-600 dark:text-white/70">
              93% des expériences en ligne commencent par un moteur de recherche. 
              Être bien positionné sur Google n'est plus une option, c'est une nécessité. 
              Notre équipe d'experts SEO vous accompagne pour obtenir un trafic durable et rentable.
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-500/10 to-blue-500/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">+147%</div>
                <div className="text-sm text-gray-600 dark:text-white/60">de trafic organique</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">Top 3</div>
                <div className="text-sm text-gray-600 dark:text-white/60">positions clés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">-62%</div>
                <div className="text-sm text-gray-600 dark:text-white/60">coût d'acquisition</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Notre méthodologie SEO
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Audit", desc: "Analyse technique et concurrentielle" },
              { icon: TrendingUp, title: "Stratégie", desc: "Planning éditorial et netlinking" },
              { icon: BarChart3, title: "Optimisation", desc: "On-site & off-site" },
              { icon: Zap, title: "Performance", desc: "Suivi et itérations" },
            ].map((step, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white dark:bg-dark-800 shadow-sm">
                <step.icon className="w-10 h-10 text-brand-500 mx-auto mb-3" />
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}