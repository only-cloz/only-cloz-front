import { Link } from 'react-router-dom'
import {
  Database, MessageCircle, Calendar, CheckCircle2, ArrowRight, Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

type Pack = {
  name: string
  subtitle: string
  price: string
  setup: string
  period: string
  tagline: string
  desc: string
  features: string[]
  icon: LucideIcon
  featured?: boolean
}

// Contenu repris des plans de la page Offres (CLOZ LEADS / READY / DONE).
export const PACKS: Record<string, Pack> = {
  starter: {
    name: 'Pack Starter',
    subtitle: 'Pour démarrer rapidement',
    price: '990',
    setup: '490',
    period: '/mois',
    tagline: 'Des leads exclusifs livrés directement dans votre pipeline',
    desc: 'Campagne sur-mesure et leads exclusifs livrés directement dans votre pipeline. Vous prospectez sans lever le petit doigt.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
    ],
    icon: Database,
  },
  business: {
    name: 'Pack Business',
    subtitle: 'Développez votre visibilité',
    price: '1 490',
    setup: '690',
    period: '/mois',
    tagline: 'Leads préqualifiés, prêts à prendre RDV',
    desc: 'Campagne sur-mesure, préqualification WhatsApp et téléphone incluse. Vous ne recevez que des prospects confirmés, prêts à prendre RDV.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
      'Contact WhatsApp personnalisé avant l\'appel',
      'Appel de préqualification par un collaborateur dédié',
      'Vérification du profil, de l\'intérêt et du budget',
      'Fiche prospect complète livrée avec chaque lead qualifié',
      'Leads froids filtrés : seuls les leads chauds vous parviennent',
    ],
    icon: MessageCircle,
  },
  premium: {
    name: 'Pack Premium',
    subtitle: 'La solution complète',
    price: '2 490',
    setup: '990',
    period: '/mois',
    tagline: 'De la pub au RDV, on gère tout',
    desc: 'Campagne sur-mesure, préqualification et prise de rendez-vous directement dans votre agenda. Vous n\'avez plus qu\'à vous présenter et closer.',
    features: [
      'Étude de vos besoins et définition de votre client idéal (ICP)',
      'Création d\'une campagne publicitaire sur-mesure',
      'Leads 100% exclusifs — jamais revendus, jamais partagés',
      'Ciblage multi-critères personnalisable',
      'Coordonnées vérifiées et à jour',
      'Volume scalable selon vos besoins',
      'Livraison quotidienne ou hebdomadaire',
      'Intégration CRM en 1 clic & export CSV/Excel',
      'Tableau de bord en temps réel',
      'Contact WhatsApp personnalisé avant l\'appel',
      'Appel de préqualification par un collaborateur dédié',
      'Vérification du profil, de l\'intérêt et du budget',
      'Fiche prospect complète transmise avant chaque rendez-vous',
      'Prise de rendez-vous téléphonique au nom de votre entreprise',
      'Confirmation du RDV par SMS et WhatsApp',
      'Synchronisation directe avec votre agenda',
      'Zéro prospection de votre côté : de la pub au RDV, on gère tout',
    ],
    icon: Calendar,
    featured: true,
  },
}

export default function PackDetail({ slug }: { slug: keyof typeof PACKS }) {
  const pack = PACKS[slug]
  const Icon = pack.icon

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            {pack.featured && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 mb-5">
                <Sparkles size={14} className="text-[#EAB308]" />
                <span className="text-xs font-bold uppercase tracking-wide text-[#111827]">La solution complète</span>
              </div>
            )}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EAB308] to-[#CA8A04] shadow-lg shadow-[#EAB308]/30 mb-6">
              <Icon size={30} className="text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] mb-3">
              {pack.name}
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed">{pack.tagline}</p>
          </div>
        </ScrollReveal>

        {/* Prix */}
        <ScrollReveal delay={0.1}>
          <div className={`card-glass p-8 text-center mb-12 ${pack.featured ? 'border-[#EAB308]/40' : ''}`}>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="font-heading font-bold text-5xl text-[#111827]">{pack.price}</span>
              <span className="text-2xl font-bold text-[#111827]/70 mb-1">€</span>
              <span className="text-[#111827]/40 mb-2 ml-1">{pack.period}</span>
            </div>
            <p className="text-sm text-[#111827]/40 mb-6">+ {pack.setup} € de frais de mise en place</p>
            <p className="text-[#111827]/60 max-w-xl mx-auto mb-8">{pack.desc}</p>
            <Link to="/contact" className="btn-primary text-sm py-3.5 px-10">
              Démarrer un projet
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Ce qui est inclus */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-[#111827] mb-6 text-center">
              Ce qui est inclus
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 max-w-3xl mx-auto">
              {pack.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111827]/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Comparaison / lien vers toutes les offres */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-16">
            <Link to="/offres" className="btn-outline text-sm py-3 px-7">
              Comparer toutes les offres
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Green featured CTA */}
        <ScrollReveal>
          <div className="feature-green relative rounded-[2rem] overflow-hidden p-12 md:p-16 text-center shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Une question sur le {pack.name} ?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Parlons de votre projet — on vous conseille l'offre la plus adaptée à vos objectifs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-10 rounded-full bg-[#FFE957] text-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-[#FFF08A]"
              >
                Démarrer un projet
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
