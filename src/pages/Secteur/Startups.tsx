import { Link } from 'react-router-dom'
import {
  Rocket, Zap, TrendingUp, Users, FlaskConical, BarChart3,
  ArrowRight, CheckCircle2,
} from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

const solutions = [
  {
    icon: Zap,
    title: 'Acquisition rapide',
    desc: 'Un flux de leads qualifiés opérationnel en quelques jours pour valider votre marché sans attendre.',
  },
  {
    icon: FlaskConical,
    title: 'Test & itération',
    desc: 'On teste vos messages, canaux et cibles en continu pour trouver ce qui convertit le mieux.',
  },
  {
    icon: TrendingUp,
    title: 'Croissance scalable',
    desc: 'Un moteur d\'acquisition qui monte en puissance au rythme de votre startup, sans casser votre coût par lead.',
  },
  {
    icon: Users,
    title: 'Qualification humaine',
    desc: 'Chaque lead est appelé et qualifié avant de vous être transmis. Vos commerciaux se concentrent sur le closing.',
  },
  {
    icon: BarChart3,
    title: 'Data & métriques',
    desc: 'CPL, taux de conversion, ROI : des métriques claires pour piloter votre croissance et convaincre vos investisseurs.',
  },
  {
    icon: Rocket,
    title: 'Go-to-market',
    desc: 'On construit avec vous le canal d\'acquisition qui accélère votre lancement et votre traction.',
  },
]

const stats = [
  { value: '48h', label: 'mise en route' },
  { value: 'x3.5', label: 'ROI moyen client' },
  { value: '100%', label: 'leads qualifiés' },
  { value: 'Scale', label: 'montée en charge' },
]

const benefits = [
  'Un canal d\'acquisition prévisible pour votre traction',
  'Des coûts maîtrisés, adaptés à votre runway',
  'Des métriques claires pour vos reportings investisseurs',
  'Une équipe dédiée qui itère à votre rythme',
]

export default function Startups() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#EAB308]/15 mb-6">
              <Rocket size={15} className="text-[#EAB308]" />
              <span className="text-sm font-medium text-[#111827]/80">Solutions pour les startups</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
              Accélérez votre{' '}
              <span className="gradient-text">croissance</span>
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed mb-8">
              Only Cloz aide les startups à construire un moteur d'acquisition prévisible : des leads qualifiés,
              des tests rapides et une croissance qui passe à l'échelle.
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
                Pourquoi les startups nous choisissent
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
                Prêt à passer à l'échelle ?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Parlons de vos objectifs de croissance — on construit ensemble votre moteur d'acquisition scalable.
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
