import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {
    Target, Layout, Users, Calendar, CheckCircle2,
    ArrowRight, Zap, Shield, TrendingUp, ChevronDown,
    MapPin, Clock, Sparkles, BarChart3, Award, Activity, Database, MessageCircle
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import {useI18n} from '../i18n'

// Services B2C
const services = [
    {
        id: 'campagnes',
        icon: Target,
        title: 'Campagnes pub ultra ciblées',
        tagline: 'Attirez les bons prospects',
        desc: 'Nous créons et pilotons vos campagnes sur Meta, TikTok et LinkedIn pour attirer uniquement des prospects qui correspondent à votre client idéal.',
        features: [
            'Ciblage par zone géographique, âge, comportement et intention d\'achat',
            'Créatifs visuels et textes conçus pour convertir, pas pour faire joli',
            'Budget publicitaire 100% transparent, sans commission cachée',
            'Leads consentis et conformes RGPD',
            'Optimisation continue',
        ],
        stat: '72%',
        statLabel: 'taux de conversion moyen',
    },
    {
        id: 'landing',
        icon: Layout,
        title: 'Landing pages optimisées',
        tagline: 'Convertissez chaque visiteur',
        desc: 'Nous concevons des pages de vente pensées pour convertir chaque visiteur en prospect qualifié.',
        features: [
            'Design mobile-first, chargement en moins de 3 secondes',
            'Copywriting orienté conversion',
            'Un seul objectif par page',
            'Formulaire de capture optimisé',
            'Cohérence totale avec vos campagnes pub',
            'Compatible avec tous vos outils CRM',
        ],
        stat: '+40%',
        statLabel: 'conversion moyenne',
    },
    {
        id: 'qualification',
        icon: Users,
        title: 'Qualification humaine',
        tagline: 'Là où tous utilisent l\'IA, nous mettons un humain',
        desc: 'Chaque prospect est rappelé, écouté et validé par un collaborateur dédié avant de vous être transmis.',
        features: [
            'Rappel téléphonique dans les 2 heures',
            'Contact WhatsApp avant l\'appel',
            'Vérification du profil, projet, budget et disponibilité',
            'Leads froids filtrés, seuls les prospects chauds vous parviennent',
            'Fiche prospect complète transmise avant chaque échange',
            'Disponible du lundi au samedi',
        ],
        stat: '72%',
        statLabel: 'taux de conversion RDV',
    },
    {
        id: 'rdv',
        icon: Calendar,
        title: 'Livraison du RDV',
        tagline: 'Votre seul travail : vous présenter et closer',
        desc: 'Nous gérons tout le reste, de la pub au rendez-vous confirmé et livré directement dans votre agenda.',
        features: [
            'RDV 100% exclusif, jamais revendu, jamais partagé',
            'Prise de rendez-vous au nom de votre entreprise',
            'Confirmation par SMS et WhatsApp pour zéro no-show',
            'Synchronisation directe avec votre agenda ou CRM',
            'Fiche prospect complète transmise avant chaque rendez-vous',
            'Dashboard en temps réel pour suivre chaque RDV',
        ],
        stat: '-85%',
        statLabel: 'de no-show',
    },
]

// Avantages bloc
const avantages = [
    {icon: Shield, title: 'Vos RDV, rien que vos RDV', desc: 'Zéro partage, zéro revente. Ce lead est le vôtre.'},
    {icon: MapPin, title: 'Là où vous travaillez, pas ailleurs', desc: 'Chaque prospect est dans votre zone.'},
    {icon: Users, title: 'Qualifié par un humain', desc: 'Profil, budget, intention : tout est validé.'},
    {icon: TrendingUp, title: '72% de conversion', desc: 'Un prospect qualifié par un humain vaut dix formulaires.'},
]

// Leads récents (Dashboard style)
const recentLeads = [
    {
        name: 'Michelle MAGNIN',
        time: '18:23',
        status: 'Lead chaud',
        avatar: 'MM',
        gradient: 'from-[#EAB308] to-[#CA8A04]'
    },
    {
        name: 'Philippe RENPIN',
        time: '18:07',
        status: 'Lead chaud',
        avatar: 'PR',
        gradient: 'from-[#FACC15] to-[#EC4899]'
    },
    {name: 'Laure HENOULD', time: '17:57', status: 'Lead chaud', avatar: 'LH', gradient: 'from-[#F59E0B] to-[#EAB308]'},
    {
        name: 'Héloïse MARTIN',
        time: '17:46',
        status: 'Lead tiède',
        avatar: 'HM',
        gradient: 'from-[#EAB308] to-[#CA8A04]'
    },
]

const upcomingRdvs = [
    {name: 'Julie RENAUD', time: '15:00', date: 'Aujourd\'hui', avatar: 'JR', gradient: 'from-[#EAB308] to-[#CA8A04]'},
    {name: 'Lucas MARTIN', time: '17:45', date: 'Aujourd\'hui', avatar: 'LM', gradient: 'from-[#FACC15] to-[#EC4899]'},
    {name: 'Éric LEFÈVRE', time: '09:00', date: 'Demain', avatar: 'EL', gradient: 'from-[#F59E0B] to-[#EAB308]'},
    {name: 'Lise MICHEL', time: '14:00', date: 'Demain', avatar: 'LM', gradient: 'from-[#EAB308] to-[#FACC15]'},
    {name: 'Claire DUBOIS', time: '16:00', date: 'Demain', avatar: 'CD', gradient: 'from-[#EAB308] to-[#CA8A04]'},
]

const pricingPlans = [
    {
        id: 'leads',
        name: 'CLOZ LEADS',
        price: '990',
        setup: '490',
        period: '/mois',
        tagline: 'Des leads exclusifs livrés directement dans votre pipeline',
        desc: 'Campagne sur-mesure et leads exclusifs livrés directement dans votre pipeline. Vous prospectez sans lever le petit doigt.',
        features: [
            'Étude de vos besoins et définition de votre client idéal (ICP)',
            'Création d\'une campagne publicitaire sur-mesure',
            'Leads 100% exclusifs, jamais revendus, jamais partagés',
            'Ciblage multi-critères personnalisable',
            'Coordonnées vérifiées et à jour',
            'Volume scalable selon vos besoins',
            'Livraison quotidienne ou hebdomadaire',
            'Intégration CRM en 1 clic & export CSV/Excel',
            'Tableau de bord en temps réel',
        ],
        featured: false,
        color: 'border-[#EAB308]/15',
        icon: Database,
        gradient: 'from-[#EAB308]/10 to-[#FACC15]/5',
    },
    {
        id: 'ready',
        name: 'CLOZ READY',
        price: '1 490',
        setup: '690',
        period: '/mois',
        tagline: 'Leads préqualifiés, prêts à prendre RDV',
        desc: 'Campagne sur-mesure, préqualification WhatsApp et téléphone incluse. Vous ne recevez que des prospects confirmés, prêts à prendre RDV.',
        features: [
            'Étude de vos besoins et définition de votre client idéal (ICP)',
            'Création d\'une campagne publicitaire sur-mesure',
            'Leads 100% exclusifs, jamais revendus, jamais partagés',
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
        featured: false,
        color: 'border-[#EAB308]/15',
        icon: MessageCircle,
        gradient: 'from-[#FACC15]/10 to-[#EC4899]/5',
    },
    {
        id: 'done',
        name: 'CLOZ DONE',
        price: '2 490',
        setup: '990',
        period: '/mois',
        tagline: 'De la pub au RDV, on gère tout',
        desc: 'Campagne sur-mesure, préqualification et prise de rendez-vous directement dans votre agenda. Vous n\'avez plus qu\'à vous présenter et closer.',
        features: [
            'Étude de vos besoins et définition de votre client idéal (ICP)',
            'Création d\'une campagne publicitaire sur-mesure',
            'Leads 100% exclusifs, jamais revendus, jamais partagés',
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
        featured: true,
        color: 'border-[#EAB308]/40',
        icon: Calendar,
        gradient: 'from-[#F59E0B]/10 to-[#EAB308]/5',
    },
]


export default function Services() {
    const {t} = useI18n()
    const [activeService, setActiveService] = useState(0)

    return (
        <div className="overflow-hidden bg-white">

            {/* ── HERO SECTION ── */}
            <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
                <div className="absolute top-20 -left-20 w-80 h-80 bg-[#EAB308]/10 rounded-full blur-[100px] orb-1"/>
                <div
                    className="absolute bottom-20 -right-20 w-80 h-80 bg-[#FACC15]/10 rounded-full blur-[100px] orb-2"/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-[120px]"/>

                <div className="relative max-w-7xl mx-auto px-6 section-padding">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="text-center"
                    >
                        {/* Badge/commented out as requested: ScaleCity · Agence de Génération de Leads */}
                        { /*
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#EAB308]/15 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles size={14} className="text-[#F59E0B]" />
              <span className="text-xs font-medium text-[#111827]/70">{t.servicesPage.heroBadge}</span>
            </div>
            */}

                        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
                            <span className="text-[#111827]">{t.servicesPage.heroTitle1}</span>
                            <br/>
                            <span className="gradient-text">
                {t.servicesPage.heroTitleHighlight}
              </span>
                            <br/>
                            <span className="text-[#111827]">{t.servicesPage.heroTitle2}</span>
                        </h1>

                        <p className="text-[#111827]/50 text-xl max-w-2xl mx-auto mb-8">
                            {t.servicesPage.heroSubtitle1}
                            <br/>
                            {t.servicesPage.heroSubtitle2}
                        </p>

                        <Link to="/contact" className="btn-primary">
                            {t.servicesPage.heroCta}
                            <ArrowRight size={18}/>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── DASHBOARD STYLE SECTION ── */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
                            {t.servicesPage.dashTitle1} <span
                            className="gradient-text">{t.servicesPage.dashTitleHighlight}</span>
                        </h2>
                        <p className="text-[#111827]/50 text-lg max-w-2xl mx-auto">
                            {t.servicesPage.heroSubtitle1} {t.servicesPage.heroSubtitle2}
                        </p>
                        <div className="mt-6">
                            <Link to="/contact" className="btn-primary">
                                {t.servicesPage.heroCta}
                                <ArrowRight size={16}/>
                            </Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-10 max-w-4xl mx-auto">

                        {/* Carte - Nouveaux leads */}
                        <ScrollReveal>
                            <div className="card-glass overflow-hidden">
                                <div className="p-4 border-b border-[#EAB308]/10">
                                    <h3 className="font-semibold text-[#111827] text-base">{t.servicesPage.newLeads}</h3>
                                </div>
                                <div className="divide-y divide-[#EAB308]/5">
                                    {recentLeads.map((lead, i) => (
                                        <div key={i}
                                             className="px-4 py-2.5 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${lead.gradient} flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                                                    {lead.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-[#111827] font-medium text-sm">{lead.name}</p>
                                                    <p className="text-[#111827]/30 text-xs">{lead.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-[#EAB308]/10 text-[#EAB308] font-medium">
                          {lead.status === 'Lead tiède' ? t.servicesPage.statusWarm : t.servicesPage.statusHot}
                        </span>
                                                <TrendingUp size={14} className="text-[#EAB308]"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-4 py-3 border-t border-[#EAB308]/10 bg-[#F9FAFB]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-8 h-8 rounded-full bg-[#EAB308]/15 flex items-center justify-center">
                                                <TrendingUp size={14} className="text-[#EAB308]"/>
                                            </div>
                                            <span className="text-[#111827] font-semibold text-base">57</span>
                                            <span className="text-[#111827]/40 text-sm">{t.servicesPage.newLeads}</span>
                                        </div>
                                        <ArrowRight size={14} className="text-[#111827]/30"/>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Carte - Rendez-vous */}
                        <ScrollReveal delay={0.1}>
                            <div className="card-glass overflow-hidden">
                                <div className="p-4 border-b border-[#EAB308]/10">
                                    <h3 className="font-semibold text-[#111827] text-base">{t.servicesPage.appointments}</h3>
                                </div>
                                <div className="divide-y divide-[#EAB308]/5">
                                    {upcomingRdvs.map((rdv, i) => (
                                        <div key={i}
                                             className="px-4 py-2.5 flex items-center justify-between hover:bg-[#F9FAFB] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${rdv.gradient} flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                                                    {rdv.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-[#111827] font-medium text-sm">{rdv.name}</p>
                                                    <p className="text-[#111827]/30 text-xs">{rdv.date === 'Demain' ? t.servicesPage.tomorrow : t.servicesPage.today} {t.servicesPage.at} {rdv.time}</p>
                                                </div>
                                            </div>
                                            <CheckCircle2 size={16} className="text-[#EAB308]"/>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="px-4 py-3 border-t border-[#EAB308]/10 bg-gradient-to-r from-[#EAB308]/5 to-[#FACC15]/5">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="flex -space-x-2">
                                            <div
                                                className="w-7 h-7 rounded-full bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">MM
                                            </div>
                                            <div
                                                className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FACC15] to-[#EC4899] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">PR
                                            </div>
                                            <div
                                                className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EAB308] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white">LH
                                            </div>
                                            <div
                                                className="w-7 h-7 rounded-full bg-[#EAB308]/30 flex items-center justify-center text-[#EAB308] text-[10px] font-bold border-2 border-white">+
                                            </div>
                                        </div>
                                        <span
                                            className="text-[#111827]/60 text-sm font-medium">{t.servicesPage.trustClients}</span>
                                        <Award size={14} className="text-[#F59E0B]"/>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ── BLOC 4 AVANTAGES ── */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#111827]/60 text-sm tracking-wide">
                            <span className="text-[#F59E0B]">✦</span> {t.servicesPage.advantagesBanner} <span
                            className="text-[#F59E0B]">✦</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        {avantages.map((avantage, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div
                                    className="card-glass p-6 hover:border-[#EAB308]/20 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                                    <div
                                        className="w-12 h-12 rounded-xl bg-[#EAB308]/10 flex items-center justify-center mb-4 flex-shrink-0">
                                        <avantage.icon size={22} className="text-[#EAB308]"/>
                                    </div>
                                    <h3 className="font-bold text-[#111827] text-lg mb-2 flex-1">
                                        {t.servicesPage.advantages[i].title}
                                    </h3>
                                    <p className="text-[#111827]/45 text-sm flex-1">
                                        {t.servicesPage.advantages[i].desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES SECTION ── */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        label={t.servicesPage.methodLabel}
                        title={t.servicesPage.methodTitle}
                        highlight={t.servicesPage.methodHighlight}
                    />

                    {/* Service Tabs */}
                    <div className="flex flex-wrap gap-3 justify-center mt-12 mb-12">
                        {services.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveService(i)}
                                className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-w-[150px] justify-center ${
                                    activeService === i
                                        ? 'bg-[#EAB308] text-white shadow-lg shadow-[#EAB308]/25 ring-2 ring-[#EAB308]/10'
                                        : 'bg-white text-[#111827]/70 hover:text-[#EAB308] hover:bg-[#F9FAFB] border border-[#EAB308]/15'
                                }`}
                            >
                                <s.icon size={15}/>
                                {t.servicesPage.services[i].title.includes('RDV')
                                    ? t.servicesPage.services[i].title.split(' ').slice(0, 3).join(' ')
                                    : t.servicesPage.services[i].title.split(' ').slice(0, 2).join(' ')
                                }
                            </button>
                        ))}
                    </div>

                    {/* Active Service Content */}
                    {services.map((service, i) => (
                        activeService === i && (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                <div>
                                    <div
                                        className="inline-flex items-center gap-2 text-xs font-semibold bg-[#EAB308]/10 border border-[#EAB308]/20 rounded-full px-3 py-1.5 mb-4">
                                        <service.icon size={12} className="text-[#EAB308]"/>
                                        <span className="text-[#111827]/70">{t.servicesPage.services[i].tagline}</span>
                                    </div>
                                    <h2 className="font-bold text-4xl text-[#111827] mb-5">{t.servicesPage.services[i].title}</h2>
                                    <p className="text-[#111827]/55 text-lg leading-relaxed mb-8">{t.servicesPage.services[i].desc}</p>
                                    <ul className="space-y-3 mb-8">
                                        {t.servicesPage.services[i].features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3 text-[#111827]/70 text-sm">
                                                <CheckCircle2 size={16}
                                                              className="text-[#EAB308] flex-shrink-0 mt-0.5"/>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn-primary">
                                        {t.servicesPage.startService}
                                        <ArrowRight size={16}/>
                                    </Link>
                                </div>

                                <div className="flex justify-center">
                                    <div className="card-glass p-8 text-center w-full max-w-sm">
                                        <div
                                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center mx-auto mb-6 shadow-lg">
                                            <service.icon size={32} className="text-white"/>
                                        </div>
                                        <div className="text-5xl font-bold text-[#111827] mb-2">{service.stat}</div>
                                        <div
                                            className="text-[#111827]/50 text-sm mb-6">{t.servicesPage.services[i].statLabel}</div>
                                        <div className="space-y-3">
                                            {[Shield, CheckCircle2, Clock].map((Icon, k) => (
                                                <div key={k}
                                                     className="flex items-center gap-3 bg-[#F9FAFB] rounded-xl px-4 py-3">
                                                    <Icon size={14} className="text-[#EAB308]"/>
                                                    <span
                                                        className="text-[#111827]/60 text-sm">{t.servicesPage.serviceBadges[k]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <SectionTitle
      label={t.servicesPage.pricingLabel}
      title={t.servicesPage.pricingTitle}
      highlight={t.servicesPage.pricingHighlight}
    />

    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {pricingPlans.map((plan, i) => {
        // Déterminer si le plan est mis en avant (CLOZ READY = index 1)
        const isFeatured = i === 1; // CLOZ READY

        return (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className={`relative card-glass p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isFeatured ? 'shadow-[#EAB308]/10 border-[#EAB308]/30' : ''
              }`}
            >
              {/* Badge "Populaire" - Uniquement sur CLOZ READY (index 1) */}
              {isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EAB308] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {t.servicesPage.popular}
                </div>
              )}

              <h3 className="font-bold text-xl text-[#111827] mb-2">{plan.name}</h3>
              <p className="text-[#111827]/45 text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#111827]">
                  {plan.price === 'Sur devis' ? t.offresPage.perMonth : plan.price}
                </span>
                <span className="text-[#111827]/40">
                  {plan.period ? t.offresPage.perMonth : ''}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-[#111827]/60 text-sm">
                    <CheckCircle2 size={14} className="text-[#EAB308]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  isFeatured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'
                }`}
              >
                {t.offresPage.choose} {plan.name.split(' ')[1]}
              </Link>
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  </div>
</section>


            {/* ── CTA FINAL ── */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="card-glass border-[#EAB308]/20 p-12 rounded-3xl glow-brand">
                            <h2 className="font-bold text-4xl text-[#111827] mb-4">{t.servicesPage.ctaTitle}</h2>
                            <p className="text-[#111827]/50 mb-8">{t.servicesPage.ctaText}</p>
                            <Link to="/contact" className="btn-primary">
                                {t.servicesPage.ctaBtn}
                                <ArrowRight size={18}/>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}