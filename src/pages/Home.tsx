import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Shield, Target, TrendingUp, Eye, Users, Award,
  CheckCircle2, ChevronRight, Star, Zap, BarChart3, Filter,
  Mail, Linkedin, Phone, Clock, Globe2
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

/* ── Data ── */
const stats = [
  { value: 500, suffix: '+', label: 'Leads livrés / mois', icon: Target },
  { value: 98, suffix: '%', label: 'Conformité RGPD', icon: Shield },
  { value: 3, suffix: 'x', label: 'ROI moyen clients', icon: TrendingUp },
  { value: 48, suffix: 'h', label: 'Délai de livraison', icon: Clock },
]

const values = [
  { icon: Target, title: 'PRÉCISION', desc: 'Secteur, géographie, comportement, chaque campagne est construite autour de vos critères. Zéro bruit, uniquement des opportunités réelles.' },
  { icon: Eye, title: 'TRANSPARENCE', desc: 'Reporting clair, KPIs mesurables, zéro jargon. Vous savez exactement ce que vous obtenez et pour quel résultat concret.' },
  { icon: TrendingUp, title: 'RÉSULTATS', desc: 'Notre succès est lié au vôtre. Nous nous mesurons à vos taux de conversion, coût d\'acquisition et ROI. Pas aux métriques de vanité.' },
  { icon: Shield, title: 'CONFORMITÉ', desc: 'Toutes nos bases de données et campagnes respectent scrupuleusement la réglementation RGPD européenne. Votre réputation est protégée.' },
  { icon: Award, title: 'QUALITÉ', desc: 'Chaque lead est qualifié manuellement. Nous préférons livrer moins pour livrer mieux. La performance de nos clients dépend de la qualité de nos données.' },
  { icon: Users, title: 'PARTENARIAT', desc: 'Nous construisons une relation durable avec chacun de nos clients, basée sur la confiance, les résultats et un accompagnement long terme.' },
]

const services = [
  {
    icon: Filter,
    title: 'Génération de leads B2B',
    desc: 'Bases de données ultra-ciblées : décideurs, secteurs, tailles d\'entreprises. Chaque lead est vérifié et qualifié avant livraison.',
    tags: ['LinkedIn', 'Email', 'Décideurs'],
    color: 'from-brand-500/20 to-blue-500/10',
    border: 'border-brand-500/20 hover:border-brand-500/50',
  },
  {
    icon: Mail,
    title: 'Campagnes email outbound',
    desc: 'Séquences d\'emails froids personnalisés à haute délivrabilité. Taux d\'ouverture moyen de 45%.',
    tags: ['Cold email', 'Séquences', 'A/B test'],
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/20 hover:border-purple-500/50',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Outreach',
    desc: 'Connexions ciblées, messages personnalisés, suivi automatisé. On s\'occupe de votre prospection LinkedIn de A à Z.',
    tags: ['Sales Navigator', 'DMs', 'Automation'],
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/50',
  },
  {
    icon: Phone,
    title: 'Phoning & RDV',
    desc: 'Prise de rendez-vous qualifiés directement dans votre agenda. Nos agents traitent vos prospects jusqu\'à obtenir un oui.',
    tags: ['Phoning', 'RDV qualifiés', 'CRM'],
    color: 'from-gold-500/20 to-orange-500/10',
    border: 'border-gold-500/20 hover:border-gold-500/50',
  },
]

const process = [
  { step: '01', title: 'Audit & Cadrage', desc: 'Analyse de votre marché cible, définition du profil client idéal (ICP) et des objectifs chiffrés.', icon: Globe2 },
  { step: '02', title: 'Construction de liste', desc: 'Extraction et enrichissement des données B2B qualifiées selon vos critères précis.', icon: Filter },
  { step: '03', title: 'Activation campagne', desc: 'Lancement des séquences multicanales : email, LinkedIn, phoning selon la stratégie définie.', icon: Zap },
  { step: '04', title: 'Livraison & pilotage', desc: 'Leads qualifiés livrés dans votre CRM avec reporting hebdomadaire et optimisations continues.', icon: BarChart3 },
]

const testimonials = [
  {
    quote: "Only Cloz a transformé notre pipeline commercial. En 3 mois, nous avons multiplié par 4 nos rdv qualifiés. Vraiment impressionnant.",
    name: "Thomas Dupont",
    role: "CEO — TechScale SAS",
    avatar: 'TD',
    stars: 5,
  },
  {
    quote: "Qualité irréprochable des leads, conformité RGPD vérifiée, et un suivi transparent au quotidien. Je recommande à 100%.",
    name: "Marie Laurent",
    role: "Head of Sales — B2B Experts",
    avatar: 'ML',
    stars: 5,
  },
  {
    quote: "ROI de x3.5 dès le premier trimestre. L'équipe est proactive, les résultats parlent d'eux-mêmes.",
    name: "Pierre Morel",
    role: "Directeur Commercial — Fintech Pro",
    avatar: 'PM',
    stars: 5,
  },
]

