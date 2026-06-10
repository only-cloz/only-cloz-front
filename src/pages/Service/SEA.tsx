import React from 'react'
import ServiceLayout from '../../components/ServiceLayout'
import { Megaphone, DollarSign, Target, PieChart, Clock, Users, CheckCircle, ArrowRight, FileText, Award, TrendingUp, Search, BarChart3, Link, GraduationCap, FileSearch, Logs } from 'lucide-react'


export default function SEA() {
  const features = [
    { title: "Campagnes Google Ads", description: "Search, Display, Shopping, YouTube." },
    { title: "Optimisation du ROI", description: "Réduction du coût par clic et augmentation des conversions." },
    { title: "Remarketing intelligent", description: "Ciblez les visiteurs déjà intéressés." },
    { title: "Analyse des mots-clés négatifs", description: "Évitez les clics non pertinents." },
    { title: "Landing pages optimisées", description: "Création de pages à fort taux de conversion." },
    { title: "Rapports détaillés", description: "Transparence totale sur les performances." },
  ]

  const prestations = [
    { icon: Search, title: "Audit SEA", description: "Nous analysons l'ensemble de vos campagnes, sur les plans technique, sémantique et de performance, afin d'identifier les axes d'optimisation." },
    { icon: Target, title: "Stratégie d'enchères", description: "Nous construisons une stratégie sur mesure, intégrant votre secteur, votre concurrence et vos objectifs business." },
    { icon: Users, title: "Accompagnement", description: "Nous constituons une équipe dédiée autour de votre projet pour piloter une prestation globale." },
    { icon: TrendingUp, title: "Optimisation des conversions", description: "Nous optimisons vos landing pages et vos parcours utilisateur pour maximiser votre ROI." },
    { icon: BarChart3, title: "Analyse des performances", description: "Suivi et reporting détaillé de vos indicateurs de performance." },
    { icon: FileText, title: "Formation SEA", description: "Nous vous accompagnons dans l'acquisition des fondamentaux du référencement payant." },
  ]

  const avantages = [
    { title: "Transparence & écoute", description: "Communication transparente sur les missions réalisées et les résultats obtenus." },
    { title: "Équipe dédiée", description: "Une équipe sur-mesure autour de votre projet avec des experts certifiés." },
    { title: "Intervenants formés", description: "Chaque expert suit un programme de formation continu de haut niveau." },
    { title: "Résultats mensuels", description: "Vision en temps réel des performances et bilans détaillés chaque mois." },
  ]

  return (
    <ServiceLayout
      title="SEA & Google Ads"
      description="Générez du trafic qualifié immédiatement avec des campagnes publicitaires rentables sur Google."
      icon={Megaphone}
      features={features}
    >
      {/* Section Hero avec statistiques - style only cloz */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Des résultats immédiats sans attendre le SEO
          </h2>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Le SEA vous permet d'apparaître en tête des résultats de recherche dès le lendemain. 
            Nous gérons vos enchères, créations d'annonces et pages de destination pour maximiser votre retour sur investissement.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Demander un audit gratuit
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="bg-gradient-to-br from-brand-500/10 to-blue-500/10 p-8 rounded-2xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-500">+300%</div>
              <div className="text-sm text-gray-600 dark:text-white/60">de conversions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-500">-45%</div>
              <div className="text-sm text-gray-600 dark:text-white/60">CPA moyen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-500">4.5</div>
              <div className="text-sm text-gray-600 dark:text-white/60">ROAS moyen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Prestations - style only cloz avec icônes et grille */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Les prestations only cloz en SEA
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Notre agence digitale offre une large gamme de services SEA, permettant de répondre aux besoins de ses clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((prestation, idx) => (
            <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-all">
                <prestation.icon className="w-6 h-6 text-brand-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{prestation.title}</h3>
              <p className="text-gray-600 dark:text-white/60">{prestation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Chiffres clés - style only cloz */}
      <div className="bg-gradient-to-r from-brand-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-brand-500">34</div>
            <div className="text-sm text-gray-600 dark:text-white/60">consultants SEA</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-500">+340</div>
            <div className="text-sm text-gray-600 dark:text-white/60">projets actifs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-500">4,8/5</div>
            <div className="text-sm text-gray-600 dark:text-white/60">sur Google</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-500">2024</div>
            <div className="text-sm text-gray-600 dark:text-white/60">Meilleure campagne SEA</div>
          </div>
        </div>
      </div>

      {/* Section Pourquoi nous choisir - style only cloz */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir only cloz ?
          </h2>
          <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Une agence experte qui vous accompagne durablement dans votre stratégie d'acquisition.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {avantages.map((avantage, idx) => (
            <div key={idx} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">{avantage.title}</h3>
                <p className="text-gray-600 dark:text-white/60">{avantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Livre Blanc - style only cloz */}
      <div className="bg-gradient-to-r from-brand-500 to-blue-500 rounded-2xl p-8 md:p-12 mb-20 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <FileText className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">Télécharger le livre blanc</h3>
            <p className="opacity-90 mb-4">
              Du SEO au GEO : maîtrisez votre visibilité sur les moteurs IA
            </p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2">
              Télécharger gratuitement
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-2 opacity-80" />
            <p className="text-sm opacity-80">Certifié Google Partner</p>
          </div>
        </div>
      </div>

      {/* Section Méthodologie - style only cloz */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            La méthodologie only cloz
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Analyse du secteur",
            "Audit complet",
            "Optimisation des campagnes",
            "Création d'annonces",
            "Suivi & ajustements",
            "Reporting mensuel"
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-500 font-bold">{idx + 1}</span>
              </div>
              <p className="text-sm font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section FAQ - style only cloz */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            FAQ sur notre agence SEA
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quel budget faut-il prévoir ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le budget dépend de nombreux facteurs. Nos prestations démarrent à partir de 900€/mois pour un accompagnement standard.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Que comprend une prestation SEA ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Audit initial, stratégie d'enchères, création d'annonces, optimisation continue et reporting mensuel.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Avez-vous travaillé dans mon secteur ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Nous avons accompagné des clients dans plus de 45 secteurs d'activité différents.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-bold text-lg mb-2">Quelle est la différence entre SEO et SEA ?</h3>
            <p className="text-gray-600 dark:text-white/60">
              Le SEO est durable mais plus long, le SEA est immédiat mais payant. Les deux sont complémentaires.
            </p>
          </div>
        </div>
      </div>

      {/* Section CTA finale - style only cloz */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Prêt à booster votre visibilité ?
        </h2>
        <p className="text-gray-600 dark:text-white/70 mb-8 max-w-md mx-auto">
          Profitez de 30 minutes de consulting stratégique avec un expert SEA.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg"
        >
          Demander un audit gratuit
          <ArrowRight size={20} />
        </Link>
      </div>
    </ServiceLayout>
  )
}