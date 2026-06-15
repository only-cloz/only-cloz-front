import React, { useState } from 'react'
import ResourceLayout from '../../components/layout/ResourceLayout'
import { 
  Youtube, Play, Clock, Eye, ThumbsUp, Share2, BookmarkPlus,
  ArrowRight, Search, Calendar, Users, Award, Zap, Filter,
  TrendingUp, Target, Smartphone, BarChart3, Mail, ShoppingCart
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activeCategory, setActiveCategory] = useState("Toutes")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["Toutes", "Tutoriels", "Webinars", "Masterclasses", "Études de cas", "SEO", "SEA", "Social Ads"]

  const videos = [
    {
      id: 1,
      title: "Vertbaudet – SEO",
      description: "Découvrez comment nous avons boosté le référencement naturel de Vertbaudet et amélioré sa visibilité sur Google.",
      duration: "12:34",
      views: 3420,
      date: "15 Mars 2024",
      category: "Études de cas",
      type: "SEO",
      thumbnail: "🔍",
      youtubeId: "dQw4w9WgXcQ",
      author: "Jean Dupont"
    },
    {
      id: 2,
      title: "Comment doubler son trafic SEO en 3 mois",
      description: "Stratégie concrète et résultats prouvés pour améliorer votre référencement et générer du trafic qualifié.",
      duration: "15:24",
      views: 12400,
      date: "10 Mars 2024",
      category: "Tutoriels",
      type: "SEO",
      thumbnail: "📈",
      youtubeId: "dQw4w9WgXcQ",
      author: "Pierre Martin"
    },
    {
      id: 3,
      title: "Fortify – SEO",
      description: "Analyse de la stratégie SEO déployée pour Fortify et les résultats obtenus sur les mots-clés stratégiques.",
      duration: "18:45",
      views: 2850,
      date: "8 Mars 2024",
      category: "Études de cas",
      type: "SEO",
      thumbnail: "🏗️",
      youtubeId: "dQw4w9WgXcQ",
      author: "Sophie Leroy"
    },
    {
      id: 4,
      title: "Tutoriel Google Ads pour débutants",
      description: "Créez votre première campagne pas à pas et évitez les erreurs courantes sur Google Ads.",
      duration: "22:15",
      views: 8900,
      date: "5 Mars 2024",
      category: "Tutoriels",
      type: "SEA",
      thumbnail: "🎯",
      youtubeId: "dQw4w9WgXcQ",
      author: "Thomas Bernard"
    },
    {
      id: 5,
      title: "Opéra Energie – ADS",
      description: "Comment nous avons optimisé les campagnes publicitaires d'Opéra Energie pour maximiser leur ROI.",
      duration: "14:22",
      views: 2100,
      date: "1 Mars 2024",
      category: "Études de cas",
      type: "Social Ads",
      thumbnail: "⚡",
      youtubeId: "dQw4w9WgXcQ",
      author: "Marie Martin"
    },
    {
      id: 6,
      title: "Webinar : Les tendances Social Media 2024",
      description: "Replay de notre masterclass avec des experts du secteur sur les réseaux sociaux.",
      duration: "48:30",
      views: 5600,
      date: "28 Février 2024",
      category: "Webinars",
      type: "Social Media",
      thumbnail: "📱",
      youtubeId: "dQw4w9WgXcQ",
      author: "Julie Moreau"
    },
    {
      id: 7,
      title: "ESLC – SEA",
      description: "Stratégie SEA déployée pour ESLC : génération de leads et optimisation du coût d'acquisition.",
      duration: "16:18",
      views: 1950,
      date: "25 Février 2024",
      category: "Études de cas",
      type: "SEA",
      thumbnail: "💡",
      youtubeId: "dQw4w9WgXcQ",
      author: "Nicolas Petit"
    },
    {
      id: 8,
      title: "Migration vers GA4",
      description: "Guide complet pour migrer de Universal Analytics vers Google Analytics 4 sans perdre vos données.",
      duration: "35:42",
      views: 7200,
      date: "20 Février 2024",
      category: "Tutoriels",
      type: "Analytics",
      thumbnail: "📊",
      youtubeId: "dQw4w9WgXcQ",
      author: "Alexandre Dubois"
    },
    {
      id: 9,
      title: "Générer des leads avec TikTok",
      description: "Comment utiliser TikTok pour développer votre notoriété et générer des leads qualifiés.",
      duration: "28:15",
      views: 4300,
      date: "15 Février 2024",
      category: "Masterclasses",
      type: "Social Media",
      thumbnail: "🎵",
      youtubeId: "dQw4w9WgXcQ",
      author: "Camille Rousseau"
    },
    {
      id: 10,
      title: "Comprendre l'analyse de logs",
      description: "Maîtrisez l'analyse des fichiers de logs pour améliorer votre référencement technique.",
      duration: "19:08",
      views: 3120,
      date: "10 Février 2024",
      category: "Tutoriels",
      type: "SEO",
      thumbnail: "📁",
      youtubeId: "dQw4w9WgXcQ",
      author: "Jean Dupont"
    },
    {
      id: 11,
      title: "Exploitez l'IA pour générer des leads",
      description: "Découvrez comment l'intelligence artificielle peut automatiser votre génération de leads.",
      duration: "42:10",
      views: 8900,
      date: "5 Février 2024",
      category: "Masterclasses",
      type: "Innovation",
      thumbnail: "🤖",
      youtubeId: "dQw4w9WgXcQ",
      author: "Pierre Martin"
    },
    {
      id: 12,
      title: "SUPspace – ADS",
      description: "Campagne publicitaire réussie pour SUPspace : stratégie et résultats.",
      duration: "13:45",
      views: 1780,
      date: "1 Février 2024",
      category: "Études de cas",
      type: "Social Ads",
      thumbnail: "🚀",
      youtubeId: "dQw4w9WgXcQ",
      author: "Sophie Leroy"
    },
  ]

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "Toutes" || video.category === activeCategory || video.type === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = [
    { value: "+50", label: "Vidéos disponibles", icon: Youtube },
    { value: "100k+", label: "Vues totales", icon: Eye },
    { value: "4.9/5", label: "Satisfaction", icon: Award },
    { value: "15+", label: "Experts", icon: Users },
  ]

  return (
    <ResourceLayout
      title="Vidéos & Webinars"
      description="Découvrez nos vidéos tutorielles, webinars, masterclasses et études de cas pour maîtriser le marketing digital."
      icon={Youtube}
      category="Vidéos"
    >
      {/* Section Hero avec CTA YouTube */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
            <Youtube size={14} className="text-red-500" />
            <span className="text-sm font-medium text-red-600">YouTube & Webinars</span>
          </div>
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Apprenez à votre rythme avec nos vidéos
          </h2>
          <p className="text-[#111827]/60 mb-6">
            Tutoriels pas à pas, webinars exclusifs et masterclasses animées par nos experts pour monter en compétences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all shadow-md"
            >
              <Youtube size={18} />
              S'abonner à la chaîne
            </a>
            <button 
              onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border border-[#7C3AED]/20 px-6 py-3 rounded-full font-semibold text-[#111827] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
            >
              Voir toutes les vidéos
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Carte des stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-[#7C3AED]/10 rounded-2xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-red-500/5 to-[#7C3AED]/5 rounded-2xl p-6 border border-red-200/20">
            <div className="text-center mb-4">
              <Youtube size={48} className="text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#111827]">ONLY CLOZ TV</div>
              <div className="text-sm text-[#111827]/50">La chaîne des experts</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <div key={idx} className="bg-white rounded-xl p-3 text-center shadow-md border border-[#7C3AED]/10">
                    <IconComponent className="w-6 h-6 text-[#7C3AED] mx-auto mb-1" />
                    <div className="text-xl font-bold text-[#7C3AED]">{stat.value}</div>
                    <div className="text-xs text-[#111827]/50">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#111827]/40" size={20} />
          <input
            type="text"
            placeholder="Rechercher une vidéo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#7C3AED]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 text-[#111827] placeholder-[#111827]/30"
          />
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-[#7C3AED] text-white shadow-md'
                : 'border border-[#7C3AED]/15 hover:border-[#7C3AED] hover:text-[#7C3AED] text-[#111827]/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Résultats */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-[#111827]/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#111827] mb-2">Aucune vidéo trouvée</h3>
          <p className="text-[#111827]/60">
            Aucune vidéo ne correspond à votre recherche. Essayez d'autres mots-clés.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="videos">
          {filteredVideos.map((video) => (
            <div key={video.id} className="group cursor-pointer" onClick={() => setSelectedVideo(video)}>
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#7C3AED]/20 to-[#8B5CF6]/20 transition-transform group-hover:scale-[1.02] duration-300">
                {/* Miniature avec icône */}
                <div className="aspect-video flex flex-col items-center justify-center">
                  <div className="text-6xl mb-2">{video.thumbnail}</div>
                  <div className="text-sm text-[#111827]/50">{video.type}</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    video.category === 'Études de cas' ? 'bg-purple-500 text-white' :
                    video.category === 'Webinars' ? 'bg-blue-500 text-white' :
                    video.category === 'Masterclasses' ? 'bg-orange-500 text-white' :
                    'bg-[#7C3AED] text-white'
                  }`}>
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-[#111827]/50 mb-2">
                  <span className="flex items-center gap-1">
                    <Eye size={12} /> {video.views.toLocaleString()} vues
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {video.date}
                  </span>
                </div>
                <h3 className="font-bold text-[#111827] mb-1 group-hover:text-[#7C3AED] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-[#111827]/60 line-clamp-2">
                  {video.description}
                </p>
                <p className="text-xs text-[#111827]/40 mt-2">Par {video.author}</p>
                <div className="flex items-center gap-3 mt-3 text-[#111827]/40">
                  <ThumbsUp size={14} className="cursor-pointer hover:text-[#7C3AED] transition-colors" />
                  <Share2 size={14} className="cursor-pointer hover:text-[#7C3AED] transition-colors" />
                  <BookmarkPlus size={14} className="cursor-pointer hover:text-[#7C3AED] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal vidéo */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedVideo(null)} 
              className="absolute -top-12 right-0 text-white hover:text-[#7C3AED] transition-colors"
            >
              ✕ Fermer
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white p-4 rounded-b-xl mt-1 border border-[#7C3AED]/15">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedVideo.category === 'Études de cas' ? 'bg-purple-500' :
                  selectedVideo.category === 'Webinars' ? 'bg-blue-500' :
                  selectedVideo.category === 'Masterclasses' ? 'bg-orange-500' :
                  'bg-[#7C3AED]'
                } text-white`}>
                  {selectedVideo.category}
                </span>
                <span className="text-xs text-[#111827]/50">{selectedVideo.duration}</span>
              </div>
              <h3 className="text-[#111827] font-bold text-xl">{selectedVideo.title}</h3>
              <p className="text-[#111827]/60 text-sm mt-1">{selectedVideo.description}</p>
              <div className="flex items-center gap-4 mt-3 text-[#111827]/50 text-sm">
                <span className="flex items-center gap-1"><Eye size={14} /> {selectedVideo.views.toLocaleString()} vues</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedVideo.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section webinaires à venir - AMÉLIORÉE */}
      <div className="mt-16 bg-gradient-to-r from-[#7C3AED]/10 to-[#8B5CF6]/10 rounded-2xl p-8 border border-[#7C3AED]/15">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 rounded-full px-3 py-1 mb-3">
            <Calendar size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">Événements à venir</span>
          </div>
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Prochains webinaires
          </h2>
          <p className="text-[#111827]/60">
            Inscrivez-vous gratuitement à nos prochaines sessions exclusives
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm border border-[#7C3AED]/10 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp size={24} className="text-[#7C3AED]" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-[#111827]">SEO 2024 : Les nouvelles tendances</h3>
              <p className="text-sm text-[#111827]/50">25 Avril 2024 - 14h00</p>
              <div className="flex items-center gap-2 justify-center sm:justify-start mt-1">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Places limitées</span>
                <span className="text-xs text-[#111827]/40">Durée: 1h30</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all">
              S'inscrire
            </button>
          </div>
          <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm border border-[#7C3AED]/10 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Target size={24} className="text-[#7C3AED]" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-[#111827]">Social Ads : Maximisez votre ROI</h3>
              <p className="text-sm text-[#111827]/50">2 Mai 2024 - 11h00</p>
              <div className="flex items-center gap-2 justify-center sm:justify-start mt-1">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Nouveau</span>
                <span className="text-xs text-[#111827]/40">Durée: 1h</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter YouTube - AMÉLIORÉE */}
      <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white shadow-xl">
        <div className="absolute opacity-10 right-0 top-0 w-32 h-32 bg-white rounded-full blur-3xl" />
        <Youtube size={48} className="mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Ne manquez aucune vidéo</h3>
        <p className="mb-4 opacity-90 max-w-md mx-auto">Abonnez-vous à notre chaîne YouTube et activez la cloche pour recevoir toutes nos nouveautés</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <Youtube size={20} className="text-red-600" />
            S'abonner à la chaîne
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Proposer un sujet
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm opacity-80">
          <span className="flex items-center gap-1">📺 +1000 abonnés</span>
          <span className="flex items-center gap-1">🎬 Nouvelles vidéos chaque semaine</span>
        </div>
      </div>
    </ResourceLayout>
  )
}