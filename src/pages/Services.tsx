import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import TestimonialSection from '../components/HomeComponents/TestimonialSection'
import CtaSection from '../components/HomeComponents/CtaSection'

// ── Données des services ──
const services = [
  {
    id: 1,
    title: 'Création de sites web',
    description:
      'Conception de sites performants, sécurisés et évolutifs, pensés pour offrir une expérience optimale et convertir vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir la Création Web',
  },
  {
    id: 2,
    title: 'Publicité digitale',
    description:
      'Campagnes Google Ads, réseaux sociaux, publicité programmatique et stratégies d\'acquisition conçues pour atteindre vos objectifs de croissance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir la Publicité',
  },
  {
    id: 3,
    title: 'Data & Analytics',
    description:
      'Mise en place d\'outils de mesure et de tableaux de bord pour suivre précisément les performances de vos campagnes et leur impact sur votre chiffre d\'affaires.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir Data & Analytics',
  },
  {
    id: 4,
    title: 'Stratégie de marque',
    description:
      'Définissez votre positionnement, affirmez votre différence et construisez une image cohérente sur l\'ensemble de vos points de contact.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir la Stratégie',
  },
  {
    id: 5,
    title: 'SEO, AEO & GEO',
    description:
      'Optimisation de votre visibilité sur Google, les moteurs de recherche alimentés par l\'IA et les nouveaux outils de recherche conversationnelle.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir le SEO',
  },
  {
    id: 6,
    title: 'Stratégie digitale',
    description:
      'Élaboration d\'une feuille de route claire : choix des canaux, répartition du budget et plan d\'action aligné sur vos objectifs commerciaux.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: '/contact',
    ctaText: 'Découvrir la Stratégie Digitale',
  },
]

export default function ServicesSection() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── HERO D'EN-TÊTE ── */}
      <section className="relative py-24 px-4 text-center overflow-hidden bg-gradient-to-b from-[#FFFDF0] via-[#FDFBF4] to-white">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFE957]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFE957]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-40 left-10 w-48 h-48 bg-[#FFE957]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6">
              On vous livre des<br className="hidden sm:block" />
              rendez-vous qualifiés
            </h1>

            {/* Paragraphe explicatif */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              On conçoit une machine complète : campagnes pub, tunnel de conversion, automatisations et prise de RDV.<br /> Vous n'avez plus qu'à closer.
            </p>

            {/* Bouton CTA principal */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FFE957] text-slate-900 font-semibold px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:bg-[#ffd814] transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Obtenir mes premiers rendez-vous
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GRILLE DES SERVICES ── */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          {/* Titre de section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A5568] mb-3">
              CE QUE NOUS FAISONS
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
              Nos Services
            </h2>
          </motion.div>

          {/* Grille des services avec gap augmenté */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center text-center h-full"
              >
                {/* Image circulaire */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
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
                          <span class="text-2xl font-bold text-[#EAB308]">
                            ${service.title.charAt(0)}
                          </span>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Titre */}
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mb-6 max-w-xs flex-1">
                  {service.description}
                </p>

                {/* Bouton CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096C7] text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all duration-300 hover:opacity-90 hover:shadow-lg group mt-auto"
                >
                  {service.ctaText}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION ACCÉLÉRATION DE LA CROISSANCE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8 max-w-md">
              Des services pensés pour
              <br />
              <span className="text-[#EAB308]">accélérer votre croissance</span>
            </h2>

            {/* 2 colonnes de texte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#64748B] text-sm md:text-base leading-relaxed mb-10">
              <p>
                Développer son activité est un défi. Entre le marketing, le référencement,
                les campagnes publicitaires et les nouvelles technologies, il est souvent
                difficile de savoir où investir pour obtenir de vrais résultats.
              </p>
              <p>
                OnlyCloz vous accompagne avec une stratégie claire et des solutions digitales
                conçues pour attirer plus de prospects, renforcer votre visibilité et accélérer
                votre croissance. De la réflexion à la mise en œuvre, nous vous apportons
                l'expertise et les outils nécessaires pour faire de votre présence en ligne
                un véritable levier de développement.
              </p>
            </div>

            {/* Bouton CTA centré */}
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#FFE957] text-[#111111] font-semibold text-sm py-4 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Démarrer un projet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialSection />
      <CtaSection />
    </div>
  )
}