import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { useI18n } from '../../i18n'

export default function CtaBannerSection() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    rgpd: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div
            className="relative rounded-[2rem] overflow-hidden p-12 md:p-16 shadow-2xl bg-white"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(253,230,138,0.8), transparent)' }}
            />

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Colonne gauche - Texte */}
                <div className="text-left">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#0F172A] mb-4 tracking-tight leading-tight">
                    Construisons ensemble votre{' '}
                    <span style={{ color: '#FDE68A' }}>réussite</span>.
                  </h2>

                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-6">
                    Vous avez un projet en tête ? Contactez-nous dès aujourd'hui pour en discuter.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={16} className="text-[#FFE957] flex-shrink-0" />
                      <span>Réponse sous 24h garantie</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={16} className="text-[#FFE957] flex-shrink-0" />
                      <span>Audit gratuit offert</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={16} className="text-[#FFE957] flex-shrink-0" />
                      <span>Interlocuteur dédié</span>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Formulaire */}
                <div>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#F8FAFC] rounded-2xl p-8 text-center border border-[#E2E8F0]"
                    >
                      <div className="w-16 h-16 bg-[#FFE957]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-[#0F172A]" />
                      </div>
                      <h3 className="text-[#0F172A] text-xl font-bold mb-2">Message envoyé !</h3>
                      <p className="text-[#64748B] text-sm mb-6">
                        Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#FDE68A] transition-colors"
                      >
                        Envoyer un autre message
                        <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row : Prénom & Nom */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Prénom"
                            className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#FFE957] focus:ring-2 focus:ring-[#FFE957]/20 rounded-xl px-4 py-3 text-[#0F172A] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Nom"
                            className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#FFE957] focus:ring-2 focus:ring-[#FFE957]/20 rounded-xl px-4 py-3 text-[#0F172A] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Email & Entreprise */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email professionnel"
                            className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#FFE957] focus:ring-2 focus:ring-[#FFE957]/20 rounded-xl px-4 py-3 text-[#0F172A] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Entreprise"
                            className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#FFE957] focus:ring-2 focus:ring-[#FFE957]/20 rounded-xl px-4 py-3 text-[#0F172A] text-sm placeholder-[#64748B] outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          placeholder="Décrivez votre projet..."
                          className="w-full bg-[#F1F5F9] border border-[#E2E8F0] focus:border-[#FFE957] focus:ring-2 focus:ring-[#FFE957]/20 rounded-xl px-4 py-3 text-[#0F172A] text-sm placeholder-[#64748B] outline-none transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* RGPD */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="rgpd"
                          id="rgpd-cta"
                          checked={formData.rgpd}
                          onChange={handleChange}
                          required
                          className="mt-0.5 w-4 h-4 accent-[#FFE957] cursor-pointer"
                        />
                        <label htmlFor="rgpd-cta" className="text-xs text-[#64748B] leading-relaxed cursor-pointer">
                          J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande.
                        </label>
                      </div>

                      {/* Bouton d'envoi - Option A : Jaune avec texte sombre */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-4 px-8 rounded-full bg-[#FFE957] text-[#0F172A] shadow-[0_8px_30px_rgba(255,233,87,0.4)] hover:shadow-[0_12px_40px_rgba(255,233,87,0.6)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}