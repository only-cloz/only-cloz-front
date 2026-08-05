import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Linkedin, Twitter, Send,
  CheckCircle2, Clock, MessageSquare, ArrowRight, Zap, Users, Globe2
} from 'lucide-react'
import { useLocation } from 'react-router-dom'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useI18n } from '../i18n'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@onlycloz.com', href: 'mailto:contact@onlycloz.com' },
  { icon: Phone, label: 'Téléphone', value: '+33 6 15 83 75 61', href: 'tel:+33615837561' },
  { icon: MapPin, label: 'Adresse', value: '310 la Lande 37460 Genillé', href: '#' },
]

const offers = [
  { icon: Zap, title: 'Génération de leads', desc: 'Bases de données B2C qualifiées' },
  { icon: Mail, title: 'Campagnes email', desc: 'Cold email à haute délivrabilité' },
  { icon: Linkedin, title: 'LinkedIn Outreach', desc: 'Prospection sur LinkedIn' },
  { icon: Phone, title: 'Phoning & RDV', desc: 'Prise de rdv qualifiés' },
  { icon: Globe2, title: 'Audit stratégique', desc: 'Analyse de votre process actuel' },
  { icon: Users, title: 'Accompagnement', desc: 'Pilotage commercial complet' },
]

const advantages = [
  { icon: Clock, text: 'Réponse sous 24h garantie' },
  { icon: CheckCircle2, text: 'Audit gratuit offert' },
  { icon: Users, text: 'Interlocuteur dédié' },
  { icon: Globe2, text: 'Intervention France & Europe' },
]

