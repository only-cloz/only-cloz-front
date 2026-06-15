import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Eye, Calendar, ChevronRight } from 'lucide-react'

export default function ResourceLayout({ 
  title = "Ressource",
  description = "Découvrez nos ressources exclusives pour booster votre stratégie digitale",
  icon: Icon = null,
  children = null,
  category = "Ressource",
  readTime = null,
  views = null,
  date = null,
  author = null,
  authorAvatar = null
}) {
  // Fonction pour générer l'URL de l'avatar
  const getAvatarUrl = () => {
    if (authorAvatar) return authorAvatar
    if (author) return `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=7C3AED&color=fff&length=2`
    return null
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Fil d'Ariane */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-[#111827]/50 mb-6 flex-wrap"
        >
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">
            Accueil
          </Link>
          <ChevronRight size={14} />
          <Link to="/resources" className="hover:text-[#7C3AED] transition-colors">
            Resources
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#7C3AED] font-medium">{category}</span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Icône */}
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-2xl shadow-lg shadow-[#7C3AED]/30 mb-6">
              <Icon size={32} className="text-white" />
            </div>
          )}
          
          {/* Métadonnées */}
          {(date || readTime || views) && (
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[#111827]/50">
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{date}</span>
                </div>
              )}
              {readTime && (
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{readTime} min de lecture</span>
                </div>
              )}
              {views && (
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{views.toLocaleString()} vues</span>
                </div>
              )}
            </div>
          )}

          {/* Titre */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#111827] mb-6">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#111827]/60 leading-relaxed">
            {description}
          </p>

          {/* Auteur */}
          {author && getAvatarUrl() && (
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#7C3AED]/10">
              <img 
                src={getAvatarUrl()} 
                alt={author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-[#111827]">{author}</p>
                <p className="text-sm text-[#111827]/40">Auteur</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Contenu principal */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-[#7C3AED] prose-a:no-underline hover:prose-a:underline prose-p:text-[#111827]/70 prose-headings:text-[#111827] prose-strong:text-[#111827]"
          >
            {children}
          </motion.div>
        )}

        {/* Section CTA - Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#7C3AED]/10"
        >
          <div className="bg-gradient-to-r from-[#7C3AED]/5 via-[#8B5CF6]/5 to-[#EC4899]/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              Vous avez un projet ?
            </h3>
            <p className="text-[#111827]/60 mb-6 max-w-md mx-auto">
              Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/30 transition-all duration-300"
              >
                Démarrer un projet
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#7C3AED]/20 text-[#111827] px-6 py-3 rounded-full font-semibold hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}