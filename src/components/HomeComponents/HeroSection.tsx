import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Phone, Mail, Linkedin, ChevronRight } from 'lucide-react'
import { useI18n } from '../../i18n'

/* ── Types ── */
interface Lead {
  id: number
  name: string
  tag: string
  source: 'LinkedIn' | 'Email' | 'Phone'
  score: number
  time: string
  avatar: string
  hot: boolean
}

/* ── Mock live leads data ── */
const LEADS: Lead[] = [
  { id: 1, name: 'Thomas Dupont', tag: '', source: '', score: 94, time: 'à l\'instant', avatar: 'TD', hot: true },
  { id: 2, name: 'Marie Laurent', tag: '', source: '', score: 88, time: 'il y a 2 min', avatar: 'ML', hot: true },
  { id: 3, name: 'Pierre Morel', tag: '', source: '', score: 91, time: 'il y a 5 min', avatar: 'PM', hot: true },
  { id: 4, name: 'Sophie Chen', tag: '', source: '', score: 76, time: 'il y a 8 min', avatar: 'SC', hot: false },
]

const APPOINTMENTS = [
  { name: 'Julie Renaud', time: 'Aujourd\'hui à 15h00', avatar: 'JR' },
  { name: 'Lucas Martin', time: 'Aujourd\'hui à 17h45', avatar: 'LM' },
  { name: 'Éric Lefèvre', time: 'Demain 09h00', avatar: 'EL' },
  { name: 'Lise Michel', time: 'Demain 14h00', avatar: 'LM2' },
]

const SOURCE_ICON: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={11} />,
  Email: <Mail size={11} />,
  Phone: <Phone size={11} />,
}

const SOURCE_COLOR: Record<string, string> = {
  LinkedIn: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  Email: 'bg-[#EAB308]/10 text-[#EAB308] border-[#EAB308]/20',
  Phone: 'bg-green-500/10 text-green-600 border-green-500/20',
}

/* ── Sub-components ── */
function LeadRow({ lead, index }: { lead: Lead; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
      className="flex items-center gap-3 py-2.5 border-b border-[#EAB308]/10 last:border-0 group"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
        {lead.avatar.slice(0, 2)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[#111827] text-xs font-semibold truncate">{lead.name}</span>
          
        </div>
        <div className="text-[#111827]/40 text-[10px] truncate">{lead.tag}</div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-[9px] text-[#111827]/30">{lead.time}</span>
      </div>
    </motion.div>
  )
}

function AppointmentRow({ appt, index }: { appt: typeof APPOINTMENTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      className="flex items-center gap-3 py-2.5 border-b border-[#EAB308]/10 last:border-0"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FACC15]/60 to-[#CA8A04]/60 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
        {appt.avatar.slice(0, 2)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[#111827] text-xs font-semibold truncate">{appt.name}</div>
        <div className="text-[#111827]/40 text-[10px]">{appt.time}</div>
      </div>
      <div className="flex items-center gap-1.5">
        <Phone size={11} className="text-[#111827]/30" />
        <Mail size={11} className="text-[#111827]/30" />
      </div>
    </motion.div>
  )
}

/* ── Main component ── */
export default function HeroSection() {
  const { t } = useI18n()
  const [activeLeads, setActiveLeads] = useState(LEADS)
  const [leadsCount, setLeadsCount] = useState(57)

  useEffect(() => {
    const timer = setInterval(() => {
      setLeadsCount(n => n + 1)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center hero-gradient-vibrant overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-14 z-10 w-full">
        <div className="flex flex-col items-center">

          {/* ── Centered text content ── */}
          <div className="flex flex-col items-center text-center max-w-3xl">

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
                      <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.52L12 17.77l-5.85 3.08 1.12-6.52L2.54 9.37l6.54-.95L12 2.5z"
                    fill="url(#halfStar)"
                    stroke="#F59E0B"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#111827]/70 text-sm font-semibold">{t.hero.rating}</span>
              <span className="text-[#111827]/40 text-sm">{t.hero.ratingSuffix}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-heading font-bold text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-tight text-[#111827] mb-6"
            >
              {t.hero.headline1}
              <br />
              {t.hero.headline2}{' '}
              <span className="relative whitespace-nowrap">
                <span className="gradient-text">{t.hero.headlineHighlight}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#EAB308]/0 via-[#EAB308] to-[#FACC15]/0 origin-left"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-[#111827]/60 text-lg leading-relaxed mb-8"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <Link to="/contact" className="btn-primary py-4 px-8 text-sm w-full sm:w-auto justify-center">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline py-4 px-8 text-sm w-full sm:w-auto justify-center">
                {t.hero.ctaSecondary}
                <ChevronRight size={16} className="opacity-60" />
              </Link>
            </motion.div>
          </div>

          {/* ── Dashboard preview (centered below) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block mt-16 w-full max-w-3xl"
          >

            <div className="relative grid grid-cols-2 gap-3">
              <div className="card-glass p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">{t.hero.newLeads}</span>
                </div>
                <div className="space-y-0">
                  {activeLeads.map((lead, i) => (
                    <LeadRow key={lead.id} lead={lead} index={i} />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#111827]/30">
                  <span className="text-[#EAB308] font-semibold">↗ {leadsCount} {t.hero.monthLeads}</span>
                  <span>{t.hero.monthSuffix}</span>
                </div>
              </div>

              <div className="card-glass p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{t.hero.appointments}</span>
                </div>
                <div className="space-y-0">
                  {APPOINTMENTS.map((appt, i) => (
                    <AppointmentRow key={i} appt={appt} index={i} />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="mt-3 bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-green-600 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-green-600">{t.hero.rdvConfirmed}</div>
                      <div className="text-[10px] text-[#111827]/30">{t.hero.rdvAdded}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 card-glass px-4 py-3 rounded-2xl border-[#EAB308]/20 shadow-xl"
            >
              <div>
                <div className="text-[#111827] font-bold text-sm">{t.hero.roi}</div>
                <div className="text-[#111827]/35 text-[10px]">{t.hero.roiLabel}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -top-5 -right-4 card-glass px-4 py-3 rounded-2xl border-[#EAB308]/20 shadow-xl"
            >
              <div>
                <div className="text-[#111827] font-bold text-sm">{t.hero.leadsPerMonth}</div>
                <div className="text-[#111827]/35 text-[10px]">{t.hero.leadsPerMonthLabel}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}