import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, ChevronDown, Search, MousePointerClick , Megaphone, Globe , Palette ,FileText,Building2, BriefcaseBusiness,Store, Rocket,PackageCheck,Sparkles,TrendingUp, Crown, Star , FileSearch } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Navigation structure ──────────────────────────────────── */
const navLinks = [
 {
  path: "/services",
  label: "Nos services",
  megaMenu: [
    {
      title: "Acquisition",
      items: [
        {
          label: "SEO",
          path: "/services/seo",
          icon: Search,
          description: "Référencement naturel"
        },
        {
          label: "SEA",
          path: "/services/sea",
          icon: MousePointerClick,
          description: "Publicité Google Ads"
        },
        {
          label: "Social Ads",
          path: "/services/social-ads",
          icon: Megaphone,
          description: "Publicité sur les réseaux sociaux"
        }
      ]
    },
    {
      title: "Création",
      items: [
        {
          label: "Création site web",
          path: "/services/creation-site",
          icon: Globe,
          description: "Sites modernes et performants"
        },
        {
          label: "Webdesign UX/UI",
          path: "/services/webdesign",
          icon: Palette,
          description: "Interfaces intuitives"
        },
        {
          label: "Content Marketing",
          path: "/services/content",
          icon: FileText,
          description: "Création de contenu"
        }
      ]
    }
  ]
},

  {
  path: "/secteur-activites",
  label: "Secteur d'activité",
  dropdown: [
     {
      label: "Secteur d'activité",
      path: "/secteur-activites",
      icon: Building2,
      description: "Découvrez nos secteurs d'intervention"
    },
    {
      label: "Entreprises",
      path: "/secteur-activites/entreprises",
      icon: BriefcaseBusiness,
      description: "Solutions digitales pour les entreprises"
    },
    {
      label: "Commerçants",
      path: "/secteur-activites/commercants",
       icon: Store,
      description: "Développez votre activité locale"
    },
    {
      label: "Startups",
      path: "/secteur-activites/startups",
       icon: Rocket,
      description: "Accélérez votre croissance"
    }
  ],
},

 {
  path: "/offres",
  label: "Nos offres",
  dropdown: [
    { 
      label: "Découvrir nos offres", 
      path: "/offres",
      icon: PackageCheck,
      description: "Découvrez toutes nos solutions digitales"
    },
     {
      label: "Pack Starter",
      path: "/offres/starter",
      icon: Sparkles,
      description: "Pour démarrer rapidement"
    },
    {
      label: "Pack Business",
      path: "/offres/business",
      icon: TrendingUp,
      description: "Développez votre visibilité"
    },
    {
      label: "Pack Premium",
      path: "/offres/premium",
      icon: Crown,
      description: "La solution complète"
    }
  ],
},

  {
    path: "/client",
    label: "Clients",
    dropdown: [
       {
      label: "Nos réalisations",
      path: "/client/realisations",
      icon: Building2,
      description: "Découvrez nos projets"
    },
    {
      label: "Avis clients",
      path: "/client/avis",
      icon: Star,
      description: "Ils nous font confiance"
    },
    {
      label: "Études de cas",
      path: "/client/cas",
      icon: FileSearch,
      description: "Des résultats concrets"
    }
    ],
  },

  
  /*{
    path: '/decouvrir',
    label: 'Nous découvrir',
    
    dropdown: [
      { label: 'Notre ADN',        path: '/decouvrir/adn' },
      { label: 'Nos engagements',  path: '/decouvrir/engagements' },
      { label: 'Nos récompenses',  path: '/decouvrir/recompenses' },
      { label: 'Notre histoire',   path: '/decouvrir/histoire' },
      { label: 'Nous rejoindre',   path: '/contact' },
    ],
  },*/
]

