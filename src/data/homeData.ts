// data/homeData.ts
import {
  Shield, Target, TrendingUp, Eye, Users, Award,
  Filter, Mail, Linkedin, Phone, Globe2, Zap, BarChart3, Clock
} from 'lucide-react'

export const stats = [
  { value: 500, suffix: '+', label: 'Leads livrés / mois', icon: Target },
  { value: 98, suffix: '%', label: 'Conformité RGPD', icon: Shield },
  { value: 3, suffix: 'x', label: 'ROI moyen clients', icon: TrendingUp },
  { value: 48, suffix: 'h', label: 'Délai de livraison', icon: Clock },
]

export const values = [
  { icon: Target, title: 'PRÉCISION', desc: 'Secteur, géographie, comportement, chaque campagne est construite autour de vos critères. Zéro bruit, uniquement des opportunités réelles.' },
  { icon: Eye, title: 'TRANSPARENCE', desc: 'Reporting clair, KPIs mesurables, zéro jargon. Vous savez exactement ce que vous obtenez et pour quel résultat concret.' },
  { icon: TrendingUp, title: 'RÉSULTATS', desc: 'Notre succès est lié au vôtre. Nous nous mesurons à vos taux de conversion, coût d\'acquisition et ROI. Pas aux métriques de vanité.' },
  { icon: Shield, title: 'CONFORMITÉ', desc: 'Toutes nos bases de données et campagnes respectent scrupuleusement la réglementation RGPD européenne. Votre réputation est protégée.' },
  { icon: Award, title: 'QUALITÉ', desc: 'Chaque lead est qualifié manuellement. Nous préférons livrer moins pour livrer mieux. La performance de nos clients dépend de la qualité de nos données.' },
  { icon: Users, title: 'PARTENARIAT', desc: 'Nous construisons une relation durable avec chacun de nos clients, basée sur la confiance, les résultats et un accompagnement long terme.' },
]

export const services = [
  {
    icon: Filter,
    title: 'Génération de leads B2C',
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

export const process = [
  { step: '01', title: 'Audit & Cadrage', desc: 'Analyse de votre marché cible, définition du profil client idéal (ICP) et des objectifs chiffrés.', icon: Globe2 },
  { step: '02', title: 'Construction de liste', desc: 'Extraction et enrichissement des données B2C qualifiées selon vos critères précis.', icon: Filter },
  { step: '03', title: 'Activation campagne', desc: 'Lancement des séquences multicanales : email, LinkedIn, phoning selon la stratégie définie.', icon: Zap },
  { step: '04', title: 'Livraison & pilotage', desc: 'Leads qualifiés livrés dans votre CRM avec reporting hebdomadaire et optimisations continues.', icon: BarChart3 },
]

export const testimonials = [
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
    role: "Head of Sales — B2C Experts",
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

export const logos = ['TechScale', 'B2C Experts', 'Fintech Pro', 'GrowthCo', 'DataSync', 'SalesForce+', 'LeadGen360', 'ProspectHub']