export default function Contact() {
  const { t } = useI18n()
  const location = useLocation()

  // Support query param ?form=1 OR navigation state { focusForm: true }
  const params = new URLSearchParams(location.search)
  const navState = (location.state || {}) as { focusForm?: boolean }
  const showFormDirectly = params.get('form') === '1' || !!navState.focusForm

  const formRef = useRef<HTMLDivElement | null>(null)
  const firstInputRef = useRef<HTMLInputElement | null>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    rgpd: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  // Quand showFormDirectly est demandé, scroller vers le formulaire et autofocuser le 1er input
  useEffect(() => {
    if (!showFormDirectly) return
    const id = window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      firstInputRef.current?.focus()
    }, 60)
    return () => window.clearTimeout(id)
  }, [showFormDirectly])

  return (
    <div className="overflow-hidden bg-white">
      {/* ── HERO ── */}
      <section className="relative pt-24 pb-12 hero-gradient-vibrant">
        <div className="max-w-7xl mx-auto px-6 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#EAB308] uppercase tracking-widest bg-[#EAB308]/10 border border-[#EAB308]/20 px-4 py-1.5 rounded-full mb-6">
              <MessageSquare size={12} />
              {t.contact.heroBadge}
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-[#111827] tracking-tight leading-tight mb-6">
              {t.contact.heroTitle}{' '}
              <span className="gradient-text">{t.contact.heroHighlight}</span>
            </h1>
            <p className="text-[#111827]/50 text-xl max-w-xl mx-auto">
              {t.contact.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 section-padding">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                {/* Contact info */}
                <div className="card-glass p-8 mb-6">
                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-6">{t.contact.infoTitle}</h3>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                      <a key={i} href={href} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-[#EAB308]/10 border border-[#EAB308]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#EAB308]/20 transition-colors">
                          <Icon size={16} className="text-[#EAB308]" />
                        </div>
                        <div>
                          <div className="text-xs text-[#111827]/40 uppercase tracking-wider mb-0.5">{t.contact.infoLabels[i]}</div>
                          <div className="text-sm text-[#111827]/70 group-hover:text-[#111827] transition-colors">{value}</div>
                        </div>
                      </a>
                    ))}

                    {/* WhatsApp CTA */}
                    <a
                      href="https://wa.me/33615837561"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 mt-3 text-sm bg-[#25D366]/10 border border-[#25D366]/20 text-[#111827] rounded-xl px-4 py-2 hover:bg-[#25D366]/15 transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M20.52 3.48C18.14 1.1 15.01 0 11.7 0 5.16 0 .12 5.04.12 11.58c0 2.05.54 4.05 1.56 5.83L0 24l6.9-1.8c1.73 1 3.73 1.56 5.8 1.56 6.54 0 11.58-5.04 11.58-11.58 0-3.3-1.1-6.44-3.06-8.7z" fill="#25D366"/>
                        <path d="M17.2 14.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.95 1.16c-.18.2-.36.22-.66.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.6.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.4-.05-.55-.05-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5-.18 0-.38 0-.58 0s-.5.07-.77.36c-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.06 2.85 1.2 3.05.13.2 2.07 3.3 5.02 4.63 2.95 1.33 2.95.89 3.48.83.53-.05 1.72-.7 1.97-1.37.25-.67.25-1.25.18-1.37-.07-.12-.27-.18-.57-.33z" fill="#fff"/>
                      </svg>
                      Discuter sur WhatsApp
                    </a>
                  </div>

                  {/* Social */}
                  <div className="mt-8 pt-6 border-t border-[#EAB308]/10">
                    <p className="text-xs text-[#111827]/40 uppercase tracking-wider mb-4">{t.contact.followUs}</p>
                    <div className="flex gap-3">
                      {[{ icon: Linkedin, href: '#' }, { icon: Twitter, href: '#' }].map(({ icon: Icon, href }, i) => (
                        <a key={i} href={href} className="w-9 h-9 bg-[#F9FAFB] hover:bg-[#EAB308]/20 border border-[#EAB308]/10 hover:border-[#EAB308]/40 rounded-lg flex items-center justify-center text-[#111827]/40 hover:text-[#EAB308] transition-all duration-300">
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Advantages */}
                <div className="card-glass p-8 mb-6">
                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-5">{t.contact.whyTitle}</h3>
                  <div className="space-y-4">
                    {advantages.map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#EAB308]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-[#EAB308]" />
                        </div>
                        <span className="text-[#111827]/60 text-sm">{t.contact.advantages[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <div className="card-glass p-6 border border-[#EAB308]/20 bg-gradient-to-br from-[#EAB308]/5 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-xs font-semibold">{t.contact.availableNow}</span>
                  </div>
                  <p className="text-[#111827]/50 text-sm">
                    {t.contact.availableText}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" ref={formRef}>
              <ScrollReveal direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-glass p-12 text-center border border-[#EAB308]/30 h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-[#EAB308]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-[#EAB308]" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-[#111827] mb-3">{t.contact.sentTitle}</h2>
                    <p className="text-[#111827]/55 max-w-md">
                      {t.contact.sentText}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 btn-outline text-sm"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <div className="card-glass p-8 md:p-10">
                    <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">{t.contact.formTitle}</h3>
                    <p className="text-[#111827]/40 text-sm mb-8">{t.contact.formSubtitle}</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.firstName}</label>
                          <input
                            ref={firstInputRef}
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Alexandre"
                            className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.lastName}</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Martin"
                            className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Email & Company */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.emailPro}</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="a.martin@entreprise.com"
                            className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.company}</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            placeholder={t.contact.companyPlaceholder}
                            className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="grid sm:grid-cols-1 gap-4">
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.phone}</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+33 6 00 00 00 00"
                            className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.budgetLabel}</label>
                        <div className="grid grid-cols-3 gap-3">
                          {['< 1 000 €', '1 000 – 3 000 €', '+ 3 000 €'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                              className={`py-2.5 rounded-xl text-xs font-medium border transition-all duration-300 ${
                                formData.budget === b
                                  ? 'bg-[#EAB308]/20 border-[#EAB308]/60 text-[#EAB308]'
                                  : 'bg-white border-[#EAB308]/15 text-[#111827]/50 hover:border-[#EAB308]/30'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.projectLabel}</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder={t.contact.projectPlaceholder}
                          className="w-full bg-white border border-[#EAB308]/15 focus:border-[#EAB308]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* RGPD */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="rgpd"
                          id="rgpd"
                          checked={formData.rgpd}
                          onChange={handleChange}
                          required
                          className="mt-0.5 w-4 h-4 accent-[#EAB308] cursor-pointer"
                        />
                        <label htmlFor="rgpd" className="text-xs text-[#111827]/40 leading-relaxed cursor-pointer">
                          {t.contact.rgpd}
                        </label>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary py-4 justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t.contact.sending}
                          </>
                        ) : (
                          <>
                            {t.contact.submit}
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}