/* ─── Mega-menu ─────────────────────────────────────────────── */
function MegaMenu({ columns }: { 
 columns: {
   title:string;
   items:{
     label:string;
     path:string;
     description?:string;
     icon?: React.ElementType;
   }[];
 }[]
})  {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0,  scale: 1 }}
      exit={{    opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="mega-glass absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl overflow-hidden  min-w-[560px]"
    >
      {/* Top accent line */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />

      <div className="flex p-5 gap-2">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex-1 ${i < columns.length - 1 ? 'border-r pr-5 mr-3' : ''}`}
            style={{ borderColor: 'rgba(124,58,237,0.15)' }}
          >
            <p className="text-2xs font-bold uppercase tracking-widest mb-3 px-3" style={{ color: 'var(--oc-violet-light)' }}>
              {col.title}
            </p>
            <ul className="flex flex-col gap-1">
      {col.items.map((item) => {

        const Icon = item.icon;

        return (
          <li key={item.path}>
            <Link
              to={item.path}
              className="
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                text-sm
                transition-all
              "
              style={{ color: 'var(--oc-text-muted)' }}

              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--oc-text)';
                e.currentTarget.style.background = 'rgba(124,58,237,0.10)';
              }}

              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--oc-text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
          >

          {Icon && (
            <div
              className="
                w-9
                h-9
                rounded-lg
                flex
                items-center
                justify-center
              "
              style={{
                background:'rgba(124,58,237,0.12)',
                color:'var(--oc-violet-light)'
              }}
            >
              <Icon size={18}/>
            </div>
          )}

          <div>
            <p className="font-medium">
              {item.label}
            </p>

            {item.description && (
              <span 
                className="text-xs"
                style={{
                  color:'var(--oc-text-muted)'
                }}
              >
                {item.description}
              </span>
            )}

          </div>

        </Link>
      </li>
    );
  })}
</ul>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Simple dropdown ───────────────────────────────────────── */
/* ─── Simple dropdown ───────────────────────────────────────── */
function Dropdown({ 
  items 
}: { 
  items: { 
    label: string;
    path: string;
    description?: string;
    icon?: React.ElementType;
  }[] 
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="mega-glass absolute top-full left-1/2 -translate-x-1/2 mt-5 rounded-3xl overflow-hidden min-w-[300px]"
    >

      <div 
        className="h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' 
        }}
      />

      <ul className="p-6 flex gap-4 items-stretch">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <li key={item.path}>

              <Link
                to={item.path}
                className="
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-xl
                  transition-all
                "

                style={{ 
                  color:'var(--oc-text-muted)' 
                }}

                onMouseEnter={e=>{
                  e.currentTarget.style.background='rgba(124,58,237,0.10)';
                  e.currentTarget.style.color='var(--oc-text)';
                }}

                onMouseLeave={e=>{
                  e.currentTarget.style.background='transparent';
                  e.currentTarget.style.color='var(--oc-text-muted)';
                }}
              >

                {Icon && (
                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                    "

                    style={{
                      background:'rgba(124,58,237,0.12)',
                      color:'var(--oc-violet-light)'
                    }}
                  >
                    <Icon size={18}/>
                  </div>
                )}


                <div>

                  <p className="font-medium">
                    {item.label}
                  </p>


                  {item.description && (
                    <span 
                      className="text-xs"
                      style={{
                        color:'var(--oc-text-muted)'
                      }}
                    >
                      {item.description}
                    </span>
                  )}

                </div>


              </Link>

            </li>
          )

        })}

      </ul>

    </motion.div>
  )
}

/* ─── Desktop NavItem ───────────────────────────────────────── */
function NavItem({ link, isActive , setMenuOpen}: { link: typeof navLinks[0]; isActive: boolean ; setMenuOpen: (value:boolean)=>void; }) {
  const [open, setOpen]   = useState(false)
  const timerRef          = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasChildren       = !!(link.megaMenu || link.dropdown)

  const open_  = () => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(true) 
    setMenuOpen(true)}                      
  const close_ = () => { timerRef.current = setTimeout(() => {setOpen(false)} , 160) }
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <div className="relative" onMouseEnter={open_} onMouseLeave={close_}>
      <button
        type="button"
        className="relative flex items-center gap-1 px-4 py-2 rounded-center text-base font-medium transition-all duration-250"
        style={{ color: isActive ? 'var(--oc-text)' : 'var(--oc-text-muted)' }}
        onMouseEnter={e => { 
          if (!isActive) e.currentTarget.style.color = 'var(--oc-text)' 
        }}
        onMouseLeave={e => { 
          if (!isActive) e.currentTarget.style.color = 'var(--oc-text-muted)' 
        }}
      >

      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'rgba(124,58,purple,0.12)',
            border: '1px solid rgba(124,58,237,0.22)' 
          }}
          transition={{ 
            type: 'spring',
            bounce: 0.25,
            duration: 0.5
          }}
        />
      )}

        <span className="relative z-10">
          {link.label}
        </span>

        {hasChildren && (
          <motion.span
            className="relative z-10"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={13}/>
          </motion.span>
        )}

      </button>

      <AnimatePresence>
        {open && hasChildren && (
          link.megaMenu
            ? <MegaMenu columns={link.megaMenu} />
            : <Dropdown items={link.dropdown!} />
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Mobile NavItem (accordéon) ───────────────────────────── */
function MobileNavItem({ link, isActive, index }: { link: typeof navLinks[0]; isActive: boolean; index: number }) {
  const [open, setOpen] = useState(false)
  const hasChildren     = !!(link.megaMenu || link.dropdown)

  const allSubItems = link.megaMenu
    ? link.megaMenu.flatMap(col => [{ label: col.title, path: '#', isTitle: true }, ...col.items])
    : (link.dropdown ?? [])

  const activeStyle: React.CSSProperties = {
    background: 'rgba(124,58,237,0.12)',
    border: '1px solid rgba(124,58,237,0.25)',
    color: 'var(--oc-violet-light)',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.055 }}
    >
      {hasChildren ? (
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all"
            style={isActive ? activeStyle : { color: 'var(--oc-text-muted)' }}
          >
            <span>{link.label}</span>
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{    height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="pl-4 pb-2 flex flex-col gap-0.5 mt-1">
                  {allSubItems.map((item, i) =>
                    (item as any).isTitle ? (
                      <p key={i} className="text-2xs font-bold uppercase tracking-widest px-4 pt-3 pb-1"
                        style={{ color: 'var(--oc-violet-light)' }}>
                        {item.label}
                      </p>
                    ) : (
                      <Link key={item.path} to={item.path}
                        className="block px-4 py-2.5 rounded-xl text-sm transition-all"
                        style={{ color: 'var(--oc-text-muted)' }}
                        onClick={() => setOpen(false)}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--oc-text)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--oc-text-muted)'}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link to={link.path}
          className="block px-4 py-3.5 rounded-xl text-base font-medium transition-all"
          style={isActive ? activeStyle : { color: 'var(--oc-text-muted)' }}
        >
          {link.label}
        </Link>
      )}
    </motion.div>
  )
}

/* ─── Navbar principale ─────────────────────────────────────── */
export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

   // Etat pour le flou derrière le mega menu
  const [menuOpen, setMenuOpen] = useState(false)

  const location                = useLocation()
  const mobileRef               = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Only Cloz"
              className="w-15 h-14 rounded-xl object-contain transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-sm"
            />
            <span className="font-heading font-bold text-xl tracking-tight" style={{ color: 'var(--oc-text)' }}>
              Only<span style={{ color: 'var(--oc-violet-light)' }}>Cloz</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5"  onMouseLeave={() => setMenuOpen(false)}>
            {navLinks.map(link => (
              <NavItem
                key={link.path}
                link={link}
                isActive={link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)}
                setMenuOpen={setMenuOpen}
              />
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">
              Démarrer un projet
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none active:scale-90"
            style={{
              background: 'rgba(124,58,237,0.10)',
              border: '1px solid rgba(124,58,237,0.20)',
              color: 'var(--oc-text-muted)',
            }}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: 90,  opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="open"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Background blur quand mega menu ouvert */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-40
        bg-black/20
        backdrop-blur-sm
        hidden
        lg:block
      "
    />
  )}
</AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(5,2,15,0.70)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{    opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm lg:hidden flex flex-col"
            style={{ background: 'var(--oc-surface-1)', borderLeft: '1px solid rgba(124,58,237,0.18)' }}
          >
            {/* Top accent */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)' }} />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid rgba(124,58,237,0.10)' }}
            >
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                <img
                  src="/logo.png"
                  alt="Only Cloz"
                  className="w-9 h-9 rounded-lg object-contain"
                />
                <span className="font-heading font-bold text-lg" style={{ color: 'var(--oc-text)' }}>
                  Only<span style={{ color: 'var(--oc-violet-light)' }}>Cloz</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ color: 'var(--oc-text-muted)', background: 'rgba(124,58,237,0.08)' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <MobileNavItem
                  key={link.path}
                  link={link}
                  isActive={link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)}
                  index={i}
                />
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="px-4 pb-6 pt-3"
              style={{ borderTop: '1px solid rgba(124,58,237,0.10)' }}
            >
              <Link
                to="/contact"
                className="btn-primary w-full justify-center text-sm py-3.5"
                onClick={() => setIsOpen(false)}
              >
                Démarrer un projet
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}