// components/ServiceLayout.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ServiceLayout({ title, description, icon: Icon, children, features, ctaText = "Démarrer un projet" }) {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#EAB308] to-[#CA8A04] rounded-2xl shadow-lg shadow-[#EAB308]/30 mb-6">
            {Icon && <Icon size={40} className="text-white" />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#111827] mb-4">
            {title}
          </h1>
          <p className="text-xl text-[#111827]/60">
            {description}
          </p>
        </motion.div>

        {/* Contenu principal */}
        {children}

        {/* Points forts / avantages */}
        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-[#F9FAFB] rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-[#111827] mb-8 text-center">
              Pourquoi choisir notre expertise ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#111827]/50 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg py-3 px-8"
          >
            {ctaText}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}