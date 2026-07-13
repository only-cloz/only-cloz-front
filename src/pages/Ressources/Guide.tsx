import React, { useState } from 'react'
import ResourceLayout from '../../components/layout/ResourceLayout'
import { 
  Book, CheckCircle, Download, Star, Users, TrendingUp, Award, 
  Filter, Search, Clock, Eye, ArrowRight, ChevronDown, 
  Zap, Target, Shield, Globe, Twitter, Linkedin, BookOpen
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Guide() {
  const [activeLevel, setActiveLevel] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedGuide, setExpandedGuide] = useState(null)

  const guides = [
    {
      id: 1,
      title: "Guide du SEO Local",
      description: "Comment apparaître dans les résultats Google Maps et attirer des clients près de chez vous.",
      longDescription: "Ce guide complet vous apprend à optimiser votre fiche Google Business Profile, à obtenir des avis clients et à dominer les résultats de recherche locaux. Parfait pour les commerces de proximité, restaurants, artisans et professionnels de santé.",
      level: "Intermédiaire",
      pages: 32,
      rating: 4.8,
      downloads: 3400,
      image: "📍",
      author: "Jean Dupont",
      timeToRead: "45 min",
      lastUpdate: "Mars 2024",
      includes: ["Checklist SEO Local", "Template fiche Google", "Guide des avis clients"]
    },
    {
      id: 2,
      title: "Guide E-commerce : De 0 à 100k€",
      description: "Les étapes clés pour lancer et faire décoller votre boutique en ligne.",
      longDescription: "Découvrez les stratégies pour sélectionner les bons produits, optimiser vos fiches produit, mettre en place des campagnes d'acquisition rentables et fidéliser vos clients. Cas concrets et templates inclus.",
      level: "Débutant",
      pages: 56,
      rating: 4.9,
      downloads: 5200,
      image: "🛒",
      author: "Sophie Leroy",
      timeToRead: "1h30",
      lastUpdate: "Février 2024",
      includes: ["Template business plan", "Calculatrice ROI", "Checklist lancement"]
    },
    {
      id: 3,
      title: "Guide du Growth Marketing",
      description: "Techniques avancées pour accélérer la croissance de votre entreprise.",
      longDescription: "Maîtrisez les frameworks de growth hacking, les techniques d'acquisition virale, l'optimisation du funnel de conversion et les stratégies de rétention client. Basé sur des cas réels.",
      level: "Avancé",
      pages: 48,
      rating: 4.7,
      downloads: 2100,
      image: "🚀",
      author: "Pierre Martin",
      timeToRead: "1h15",
      lastUpdate: "Janvier 2024",
      includes: ["Framework AARRR", "Template A/B testing", "Matrice d'acquisition"]
    },
    {
      id: 4,
      title: "Guide RGPD pour les marketers",
      description: "Tout ce qu'il faut savoir pour être conforme à la réglementation.",
      longDescription: "Comprenez les obligations RGPD pour vos campagnes marketing, la collecte de données, l'emailing et l'utilisation des cookies. Modèles de mentions légales et formulaires de consentement inclus.",
      level: "Tous niveaux",
      pages: 28,
      rating: 4.6,
      downloads: 1800,
      image: "🔒",
      author: "Marie Martin",
      timeToRead: "40 min",
      lastUpdate: "Décembre 2023",
      includes: ["Template politique confidentialité", "Formulaire consentement", "Checklist audit RGPD"]
    },
    {
      id: 5,
      title: "Guide des réseaux sociaux B2C",
      description: "Maîtrisez LinkedIn et Twitter pour générer des leads qualifiés.",
      longDescription: "Apprenez à optimiser votre profil, à créer du contenu engageant, à utiliser Sales Navigator et à automatiser votre prospection sur LinkedIn. Stratégies concrètes pour générer des leads B2C.",
      level: "Intermédiaire",
      pages: 44,
      rating: 4.8,
      downloads: 2900,
      image: "💼",
      author: "Thomas Bernard",
      timeToRead: "1h",
      lastUpdate: "Novembre 2023",
      includes: ["Template messages", "Planning éditorial", "Scripts d'automatisation"]
    },
    {
      id: 6,
      title: "Guide de l'analyse data",
      description: "Exploitez Google Analytics 4 et les datas pour prendre les bonnes décisions.",
      longDescription: "Maîtrisez GA4, configurez les événements personnalisés, créez des tableaux de bord pertinents et utilisez les données pour optimiser vos performances marketing.",
      level: "Avancé",
      pages: 62,
      rating: 4.9,
      downloads: 1600,
      image: "📊",
      author: "Julie Moreau",
      timeToRead: "1h45",
      lastUpdate: "Octobre 2023",
      includes: ["Configuration GA4", "Template dashboard", "Guide événements"]
    },
  ]

  const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé", "Tous niveaux"]

  const filteredGuides = guides.filter(guide => {
    const matchesLevel = activeLevel === "Tous" || guide.level === activeLevel
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLevel && matchesSearch
  })

  const stats = [
    { value: "15+", label: "Guides disponibles", icon: Book, color: "from-blue-500 to-cyan-500" },
    { value: "25k+", label: "Téléchargements", icon: Download, color: "from-green-500 to-emerald-500" },
    { value: "4.8/5", label: "Note moyenne", icon: Star, color: "from-yellow-500 to-orange-500" },
    { value: "10+", label: "Experts contributeurs", icon: Users, color: "from-purple-500 to-pink-500" },
  ]

  return (
    <ResourceLayout
      title="Guides pratiques"
      description="Des guides détaillés et progressifs pour vous accompagner pas à pas dans votre stratégie digitale."
      icon={Book}
      category="Guide"
    >
      {/* Section Hero améliorée avec stats */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/10 rounded-full px-3 py-1 mb-4">
            <BookOpen size={14} className="text-[#EAB308]" />
            <span className="text-sm font-medium text-[#EAB308]">Ressources exclusives</span>
          </div>
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Des guides complets pour maîtriser le digital
          </h2>
          <p className="text-[#111827]/60 mb-6">
            Téléchargez gratuitement nos guides pratiques rédigés par nos experts. 
            Des ressources actionnables pour vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Explorer les guides
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Stats améliorées */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAB308]/10 to-[#FACC15]/10 rounded-2xl blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md border border-[#EAB308]/10 hover:shadow-lg transition-all group">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#111827]">{stat.value}</div>
                <div className="text-xs text-[#111827]/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barre de recherche améliorée */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#111827]/40" size={20} />
          <input
            type="text"
            placeholder="Rechercher un guide par titre ou thème..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#EAB308]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308]/30 text-[#111827] placeholder-[#111827]/30"
          />
        </div>
      </div>

      {/* Filtres améliorés */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAB308]/10">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-[#111827]/50 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter size={12} /> Niveau :
          </span>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLevel === level
                  ? 'bg-[#EAB308] text-white shadow-md'
                  : 'border border-[#EAB308]/15 hover:border-[#EAB308] hover:text-[#EAB308] text-[#111827]/60'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="text-sm text-[#111827]/40">
          {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} trouvé{filteredGuides.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Message aucun résultat */}
      {filteredGuides.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-[#111827]/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#111827] mb-2">Aucun guide trouvé</h3>
          <p className="text-[#111827]/60">
            Aucun guide ne correspond à votre recherche. Essayez d'autres mots-clés.
          </p>
        </div>
      ) : (
        /* Grille des guides améliorée */
        <div className="grid md:grid-cols-2 gap-8" id="guides">
          {filteredGuides.map((guide, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#EAB308]/10 overflow-hidden hover:shadow-xl transition-all group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-4xl">{guide.image}</div>
                    <div className="flex items-center gap-1 bg-[#F59E0B]/10 text-[#F59E0B] px-2 py-1 rounded-full text-xs">
                      <Star size={12} fill="currentColor" />
                      <span>{guide.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                    className="text-[#EAB308] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    {expandedGuide === guide.id ? "Voir moins" : "Détails"}
                    <ChevronDown size={14} className={`transition-transform ${expandedGuide === guide.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#EAB308] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-[#111827]/60 mb-4 text-sm">
                  {guide.description}
                </p>
                
                {/* Métadonnées */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                  <span className="px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50 border border-[#EAB308]/10">
                    📄 {guide.pages} pages
                  </span>
                  <span className="px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50 border border-[#EAB308]/10">
                    ⭐ {guide.level}
                  </span>
                  <span className="px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50 border border-[#EAB308]/10">
                    ⬇️ {guide.downloads.toLocaleString()} téléchargements
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50 border border-[#EAB308]/10">
                    <Clock size={10} /> {guide.timeToRead}
                  </span>
                </div>
                
                {/* Description étendue (amélioration) */}
                {expandedGuide === guide.id && (
                  <div className="mt-4 p-4 bg-[#F9FAFB] rounded-xl border border-[#EAB308]/10">
                    <p className="text-sm text-[#111827]/60 mb-3">{guide.longDescription}</p>
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-[#EAB308] mb-2">📦 Ce guide contient :</p>
                      <div className="flex flex-wrap gap-2">
                        {guide.includes.map((item, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-white rounded-full text-[#111827]/60 border border-[#EAB308]/10">
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[#111827]/40 mt-3 flex items-center gap-2">
                      <span>✍️ Par {guide.author}</span>
                      <span>•</span>
                      <span>📅 Mis à jour {guide.lastUpdate}</span>
                    </p>
                  </div>
                )}
                
                {/* Bouton téléchargement */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#EAB308]/10">
                  <button className="bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-md transition-all inline-flex items-center gap-2 text-sm">
                    <Download size={16} />
                    Télécharger gratuitement
                  </button>
                  <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded-full">PDF • Gratuit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section certification améliorée */}
      <div className="mt-16 bg-gradient-to-r from-[#EAB308]/10 via-[#FACC15]/10 to-[#EC4899]/10 rounded-2xl p-8 text-center border border-[#EAB308]/15">
        <div className="w-16 h-16 bg-gradient-to-br from-[#EAB308] to-[#CA8A04] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#111827] mb-2">Devenez expert certifié</h3>
        <p className="text-[#111827]/60 mb-6 max-w-md mx-auto">
          Suivez notre formation complète et obtenez votre certification officielle OnlyCloz.
          Programme de 8 modules, exercices pratiques et examen final.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <div className="flex items-center gap-2 text-sm text-[#111827]/50">
            <CheckCircle size={16} className="text-[#EAB308]" />
            <span>Certification reconnue</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#111827]/50">
            <CheckCircle size={16} className="text-[#EAB308]" />
            <span>Accès à vie</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#111827]/50">
            <CheckCircle size={16} className="text-[#EAB308]" />
            <span>Support expert</span>
          </div>
        </div>
        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
          Demander le programme
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Section témoignages améliorée */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Ils ont téléchargé nos guides
          </h2>
          <p className="text-[#111827]/60">
            Rejoignez les milliers de professionnels qui nous font confiance
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#EAB308]/10 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-[#111827]/70 italic mb-4">
              "Les guides OnlyCloz m'ont permis de doubler mon trafic en 6 mois. Des ressources exceptionnelles, claires et directement actionnables !"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EAB308] to-[#CA8A04] rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <p className="font-semibold text-[#111827]">Sophie Martin</p>
                <p className="text-xs text-[#111827]/50">CEO, DigitalBoost</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#EAB308]/10 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-[#111827]/70 italic mb-4">
              "Une mine d'or pour toute personne qui souhaite se former au marketing digital. Les templates sont particulièrement utiles."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FACC15] to-[#CA8A04] rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <div>
                <p className="font-semibold text-[#111827]">Thomas Dubois</p>
                <p className="text-xs text-[#111827]/50">Growth Manager, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  )
}