const logos = ['TechScale', 'B2B Experts', 'Fintech Pro', 'GrowthCo', 'DataSync', 'SalesForce+', 'LeadGen360', 'ProspectHub']

/* ── Component ── */
export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center hero-gradient grid-bg noise">
        {/* Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] orb-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] orb-2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 section-padding pt-32 pb-20 z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-brand-500/10 border border-brand-500/25 text-brand-400 text-xs font-semibold px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
              Agence B2B #1 en génération de leads qualifiés
              <ChevronRight size={14} className="opacity-70" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-white mb-8"
            >
              Votre pipeline
              <br />
              commercial,{' '}
              <span className="relative inline-block">
                <span className="gradient-text">sous stéroïdes</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 origin-left"
                />
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Only Cloz livre des leads B2B ultra-qualifiés, 100% conformes RGPD. Nous transformons votre prospection en moteur de croissance prévisible.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link to="/contact" className="btn-primary text-base py-4 px-8 glow-brand">
                Obtenir mes premiers leads
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline text-base py-4 px-8">
                Découvrir nos services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/40"
            >
              {['RGPD Conforme', 'Leads vérifiés', 'Sans engagement', 'Livraison 48h'].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-400" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Stats floating card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-6 lg:right-20 top-1/2 -translate-y-1/2 hidden xl:block"
          >
            <div className="card-glass p-8 w-72 glow-brand">
              <div className="text-xs text-brand-400 font-semibold uppercase tracking-widest mb-6">Performances live</div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, suffix, label, icon: Icon }, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <Icon size={16} className="text-brand-400 mb-2" />
                    <div className="font-heading font-bold text-2xl text-white">
                      <AnimatedCounter end={value} suffix={suffix} />
                    </div>
                    <div className="text-xs text-white/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-brand-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── LOGOS MARQUEE ── */}
      <section className="py-12 border-y border-white/5 bg-dark-800/50 overflow-hidden">
        <div className="flex">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-white/20 font-heading font-bold text-lg hover:text-white/50 transition-colors cursor-default select-none">
                {logo}
              </span>
            ))}
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

      {/* ── SERVICES ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Nos services"
            title="Prospection multicanale sur-mesure"
            subtitle="De la génération de leads à la prise de RDV qualifiés, nous couvrons chaque étape de votre pipeline commercial."
            highlight="multicanale"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`card-glass p-6 h-full border ${service.border} group transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <service.icon size={22} className="text-brand-400" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-3">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 text-center">
              <Link to="/services" className="btn-outline">
                Voir tous nos services
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Nos valeurs"
            title="Ce qui nous distingue"
            subtitle="Six principes fondamentaux qui guident chacune de nos décisions et garantissent votre satisfaction."
            highlight="distingue"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-glass p-8 group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-gradient-to-br from-brand-500/20 to-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <v.icon size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-brand-400 tracking-widest uppercase mb-2">{v.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Notre process"
            title="De zéro à votre premier RDV"
            subtitle="Un processus éprouvé, transparent et orienté résultats — en 4 étapes claires."
            highlight="premier RDV"
          />

          <div className="mt-16 relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden lg:block w-3/4 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="relative text-center group">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-500/20 to-blue-600/10 border border-brand-500/20 rounded-2xl flex flex-col items-center justify-center mx-auto mb-6 group-hover:border-brand-500/50 group-hover:scale-105 transition-all duration-300">
                      <span className="font-heading font-black text-2xl text-brand-500/60">{step.step}</span>
                    </div>
                    <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center mx-auto -mt-2 mb-5">
                      <step.icon size={18} className="text-brand-400" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Témoignages"
            title="Ce que disent nos clients"
            subtitle="Des résultats concrets, des partenaires satisfaits."
            highlight="nos clients"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-glass p-8 relative group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-900/50 via-dark-700 to-purple-900/30 border border-brand-500/20 p-12 md:p-20 text-center glow-brand">
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6 bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full">
                  <Zap size={12} />
                  Offre de lancement — Premier mois offert
                </span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
                  Prêt à remplir votre{' '}
                  <span className="gradient-text">pipeline</span> ?
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                  Parlez-nous de vos besoins. Nous vous proposons un plan d'action personnalisé sous 24 heures.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base py-4 px-10">
                    Commencer maintenant
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/a-propos" className="btn-outline text-base py-4 px-8">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
