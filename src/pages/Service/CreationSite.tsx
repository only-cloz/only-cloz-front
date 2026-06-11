import React from 'react'
import ServiceLayout from '../../components/ServiceLayout'
import { 
  Code2, Layout, Smartphone, Zap, Globe, ShoppingCart, 
  Award, CheckCircle, ArrowRight, TrendingUp, Users, 
  Eye, BarChart3, Shield, Clock, Server, RefreshCw, 
  Languages, Search, FileText, PenTool, Heart, Target
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CreationSite() {
  const features = [
    { title: "Sites vitrine modernes", description: "Design unique et navigation fluide pour une présence en ligne impactante." },
    { title: "E-commerce sur mesure", description: "Shopify, WooCommerce, PrestaShop pour maximiser vos ventes en ligne." },
    { title: "Responsive & mobile-first", description: "Expérience parfaite sur tous les écrans, de l'ordinateur au smartphone." },
    { title: "Optimisation SEO intégrée", description: "Structure technique propre pour un référencement naturel performant." },
    { title: "CMS facile à prendre en main", description: "Administrez vous-même votre contenu sans compétences techniques." },
    { title: "Hébergement & maintenance", description: "Solutions performantes et sécurisées pour une disponibilité 24/7." },
  ]

  const prestations = [
    { icon: Layout, title: "Création site WordPress", description: "Nous exploitons tout le potentiel du CMS WordPress pour concevoir un site facilement administrable, performant et bien référencé." },
    { icon: ShoppingCart, title: "Création site Prestashop", description: "Nous utilisons les fonctionnalités offertes par le CMS Prestashop n°1 en France pour créer votre E-commerce." },
    { icon: RefreshCw, title: "Refonte de site", description: "Nous auditons et améliorons votre site web pour qu'il corresponde mieux à vos objectifs." },
    { icon: Server, title: "Hébergement web", description: "Nous hébergeons votre site avec des solutions performantes, rapides et optimisées pour le SEO." },
    { icon: Code2, title: "Développement web", description: "Nous développons des solutions digitales performantes basées sur vos attentes et besoins." },
    { icon: Shield, title: "Maintenance WordPress", description: "Nous veillons à garder votre site en bonne santé et à optimiser ses performances." },
    { icon: Globe, title: "Site multilingue", description: "Nous assurons la visibilité de votre site sur les marchés où vous souhaitez être présent." },
    { icon: PenTool, title: "Création de contenu", description: "Nous créons des contenus optimisés SEO pour alimenter votre site." },
  ]

  const avantages = [
    { 
      title: "Générez plus de trafic", 
      description: "50% du trafic d'un site vient des moteurs de recherche.",
      stat: "50%",
      statLabel: "de trafic organique",
      icon: TrendingUp
    },
    { 
      title: "Attirez de nouveaux clients", 
      description: "81% des consommateurs recherchent une entreprise avant d'acheter.",
      stat: "81%",
      statLabel: "de consommateurs",
      icon: Users
    },
    { 
      title: "Crédibilisez votre marque", 
      description: "56% des consommateurs ne font pas confiance à une entreprise sans site.",
      stat: "56%",
      statLabel: "de confiance",
      icon: Heart
    },
    { 
      title: "Gardez le contrôle", 
      description: "68% des décisions d'achat sont influencées par la e-réputation.",
      stat: "68%",
      statLabel: "d'influence",
      icon: Target
    },
  ]

  const atouts = [
    { title: "Agence conseil à votre écoute", description: "Compréhension globale du projet, +22 ans d'expérience, accompagnement transparent" },
    { title: "Interlocuteurs disponibles", description: "Chargé de projet dédié, échanges réguliers, pédagogie pour plus d'indépendance" },
    { title: "Production 100% internalisée", description: "Équipe pluridisciplinaire, talents expérimentés, fonctionnement en mode projet" },
    { title: "Site optimisé pour le SEO", description: "Expérience utilisateur responsive, structure seo-friendly, contenu riche" },
  ]

  const methodologie = [
    { step: 1, title: "ÉVALUATION DU PROJET", items: ["Étude du contexte et des besoins", "Rédaction du cahier des charges", "Analyse des objectifs et de la concurrence", "Prise de brief créatif"] },
    { step: 2, title: "CONCEPTION ET ERGONOMIE", items: ["Recommandations UX", "Définition du parcours client", "Arborescence de site", "Agencement du contenu"] },
    { step: 3, title: "CONCEPTION GRAPHIQUE", items: ["Proposition de la maquette", "Corrections et validation", "Déclinaison des maquettes"] },
    { step: 4, title: "DÉVELOPPEMENT", items: ["Développement spécifique", "Intégration HTML/CSS", "Tests avant mise en ligne", "Planification de la mise en ligne"] },
    { step: 5, title: "MISE EN LIGNE", items: ["Migration du serveur", "Migration DNS", "Certificat SSL", "Recettage post mise en ligne"] },
  ]

  return (
    <ServiceLayout
      title="Création de site web"
      description="Développez et sublimez votre présence en ligne grâce à une agence experte en création de site internet sur mesure."
      icon={Code2}
      features={features}
    >
      {/* Section Hero avec CTA */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Votre site web, socle de votre stratégie digitale
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Votre site web constitue le socle de votre stratégie webmarketing, souvent le premier générateur 
            d'opportunités commerciales et le premier vecteur de votre image de marque.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Demander un devis gratuit
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
        
        {/* Statistiques clés */}
        <div className="grid grid-cols-2 gap-4">
          {avantages.map((avantage, idx) => (
            <div key={idx} className="bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-xl p-4 text-center">
              <avantage.icon className="w-8 h-8 text-brand-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-brand-500">{avantage.stat}</div>
              <div className="text-xs text-gray-600 dark:text-white/60">{avantage.statLabel}</div>
              <div className="text-sm font-medium mt-2">{avantage.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Types de sites - Version améliorée */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Sites vitrine, e-commerce ou applications web, nous créons le site qui vous ressemble.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-all">
                <ShoppingCart className="w-7 h-7 text-brand-500 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p className="text-gray-600 dark:text-white/60 mb-4">Vendez en ligne 24h/24 et 7j/7 avec une boutique performante.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Shopify, WooCommerce, PrestaShop</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Paiements sécurisés</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Gestion des stocks</li>
              </ul>
            </div>
          </div>
          
          <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-all">
                <Globe className="w-7 h-7 text-brand-500 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2">Site vitrine</h3>
              <p className="text-gray-600 dark:text-white/60 mb-4">Présentez votre activité et valorisez votre image de marque.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Design unique et moderne</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Navigation fluide et intuitive</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Optimisé pour le SEO</li>
              </ul>
            </div>
          </div>
          
          <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative">
              <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-all">
                <Layout className="w-7 h-7 text-brand-500 group-hover:text-white transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2">Application web</h3>
              <p className="text-gray-600 dark:text-white/60 mb-4">Fonctionnalités avancées pour une expérience utilisateur unique.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Développement sur mesure</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> API et intégrations</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-500" /> Scalabilité et performances</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Prestations détaillées */}
      <div className="mb-20 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nos prestations de création de site web
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Une gamme complète de services pour vous accompagner de la conception à la maintenance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prestations.map((prestation, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-5 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center mb-3">
                <prestation.icon className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold text-md mb-1">{prestation.title}</h3>
              <p className="text-xs text-gray-600 dark:text-white/60">{prestation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Pourquoi un site web */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi créer un site web ?
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Un site internet est un levier de visibilité incontournable pour votre entreprise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Crédibilisez votre marque</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Un site attrayant et moderne inspire confiance. C'est le prolongement naturel de votre image de marque.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Générez des leads 24/7</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Votre site travaille pour vous même en dehors des heures ouvrables. Captez des prospects en continu.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Accessible partout</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Un site responsive s'adapte à tous les écrans pour une expérience utilisateur optimale.
            </p>
          </div>
        </div>
      </div>

      {/* Section Méthodologie */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La méthodologie ONLY CLOZ
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Une approche structurée pour garantir le succès de votre projet web.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brand-500/20 hidden lg:block" />
          <div className="space-y-8">
            {methodologie.map((phase, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-start gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1 bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
                  <h3 className="text-lg font-bold text-brand-500 mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60">
                        <CheckCircle size={14} className="text-brand-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Atouts */}
      <div className="mb-20 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les atouts de notre agence web
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atouts.map((atout, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-1">{atout.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">{atout.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Synergies */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <Search className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">SEO & Création de site</h3>
          <p className="text-gray-600 dark:text-white/60 mb-4">
            Un site optimisé pour le SEO génère durablement des visites. La première page de Google capte 50% du trafic global.
          </p>
          <Link to="/services/seo" className="text-brand-500 font-semibold hover:underline inline-flex items-center gap-1">
            En savoir plus <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
          <FileText className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Création de contenu</h3>
          <p className="text-gray-600 dark:text-white/60 mb-4">
            Produisez régulièrement du contenu de qualité pour augmenter la visibilité de votre site et de votre marque.
          </p>
          <Link to="/services/content" className="text-brand-500 font-semibold hover:underline inline-flex items-center gap-1">
            En savoir plus <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Questions fréquentes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel budget prévoir pour un site web ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le budget dépend de vos besoins. Nos prestations démarrent à partir de 3 500€ pour un site vitrine et à partir de 6 500€ pour un e-commerce.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel est le délai de création ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Comptez entre 4 et 12 semaines selon la complexité du projet. Nous vous accompagnons à chaque étape.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Puis-je modifier mon site moi-même ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Oui, nous utilisons des CMS comme WordPress ou Prestashop qui vous permettent de gérer votre contenu facilement.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Proposez-vous la maintenance ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Oui, nous proposons des contrats de maintenance pour garantir la sécurité et les performances de votre site.
            </p>
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Prêt à donner vie à votre projet web ?
        </h2>
        <p className="text-gray-600 dark:text-white/70 mb-8 max-w-md mx-auto">
          Profitez de 30 minutes de consulting stratégique gratuit avec un expert ON.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg"
        >
          Demander un devis gratuit
          <ArrowRight size={20} />
        </Link>
      </div>
    </ServiceLayout>
  )
}