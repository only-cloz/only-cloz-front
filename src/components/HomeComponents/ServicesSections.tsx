import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Marketing',
    description:
      'Dans un web saturé, la visibilité ne suffit plus. Nous créons des campagnes ciblées et une stratégie SEO performante pour attirer les bons prospects et générer une croissance mesurable.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkText: 'Découvrir le marketing',
    link: '/services/marketing',
    reverse: false,
  },
  {
    title: 'Développement',
    description:
      'Nous concevons des sites web performants, évolutifs et pensés pour convertir vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkText: 'En savoir plus',
    link: '/services/developpement',
    reverse: true,
  },
  {
    title: 'Création',
    description:
      'Une identité forte inspire confiance. Nous créons une image de marque qui vous distingue et renforce votre crédibilité.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkText: 'Découvrir la création',
    link: '/services/creation',
    reverse: false,
  },
  {
    title: 'Stratégie',
    description:
      'Une croissance durable repose sur une vision claire. Nous élaborons une stratégie adaptée pour transformer vos objectifs en résultats.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    linkText: 'En savoir plus',
    link: '/services/strategie',
    reverse: true,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F7FAFC]">
      <div className="container-fluid px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5568] mb-3">
            CE QUE NOUS FAISONS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Vos objectifs, nos services
          </h2>
        </motion.div>

        {/* Liste des cartes */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row ${
                service.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Partie Texte */}
              <div className="flex-1 lg:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000] mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#2D3748] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B6CB0] hover:text-[#1A4F7A] transition-colors group w-fit"
                >
                  {service.linkText}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Partie Image avec fallback */}
              <div className="flex-1 lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-[#EAB308]/10 to-[#CA8A04]/5 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.innerHTML = `
                        <div class="text-center">
                          <div class="text-4xl mb-2">🎨</div>
                          <div class="text-sm text-[#4A5568] font-medium">${service.title}</div>
                          <div class="text-xs text-[#4A5568]/60 mt-1">Image illustrative</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}