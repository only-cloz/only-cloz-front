import React, { useState } from 'react'
import ResourceLayout from '../../components/ResourceLayout'
import { 
  FileText, Download, Mail, CheckCircle, Shield, TrendingUp, 
  Users, Zap, BookOpen, ArrowRight, Eye, Clock, Award,
  Star, Heart, Share2, Calendar
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LivreBlanc() {
  const [formData, setFormData] = useState({ email: '', nom: '', entreprise: '', telephone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [selectedWhitepaper, setSelectedWhitepaper] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const whitepapers = [
    {
      id: 1,
      title: "Guide complet du SEO en 2024",
      description: "Maîtrisez les techniques de référencement les plus efficaces pour dominer Google et attirer un trafic qualifié.",
      longDescription: "Ce livre blanc vous guide à travers les dernières évolutions du référencement naturel. Découvrez les bonnes pratiques pour optimiser votre site, créer du contenu pertinent et développer votre autorité en ligne.",
      pages: 45,
      size: "2.4 MB",
      downloads: 1240,
      image: "🔍",
      category: "SEO",
      date: "Mars 2024",
      author: "Jean Dupont"
    },
    {
      id: 2,
      title: "Stratégie Social Ads rentable",
      description: "Optimisez vos campagnes Facebook, Instagram et LinkedIn pour un ROI maximal.",
      longDescription: "Apprenez à structurer vos campagnes publicitaires sur les réseaux sociaux, à cibler les bonnes audiences et à analyser vos performances pour optimiser votre retour sur investissement.",
      pages: 38,
      size: "1.8 MB",
      downloads: 892,
      image: "📱",
      category: "Social Media",
      date: "Février 2024",
      author: "Marie Martin"
    },
    {
      id: 3,
      title: "L'IA dans le marketing digital",
      description: "Comment l'intelligence artificielle transforme le paysage marketing et la création de contenu.",
      longDescription: "Explorez les opportunités offertes par l'IA pour automatiser vos campagnes, personnaliser l'expérience client et générer des contenus à grande échelle.",
      pages: 52,
      size: "3.1 MB",
      downloads: 2103,
      image: "🤖",
      category: "Innovation",
      date: "Janvier 2024",
      author: "Pierre Durand"
    },
    {
      id: 4,
      title: "Guide du Content Marketing Performance",
      description: "Créez du contenu qui convertit et génère des leads qualifiés.",
      longDescription: "Découvrez les stratégies de content marketing les plus efficaces pour attirer, engager et convertir votre audience cible.",
      pages: 62,
      size: "4.2 MB",
      downloads: 1567,
      image: "📝",
      category: "Content",
      date: "Décembre 2023",
      author: "Sophie Leroy"
    },
    {
      id: 5,
      title: "E-commerce : Les clés du succès",
      description: "Optimisez votre boutique en ligne pour maximiser vos ventes.",
      longDescription: "Ce guide vous aide à améliorer l'expérience utilisateur, optimiser vos fiches produit et mettre en place des stratégies d'acquisition efficaces.",
      pages: 48,
      size: "2.9 MB",
      downloads: 978,
      image: "🛒",
      category: "E-commerce",
      date: "Novembre 2023",
      author: "Thomas Bernard"
    },
    {
      id: 6,
      title: "Web Analytics Avancé",
      description: "Maîtrisez Google Analytics 4 et la data pour piloter votre stratégie.",
      longDescription: "Apprenez à configurer GA4, à analyser vos données et à prendre des décisions éclairées pour optimiser vos performances.",
      pages: 55,
      size: "3.5 MB",
      downloads: 734,
      image: "📊",
      category: "Analytics",
      date: "Octobre 2023",
      author: "Julie Moreau"
    },
  ]

  const categories = ["Tous", "SEO", "Social Media", "Content", "E-commerce", "Innovation", "Analytics"]
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredWhitepapers = activeCategory === "Tous" 
    ? whitepapers 
    : whitepapers.filter(wp => wp.category === activeCategory)

  const stats = [
    { value: "+5000", label: "Téléchargements", icon: Download },
    { value: "100%", label: "Gratuit", icon: Shield },
    { value: "4.8/5", label: "Satisfaction", icon: Star },
    { value: "15+", label: "Experts", icon: Users },
  ]

  return (
    <ResourceLayout
      title="Livres Blancs & Guides"
      description="Téléchargez gratuitement nos ressources exclusives pour approfondir vos connaissances et booster votre stratégie digitale."
      icon={FileText}
      category="Livres blancs"
    >
      {/* Section Hero avec CTA */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-500/10 rounded-full px-3 py-1 mb-4">
            <Award size={14} className="text-brand-500" />
            <span className="text-sm font-medium text-brand-500">Ressources exclusives</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Des connaissances approfondies à portée de clic
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Dans un monde numérique en constante évolution, restez informé des dernières tendances 
            et mettez en œuvre des stratégies efficaces pour vous démarquer de la concurrence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#whitepapers" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Explorer les ressources
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        {/* Carte des stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-4 text-center shadow-lg">
                <stat.icon className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-500">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section lead magnet principale - Newsletter */}
      <div className="bg-gradient-to-br from-brand-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 lg:mx-0 mx-auto">
              <Mail size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Newsletter exclusive</h2>
            <p className="text-gray-600 dark:text-white/60">
              Recevez notre livre blanc <strong>"Marketing Digital 2024"</strong> + nos meilleurs conseils chaque semaine
            </p>
          </div>
          
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nom de votre entreprise"
                    value={formData.entreprise}
                    onChange={(e) => setFormData({...formData, entreprise: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone (optionnel)"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                  Télécharger gratuitement
                </button>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Merci !</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  Un email vient de vous être envoyé avec votre livre blanc.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand-500 hover:underline">
                  Télécharger un autre document →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'border border-gray-200 dark:border-white/10 hover:border-brand-500 hover:text-brand-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des livres blancs */}
      <h2 className="text-2xl font-bold mb-6" id="whitepapers">
        Nos ressources téléchargeables
        <span className="text-sm font-normal text-gray-500 ml-2">
          ({filteredWhitepapers.length} ressources)
        </span>
      </h2>
      
      <div className="space-y-6 mb-16">
        {filteredWhitepapers.map((wp, idx) => (
          <div key={idx} className="group bg-white dark:bg-dark-800 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Image/Illustration */}
              <div className="md:w-48 bg-gradient-to-br from-brand-500/20 to-blue-500/20 flex items-center justify-center p-6">
                <div className="text-6xl">{wp.image}</div>
              </div>
              
              {/* Contenu */}
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 bg-brand-500/10 text-brand-500 text-xs px-2 py-1 rounded-full">
                    <BookOpen size={10} /> {wp.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                    <Calendar size={10} /> {wp.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                    <Users size={10} /> {wp.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-500 transition-colors">
                  {wp.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  {wp.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-white/40">
                    <span className="flex items-center gap-1">📄 {wp.pages} pages</span>
                    <span className="flex items-center gap-1">💾 {wp.size}</span>
                    <span className="flex items-center gap-1">⬇️ {wp.downloads.toLocaleString()} téléchargements</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedWhitepaper(wp)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all text-sm"
                  >
                    <Download size={16} />
                    Télécharger
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de téléchargement */}
      {selectedWhitepaper && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedWhitepaper(null)}>
          <div className="bg-white dark:bg-dark-900 rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">{selectedWhitepaper.image}</div>
              <h3 className="text-xl font-bold mb-2">{selectedWhitepaper.title}</h3>
              <p className="text-gray-600 dark:text-white/60 text-sm">
                Remplissez le formulaire pour télécharger gratuitement ce livre blanc
              </p>
            </div>
            
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Votre nom *"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <input
                type="email"
                placeholder="Votre email *"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="w-full bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Download size={18} />
                Télécharger
              </button>
            </form>
            
            <button 
              onClick={() => setSelectedWhitepaper(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Pourquoi télécharger nos livres blancs */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Pourquoi télécharger nos ressources ?
          </h2>
          <p className="text-gray-600 dark:text-white/60">
            Des contenus de qualité rédigés par nos experts
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/10">
            <Shield className="w-12 h-12 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold mb-1">Expertise validée</h3>
            <p className="text-sm text-gray-600 dark:text-white/60">Rédigé par nos experts certifiés</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/10">
            <TrendingUp className="w-12 h-12 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold mb-1">100% Actionnable</h3>
            <p className="text-sm text-gray-600 dark:text-white/60">Des conseils directement applicables</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-white/10">
            <Download className="w-12 h-12 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold mb-1">Gratuit & Sans engagement</h3>
            <p className="text-sm text-gray-600 dark:text-white/60">Téléchargement immédiat</p>
          </div>
        </div>
      </div>

      {/* Section Témoignages */}
      <div className="mb-16 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 dark:text-white/60">
            Découvrez ce que nos lecteurs pensent de nos ressources
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-5">
            <div className="flex gap-1 text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 italic mb-3">
              "Un contenu exceptionnel qui m'a permis de doubler mon trafic en 3 mois. Je recommande vivement !"
            </p>
            <p className="font-semibold text-sm">Sophie Martin</p>
            <p className="text-xs text-gray-500">CEO, DigitalBoost</p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-5">
            <div className="flex gap-1 text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 italic mb-3">
              "Des guides pratiques et bien structurés. Une référence dans le domaine du marketing digital."
            </p>
            <p className="font-semibold text-sm">Thomas Dubois</p>
            <p className="text-xs text-gray-500">Growth Manager</p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-5">
            <div className="flex gap-1 text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm text-gray-600 dark:text-white/70 italic mb-3">
              "Les livres blancs NOIISE sont une mine d'or pour toute personne souhaitant se former au SEO."
            </p>
            <p className="font-semibold text-sm">Julie Bernard</p>
            <p className="text-xs text-gray-500">Responsable Marketing</p>
          </div>
        </div>
      </div>

      {/* Section Newsletter secondaire */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 bg-brand-500/10 rounded-full px-4 py-2 mb-4">
          <Mail size={16} className="text-brand-500" />
          <span className="text-sm font-medium text-brand-500">Newsletter</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Ne manquez aucune de nos ressources
        </h2>
        <p className="text-gray-600 dark:text-white/60 mb-6 max-w-md mx-auto">
          Inscrivez-vous pour recevoir nos derniers livres blancs et guides exclusifs
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button className="bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            S'inscrire
          </button>
        </div>
      </div>
    </ResourceLayout>
  )
}