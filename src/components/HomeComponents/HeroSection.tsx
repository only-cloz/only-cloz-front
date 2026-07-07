import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Phone, Mail, Linkedin, ChevronRight } from 'lucide-react'

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
  Email: 'bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20',
  Phone: 'bg-green-500/10 text-green-600 border-green-500/20',
}

/* ── Sub-components ── */
function LeadRow({ lead, index }: { lead: Lead; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
      className="flex items-center gap-3 py-2.5 border-b border-[#7C3AED]/10 last:border-0 group"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
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
      className="flex items-center gap-3 py-2.5 border-b border-[#7C3AED]/10 last:border-0"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6]/60 to-[#6D28D9]/60 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
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
  const [activeLeads, setActiveLeads] = useState(LEADS)
  const [leadsCount, setLeadsCount] = useState(57)

  useEffect(() => {
    const timer = setInterval(() => {
      setLeadsCount(n => n + 1)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center hero-gradient-vibrant overflow-hidden">
      {/* Animated background orbs */}
      <div className="animated-orb" />
      <div className="shimmer-overlay" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7C3AED]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -40, 40, -30, 30, 0],
              x: [null, 30, -30, 20, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 z-10 w-full">
        <div className="gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          
           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex justify-center items-center gap-6 mb-16"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-[#111827]/60 text-sm font-medium">4,9/5</span>
                <span className="text-[#111827]/30 text-sm">· 120+ clients</span>
              </div>
              
            </motion.div>
          <div>
            <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#7C3AED] uppercase tracking-widest bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-4 py-2 rounded-full mb-7"
            >
              <span className="text-center w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-pulse" />
              Agence B2C · Génération de leads qualifiés
            </motion.div>
           </div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-center font-heading font-bold text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.06] tracking-tight text-[#111827] mb-6"
            >
              Fini la prospection, vous avez juste 
              <br />
              commercial,{' '}
              <span className="relative whitespace-nowrap">
                <span className="gradient-text">à vendre</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className=" absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED] to-[#8B5CF6]/0 origin-left"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mx-auto max-w-xl text-center text-[#111827]/60 text-lg leading-relaxed mb-8"
            >
              Only Cloz livre des leads B2C ultra-qualifiés, 100% conformes RGPD.
              Nous transformons votre prospection en moteur de croissance prévisible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center items-center gap-3 mb-10"
            >
              <Link to="/contact" className="btn-primary py-4 px-8 text-sm glow-brand">
                Obtenir mes premiers leads
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline py-4 px-8 text-sm">
                Voir nos services
                <ChevronRight size={16} className="opacity-60" />
              </Link>
            </motion.div>

           
          </div>

          {/* ── RIGHT: Live dashboard widget ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-8 bg-[#7C3AED]/8 rounded-3xl blur-2xl" />

            <div className="relative grid grid-cols-2 gap-3">
              <div className="card-glass p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Nouveaux leads</span>
                </div>
                <div className="space-y-0">
                  {activeLeads.map((lead, i) => (
                    <LeadRow key={lead.id} lead={lead} index={i} />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#111827]/30">
                  <span className="text-[#7C3AED] font-semibold">↗ {leadsCount} nouveaux leads</span>
                  <span>ce mois</span>
                </div>
              </div>

              <div className="card-glass p-4 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Rendez-vous</span>
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
                      <div className="text-[11px] font-semibold text-green-600">RDV confirmé</div>
                      <div className="text-[10px] text-[#111827]/30">Ajouté à votre agenda</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 card-glass px-4 py-3 rounded-2xl border-[#7C3AED]/20 shadow-xl"
            >
              <div>
                <div className="text-[#111827] font-bold text-sm">x3.5 ROI</div>
                <div className="text-[#111827]/35 text-[10px]">moyen client Q1</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -top-5 -right-4 card-glass px-4 py-3 rounded-2xl border-[#7C3AED]/20 shadow-xl"
            >
              <div>
                <div className="text-[#111827] font-bold text-sm">500+ leads/mois</div>
                <div className="text-[#111827]/35 text-[10px]">livrés en 48h</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="scan-line" />
    </section>
  )
}