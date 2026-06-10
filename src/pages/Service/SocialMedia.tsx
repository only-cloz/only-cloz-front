import React from 'react'
import { 
  Share2, Calendar, MessageCircle, BarChart3, Users, TrendingUp,
  Award, CheckCircle, ArrowRight, Target, Heart, Eye, 
  Clock, Star, Zap, Facebook, Instagram, Linkedin, Twitter, 
  Youtube, Music, MessageSquare, Image, Video, PenTool,
  Globe, Phone, Mail, MapPin, Smartphone, ShoppingBag,
  Search
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'

export default function SocialMedia() {
  const features = [
    { title: "Community management", description: "Animation et modération quotidienne de vos communautés." },
    { title: "Création de contenu", description: "Visuels, vidéos, stories, carrousels adaptés à chaque réseau." },
    { title: "Planification stratégique", description: "Calendrier éditorial mensuel pour une présence cohérente." },
    { title: "Influence marketing", description: "Collaboration avec des micro-influenceurs pour booster votre notoriété." },
    { title: "Social listening", description: "Surveillance des mentions et tendances pour anticiper." },
    { title: "Analyse d'audience", description: "Compréhension fine de votre communauté et de ses attentes." },
  ]

  const prestations = [
    { icon: Target, title: "Stratégie social media", description: "Audit, ligne éditoriale, ciblage et planning de publications." },
    { icon: MessageCircle, title: "Community management", description: "Animation quotidienne, création de contenus et modération." },
    { icon: Star, title: "Marketing d'influence", description: "Sélection des influenceurs idéaux pour votre projet." },
    { icon: ShoppingBag, title: "Social Selling", description: "Génération de leads et maximisation des ventes." },
    { icon: PenTool, title: "Formation social media", description: "Formation pratique pour monter en compétences." },
    { icon: Image, title: "Social Media Content", description: "Production de contenu varié et à forte valeur ajoutée." },
    { icon: BarChart3, title: "Audit social media", description: "Analyse et recommandations pour améliorer votre stratégie." },
  ]

  const avantages = [
    { 
      title: "Gagner en visibilité", 
      description: "Des millions d'internautes actifs quotidiennement",
      stat: "2h",
      statLabel: "par jour sur les réseaux",
      icon: Eye
    },
    { 
      title: "Augmenter le trafic", 
      description: "Chaque publication est une opportunité de trafic",
      stat: "+45%",
      statLabel: "de trafic généré",
      icon: TrendingUp
    },
    { 
      title: "Relation client", 
      description: "Créez des liens de proximité avec votre audience",
      stat: "24/7",
      statLabel: "disponibilité",
      icon: Heart
    },
    { 
      title: "Image de marque", 
      description: "Humanisez votre marque et renforcez la confiance",
      stat: "4.8/5",
      statLabel: "satisfaction",
      icon: Award
    },
  ]

  const plateformes = [
    { icon: Facebook, name: "Facebook", users: "2.9M", color: "#1877F2", usage: "Communauté, partages" },
    { icon: Instagram, name: "Instagram", users: "2M", color: "#E4405F", usage: "Visuel, stories, reels" },
    { icon: Linkedin, name: "LinkedIn", users: "900M", color: "#0A66C2", usage: "B2B, professionnel" },
    { icon: Twitter, name: "Twitter/X", users: "550M", color: "#1DA1F2", usage: "Actualité, conversation" },
    { icon: Youtube, name: "YouTube", users: "2.5M", color: "#FF0000", usage: "Vidéo, tutos" },
    { icon: Music, name: "TikTok", users: "1.5M", color: "#000000", usage: "Vidéo courte, tendance" },
  ]

  const methodologie = [
    { step: 1, title: "Écoute du projet", description: "Compréhension de vos besoins" },
    { step: 2, title: "Audit", description: "Analyse de votre environnement" },
    { step: 3, title: "Stratégie", description: "Planning de publications" },
    { step: 4, title: "Production", description: "Création des contenus" },
    { step: 5, title: "Modération", description: "Animation et reporting" },
  ]

  const atouts = [
    { title: "Méthodologie éprouvée", description: "Processus structuré pour un meilleur ROI", icon: CheckCircle },
    { title: "Créativité à toute épreuve", description: "Contenus originaux pour animer vos communautés", icon: Zap },
    { title: "Performances & rentabilité", description: "Veille active des tendances et algorithmes", icon: TrendingUp },
    { title: "Disponibilité & réactivité", description: "Intégration en totale transparence", icon: Clock },
  ]

  return (
    <ServiceLayout
      title="Social Media Management"
      description="Développez une communauté engagée et fidèle sur les réseaux sociaux grâce à une stratégie social media sur-mesure."
      icon={Share2}
      features={features}
    >
      {/* Section Hero avec image et CTA */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-500/10 rounded-full px-3 py-1 mb-4">
            <Zap size={14} className="text-brand-500" />
            <span className="text-sm font-medium text-brand-500">+528 clients satisfaits</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Développez les réseaux sociaux de votre marque
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Les réseaux sociaux représentent des leviers clés pour atteindre vos cibles. 
            Avec des millions d'utilisateurs en France et des milliards dans le monde, 
            ils permettent de toucher une audience aussi large que variée.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Demander un audit social media
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 px-6 py-3 rounded-full font-semibold hover:border-brand-500 hover:text-brand-500 transition-all"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
        
        {/* Image/Illustration - Carte des stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-brand-500">2h</div>
              <div className="text-sm text-gray-600 dark:text-white/60">passées en moyenne par jour sur les réseaux</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-dark-800 rounded-xl p-3 text-center shadow-lg">
                <Users className="w-6 h-6 text-brand-500 mx-auto mb-1" />
                <div className="text-lg font-bold">+50%</div>
                <div className="text-xs text-gray-500">d'engagement</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-3 text-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-brand-500 mx-auto mb-1" />
                <div className="text-lg font-bold">+35%</div>
                <div className="text-xs text-gray-500">de trafic</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-3 text-center shadow-lg">
                <Heart className="w-6 h-6 text-brand-500 mx-auto mb-1" />
                <div className="text-lg font-bold">4.8/5</div>
                <div className="text-xs text-gray-500">satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Plateformes sociales */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les réseaux sociaux que nous maîtrisons
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Une présence adaptée à chaque plateforme pour maximiser votre impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {plateformes.map((plateforme, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-dark-800 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${plateforme.color}20` }}
              >
                <plateforme.icon size={24} style={{ color: plateforme.color }} />
              </div>
              <h3 className="font-bold text-sm">{plateforme.name}</h3>
              <p className="text-xs text-gray-500">{plateforme.users} utilisateurs</p>
              <p className="text-xs text-gray-400 mt-1">{plateforme.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Prestations */}
      <div className="mb-20 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nos prestations social media management
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Un pôle dédié pour imaginer des stratégies pertinentes et accompagner le développement de vos comptes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prestations.map((prestation, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-5 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-500 transition-all">
                <prestation.icon className="w-5 h-5 text-brand-500 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-md mb-1">{prestation.title}</h3>
              <p className="text-xs text-gray-600 dark:text-white/60">{prestation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Pourquoi les réseaux sociaux */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            L'intérêt des réseaux sociaux dans votre stratégie
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {avantages.map((avantage, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center">
              <avantage.icon className="w-8 h-8 text-brand-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-brand-500 mb-1">{avantage.stat}</div>
              <div className="text-xs text-gray-500 mb-2">{avantage.statLabel}</div>
              <h3 className="font-bold text-md mb-1">{avantage.title}</h3>
              <p className="text-xs text-gray-600 dark:text-white/60">{avantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Chiffres clés */}
      <div className="mb-20 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-500">+528</div>
            <div className="text-sm text-gray-600 dark:text-white/60">clients nous font confiance</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-500">24/7</div>
            <div className="text-sm text-gray-600 dark:text-white/60">présence et modération</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-500">100%</div>
            <div className="text-sm text-gray-600 dark:text-white/60">production internalisée</div>
          </div>
        </div>
      </div>

      {/* Section Méthodologie */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La méthodologie ONLY CLOZ
          </h2>
          <p className="text-gray-600 dark:text-white/70">
            Une approche structurée pour une gestion optimale de vos réseaux sociaux.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {methodologie.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                {step.step}
              </div>
              <h3 className="font-bold text-sm">{step.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Atouts */}
      <div className="mb-20 bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-white/10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les avantages de notre agence
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((atout, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <atout.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-bold text-md mb-1">{atout.title}</h3>
              <p className="text-xs text-gray-600 dark:text-white/60">{atout.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Témoignage */}
      <div className="mb-20 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg italic mb-4 opacity-90">
              "ONLY CLOZ a transformé notre présence sur les réseaux sociaux. En 6 mois, notre communauté a grandi de 150% et notre taux d'engagement a doublé."
            </p>
            <div>
              <p className="font-bold">Marie Laurent</p>
              <p className="text-sm opacity-75">Directrice Marketing, BrandCool</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Section Synergies */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Image className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">Création de contenu</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            La réussite d'une stratégie social media passe par la qualité du brand content.
          </p>
          <Link to="/services/content" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            En savoir plus →
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Search className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">Référencement SEO</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            Les réseaux sociaux participent à votre présence en ligne et à la notoriété de votre site.
          </p>
          <Link to="/services/seo" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            En savoir plus →
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Target className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">Social Ads</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            La publicité sur les réseaux sociaux reste le meilleur moyen de toucher votre cible.
          </p>
          <Link to="/services/social-ads" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            En savoir plus →
          </Link>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Questions fréquentes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Qu'est-ce que le social media management ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              C'est la gestion optimale de votre présence sur les réseaux sociaux : stratégie, création de contenu, animation, modération et analyse des performances.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel budget pour une gestion social media ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Nos prestations démarrent à partir de 1 200€/mois pour une gestion complète incluant stratégie, création et animation.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quels résultats puis-je attendre ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Augmentation de la notoriété, engagement des communautés, génération de trafic qualifié et amélioration de l'image de marque.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Sur quels réseaux devez-vous être présent ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Cela dépend de votre cible et objectifs. Nous réalisons un audit pour identifier les réseaux les plus pertinents.
            </p>
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Prêt à développer votre communauté ?
        </h2>
        <p className="text-gray-600 dark:text-white/70 mb-8 max-w-md mx-auto">
          Profitez de 30 minutes de consulting stratégique gratuit avec un expert social media ONLY CLOZ.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg"
        >
          Définir ma stratégie social media
          <ArrowRight size={20} />
        </Link>
      </div>
    </ServiceLayout>
  )
}