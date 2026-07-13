import React, { useState } from 'react'
import { 
  BookOpen, Search, Tag, Heart, MessageCircle, Share2, 
  ArrowRight, Calendar, Clock, Eye, TrendingUp, Award,
  Zap, FileText, Video, Mic, Download, Users, Star
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ResourceLayout from '../../components/layout/ResourceLayout'

// Composant Mail pour l'icône newsletter
function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      title: "10 tendances SEO à suivre en 2024",
      excerpt: "Découvrez les dernières évolutions du référencement naturel et comment les exploiter pour booster votre visibilité sur Google.",
      date: "15 Mars 2024",
      readTime: 8,
      category: "SEO",
      image: "/api/placeholder/400/250",
      slug: "tendances-seo-2024",
      views: 2340,
      author: "Jean Dupont"
    },
    {
      title: "Guide complet du Social Ads en 2024",
      excerpt: "Facebook, Instagram, LinkedIn : stratégies et budgets pour maximiser votre ROI sur les réseaux sociaux.",
      date: "10 Mars 2024",
      readTime: 12,
      category: "Social Media",
      image: "/api/placeholder/400/250",
      slug: "guide-social-ads-2024",
      views: 1890,
      author: "Marie Martin"
    },
    {
      title: "L'impact de l'IA sur le marketing digital",
      excerpt: "Comment l'intelligence artificielle révolutionne la création de contenu, l'analyse data et le ciblage publicitaire.",
      date: "5 Mars 2024",
      readTime: 10,
      category: "Innovation",
      image: "/api/placeholder/400/250",
      slug: "ia-marketing-digital",
      views: 3120,
      author: "Pierre Durand"
    },
    {
      title: "Optimiser son taux de conversion e-commerce",
      excerpt: "Les bonnes pratiques pour transformer vos visiteurs en clients fidèles et augmenter votre chiffre d'affaires.",
      date: "28 Février 2024",
      readTime: 15,
      category: "E-commerce",
      image: "/api/placeholder/400/250",
      slug: "optimisation-conversion-ecommerce",
      views: 1560,
      author: "Sophie Leroy"
    },
    {
      title: "Email marketing : les secrets d'une newsletter performante",
      excerpt: "Taux d'ouverture, segmentation, automatisation : nos conseils d'experts pour des campagnes email qui convertissent.",
      date: "20 Février 2024",
      readTime: 7,
      category: "Email",
      image: "/api/placeholder/400/250",
      slug: "email-marketing-newsletter",
      views: 2100,
      author: "Thomas Bernard"
    },
    {
      title: "Webdesign : les tendances UI/UX de l'année",
      excerpt: "Minimalisme, micro-interactions, dark mode, typographie : ce qui fait la différence en 2024.",
      date: "15 Février 2024",
      readTime: 9,
      category: "Design",
      image: "/api/placeholder/400/250",
      slug: "tendances-webdesign-2024",
      views: 1780,
      author: "Julie Moreau"
    },
    {
      title: "Content Marketing : comment créer du contenu qui convertit",
      excerpt: "Stratégies et techniques pour produire du contenu engageant qui génère des leads qualifiés.",
      date: "10 Février 2024",
      readTime: 11,
      category: "Content",
      image: "/api/placeholder/400/250",
      slug: "content-marketing-qui-convertit",
      views: 2450,
      author: "Nicolas Petit"
    },
    {
      title: "Guide du référencement local pour les commerces",
      excerpt: "Optimisez votre présence sur Google Maps et attirez plus de clients dans votre région.",
      date: "5 Février 2024",
      readTime: 10,
      category: "SEO",
      image: "/api/placeholder/400/250",
      slug: "referencement-local-commerces",
      views: 1670,
      author: "Jean Dupont"
    },
    {
      title: "LinkedIn Ads : la clé du succès B2C",
      excerpt: "Comment utiliser LinkedIn pour générer des leads qualifiés et développer votre réseau professionnel.",
      date: "30 Janvier 2024",
      readTime: 13,
      category: "Social Media",
      image: "/api/placeholder/400/250",
      slug: "linkedin-ads-succes-B2C",
      views: 1980,
      author: "Marie Martin"
    },
  ]

  const categories = [
    "Tous", "SEO", "Social Media", "Email", "Design", 
    "E-commerce", "Innovation", "Content"
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "Tous" || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles[0]

  return (
    <ResourceLayout
      title="Blog & Actualités"
      description="Actualités, conseils et retours d'expérience sur le marketing digital, le SEO, les réseaux sociaux et bien plus."
      icon={BookOpen}
      category="Blog"
    >
      {/* Hero Section avec article à la une */}
      <div className="mb-16">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#EAB308] to-[#CA8A04]">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm mb-4">
                <Star size={14} />
                <span>Article à la une</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredArticle.title}</h2>
              <p className="text-white/80 mb-4 line-clamp-2">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-white/70 mb-6">
                <span className="flex items-center gap-1"><Calendar size={14} /> {featuredArticle.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {featuredArticle.readTime} min</span>
                <span className="flex items-center gap-1"><Eye size={14} /> {featuredArticle.views} vues</span>
              </div>
              <Link 
                to={`/resources/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 bg-white text-[#111827] px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Lire l'article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche et filtres améliorée */}
      <div className="mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#111827]/40" size={20} />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#EAB308]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308]/30 text-[#111827] placeholder-[#111827]/30"
          />
        </div>
        
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#EAB308] text-white shadow-md'
                  : 'border border-[#EAB308]/15 hover:border-[#EAB308] hover:text-[#EAB308] text-[#111827]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Résultats de recherche */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-[#111827]/30 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#111827] mb-2">Aucun article trouvé</h3>
          <p className="text-[#111827]/60">
            Aucun article ne correspond à votre recherche. Essayez d'autres mots-clés.
          </p>
        </div>
      ) : (
        <>
          {/* Grille d'articles avec images améliorées */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <article key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EAB308]/10">
                {/* Image d'illustration */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#EAB308]/20 to-[#FACC15]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl">
                      {article.category === "SEO" && "🔍"}
                      {article.category === "Social Media" && "📱"}
                      {article.category === "Email" && "📧"}
                      {article.category === "Design" && "🎨"}
                      {article.category === "E-commerce" && "🛒"}
                      {article.category === "Innovation" && "🚀"}
                      {article.category === "Content" && "📝"}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-[#111827]/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      <Tag size={10} /> {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-[#111827]/50 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readTime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {article.views} vues
                    </span>
                  </div>
                  
                  <h2 className="text-lg font-bold text-[#111827] mb-2 line-clamp-2 group-hover:text-[#EAB308] transition-colors">
                    <Link to={`/resources/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-sm text-[#111827]/60 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/resources/blog/${article.slug}`}
                      className="text-[#EAB308] font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      Lire la suite <ArrowRight size={14} />
                    </Link>
                    <div className="flex items-center gap-2 text-[#111827]/40">
                      <Heart size={14} className="cursor-pointer hover:text-red-500 transition-colors" />
                      <Share2 size={14} className="cursor-pointer hover:text-[#EAB308] transition-colors" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg border border-[#EAB308]/15 text-[#111827]/60 hover:bg-[#EAB308] hover:text-white transition-colors">1</button>
            <button className="px-4 py-2 rounded-lg border border-[#EAB308]/15 text-[#111827]/60 hover:bg-[#EAB308] hover:text-white transition-colors">2</button>
            <button className="px-4 py-2 rounded-lg border border-[#EAB308]/15 text-[#111827]/60 hover:bg-[#EAB308] hover:text-white transition-colors">3</button>
            <button className="px-4 py-2 rounded-lg border border-[#EAB308]/15 text-[#111827]/60 hover:bg-[#EAB308] hover:text-white transition-colors">Suivant →</button>
          </div>
        </>
      )}

      {/* Section Newsletter - Lead Magnet */}
      <div className="mt-16 bg-gradient-to-r from-[#EAB308]/10 to-[#FACC15]/10 rounded-2xl p-8 text-center border border-[#EAB308]/15">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-[#EAB308] mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-[#111827] mb-2">
            Ne manquez aucun article
          </h3>
          <p className="text-[#111827]/60 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils d'experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-xl border border-[#EAB308]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308]/30 text-[#111827] placeholder-[#111827]/30"
            />
            <button className="bg-gradient-to-r from-[#EAB308] to-[#CA8A04] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              S'inscrire
            </button>
          </div>
          <p className="text-xs text-[#111827]/40 mt-4">
            Pas de spam. Désinscription facile à tout moment.
          </p>
        </div>
      </div>

      {/* Section catégories populaires */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-center text-[#111827] mb-6">Catégories populaires</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["SEO", "Social Media", "Content Marketing", "E-commerce", "Webdesign", "Innovation"].map((cat) => (
            <Link
              key={cat}
              to={`/resources/blog?category=${cat.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-white border border-[#EAB308]/15 text-sm text-[#111827]/60 hover:border-[#EAB308] hover:text-[#EAB308] transition-all"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </ResourceLayout>
  )
}