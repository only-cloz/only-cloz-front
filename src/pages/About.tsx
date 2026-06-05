import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Shield, TrendingUp, Eye, Users, Award,
  ArrowRight, Zap, CheckCircle2, BarChart3, Globe2, Star
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

const team = [
  {
    name: 'Alexandre Martin',
    role: 'CEO & Co-fondateur',
    bio: 'Ex-directeur commercial avec 10 ans d\'expérience en B2B SaaS. A personnellement généré +50M€ de pipeline.',
    avatar: 'AM',
    color: 'from-brand-500 to-blue-600',
  },
  {
    name: 'Sophie Leclerc',
    role: 'Head of Data',
    bio: 'Spécialiste enrichissement de données B2B. A construit les processus de qualification qui garantissent nos taux de délivrabilité.',
    avatar: 'SL',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Julien Petit',
    role: 'Head of Outbound',
    bio: 'Expert cold email et LinkedIn outreach. A piloté +200 campagnes B2B avec des taux de conversion au-dessus de la moyenne marché.',
    avatar: 'JP',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Emma Dubois',
    role: 'Customer Success',
    bio: 'Accompagne les clients dans l\'optimisation de leurs process commerciaux. NPS moyen de 72 sur son portefeuille.',
    avatar: 'ED',
    color: 'from-gold-500 to-orange-500',
  },
]

const milestones = [
  { year: '2020', event: 'Fondation d\'Only Cloz', desc: 'Naissance de l\'agence avec une vision claire : rendre la prospection B2B accessible à toutes les entreprises.' },
  { year: '2021', event: '100 premiers clients', desc: 'Cap des 100 clients actifs atteint en moins de 12 mois. Validation du modèle et de la qualité des leads.' },
  { year: '2022', event: 'Certification RGPD', desc: 'Obtention de la certification RGPD et mise en place du programme de conformité pour tous nos clients.' },
  { year: '2023', event: 'Expansion Europe', desc: 'Lancement de campagnes en UK, Belgique, Suisse et Allemagne. 50% de croissance annuelle.' },
  { year: '2024', event: '500+ clients actifs', desc: 'Franchissement du cap des 500 clients actifs. Lancement du service Phoning & RDV premium.' },
]

const partners = ['HubSpot', 'Salesforce', 'Pipedrive', 'Apollo.io', 'LinkedIn', 'Lemlist', 'La Growth Machine', 'Zapier']

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 hero-gradient grid-bg">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 uppercase tracking-widest bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full mb-6">
                <Zap size={12} />
                Notre histoire
              </span>
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
                La prospection B2B,{' '}
                <span className="gradient-text">réinventée</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-6">
                Only Cloz est né d'un constat simple : la majorité des équipes commerciales perdent 60% de leur temps sur des prospects non qualifiés.
              </p>
              <p className="text-white/45 text-base leading-relaxed mb-8">
                Nous avons construit une méthode et des outils qui permettent à vos commerciaux de se concentrer sur ce qu'ils font de mieux : vendre. Nous nous occupons du reste.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Nous rejoindre
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline">
                  Nos services
                </Link>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: 500, suffix: '+', label: 'Clients actifs', icon: Users },
                { value: 98, suffix: '%', label: 'Satisfaction', icon: Star },
                { value: 5, suffix: 'M+', label: 'Leads générés', icon: Target },
                { value: 4, suffix: '', label: 'Années d\'expertise', icon: Award },
              ].map(({ value, suffix, label, icon: Icon }, i) => (
                <div key={i} className="card-glass p-6 group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                  <Icon size={20} className="text-brand-400 mb-3" />
                  <div className="font-heading font-black text-3xl text-white mb-1">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </div>
                  <div className="text-white/45 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="card-glass p-10 border border-brand-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-purple-500/5" />
                  <div className="relative z-10">
                    <div className="text-6xl font-heading font-black text-white/5 mb-4 leading-none">
                      "Notre mission"
                    </div>
                    <p className="text-2xl font-heading font-bold text-white leading-relaxed mb-6">
                      Permettre à chaque entreprise B2B d'avoir accès à des prospects de qualité, de manière éthique et prévisible.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                        <Zap size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Alexandre Martin</div>
                        <div className="text-xs text-white/40">CEO, Only Cloz</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-500/5 rounded-2xl border border-brand-500/10 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/5 rounded-2xl border border-purple-500/10 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <SectionTitle
                  label="Notre mission"
                  title="Plus de temps à vendre, moins à chercher"
                  align="left"
                  highlight="vendre"
                />
                <div className="mt-8 space-y-5">
                  {[
                    { icon: Target, title: 'Prospection ciblée', desc: 'Nous identifions vos prospects idéaux selon des critères ultra-précis pour maximiser vos chances de conversion.' },
                    { icon: Shield, title: 'Données fiables', desc: 'Chaque contact est vérifié, enrichi et testé avant livraison. Garantie bounce inférieur à 3%.' },
                    { icon: TrendingUp, title: 'Croissance prévisible', desc: 'Avec un flux constant de leads qualifiés, votre pipeline devient prévisible et scalable.' },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                        <Icon size={18} className="text-brand-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 section-padding">
          <SectionTitle
            label="L'équipe"
            title="Des experts passionnés"
            subtitle="Une équipe de spécialistes en data, outbound et growth — dédiée à votre succès commercial."
            highlight="passionnés"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-glass p-6 text-center group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {member.avatar}
                  </div>
                  <h3 className="font-heading font-bold text-white mb-1">{member.name}</h3>
                  <div className="text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 section-padding">
          <SectionTitle
            label="Notre parcours"
            title="5 ans de croissance"
            subtitle="De la création à l'une des agences B2B les plus reconnues de France."
            highlight="croissance"
          />

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                  <div className="flex gap-8 items-start">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-500/20 to-blue-500/10 border border-brand-500/30 rounded-xl flex items-center justify-center">
                        <span className="font-heading font-bold text-xs text-brand-400">{m.year}</span>
                      </div>
                    </div>
                    <div className="card-glass p-6 flex-1 group hover:border-brand-500/25 transition-all duration-300">
                      <h3 className="font-heading font-bold text-white mb-2">{m.event}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-16 border-y border-white/5 bg-dark-800/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-white/30 text-sm uppercase tracking-widest">Intégrations & partenaires</p>
        </div>
        <div className="flex">
          <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-white/25 font-heading font-bold text-base hover:text-white/60 transition-colors cursor-default select-none px-4">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="relative card-glass border border-brand-500/20 p-12 md:p-20 rounded-3xl overflow-hidden glow-brand">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-purple-500/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5 tracking-tight">
                  Rejoignez nos{' '}
                  <span className="gradient-text">500+ clients</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
                  Démarrez votre prospection B2B avec l'agence qui allie technologie, expertise et résultats concrets.
                </p>
                <Link to="/contact" className="btn-primary text-base py-4 px-10">
                  Démarrer maintenant
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
