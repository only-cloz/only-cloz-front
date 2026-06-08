import React from 'react'
import { 
  FileText, PenTool, Video, Podcast, Megaphone, TrendingUp, 
  Award, CheckCircle, ArrowRight, Users, BarChart3, 
  Target, BookOpen, Image, Mail, Smartphone, Youtube, 
  Mic, Layout, Globe, Zap, Heart, Clock, Star,
  Search
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'

export default function ContentMarketing() {
  const features = [
    { title: "Stratégie éditoriale", description: "Calendrier éditorial aligné sur vos objectifs et votre audience." },
    { title: "Rédaction SEO", description: "Articles de blog optimisés pour Google et pour les internautes." },
    { title: "Copywriting persuasif", description: "Textes qui vendent (landing pages, emails, fiches produit)." },
    { title: "Contenus vidéo", description: "Scripts et production de vidéos courtes, corporate et motion design." },
    { title: "Infographies & visuels", description: "Données rendues attrayantes pour engager votre audience." },
    { title: "Distribution amplifiée", description: "Social media, newsletter, LinkedIn, podcasts." },
  ]

  const prestations = [
    { icon: Target, title: "Stratégie éditoriale", description: "Nous construisons une stratégie sur-mesure pour atteindre vos objectifs et harmoniser votre contenu." },
    { icon: FileText, title: "Contenu éditorial", description: "Des contenus à forte valeur ajoutée en adéquation avec vos objectifs commerciaux." },
    { icon: PenTool, title: "Rédaction Web", description: "Un contenu optimisé pour améliorer votre référencement et plaire aux internautes." },
    { icon: BookOpen, title: "Contenus Premium", description: "Livres blancs, guides pratiques, études de cas pour générer des leads qualifiés." },
    { icon: Layout, title: "Charte graphique", description: "Définition de votre identité visuelle et harmonisation graphique de vos contenus." },
    { icon: Image, title: "Création graphique", description: "Révélez votre image et vos valeurs grâce à des contenus graphiques percutants." },
  ]

  const typesContenus = [
    { icon: FileText, title: "Articles de blog", description: "Contenu à forte valeur ajoutée générateur de trafic", color: "from-blue-500 to-cyan-500" },
    { icon: BookOpen, title: "Livres blancs", description: "Appât à leads de qualité pour captez des prospects", color: "from-brand-500 to-purple-500" },
    { icon: Image, title: "Infographies", description: "Contenu engageant et chiffré qui synthétise votre pensée", color: "from-green-500 to-teal-500" },
    { icon: ShoppingCart, title: "Fiches-produit", description: "Développez vos ventes avec des fiches incitatives", color: "from-orange-500 to-red-500" },
    { icon: Mail, title: "Emailing", description: "Emailings pertinents et personnalisés", color: "from-pink-500 to-rose-500" },
    { icon: Video, title: "Motion design", description: "Dynamisez votre marque avec du contenu animé", color: "from-purple-500 to-indigo-500" },
    { icon: Youtube, title: "Vidéo corporate", description: "Présentez votre entreprise sous son plus beau visage", color: "from-red-500 to-orange-500" },
    { icon: Mic, title: "Podcast", description: "Media engageant pour les nouvelles habitudes de consommation", color: "from-indigo-500 to-purple-500" },
  ]

  const chiffres = [
    { value: "62%", label: "des entreprises externalisent leur création de contenu", icon: Users },
    { value: "70%", label: "se sentent plus proches d'une entreprise grâce au contenu", icon: Heart },
    { value: "x3", label: "de leads générés par le contenu vs marketing traditionnel", icon: TrendingUp },
    { value: "67%", label: "de leads en plus pour les entreprises qui alimentent un blog", icon: BarChart3 },
  ]

  const atouts = [
    { title: "Compréhension globale de vos besoins", description: "Une écoute attentive avant toute création pour atteindre vos objectifs commerciaux" },
    { title: "Agence orientée business", description: "Le fil conducteur : vos objectifs business et la rentabilité de votre stratégie" },
    { title: "Le meilleur content manager", description: "Des profils variés : content strategist, rédacteur, graphiste, vidéaste" },
    { title: "Équipe technique à disposition", description: "Publication et intégration assurées par nos développeurs et intégrateurs web" },
  ]

  const methodologie = [
    { step: 1, title: "Identifier", description: "les objectifs et votre audience" },
    { step: 2, title: "Construire", description: "une stratégie de contenu sur-mesure" },
    { step: 3, title: "Produire", description: "du contenu de qualité et bien ciblé" },
    { step: 4, title: "Diffuser", description: "le contenu sur les bons canaux" },
    { step: 5, title: "Mesurer", description: "les résultats et corriger" },
  ]

  return (
    <ServiceLayout
      title="Content Marketing"
      description="Attirez, éduquez et convertissez votre audience avec des contenus de haute valeur qui vous démarquent de la concurrence."
      icon={FileText}
      features={features}
    >
      {/* Section Hero avec CTA et récompenses */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["2024 Meilleure campagne content marketing", "2024 Meilleure campagne SEA", "2026 Meilleure campagne GEO"].map((reward, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 bg-brand-500/10 text-brand-500 text-xs px-2 py-1 rounded-full">
                <Award size={12} /> {reward}
              </span>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Produisez le contenu que votre cible cherche vraiment !
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Les marques sont devenues des médias à part entière. Pour sublimer la vôtre, vous démarquer de votre concurrence 
            et engager votre cible, créez du contenu de qualité et surtout adapté à votre cible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Définir ma stratégie de contenu
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
        
        {/* Image/Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-800 rounded-xl p-4 text-center shadow-lg">
                <FileText className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">+1M</div>
                <div className="text-xs text-gray-500">mots rédigés/an</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-4 text-center shadow-lg">
                <Users className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-gray-500">production internalisée</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-4 text-center shadow-lg">
                <Star className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">15</div>
                <div className="text-xs text-gray-500">talents en création</div>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-4 text-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">67%</div>
                <div className="text-xs text-gray-500">de leads en plus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Chiffres clés */}
      <div className="mb-20 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Le content marketing en chiffres</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chiffres.map((chiffre, idx) => (
            <div key={idx} className="text-center">
              <chiffre.icon className="w-8 h-8 text-brand-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-brand-500">{chiffre.value}</div>
              <div className="text-xs text-gray-600 dark:text-white/60 mt-1">{chiffre.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Prestations */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les prestations de notre agence de content marketing
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Du stratégique à l'opérationnel, une équipe pluridisciplinaire au service de votre projet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((prestation, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-all">
                <prestation.icon className="w-6 h-6 text-brand-500 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{prestation.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">{prestation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Types de contenus - Version image enrichie */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quel type de contenus produisons-nous ?
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Des talents créatifs et éditoriaux pour diversifier vos formats et maximiser votre impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {typesContenus.map((type, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all">
              <div className={`h-2 bg-gradient-to-r ${type.color}`} />
              <div className="p-5 text-center">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-500 transition-all">
                  <type.icon className="w-6 h-6 text-brand-500 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-md mb-1">{type.title}</h3>
                <p className="text-xs text-gray-600 dark:text-white/60">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Pourquoi le content marketing */}
      <div className="mb-20 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La création de contenu, créatrice de business
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Les marques attirent des audiences ciblées et qualifiées en utilisant le contenu sous toutes ses formes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Visibilité en ligne</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">
                Démontrez votre expertise et fournissez des informations qualitatives à vos prospects.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Fidélisation audience</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">
                Des contenus ciblés pour que vos prospects visitent régulièrement vos pages.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Meilleurs résultats business</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">
                Développez et diffusez vos contenus pour favoriser vos résultats commerciaux.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-brand-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">SEO amélioré</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">
                Le content marketing est un levier puissant pour votre référencement naturel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Méthodologie */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La méthodologie NOIISE
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {methodologie.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                {step.step}
              </div>
              <h3 className="font-bold text-sm">{step.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{step.description}</p>
              {idx < methodologie.length - 1 && (
                <div className="hidden lg:block absolute transform translate-x-full -mt-8">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section Atouts */}
      <div className="mb-20 bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Les atouts de notre agence</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((atout, idx) => (
            <div key={idx} className="text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <h3 className="font-bold text-sm mb-1">{atout.title}</h3>
              <p className="text-xs opacity-80">{atout.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Synergies */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Search className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">SEO + Content</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            Le contenu alimente chaque stratégie de référencement naturel. Sans rédaction SEO, les moteurs de recherche ne prêteront pas le même intérêt à votre site.
          </p>
          <Link to="/services/seo" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            En savoir plus →
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Users className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">Social Media + Content</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            Pour réussir à agrandir et engager vos communautés sur les réseaux sociaux, le contenu est le facteur déterminant.
          </p>
          <Link to="/services/social-media" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
            En savoir plus →
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Megaphone className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-lg font-bold mb-2">SEA + Content</h3>
          <p className="text-sm text-gray-600 dark:text-white/60">
            Les campagnes SEA nécessitent la création de contenu et sont bien plus performantes avec des formats variés.
          </p>
          <Link to="/services/sea" className="mt-3 inline-block text-brand-500 text-sm hover:underline">
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
            <h3 className="font-bold text-lg mb-2">Qu'est-ce que le content marketing ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le content marketing est une stratégie marketing qui consiste à créer et distribuer du contenu pertinent et de valeur pour attirer et fidéliser une audience cible.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel budget pour une stratégie de contenu ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Nos prestations de content marketing démarrent à partir de 1 500€/mois pour une stratégie éditoriale complète.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quels résultats attendre ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Les résultats se mesurent sur le long terme : augmentation du trafic, amélioration du SEO, génération de leads et fidélisation client.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quels formats de contenu proposez-vous ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Articles de blog, livres blancs, infographies, vidéos, podcasts, emailings, landing pages et motion design.
            </p>
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Prêt à développer votre stratégie de contenu ?
        </h2>
        <p className="text-gray-600 dark:text-white/70 mb-8 max-w-md mx-auto">
          Profitez de 30 minutes de consulting stratégique gratuit avec un expert content marketing NOIISE.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg"
        >
          Définir ma stratégie de contenu
          <ArrowRight size={20} />
        </Link>
      </div>
    </ServiceLayout>
  )
}

// Composant ShoppingCart pour les fiches-produit (si non importé)
function ShoppingCart(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}