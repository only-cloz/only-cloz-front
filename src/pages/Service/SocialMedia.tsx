import React, { useState } from 'react'
import { Share2, ArrowRight, CheckCircle, Award, Star, Users, TrendingUp, Heart, Clock, Zap, Target, Image, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/layout/ServiceLayout'

export default function SocialMedia() {
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    "Community management - Animation et modération quotidienne de vos communautés",
    "Création de contenu - Visuels, vidéos, stories, carrousels adaptés à chaque réseau",
    "Planification stratégique - Calendrier éditorial mensuel pour une présence cohérente",
    "Influence marketing - Collaboration avec des micro-influenceurs",
    "Social listening - Surveillance des mentions et tendances",
    "Analyse d'audience - Compréhension fine de votre communauté",
  ]

  const prestations = [
    { title: "Stratégie social media", desc: "Audit, ligne éditoriale, ciblage et planning" },
    { title: "Community management", desc: "Animation quotidienne, création et modération" },
    { title: "Marketing d'influence", desc: "Sélection des influenceurs idéaux" },
    { title: "Social Selling", desc: "Génération de leads et maximisation des ventes" },
    { title: "Formation social media", desc: "Formation pratique pour monter en compétences" },
    { title: "Social Media Content", desc: "Production de contenu à forte valeur ajoutée" },
    { title: "Audit social media", desc: "Analyse et recommandations stratégiques" },
  ]

  const plateformes = [
    { name: "Facebook", users: "2,9 milliards", usage: "Communauté, partages" },
    { name: "Instagram", users: "2 milliards", usage: "Visuel, stories, reels" },
    { name: "LinkedIn", users: "900 millions", usage: "B2C, professionnel" },
    { name: "Twitter/X", users: "550 millions", usage: "Actualité, conversation" },
    { name: "YouTube", users: "2,5 milliards", usage: "Vidéo, tutos" },
    { name: "TikTok", users: "1,5 milliard", usage: "Vidéo courte, tendance" },
  ]

  const avantages = [
    { stat: "2h", label: "par jour sur les réseaux", title: "Gagner en visibilité", desc: "Des millions d'internautes actifs quotidiennement" },
    { stat: "+45%", label: "de trafic généré", title: "Augmenter le trafic", desc: "Chaque publication est une opportunité de trafic" },
    { stat: "24/7", label: "disponibilité", title: "Relation client", desc: "Créez des liens de proximité avec votre audience" },
    { stat: "4.8/5", label: "satisfaction", title: "Image de marque", desc: "Humanisez votre marque et renforcez la confiance" },
  ]

  const chiffresCles = [
    { value: "+528", label: "clients nous font confiance" },
    { value: "24/7", label: "présence et modération" },
    { value: "100%", label: "production internalisée" },
  ]

  const statsHero = [
    { value: "+50%", label: "d'engagement moyen" },
    { value: "+35%", label: "de trafic généré" },
    { value: "4.8/5", label: "satisfaction client" },
  ]

  const methodologie = [
    { step: 1, title: "Écoute", desc: "du projet - Compréhension de vos besoins" },
    { step: 2, title: "Audit", desc: "de l'environnement - Analyse de votre secteur" },
    { step: 3, title: "Stratégie", desc: "de publications - Planning éditorial" },
    { step: 4, title: "Production", desc: "des contenus - Création sur-mesure" },
    { step: 5, title: "Modération", desc: "et reporting - Suivi des performances" },
  ]

  const atouts = [
    { title: "Méthodologie éprouvée", desc: "Processus structuré pour un meilleur ROI" },
    { title: "Créativité à toute épreuve", desc: "Contenus originaux pour animer vos communautés" },
    { title: "Performances & rentabilité", desc: "Veille active des tendances et algorithmes" },
    { title: "Disponibilité & réactivité", desc: "Intégration en totale transparence" },
  ]

  const synergies = [
    { title: "Création de contenu", desc: "La réussite d'une stratégie social media passe par la qualité du brand content" },
    { title: "Référencement SEO", desc: "Les réseaux sociaux participent à votre présence en ligne et à la notoriété de votre site" },
    { title: "Social Ads", desc: "La publicité sur les réseaux sociaux reste le meilleur moyen de toucher votre cible" },
  ]

  const faqs = [
    { q: "Qu'est-ce que le social media management ?", a: "C'est la gestion optimale de votre présence sur les réseaux sociaux : stratégie, création de contenu, animation, modération et analyse des performances." },
    { q: "Quel budget pour une gestion social media ?", a: "Nos prestations démarrent à partir de 1 200€/mois pour une gestion complète incluant stratégie, création et animation." },
    { q: "Quels résultats puis-je attendre ?", a: "Augmentation de la notoriété, engagement des communautés, génération de trafic qualifié et amélioration de l'image de marque." },
    { q: "Sur quels réseaux devez-vous être présent ?", a: "Cela dépend de votre cible et objectifs. Nous réalisons un audit pour identifier les réseaux les plus pertinents." },
  ]

  const testimonial = {
    text: "ONLY CLOZ a transformé notre présence sur les réseaux sociaux. En 6 mois, notre communauté a grandi de 150% et notre taux d'engagement a doublé.",
    author: "Marie Laurent",
    role: "Directrice Marketing, BrandCool",
    rating: 5,
  }

  return (
    <ServiceLayout
      title="Social Media Management"
      description="Développez une communauté engagée et fidèle sur les réseaux sociaux grâce à une stratégie social media sur-mesure."
      icon={Share2}
      features={features.map(f => ({ title: f.split(" - ")[0], description: f.split(" - ")[1] }))}
    >

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 bg-[#EAB308]/10 rounded-full px-3 py-1 mb-6">
          <Zap size={14} className="text-[#EAB308]" />
          <span className="text-sm font-medium text-[#EAB308]">+528 clients satisfaits</span>
        </div>
        <p className="text-sm text-[#EAB308] mb-4">Social Media Management</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
          Développez les réseaux sociaux <br />
          <span className="text-[#EAB308]">de votre marque</span>
        </h1>
        <p className="text-lg text-[#111827]/50 mb-8">
          Les réseaux sociaux représentent des leviers clés pour atteindre vos cibles. 
          Avec des millions d'utilisateurs en France et des milliards dans le monde.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#EAB308] transition-all">
            Demander un audit social media
          </Link>
          <Link to="/services" className="px-6 py-3 rounded-full border border-[#111827]/10 text-sm hover:border-[#EAB308] transition-all">
            Voir nos réalisations
          </Link>
        </div>
      </div>

      {/* Stats Hero */}
      <div className="max-w-3xl mx-auto mb-24">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {statsHero.map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#111827]">{stat.value}</div>
              <p className="text-xs text-[#111827]/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Plateformes */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Les réseaux sociaux que nous maîtrisons</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {plateformes.map((item, idx) => (
            <div key={idx} className="border border-[#EAB308]/10 rounded-xl p-4">
              <h3 className="font-medium text-[#111827]">{item.name}</h3>
              <p className="text-xs text-[#111827]/40 mt-1">{item.users}</p>
              <p className="text-xs text-[#111827]/30 mt-1">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prestations */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Nos prestations social media management</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prestations.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle size={14} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[#111827] text-sm font-medium">{item.title}</span>
                <p className="text-xs text-[#111827]/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pourquoi les réseaux sociaux */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">L'intérêt des réseaux sociaux dans votre stratégie</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {avantages.map((item, idx) => (
            <div key={idx} className="border border-[#EAB308]/10 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-[#111827] mb-1">{item.stat}</div>
              <p className="text-xs text-[#111827]/40 mb-3">{item.label}</p>
              <h3 className="font-medium text-[#111827] mb-1">{item.title}</h3>
              <p className="text-xs text-[#111827]/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="max-w-3xl mx-auto mb-24 py-8 border-t border-b border-[#EAB308]/10">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {chiffresCles.map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-[#111827]">{item.value}</div>
              <p className="text-xs text-[#111827]/40">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Méthodologie */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">La méthodologie ONLY CLOZ</h2>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {methodologie.map((step, idx) => (
            <div key={idx}>
              <div className="w-8 h-8 mx-auto bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#EAB308] text-xs font-medium mb-2">
                {step.step}
              </div>
              <p className="text-sm font-medium text-[#111827]">{step.title}</p>
              <p className="text-xs text-[#111827]/30">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Atouts */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Les avantages de notre agence</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {atouts.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle size={14} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-[#111827]">{item.title}</span>
                <p className="text-xs text-[#111827]/40">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Témoignage */}
      <div className="max-w-3xl mx-auto mb-24 p-8 border border-[#EAB308]/10 rounded-xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </div>
          <p className="text-[#111827]/60 italic mb-6">"{testimonial.text}"</p>
          <p className="font-medium text-[#111827]">{testimonial.author}</p>
          <p className="text-xs text-[#111827]/40">{testimonial.role}</p>
        </div>
      </div>

      {/* Synergies */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Synergies</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {synergies.map((item, idx) => (
            <div key={idx} className="text-center p-4 border border-[#EAB308]/10 rounded-xl">
              <h3 className="font-medium text-[#111827] mb-1">{item.title}</h3>
              <p className="text-xs text-[#111827]/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Questions fréquentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#EAB308]/10">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-[#111827] text-sm font-medium">{faq.q}</span>
                <span className="text-[#111827]/30 text-xl">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <p className="text-[#111827]/50 text-sm pb-4">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA finale */}
      <div className="text-center pt-12 border-t border-[#EAB308]/10">
        <h2 className="text-xl font-bold text-[#111827] mb-3">
          Prêt à développer votre communauté ?
        </h2>
        <p className="text-sm text-[#111827]/40 mb-6">
          Profitez de 30 minutes de consulting stratégique gratuit avec un expert social media ONLY CLOZ.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#EAB308] transition-all"
        >
          Définir ma stratégie social media
          <ArrowRight size={14} />
        </Link>
      </div>

    </ServiceLayout>
  )
}