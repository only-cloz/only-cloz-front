import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  pages: [
    { label: 'Accueil',   path: '/' },
    { label: 'Services',  path: '/services' },
    { label: 'À propos',  path: '/a-propos' },
    { label: 'Contact',   path: '/contact' },
  ],
  services: [
    'Génération de leads B2B',
    'Prospection outbound',
    'Campagnes email',
    'LinkedIn Outreach',
    'Audit RGPD',
  ],
  legal: [
    'Mentions légales',
    'Politique de confidentialité',
    'CGV',
    'RGPD',
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--oc-surface-1)', borderTop: '1px solid rgba(124,58,237,0.12)' }}>
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)' }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.05)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand block */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit group">
              <img
                src="/logo.png"
                alt="Only Cloz"
                className="w-10 h-10 rounded-xl object-contain transition-all duration-300 group-hover:scale-110"
              />
              <span className="font-heading font-bold text-xl" style={{ color: 'var(--oc-text)' }}>
                Only<span style={{ color: 'var(--oc-violet-light)' }}>Cloz</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--oc-text-muted)' }}>
              L'agence de prospection B2B qui transforme votre pipeline commercial. Leads qualifiés, conformes RGPD, livrés avec précision.
            </p>

            <div className="flex items-center gap-2.5">
              {([Linkedin, Twitter, Instagram] as const).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(124,58,237,0.08)',
                    border: '1px solid rgba(124,58,237,0.18)',
                    color: 'var(--oc-text-faint)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(124,58,237,0.20)'
                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.40)'
                    e.currentTarget.style.color = 'var(--oc-violet-light)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(124,58,237,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'
                    e.currentTarget.style.color = 'var(--oc-text-faint)'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--oc-text)' }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'var(--oc-text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--oc-violet-light)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--oc-text-muted)'}
                  >
                    <span
                      className="h-px transition-all duration-300 group-hover:w-5"
                      style={{ width: '12px', background: 'var(--oc-border-bright)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--oc-text)' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--oc-text-muted)' }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--oc-violet)' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--oc-text)' }}>
              Contact
            </h3>
            <ul className="space-y-3.5">
              {[
                { icon: Mail,   text: 'contact@onlycloz.com' },
                { icon: Phone,  text: '+33 1 23 45 67 89' },
                { icon: MapPin, text: 'Paris, France' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--oc-text-muted)' }}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.18)' }}
                  >
                    <Icon size={13} style={{ color: 'var(--oc-violet-light)' }} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium group transition-colors duration-200"
              style={{ color: 'var(--oc-violet-light)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--oc-rose)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--oc-violet-light)'}
            >
              Prendre contact
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(124,58,237,0.10)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: 'var(--oc-text-faint)' }}>
              © {new Date().getFullYear()} Only<span style={{ color: 'var(--oc-violet-light)' }}>Cloz</span>. Tous droits réservés.
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.legal.map((l, i) => (
                <span
                  key={i}
                  className="text-2xs cursor-pointer transition-colors duration-200"
                  style={{ color: 'var(--oc-text-faint)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.color = 'var(--oc-text-muted)'}
                  onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.color = 'var(--oc-text-faint)'}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}