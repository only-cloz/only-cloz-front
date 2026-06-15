import React, { useState } from 'react'
import { Palette, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/layout/ServiceLayout'

export default function WebdesignUX() {
  const [activeFaq, setActiveFaq] = useState(null)

  const features = [
    "Design centré utilisateur",
    "Identité visuelle sur mesure",
    "Prototypage interactif",
    "Accessibilité (RGAA)",
    "Optimisation des conversions",
    "Motion design subtil",
  ]

  const prestations = [
    "UX Design",
    "UI Design",
    "Ergonomie web",
    "Landing Page",
    "A/B Testing",
    "Équipe dédiée",
  ]

  const faqs = [
    { q: "Qu'est-ce que le webdesign ?", a: "L'art de concevoir une interface utilisateur ergonomique et esthétique." },
    { q: "Quel budget prévoir ?", a: "À partir de 2 500€ selon la complexité de votre projet." },
    { q: "Quelle est la durée ?", a: "Entre 4 et 8 semaines, de l'analyse à la mise en ligne." },
    { q: "Le webdesign influence-t-il le SEO ?", a: "Oui, un design ergonomique est un critère clé pour Google." },
  ]

  return (
    <ServiceLayout
      title="Webdesign & UX"
      description="Donnez vie à un site à l'image de votre marque."
      icon={Palette}
      features={features.map(f => ({ title: f, description: "" }))}
    >
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <p className="text-sm text-[#7C3AED] mb-4">Webdesign & UX</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
          Un design qui <br />
          <span className="text-[#7C3AED]">fidélise et convertit</span>
        </h1>
        <p className="text-lg text-[#111827]/50 mb-8">
          Le webdesign est la clé de voûte de votre stratégie digitale.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#7C3AED] transition-all">
            Demander un audit
          </Link>
          <Link to="/services" className="px-6 py-3 rounded-full border border-[#111827]/10 text-sm hover:border-[#7C3AED] transition-all">
            Voir nos réalisations
          </Link>
        </div>
      </div>

      {/* Stats - 3 lignes simples */}
      <div className="max-w-2xl mx-auto mb-24">
        <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
          <span className="text-[#111827]/50">1ère impression liée au design</span>
          <span className="text-xl font-bold text-[#111827]">94%</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
          <span className="text-[#111827]/50">Se tournent vers un concurrent</span>
          <span className="text-xl font-bold text-[#111827]">89%</span>
        </div>
        <div className="flex justify-between items-center py-4 border-b border-[#7C3AED]/10">
          <span className="text-[#111827]/50">Abandon sur site non adapté</span>
          <span className="text-xl font-bold text-[#111827]">75%</span>
        </div>
      </div>

      {/* Prestations - grille simple 2x3 */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Nos prestations</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prestations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#7C3AED]" />
              <span className="text-[#111827]/60">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres clés - 4 nombres */}
      <div className="max-w-3xl mx-auto mb-24 py-8 border-t border-b border-[#7C3AED]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#111827]">94%</div>
            <p className="text-xs text-[#111827]/40">crédibilité via le design</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">89%</div>
            <p className="text-xs text-[#111827]/40">tournent vers concurrent</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">75%</div>
            <p className="text-xs text-[#111827]/40">abandon site non adapté</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#111827]">40%</div>
            <p className="text-xs text-[#111827]/40">rebond design peu intuitif</p>
          </div>
        </div>
      </div>

      {/* Méthodologie - 4 étapes */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Méthodologie</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { step: 1, title: "Élaboration", desc: "Brief et objectifs" },
            { step: 2, title: "Conception", desc: "Interface et UX" },
            { step: 3, title: "Graphique", desc: "Maquettes" },
            { step: 4, title: "Intégration", desc: "Mise en ligne" },
          ].map((phase, idx) => (
            <div key={idx}>
              <div className="w-8 h-8 mx-auto bg-[#F9FAFB] rounded-full flex items-center justify-center text-[#7C3AED] text-xs font-medium mb-2">
                {phase.step}
              </div>
              <p className="text-sm font-medium text-[#111827]">{phase.title}</p>
              <p className="text-xs text-[#111827]/30">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Atouts - ligne horizontale */}
      <div className="max-w-3xl mx-auto mb-24">
        <div className="flex flex-wrap justify-center gap-6">
          {["22 ans d'expérience", "Équipe pluridisciplinaire", "Accompagnement A à Z", "Budget défini"].map((item, idx) => (
            <span key={idx} className="text-sm text-[#111827]/50">{item}</span>
          ))}
        </div>
      </div>

      {/* FAQ - accordéon */}
      <div className="max-w-2xl mx-auto mb-24">
        <h2 className="text-xl font-bold text-[#111827] text-center mb-8">Questions fréquentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#7C3AED]/10">
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
      <div className="text-center pt-12 border-t border-[#7C3AED]/10">
        <h2 className="text-xl font-bold text-[#111827] mb-3">
          Prêt pour un design d'exception ?
        </h2>
        <p className="text-sm text-[#111827]/40 mb-6">
          Consulting stratégique offert
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-3 rounded-full text-sm hover:bg-[#7C3AED] transition-all"
        >
          Discuter de mon projet
          <ArrowRight size={14} />
        </Link>
      </div>

    </ServiceLayout>
  )
}