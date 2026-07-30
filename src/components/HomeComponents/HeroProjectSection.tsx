import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const projects = [
  {
    title: 'Le Sixth',
    description: 'Restaurant qui a augmenté son taux de réservation de +67%',
    url: 'https://lesixth.com/',
    gradient: 'from-[#FF6B35] to-[#FF8C42]',
  },
  {
    title: 'Centre Vision Laser',
    description:
      'La refonte du site et l\'amélioration du parcours utilisateur a augmenté le nombre de lead via le site de +350%',
    url: 'https://visionlaser.eu/',
    gradient: 'from-[#00C4CC] to-[#00E5E8]',
  },
  {
    title: 'Aude Coué Kinésiologue',
    description: 'Aude a doublé son nombre de rdv en 4 mois avec notre site internet',
    url: 'https://aude-coue.com/',
    gradient: 'from-[#6366F1] to-[#8B5CF6]',
  },
]

export default function HeroProjectSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-visible bg-white">
      <ScrollReveal>
        <div className="relative max-w-6xl mx-auto">
          {/* ========== GRAND CERCLE SOMBRE (CONTENEUR SÉPARÉ) ========== */}
          <div className="relative z-0">
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{
                backgroundColor: '#4A5568',
                borderRadius: '50%',
                width: '900px',
                height: '900px',
                top: '0',
                marginTop: '-100px',
              }}
            />
          </div>

          {/* ========== CONTENU PRINCIPAL ========== */}
          <div className="relative z-10 pt-20 px-8">
            {/* SECTION SUPÉRIEURE : AMALTHEA STUDIO */}
            <div className="mb-12 text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#00C4CC]/40 bg-[#00C4CC]/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#00C4CC] mb-5">
                Projet Vedette
              </p>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                <a
                  href="https://amalthea-studio.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00C4CC] transition-colors"
                >
                  Amalthea Studio
                </a>
              </h2>

              <p className="text-base sm:text-lg text-white leading-relaxed mb-6 max-w-lg mx-auto">
                Studio de Pilates en ligne qui a augmenté son taux de réservation de +87%.
              </p>

              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://amalthea-studio.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00C4CC] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#00E5E8]"
                  aria-label="Voir le projet Amalthea Studio"
                >
                  <ArrowRight size={18} />
                </a>
                <span className="text-sm text-white font-semibold">Voir le projet</span>
              </div>
            </div>

            {/* TITRE CENTRAL */}
            <div className="relative z-20 text-center mb-28 px-4">
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
                Des résultats qui font la différence.
              </h3>
            </div>
          </div>

          {/* ========== SECTION DES 3 PROJETS (TOTALEMENT SÉPARÉE) ========== */}
          <div className="relative z-20 w-full px-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {projects.map((project, idx) => {
                // Décalage vertical pour l'effet arc de cercle
                let verticalOffset = '0px'
                let marginBottom = '4rem'

                if (idx === 0) {
                  verticalOffset = '50px' // Gauche : descendu
                  marginBottom = '4rem' // Moins d'espace car cercle descendu
                } else if (idx === 1) {
                  verticalOffset = '0px' // Centre : position normale
                  marginBottom = '2rem'
                } else if (idx === 2) {
                  verticalOffset = '50px' // Droite : descendu
                  marginBottom = '4rem' // Moins d'espace car cercle descendu
                }

                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* CERCLE - Tous avec la même taille */}
                    <div
                      className="relative"
                      style={{
                        transform: `translateY(${verticalOffset})`,
                        marginBottom: marginBottom
                      }}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br ${project.gradient} p-1.5 shadow-2xl transition-transform duration-300 hover:scale-105 group cursor-pointer block`}
                      >
                        <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:border-white/50 group-hover:bg-white/20">
                          {/* Nom du projet au centre du cercle */}
                          <span
                            className="text-center px-3 font-bold leading-tight"
                            style={{
                              color: '#ffffff',
                              fontWeight: 'bold',
                              textAlign: 'center',
                              fontSize: idx === 1 ? '1rem' : '0.9rem',
                            }}
                          >
                            {project.title}
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* BLOC DE TEXTE - ENTIÈREMENT SUR FOND BLANC */}
                    <div className="w-full text-center">
                      {/* Titre - Forcé en noir gras */}
                      <h4
                        className="font-heading text-lg sm:text-xl font-bold mb-2 max-w-xs mx-auto"
                        style={{
                          color: '#1A202C !important',
                          fontWeight: 'bold !important'
                        }}
                      >
                        {project.title}
                      </h4>

                      {/* Description - Forcé en gris foncé */}
                      <p
                        className="text-xs sm:text-sm leading-relaxed mb-5 max-w-xs mx-auto"
                        style={{
                          color: '#4A5568 !important'
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Lien - Forcé en bleu */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors group"
                        style={{
                          color: '#2B6CB0 !important'
                        }}
                      >
                        Voir le projet
                        <ArrowRight
                          size={14}
                          className="text-[#00C4CC] group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}