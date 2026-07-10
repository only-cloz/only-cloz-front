import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Linkedin, Twitter, Send,
  CheckCircle2, Clock, MessageSquare, ArrowRight, Zap, Users, Globe2
} from 'lucide-react'
import SectionTitle from '../components/layout/SectionTitle'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useI18n } from '../i18n'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@onlycloz.com', href: 'mailto:contact@onlycloz.com' },
  { icon: Phone, label: 'Téléphone', value: '+33 1 23 45 67 89', href: 'tel:+33123456789' },
  { icon: MapPin, label: 'Adresse', value: '75 Rue du Commerce, 75015 Paris', href: '#' },
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

  return (
    <div className="overflow-hidden bg-white">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 hero-gradient-vibrant">
        <div className="max-w-7xl mx-auto px-6 section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-1.5 rounded-full mb-6">
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
      <section className="py-24">
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
                        <div className="w-10 h-10 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C3AED]/20 transition-colors">
                          <Icon size={16} className="text-[#7C3AED]" />
                        </div>
                        <div>
                          <div className="text-xs text-[#111827]/40 uppercase tracking-wider mb-0.5">{t.contact.infoLabels[i]}</div>
                          <div className="text-sm text-[#111827]/70 group-hover:text-[#111827] transition-colors">{value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="mt-8 pt-6 border-t border-[#7C3AED]/10">
                    <p className="text-xs text-[#111827]/40 uppercase tracking-wider mb-4">{t.contact.followUs}</p>
                    <div className="flex gap-3">
                      {[{ icon: Linkedin, href: '#' }, { icon: Twitter, href: '#' }].map(({ icon: Icon, href }, i) => (
                        <a key={i} href={href} className="w-9 h-9 bg-[#F9FAFB] hover:bg-[#7C3AED]/20 border border-[#7C3AED]/10 hover:border-[#7C3AED]/40 rounded-lg flex items-center justify-center text-[#111827]/40 hover:text-[#7C3AED] transition-all duration-300">
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
                        <div className="w-8 h-8 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-[#7C3AED]" />
                        </div>
                        <span className="text-[#111827]/60 text-sm">{t.contact.advantages[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <div className="card-glass p-6 border border-[#7C3AED]/20 bg-gradient-to-br from-[#7C3AED]/5 to-transparent">
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
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-glass p-12 text-center border border-[#7C3AED]/30 h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-[#7C3AED]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-[#7C3AED]" />
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
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Alexandre"
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
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
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
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
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
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
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Phone & Service */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.phone}</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+33 6 00 00 00 00"
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#111827]/50 uppercase tracking-wider mb-2">{t.contact.serviceWanted}</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-white">{t.contact.chooseService}</option>
                            {offers.map((o, i) => (
                              <option key={i} value={t.contact.offers[i].title} className="bg-white">{t.contact.offers[i].title}</option>
                            ))}
                          </select>
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
                                  ? 'bg-[#7C3AED]/20 border-[#7C3AED]/60 text-[#7C3AED]'
                                  : 'bg-white border-[#7C3AED]/15 text-[#111827]/50 hover:border-[#7C3AED]/30'
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
                          className="w-full bg-white border border-[#7C3AED]/15 focus:border-[#7C3AED]/60 rounded-xl px-4 py-3 text-[#111827] text-sm placeholder-[#111827]/25 outline-none transition-all duration-300 resize-none"
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
                          className="mt-0.5 w-4 h-4 accent-[#7C3AED] cursor-pointer"
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

      {/* ── SERVICES GRID ── */}
      <section className="py-16 border-t border-[#7C3AED]/10">
        <div className="max-w-7xl mx-auto px-6 section-padding">
          <p className="text-center text-[#111827]/30 text-xs uppercase tracking-widest mb-10">{t.contact.domainsLabel}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {offers.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="card-glass p-4 text-center group hover:border-[#7C3AED]/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#7C3AED]/20 transition-colors">
                    <Icon size={18} className="text-[#7C3AED]" />
                  </div>
                  <div className="text-[#111827] text-xs font-semibold mb-1">{t.contact.offers[i].title}</div>
                  <div className="text-[#111827]/40 text-[11px]">{t.contact.offers[i].desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}