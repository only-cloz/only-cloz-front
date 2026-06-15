import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Shield, Target, TrendingUp, Eye, Users, Award,
  CheckCircle2, ChevronRight, Star, Zap, BarChart3, Filter,
  Mail, Linkedin, Phone, Clock, Globe2, Lock, MapPin, UserCheck, TrendingUp as TrendingUpIcon, Gem
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import AnimatedCounter from '../components/ui/AnimatedCounter'

const pillars = [
  {
    icon: Gem,
    title: 'Exclusivité',
    desc: 'Chaque RDV vous est réservé exclusivement. Nous ne revendons jamais un même prospect à plusieurs clients.',
    color: 'from-brand-500/20 to-purple-500/10',
  },
  {
    icon: MapPin,
    title: 'Géociblage précis',
    desc: 'Filtrage strict selon votre zone d\'intervention, secteur géographique et rayon d\'action défini.',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    icon: UserCheck,
    title: 'Qualification humaine',
    desc: 'Validation manuelle de chaque prospect par nos équipes. Scoring rigoureux avant toute livraison.',
    color: 'from-green-500/20 to-emerald-500/10',
  },
  {
    icon: TrendingUpIcon,
    title: 'Performance garantie',
    desc: 'Engagement sur la qualité. RDV non conforme = remplacement ou remboursement immédiat.',
    color: 'from-gold-500/20 to-orange-500/10',
  },
]

const stats = [
  { value: 98, suffix: '%', label: 'Taux de satisfaction', icon: Star },
  { value: 5000, suffix: '+', label: 'RDV qualifiés/mois', icon: Users },
  { value: 100, suffix: '%', label: 'Conformité RGPD', icon: Shield },
  { value: 24, suffix: 'h', label: 'Délai de réponse', icon: Clock },
]

export default function PourquoiNous() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center hero-gradient grid-bg noise">
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
              Pourquoi nous choisir ?
              <ChevronRight size={14} className="opacity-70" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8"
            >
              Nous ne livrons pas des leads,<br />
              mais des{' '}
              <span className="gradient-text">opportunités réelles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Chaque campagne est calibrée selon votre cible et validée manuellement avant tout envoi. 
              Zéro temps perdu, maximum de résultats.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary text-base py-4 px-8 glow-brand">
                Discuter de mon projet
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-glass p-8 text-center group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon size={22} className="text-brand-400" />
                  </div>
                  <div className="font-heading font-bold text-4xl text-white mb-2">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Nos 4 piliers fondamentaux"
            title="Ce qui fait de OnlyCloz votre partenaire de croissance le plus fiable"
            subtitle="Des fondations solides pour des résultats exceptionnels, au service de votre performance commerciale."
            highlight="partenaire de croissance"
          />

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`card-glass p-8 group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-500/20 to-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <pillar.icon size={24} className="text-brand-400" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-white mb-3">{pillar.title}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT BANNER ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-900/50 via-dark-700 to-purple-900/30 border border-brand-500/20 p-12 md:p-16 text-center glow-brand">
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-brand-400" />
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Notre engagement : votre réussite
                </h3>
                <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
                  Chaque opportunité que nous vous livrons est une promesse de qualité. 
                  Notre réputation repose sur votre satisfaction.
                </p>
                <Link to="/contact" className="btn-outline">
                  Construisons votre succès ensemble
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