import { Link } from 'react-router-dom'
import {
  Target, Megaphone, Users, Globe, BarChart3, ShieldCheck,
  ArrowRight, CheckCircle2, Building2,
} from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

const solutions = [
  {
    icon: Target,
    title: 'Génération de leads qualifiés',
    desc: 'Des prospects B2C ultra-qualifiés, 100% conformes RGPD, livrés directement dans votre CRM.',
  },
  {
    icon: Megaphone,
    title: 'Prospection multicanale',
    desc: 'Des campagnes coordonnées sur les canaux où se trouve votre cible : LinkedIn, Meta, Google.',
  },
  {
    icon: Users,
    title: 'Qualification humaine',
    desc: 'Chaque lead est appelé, vérifié et qualifié par un collaborateur dédié avant de vous être transmis.',
  },
  {
    icon: Globe,
    title: 'Tunnels de conversion',
    desc: 'Landing pages et parcours optimisés pour transformer chaque clic en rendez-vous.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & pilotage',
    desc: 'Dashboards en temps réel, KPIs clairs et optimisation continue de vos campagnes.',
  },
  {
    icon: ShieldCheck,
    title: 'Conformité RGPD',
    desc: 'Collecte et traitement des données 100% conformes, consentement recueilli à chaque étape.',
  },
]

const stats = [
  { value: '500+', label: 'leads livrés par mois' },
  { value: 'x3.5', label: 'ROI moyen client' },
  { value: '48h', label: 'délai de livraison' },
  { value: '100%', label: 'conformité RGPD' },
]

const benefits = [
  'Un interlocuteur dédié à votre compte',
  'Des leads exclusifs, jamais revendus',
  'Un budget maîtrisé et tracé dès le premier jour',
  'Des rendez-vous confirmés dans votre agenda',
]

export default function Entreprises() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#EAB308]/15 mb-6">
              <Building2 size={15} className="text-[#EAB308]" />
              <span className="text-sm font-medium text-[#111827]/80">Solutions pour les entreprises</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
              Des solutions digitales pour faire croître votre{' '}
              <span className="gradient-text">entreprise</span>
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed mb-8">
              Only Cloz accompagne les entreprises B2C dans la génération de leads qualifiés et transforme
              leur prospection en moteur de croissance prévisible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary text-sm py-3.5 px-8">
                Démarrer un projet
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline text-sm py-3.5 px-8">
                Voir nos services
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {solutions.map((sol, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-glass p-6 h-full group transition-all duration-300 hover:-translate-y-1.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-[#EAB308]/10 border border-[#EAB308]/12 transition-transform duration-300 group-hover:scale-110">
                  <sol.icon size={20} className="text-[#EAB308]" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#111827] mb-2.5">{sol.title}</h3>
                <p className="text-sm leading-relaxed text-[#111827]/50">{sol.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Benefits + stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-6">
                Pourquoi les entreprises nous choisissent
              </h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#EAB308] flex-shrink-0 mt-0.5" />
                    <span className="text-[#111827]/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="card-glass p-6 text-center">
                  <div className="text-3xl font-bold font-heading gradient-text">{s.value}</div>
                  <p className="text-xs text-[#111827]/50 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Green featured CTA */}
        <ScrollReveal>
          <div className="feature-green relative rounded-[2rem] overflow-hidden p-12 md:p-16 text-center shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Prêt à accélérer votre croissance ?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Discutons de vos objectifs et construisons ensemble votre moteur d'acquisition de clients.
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
