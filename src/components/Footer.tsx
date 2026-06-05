import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  pages: [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Génération de leads B2B' },
    { label: 'Prospection outbound' },
    { label: 'Campagnes email' },
    { label: 'LinkedIn Outreach' },
    { label: 'Audit RGPD' },
  ],
  legal: [
    { label: 'Mentions légales' },
    { label: 'Politique de confidentialité' },
    { label: 'CGV' },
    { label: 'RGPD' },
  ]
}

export default function Footer() {
  return (
    <footer className="relative bg-dark-800 border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Zap size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Only<span className="text-brand-400">Cloz</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              L'agence de prospection B2B qui transforme votre pipeline commercial. Leads qualifiés, conformes RGPD, livrés avec précision.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/40 flex items-center justify-center text-white/50 hover:text-brand-400 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white/80 mb-5 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-brand-400 group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white/80 mb-5 uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((s, i) => (
                <li key={i}>
                  <span className="text-sm text-white/50 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-brand-500 rounded-full" />
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-white/80 mb-5 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'contact@onlycloz.com' },
                { icon: Phone, text: '+33 1 23 45 67 89' },
                { icon: MapPin, text: 'Paris, France' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-brand-400" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium group"
            >
              Prendre contact
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Only<span className="text-brand-400/70">Cloz</span>. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((l, i) => (
                <span key={i} className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer">
                  {l.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
