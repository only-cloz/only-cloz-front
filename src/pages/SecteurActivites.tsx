import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronRight, Home, Zap, TrendingUp, Building2, Briefcase, Heart, Shield, Wifi, ChevronDown, ChevronUp
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'

interface Sector {
  id: string
  title: string
  icon: React.ElementType
  items: string[]
  description: string
  color: string
}

const sectors: Sector[] = [
  {
    id: 'habitat',
    title: 'Habitat',
    icon: Home,
    items: ['Isolation', 'Rénovation', 'Menuiserie'],
    description: 'Des propriétaires et copropriétés avec des projets de rénovation énergétique immédiats.',
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    id: 'energie',
    title: 'Énergies renouvelables',
    icon: Zap,
    items: ['Solaire', 'PAC', 'Autoconsommation'],
    description: 'Particuliers et entreprises prêts à investir dans des solutions d\'énergie verte.',
    color: 'from-yellow-500/20 to-green-500/10',
  },
  {
    id: 'courtage',
    title: 'Courtage en énergie',
    icon: TrendingUp,
    items: ['Optimisation des contrats', 'B2B', 'B2C'],
    description: 'Professionnels et particuliers cherchant à réduire leurs factures énergétiques.',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 'immobilier',
    title: 'Immobilier',
    icon: Building2,
    items: ['Agences', 'Promoteurs', 'Mandataires'],
    description: 'Acquéreurs et vendeurs qualifiés, prêts à concrétiser leur projet immobilier.',
    color: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    id: 'services',
    title: 'Services professionnels',
    icon: Briefcase,
    items: ['B2B', 'Consulting', 'RH'],
    description: 'Décideurs d\'entreprises à la recherche de solutions expertes pour leur développement.',
    color: 'from-slate-500/20 to-gray-500/10',
  },
  {
    id: 'sante',
    title: 'Santé & Bien-être',
    icon: Heart,
    items: ['Cabinets', 'Praticiens', 'Cliniques'],
    description: 'Patients et professionnels de santé actifs en recherche de solutions innovantes.',
    color: 'from-rose-500/20 to-pink-500/10',
  },
  {
    id: 'assurance',
    title: 'Assurance',
    icon: Shield,
    items: ['IARD', 'Santé', 'Emprunteurs'],
    description: 'Particuliers et entreprises en recherche active de solutions d\'assurance.',
    color: 'from-blue-500/20 to-sky-500/10',
  },
  {
    id: 'telecoms',
    title: 'FAI & Télécoms',
    icon: Wifi,
    items: ['Fournisseurs', 'Intégrateurs', 'Opérateurs pro'],
    description: 'Professionnels et particuliers souhaitant changer ou améliorer leur connectivité.',
    color: 'from-purple-500/20 to-fuchsia-500/10',
  },
]

const SectorCard = ({ sector, index }: { sector: Sector; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <ScrollReveal delay={index * 0.05}>
      <div 
        className={`card-glass p-6 group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-500/20 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <sector.icon size={26} className="text-brand-400" />
            </div>
            <button className="text-white/40 hover:text-brand-400 transition-colors">
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <h3 className="font-heading font-bold text-xl text-white mb-3">{sector.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">{sector.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {sector.items.map((item, j) => (
              <span key={j} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/60">
                {item}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10 mt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                En savoir plus
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function SecteurActivites() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center hero-gradient grid-bg noise">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] orb-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] orb-2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 section-padding pt-32 pb-20 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-brand-500/10 border border-brand-500/25 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 mx-auto"
            >
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
              Notre expertise sectorielle
              <ChevronRight size={14} className="opacity-70" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8"
            >
              Des rendez-vous ultra qualifiés dans<br />
              tous les secteurs à{' '}
              <span className="gradient-text">fort potentiel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Notre expertise couvre l'ensemble des marchés B2B et B2C à forte valeur ajoutée. 
              Quel que soit votre secteur, nous vous apportons des opportunités qualifiées.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SECTORS GRID ── */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            label="Nos secteurs d'excellence"
            title="Une expertise multisectorielle"
            subtitle="Des décideurs qualifiés, quel que soit votre marché cible."
            highlight="multisectorielle"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.id} sector={sector} index={i} />
            ))}
          </div>

          {/* CTA after sectors */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 text-white/40 text-sm mb-6">
                <span className="w-8 h-px bg-white/20" />
                Vous ne trouvez pas votre secteur ?
                <span className="w-8 h-px bg-white/20" />
              </div>
              <Link to="/contact" className="btn-outline">
                Discutons de votre marché
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY SECTORS BANNER ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-900/50 via-dark-700 to-purple-900/30 border border-brand-500/20 p-12 md:p-16 text-center glow-brand">
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Vous aussi, remplissez votre pipeline commercial
                </h3>
                <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
                  Quel que soit votre secteur, nous avons l'expertise pour vous apporter 
                  des opportunités qualifiées et prêtes à convertir.
                </p>
                <Link to="/contact" className="btn-primary">
                  Obtenir des leads qualifiés
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}