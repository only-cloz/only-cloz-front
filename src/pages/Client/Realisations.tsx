import { Link } from 'react-router-dom'
import { Briefcase, ArrowRight } from 'lucide-react'
import ScrollReveal from '../../components/ui/ScrollReveal'

// Réalisations reprises des études de cas de la page Clients.
const projets = [
  {
    title: 'Gagner visibilité et leads grâce au GEO',
    description: "Stratégie innovante d'optimisation pour moteurs génératifs, augmentation significative des mentions sur ChatGPT et Gemini.",
    category: ['SEO', 'Innovation'],
    industry: 'Tech / Streaming',
    stats: [{ value: '+200%', label: 'mentions ChatGPT & Gemini' }, { value: '+11%', label: 'conversion' }],
  },
  {
    title: "Refondre l'identité graphique d'une université",
    description: "Modernisation complète de l'identité visuelle et du contenu pour une université de renom.",
    category: ['Webdesign', 'Contenu'],
    industry: 'Éducation',
    stats: [{ value: '+206%', label: 'clics organiques/mois' }, { value: '+36%', label: 'CA sur secteur en crise' }],
  },
  {
    title: 'Développer la visibilité immobilière à Ajaccio',
    description: "Accompagnement du leader de l'immobilier corse pour une visibilité maximale.",
    category: ['SEO', 'Local'],
    industry: 'Immobilier',
    stats: [{ value: '1ère', label: 'position mots-clés locaux' }, { value: '+93%', label: 'CA vs année précédente' }],
  },
  {
    title: "Gagner 42% d'adhésion tout en diminuant le coût",
    description: "Optimisation des campagnes d'acquisition pour augmenter les adhésions.",
    category: ['SEA', 'Optimisation'],
    industry: 'Association',
    stats: [{ value: '+42%', label: "taux d'adhésion" }, { value: '-25%', label: 'coût par adhésion' }],
  },
  {
    title: '+65% de trafic qualifié avec un silo thématique',
    description: "Restructuration complète de l'architecture du site pour un meilleur référencement.",
    category: ['SEO', 'Architecture'],
    industry: 'E-commerce',
    stats: [{ value: '+65%', label: 'trafic qualifié' }, { value: '+200K', label: 'impressions vs N-1' }],
  },
  {
    title: 'Moderniser un site pour mettre en avant des réalisations',
    description: "Refonte complète pour valoriser le portfolio et améliorer l'expérience utilisateur.",
    category: ['Webdesign', 'UX'],
    industry: 'Portfolio',
    stats: [{ value: '+630', label: 'pages en Top 10' }, { value: '+34%', label: 'trafic SEO' }],
  },
  {
    title: 'De 0 à 165K€ en 7 mois avec ROAS de 6',
    description: 'Lancement et optimisation de campagnes publicitaires pour une croissance explosive.',
    category: ['SEA', 'Croissance'],
    industry: 'E-commerce',
    stats: [{ value: '165K€', label: 'CA en 7 mois' }, { value: 'ROAS 6', label: 'retour sur investissement' }],
  },
  {
    title: "Gérer la présence en ligne d'un restaurant gastronomique (Michelin**)",
    description: 'Stratégie digitale pour un établissement étoilé alliant prestige et performance.',
    category: ['Réseaux sociaux', 'Contenu'],
    industry: 'Restauration',
    stats: [{ value: '+30%', label: 'contacts qualifiés' }, { value: '+36%', label: 'CA' }],
  },
  {
    title: "Assurer la migration d'une animalerie vers Matomo",
    description: 'Migration complète des données sans perte, garantissant la continuité analytique.',
    category: ['Analytics', 'Migration'],
    industry: 'Animalerie',
    stats: [{ value: '100%', label: 'données préservées' }, { value: '0', label: "jour d'interruption" }],
  },
]

export default function Realisations() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#EAB308]/15 mb-6">
              <Briefcase size={15} className="text-[#EAB308]" />
              <span className="text-sm font-medium text-[#111827]/80">Nos réalisations</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] mb-5 leading-tight">
              Découvrez nos <span className="gradient-text">projets</span>
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed">
              Des résultats concrets obtenus pour nos clients, secteur par secteur.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projets.map((p, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.1}>
              <div className="card-glass p-6 h-full flex flex-col group relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EAB308] to-[#FACC15] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#EAB308] mb-3">{p.industry}</span>
                <h3 className="font-heading font-bold text-base text-[#111827] mb-2.5 leading-snug">{p.title}</h3>
                <p className="text-sm text-[#111827]/50 leading-relaxed mb-5 flex-1">{p.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {p.stats.map((s, j) => (
                    <div key={j} className="rounded-xl bg-[#EAB308]/[0.06] border border-[#EAB308]/10 p-3">
                      <div className="font-heading font-bold text-lg gradient-text">{s.value}</div>
                      <div className="text-[10px] text-[#111827]/50 leading-tight mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.category.map((c, k) => (
                    <span key={k} className="tag">{c}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Green featured CTA */}
        <ScrollReveal>
          <div className="feature-green relative rounded-[2rem] overflow-hidden p-12 md:p-16 text-center shadow-2xl mt-20">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Votre projet est le prochain ?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                Parlons de vos objectifs — on construit ensemble votre prochaine réussite.
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
