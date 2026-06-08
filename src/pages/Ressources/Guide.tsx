import React from 'react'
import ResourceLayout from '../../components/ResourceLayout'
import { Book, CheckCircle, Download, Star, Users, TrendingUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Guide() {
  const guides = [
    {
      title: "Guide du SEO Local",
      description: "Comment apparaître dans les résultats Google Maps et attirer des clients près de chez vous.",
      level: "Intermédiaire",
      pages: 32,
      rating: 4.8,
      downloads: 3400,
      image: "📍"
    },
    {
      title: "Guide E-commerce : De 0 à 100k€",
      description: "Les étapes clés pour lancer et faire décoller votre boutique en ligne.",
      level: "Débutant",
      pages: 56,
      rating: 4.9,
      downloads: 5200,
      image: "🛒"
    },
    {
      title: "Guide du Growth Marketing",
      description: "Techniques avancées pour accélérer la croissance de votre entreprise.",
      level: "Avancé",
      pages: 48,
      rating: 4.7,
      downloads: 2100,
      image: "🚀"
    },
    {
      title: "Guide RGPD pour les marketers",
      description: "Tout ce qu'il faut savoir pour être conforme à la réglementation.",
      level: "Tous niveaux",
      pages: 28,
      rating: 4.6,
      downloads: 1800,
      image: "🔒"
    },
    {
      title: "Guide des réseaux sociaux B2B",
      description: "Maîtrisez LinkedIn et Twitter pour générer des leads qualifiés.",
      level: "Intermédiaire",
      pages: 44,
      rating: 4.8,
      downloads: 2900,
      image: "💼"
    },
    {
      title: "Guide de l'analyse data",
      description: "Exploitez Google Analytics 4 et les datas pour prendre les bonnes décisions.",
      level: "Avancé",
      pages: 62,
      rating: 4.9,
      downloads: 1600,
      image: "📊"
    },
  ]

  return (
    <ResourceLayout
      title="Guides pratiques"
      description="Des guides détaillés et progressifs pour vous accompagner pas à pas dans votre stratégie digitale."
      icon={Book}
      category="Guide"
    >
      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-white/10">
        <button className="px-4 py-2 rounded-full bg-brand-500 text-white">Tous les guides</button>
        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-brand-500 transition-colors">Débutant</button>
        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-brand-500 transition-colors">Intermédiaire</button>
        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-brand-500 transition-colors">Avancé</button>
      </div>

      {/* Grille des guides */}
      <div className="grid md:grid-cols-2 gap-8">
        {guides.map((guide, idx) => (
          <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all group">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{guide.image}</div>
                <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-1 rounded-full text-xs">
                  <Star size={12} />
                  <span>{guide.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 dark:text-white/60 mb-4 text-sm">
                {guide.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-4 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded">📄 {guide.pages} pages</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded">⭐ {guide.level}</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded">⬇️ {guide.downloads} downloads</span>
              </div>
              <div className="flex items-center justify-between">
                <button className="text-brand-500 font-medium hover:underline inline-flex items-center gap-1">
                  Télécharger le guide <Download size={16} />
                </button>
                <span className="text-green-500 text-xs">Gratuit</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section certification */}
      <div className="mt-12 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8 text-center">
        <Award className="w-12 h-12 text-brand-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Devenez expert certifié</h3>
        <p className="text-gray-600 dark:text-white/60 mb-6 max-w-md mx-auto">
          Suivez notre formation complète et obtenez votre certification officielle OnlyCloz.
        </p>
        <Link to="/contact" className="btn-primary">
          Demander le programme
        </Link>
      </div>

      {/* Témoignages */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-white/10">
          <div className="flex items-center gap-1 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-gray-600 dark:text-white/70 italic mb-4">
            "Les guides OnlyCloz m'ont permis de doubler mon trafic en 6 mois. Des ressources exceptionnelles !"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <p className="font-semibold">Sophie Martin</p>
              <p className="text-xs text-gray-500">CEO, DigitalBoost</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-white/10">
          <div className="flex items-center gap-1 text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-gray-600 dark:text-white/70 italic mb-4">
            "Une mine d'or pour toute personne qui souhaite se former au marketing digital."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <p className="font-semibold">Thomas Dubois</p>
              <p className="text-xs text-gray-500">Growth Manager</p>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  )
}