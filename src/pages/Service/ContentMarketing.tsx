import React, { useState } from 'react'
import { FileText, ArrowRight, CheckCircle, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/layout/ServiceLayout'

export default function ContentMarketing() {
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    "Stratégie éditoriale",
    "Rédaction SEO",
    "Copywriting persuasif",
    "Contenus vidéo",
    "Infographies & visuels",
    "Distribution amplifiée",
  ]

  const prestations = [
    "Stratégie éditoriale",
    "Contenu éditorial",
    "Rédaction Web",
    "Livres blancs & guides",
    "Charte graphique",
    "Création graphique",
  ]

  const typesContenus = [
    "Articles de blog",
    "Livres blancs",
    "Infographies",
    "Fiches produit",
    "Emailing",
    "Vidéos",
    "Podcasts",
    "Motion design",
  ]

  const atouts = [
    "Compréhension globale de vos besoins",
    "Agence orientée business",
    "Talents variés (stratèges, rédacteurs, graphistes)",
    "Équipe technique intégrée",
  ]

  const methodologie = [
    { step: 1, title: "Identifier", desc: "objectifs et audience" },
    { step: 2, title: "Construire", desc: "stratégie sur-mesure" },
    { step: 3, title: "Produire", desc: "contenu de qualité" },
    { step: 4, title: "Diffuser", desc: "sur les bons canaux" },
    { step: 5, title: "Mesurer", desc: "et corriger" },
  ]

  const faqs = [
    { q: "Qu'est-ce que le content marketing ?", a: "Stratégie marketing consistant à créer du contenu de valeur pour attirer et fidéliser une audience." },
    { q: "Quel budget prévoir ?", a: "À partir de 1 500€/mois pour une stratégie éditoriale complète." },
    { q: "Quels résultats attendre ?", a: "Trafic, amélioration du SEO, génération de leads et fidélisation." },
    { q: "Quels formats de contenu ?", a: "Blog, livres blancs, infographies, vidéos, podcasts, emailings." },
  ]

  const rewards = [
    "2024 Meilleure campagne content marketing",
    "2024 Meilleure campagne SEA",
    "2026 Meilleure campagne GEO",
  ]

  return (
    <ServiceLayout
      title="Content Marketing"
      description="Attirez et convertissez votre audience avec des contenus de haute valeur."
      icon={FileText}
      features={features.map(f => ({ title: f, description: "" }))}
    >

      {/* Hero avec récompenses */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {rewards.map((reward, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 text-[#EAB308] text-xs px-2 py-1">
              <Award size={12} /> {reward}
            </span>
          ))}
        </div>
        <p className="text-sm text-[#EAB308] mb-4">Content Marketing</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
          Produisez le contenu que <br />
          <span className="text-[#EAB308]">votre cible cherche vraiment</span>
        </h1>
        <p className="text-lg text-[#111827]/50 mb-8">
          Les marques sont devenues des médias à part entière.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#EAB308] transition-all">
            Définir ma stratégie
          </Link>
          <Link to="/services" className="px-6 py-3 rounded-full border border-[#111827]/10 text-sm hover:border-[#EAB308] transition-all">
            Voir nos réalisations
          </Link>
        </div>
      </div>

      {/* Stats - 4 lignes */}
      <div className="max-w-2xl mx-auto mb-24">
        <div className="flex justify-between items-center py-4 border-b border-[#EAB308]/10">
          <span className="text-[#111827]/50">Externalisent leur création de contenu</span>
          <span className="text-xl font-bold text-[#111827]">62%</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-[#EAB308]/10">
          <span className="text-[#111827]/50">Se sentent plus proches grâce au contenu</span>
          <span className="text-xl font-bold text-[#111827]">70%</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-[#EAB308]/10">
          <span className="text-[#111827]/50">De leads en plus avec un blog actif</span>
          <span className="text-xl font-bold text-[#111827]">67%</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-[#EAB308]/10">
          <span className="text-[#111827]/50">Production internalisée</span>
          <span className="text-xl font-bold text-[#111827]">100%</span>
        </div>
      </div>

      {/* Prestations */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Nos prestations</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {prestations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#EAB308]" />
              <span className="text-[#111827]/60">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Types de contenus - 8 items */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Types de contenus</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {typesContenus.map((item, idx) => (
            <div key={idx} className="py-2">
              <span className="text-[#111827]/50 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="max-w-3xl mx-auto mb-24 py-8 border-t border-b border-[#EAB308]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#111827]">62%</div>
            <p className="text-xs text-[#111827]/40">externalisent le contenu</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">70%</div>
            <p className="text-xs text-[#111827]/40">se sentent plus proches</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">x3</div>
            <p className="text-xs text-[#111827]/40">de leads générés</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">100%</div>
            <p className="text-xs text-[#111827]/40">production internalisée</p>
          </div>
        </div>
      </div>

      {/* Pourquoi le content marketing */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Pourquoi le content marketing ?</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827]">Visibilité en ligne</h3>
              <p className="text-sm text-[#111827]/40">Démontrez votre expertise et fournissez des informations qualitatives.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827]">Fidélisation audience</h3>
              <p className="text-sm text-[#111827]/40">Des contenus ciblés pour que vos prospects reviennent régulièrement.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827]">Meilleurs résultats business</h3>
              <p className="text-sm text-[#111827]/40">Développez vos contenus pour favoriser vos résultats commerciaux.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle size={18} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-[#111827]">SEO amélioré</h3>
              <p className="text-sm text-[#111827]/40">Le content marketing est un levier puissant pour le référencement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Méthodologie */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Méthodologie</h2>
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
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Nos atouts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {atouts.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#EAB308]" />
              <span className="text-sm text-[#111827]/60">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Synergies */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Synergies</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-[#EAB308]/10 rounded-xl">
            <h3 className="font-medium text-[#111827] mb-1">SEO + Content</h3>
            <p className="text-xs text-[#111827]/40">Le contenu alimente le référencement</p>
          </div>
          <div className="text-center p-4 border border-[#EAB308]/10 rounded-xl">
            <h3 className="font-medium text-[#111827] mb-1">Social Media + Content</h3>
            <p className="text-xs text-[#111827]/40">Le contenu engage vos communautés</p>
          </div>
          <div className="text-center p-4 border border-[#EAB308]/10 rounded-xl">
            <h3 className="font-medium text-[#111827] mb-1">SEA + Content</h3>
            <p className="text-xs text-[#111827]/40">Des campagnes plus performantes</p>
          </div>
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
                <span className="text-[#111827]">{faq.q}</span>
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
          Prêt à développer votre stratégie de contenu ?
        </h2>
        <p className="text-sm text-[#111827]/40 mb-6">
          Consulting stratégique offert
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#EAB308] transition-all"
        >
          Définir ma stratégie
          <ArrowRight size={14} />
        </Link>
      </div>

    </ServiceLayout>
  )
}