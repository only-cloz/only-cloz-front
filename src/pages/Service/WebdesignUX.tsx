import React from 'react'
import { 
  Palette, Eye, MousePointer, Users, Layers, Sparkles, 
  Award, CheckCircle, ArrowRight, TrendingUp, Smartphone, 
  BarChart3, Heart, Target, Zap, Grid, Monitor, 
  FileText, PenTool, Search, Code, Clock, Shield
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'

export default function WebdesignUX() {
  const features = [
    { title: "Design centré utilisateur", description: "Parcours intuitifs et agréables qui répondent aux attentes de vos visiteurs." },
    { title: "Identité visuelle cohérente", description: "Couleurs, typographies, icônes sur mesure pour une image de marque forte." },
    { title: "Prototypage interactif", description: "Testez l'expérience avant le développement pour valider vos choix." },
    { title: "Accessibilité (RGAA)", description: "Sites accessibles à tous, y compris aux personnes en situation de handicap." },
    { title: "Optimisation des conversions", description: "Placement stratégique des CTA pour maximiser vos taux de conversion." },
    { title: "Motion design subtil", description: "Animations qui captent l'attention et améliorent l'expérience utilisateur." },
  ]

  const avantages = [
    { 
      title: "Etablir une identité de marque", 
      description: "50% des utilisateurs considèrent le webdesign comme un indicateur de crédibilité.",
      stat: "50%",
      statLabel: "de crédibilité",
      icon: Heart
    },
    { 
      title: "Favoriser le référencement", 
      description: "98% des sites avec un webdesign ergonomique bénéficient d'un meilleur SEO.",
      stat: "98%",
      statLabel: "meilleur SEO",
      icon: Search
    },
    { 
      title: "Miser sur le responsive", 
      description: "75% des utilisateurs quittent un site non adapté à leur écran.",
      stat: "75%",
      statLabel: "d'abandon",
      icon: Smartphone
    },
    { 
      title: "Diminuer le taux de rebond", 
      description: "40% des visiteurs quittent un site au design peu intuitif.",
      stat: "40%",
      statLabel: "de rebond",
      icon: Target
    },
  ]

  const prestations = [
    { icon: Users, title: "UX Design", description: "Nous développons une expérience utilisateur de qualité avec des contenus adaptés à votre cible." },
    { icon: BarChart3, title: "A/B Testing", description: "Nous testons les solutions les plus efficaces pour optimiser votre site sur données chiffrées." },
    { icon: Grid, title: "Ergonomie web", description: "Nous concevons des supports ergonomiques pour optimiser la navigation et la conversion." },
    { icon: Palette, title: "UI Design", description: "L'interface visuelle de votre site destinée à séduire et convaincre votre audience." },
    { icon: MousePointer, title: "Landing Page", description: "Des pages de destination optimisées pour booster vos conversions." },
    { icon: Users, title: "Équipe dédiée", description: "Une équipe sur-mesure combinant webdesigners, communicants et producteurs de contenu." },
  ]

  const methodologie = [
    { step: 1, title: "ÉLABORATION DU PROJET", items: ["Étude de votre secteur et concurrents", "Définition de vos objectifs", "Identification de vos cibles", "Rédaction du cahier des charges"] },
    { step: 2, title: "CONCEPTION DE L'INTERFACE", items: ["Création de l'arborescence", "Développement d'une interface intuitive", "Mise en page du contenu", "Optimisation ergonomie web & UX"] },
    { step: 3, title: "CONCEPTION GRAPHIQUE", items: ["Proposition de maquette", "Création de contenus visuels", "Respect de la charte graphique", "Corrections et validations"] },
    { step: 4, title: "INTÉGRATION ET MISE EN LIGNE", items: ["Planification de la mise en ligne", "Intégration HTML/CSS", "A/B Testing", "Échanges et disponibilité"] },
  ]

  const chiffres = [
    { value: "94%", label: "de la 1ère impression est liée au design", icon: Eye },
    { value: "89%", label: "se tournent vers un concurrent après une mauvaise UX", icon: Users },
    { value: "50%", label: "considèrent le webdesign comme un indicateur de crédibilité", icon: Award },
    { value: "75%", label: "investissent dans le webdesign pour se distinguer", icon: TrendingUp },
  ]

  const atouts = [
    { title: "Équipe à votre écoute", description: "Analyse profonde de votre secteur, accompagnement de A à Z, budget clairement défini" },
    { title: "Synergie de talents", description: "Équipe pluridisciplinaire mêlant rédaction, SEO, graphisme et intégration web" },
    { title: "Technologie de pointe", description: "Site accessible sur tous supports, navigation fluide et contenu optimisé SEO" },
  ]

  return (
    <ServiceLayout
      title="Webdesign & UX"
      description="Donnez vie à un site web à l'image de votre marque avec une expérience utilisateur exceptionnelle qui fidélise et convertit."
      icon={Palette}
      features={features}
    >
      {/* Section Hero avec CTA */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Le webdesign, bien plus qu'une affaire de style
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Clé de voûte de toute stratégie de marketing digital, un webdesign de qualité, à la hauteur de votre image de marque, 
            attirera et rassurera les nouveaux prospects qui vous découvrent sur internet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Demander un audit webdesign
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
        
        {/* Avantages clés */}
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

      {/* Section Chiffres clés */}
      <div className="mb-20 bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Le webdesign en chiffres</h2>
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
            Les prestations de notre agence webdesign
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Une équipe pluridisciplinaire pour donner à votre site une interface ergonomique et performante.
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

      {/* Section Pourquoi le webdesign est essentiel */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi le webdesign est essentiel ?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Créez une identité de marque forte</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Une image de marque authentique et distinctive grâce à un webdesign cohérent et percutant qui raconte votre histoire.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Améliorez votre référencement</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Un webdesign ergonomique respecte les critères SEO de Google pour hisser votre site en première page.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Misez sur le responsive design</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Un site accessible sur tous les appareils pour une expérience utilisateur optimale et un meilleur référencement.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-bold">Diminuez votre taux de rebond</h3>
            </div>
            <p className="text-gray-600 dark:text-white/60 text-sm">
              Un design fluide et esthétique encourage votre public à découvrir votre marque et à interagir.
            </p>
          </div>
        </div>
      </div>

      {/* Section Méthodologie */}
      <div className="mb-20 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La méthodologie NOIISE
          </h2>
          <p className="text-gray-600 dark:text-white/70">
            Une approche structurée pour un webdesign réussi.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologie.map((phase, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                {phase.step}
              </div>
              <h3 className="font-bold text-sm mb-2">{phase.title}</h3>
              <ul className="text-xs text-gray-600 dark:text-white/60 space-y-1">
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section Atouts */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi faire appel à NOIISE ?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {atouts.map((atout, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10 text-center">
              <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-bold mb-2">{atout.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white/60">{atout.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Synergies */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl p-8 text-white">
          <Zap className="w-10 h-10 mb-3 opacity-90" />
          <h3 className="text-xl font-bold mb-2">Webdesign + SEO</h3>
          <p className="opacity-90 mb-4">
            Un site au design irréprochable et optimisé pour le référencement naturel pour maximiser votre visibilité.
          </p>
          <Link to="/services/seo" className="inline-flex items-center gap-2 text-white underline opacity-90 hover:opacity-100">
            Découvrir nos services SEO <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-white/10">
          <FileText className="w-10 h-10 text-brand-500 mb-3" />
          <h3 className="text-xl font-bold mb-2">Webdesign + Contenu</h3>
          <p className="text-gray-600 dark:text-white/60 mb-4">
            Des contenus de qualité parfaitement intégrés à votre design pour une expérience utilisateur complète.
          </p>
          <Link to="/services/content" className="text-brand-500 font-semibold hover:underline inline-flex items-center gap-1">
            En savoir plus <ArrowRight size={16} />
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
            <h3 className="font-bold text-lg mb-2">Qu'est-ce que le webdesign ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le webdesign apporte une interface utilisateur ergonomique et un design esthétique à votre site, orientant naturellement le visiteur dans un parcours cohérent.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel budget pour un webdesign ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le budget dépend de la complexité de votre projet. Nos prestations de webdesign démarrent à partir de 2 500€.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quelle est la durée d'un projet webdesign ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Comptez entre 4 et 8 semaines selon l'ampleur du projet, de l'analyse des besoins à la mise en ligne.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Le webdesign influence-t-il le SEO ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Oui, un webdesign ergonomique et responsive est un critère clé pour le référencement naturel sur Google.
            </p>
          </div>
        </div>
      </div>

      {/* Section CTA finale */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Prêt à donner vie à un design d'exception ?
        </h2>
        <p className="text-gray-600 dark:text-white/70 mb-8 max-w-md mx-auto">
          Profitez de 30 minutes de consulting stratégique gratuit avec un expert webdesign NOIISE.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg"
        >
          Discuter de mon projet
          <ArrowRight size={20} />
        </Link>
      </div>
    </ServiceLayout>
  )
}