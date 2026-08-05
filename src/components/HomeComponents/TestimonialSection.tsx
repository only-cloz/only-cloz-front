import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    position: 'CEO',
    text: 'OnlyCloz a transformé notre présence en ligne. En seulement 3 mois, notre trafic a augmenté de 150% et nos conversions ont doublé. Une équipe à l\'écoute et des résultats concrets.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    position: 'Directeur Marketing',
    text: 'La stratégie digitale mise en place par votre accompagnement a été un game changer. Notre ROI a été multiplié par 3.5 et nous avons gagné en crédibilité sur notre marché. Je recommande vivement !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Marie Laurent',
    position: 'Fondatrice',
    text: 'Une collaboration exceptionnelle. Vous avez su comprendre nos besoins et créer une identité de marque qui nous ressemble. Notre site est devenu notre meilleur outil de vente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    name: 'Pierre Moreau',
    position: 'Responsable Digital',
    text: 'Nous avons augmenté nos réservations en ligne de 67%. Votre approche data-driven et votre créativité ont fait toute la différence. Un partenaire de confiance.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F7FAFC]">
      <div className="container-fluid px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">

        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5568] mb-3">
            TÉMOIGNAGES
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Ce que disent nos clients
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

            {/* Colonne gauche - Photo de profil */}
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #EAB30820, #CA8A0420)';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.innerHTML = `
                        <span class="text-4xl font-bold text-[#EAB308]">
                          ${currentTestimonial.name.charAt(0)}
                        </span>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Colonne droite - Contenu textuel */}
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 w-full"
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="text-base sm:text-lg lg:text-xl text-[#2D3748] leading-relaxed mb-6">
                "{currentTestimonial.text}"
              </p>

              {/* Auteur */}
              <div className="mb-1">
                <span className="text-sm sm:text-base font-bold text-[#000000] uppercase tracking-wide">
                  {currentTestimonial.name}
                </span>
              </div>

              {/* Poste - Uniquement le rôle, sans entreprise */}
              <div className="text-xs sm:text-sm text-[#4A5568]">
                {currentTestimonial.position}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-[#E2E8F0]">
            {/* Bouton précédent */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-[#00C4CC] hover:bg-[#00C4CC] hover:text-white transition-all duration-300 flex items-center justify-center text-[#00C4CC] hover:shadow-lg group"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={20} className="group-hover:translate-x-[-2px] transition-transform" />
            </button>

            {/* Barre de progression */}
            <div className="flex items-center gap-2 flex-1 max-w-xs">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#00C4CC]'
                      : 'w-4 bg-[#E2E8F0] hover:bg-[#00C4CC]/50'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#00C4CC] hover:bg-[#00C4CC] hover:text-white transition-all duration-300 flex items-center justify-center text-[#00C4CC] hover:shadow-lg group"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={20} className="group-hover:translate-x-[2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}