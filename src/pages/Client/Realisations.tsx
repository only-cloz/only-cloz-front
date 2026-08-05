import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Briefcase,
  Feather,
  PawPrint,
  Sparkles,
  Drama,
  Crown,
  Eye,
  BookOpen,
  CalendarCheck,
} from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

// Données des réalisations (présentées en bulles)
const projets = [
  {
    title: 'Horizon Nouveau',
    url: 'https://www.horizon-nouveau.fr/',
    description: "Une stratégie SEO efficace qui a permis à ce coach d'atteindre la première place sur Google.",
    icon: TrendingUp,
  },
  {
    title: 'Hôtel la Colongette',
    url: 'https://hotel-la-colongette.com/',
    description: "Augmentation du taux de réservation de +130% avec le nouveau site.",
    icon: Building2,
  },
  {
    title: 'Espace Oasium',
    url: 'https://espace-oasium.com/',
    description: "Ce site de réservation de bureau a atteint un taux de remplissage de 87%.",
    icon: Briefcase,
  },
  {
    title: 'Bénédicte Nécaille',
    url: 'https://www.lemiroiretlaplume.fr/',
    description: "Biographe qui est passée de 1 à 6 biographies par an.",
    icon: Feather,
  },
  {
    title: 'Faune Project',
    url: 'https://fauneproject.com/',
    description: "Une refonte qui a permis une augmentation du trafic organique de +74%.",
    icon: PawPrint,
  },
  {
    title: 'Amalthéa Pilates',
    url: 'https://amalthea-studio.com/',
    description: "Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.",
    icon: Sparkles,
  },
  {
    title: 'Jyretourneimmédiatement',
    url: 'https://www.jyretourneimmediatement.com/',
    description: "Compagnie de théâtre qui a vu son taux de visite augmenter de +520%.",
    icon: Drama,
  },
  {
    title: 'Hôtel Royal Palace',
    url: 'https://hotel-royal-palace.com/',
    description: "Hôtel qui est devenu numéro 1 sur Google dans sa région.",
    icon: Crown,
  },
  {
    title: 'Vision Laser',
    url: 'https://visionlaser.eu/',
    description: "La refonte du site et l'amélioration du parcours utilisateur a augmenté le nombre de leads via le site de +350%.",
    icon: Eye,
  },
  {
    title: 'Le Chemin de mon Histoire',
    url: 'https://lechemindemonhistoire.fr/',
    description: "Laurent a doublé son CA avec son site internet.",
    icon: BookOpen,
  },
  {
    title: 'Aude Coué',
    url: 'https://aude-coue.com/',
    description: "Aude a augmenté son taux de rdv de +100% en 4 mois.",
    icon: CalendarCheck,
  },
]

// Alternance de couleurs sur la marque OnlyCloz (jaune + gris/anthracite)
const bubbleStyles = [
  { bg: '#FFE957', text: '#111827', iconBg: 'rgba(17,24,39,0.08)' },
  { bg: '#F3F4F6', text: '#111827', iconBg: 'rgba(17,24,39,0.06)' },
  { bg: '#111827', text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.1)' },
  { bg: '#F3F4F6', text: '#111827', iconBg: 'rgba(17,24,39,0.06)' },
]

export default function Realisations() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-8 leading-tight">
              Des stratégies qui produisent des résultats
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed">
              Chaque projet est pensé pour atteindre un objectif concret : attirer plus de clients, développer votre visibilité et accélérer votre croissance. Découvrez quelques-unes des entreprises que nous avons accompagnées et les résultats obtenus grâce à une stratégie digitale performante.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille de bulles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 pt-20">
          {projets.map((p, i) => {
            const style = bubbleStyles[i % bubbleStyles.length]
            const Icon = p.icon
            const isMiddleColumn = i % 3 === 1
            return (
              <ScrollReveal key={i} delay={(i % 4) * 0.06}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col items-center text-center ${isMiddleColumn ? 'md:-mt-20' : ''}`}
                >
                  <div
                    className="w-full max-w-[220px] aspect-square rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{ backgroundColor: style.bg }}
                  >
                    <Icon size={40} style={{ color: style.text }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-[#111827] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#111827]/60 leading-relaxed max-w-[220px]">
                    {p.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#111827]/50 group-hover:text-[#111827] transition-colors">
                    Visiter le site
                    <ArrowRight size={12} />
                  </span>
                </a>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Green featured CTA */}
        <ScrollReveal>
          <div className="feature-green relative rounded-[2rem] overflow-hidden p-12 md:p-16 text-center shadow-2xl mt-24">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Votre projet est le prochain ?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Parlons de vos objectifs, on construit ensemble votre prochaine réussite.
              </p>
              <Link
                to="/contact?form=1"
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
