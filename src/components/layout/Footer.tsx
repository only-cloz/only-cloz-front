import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../../i18n'

const footerLinks = {
  pages: [
    { label: 'Accueil',   path: '/' },
    { label: 'Services',  path: '/services' },
    { label: 'À propos',  path: '/a-propos' },
    { label: 'Contact',   path: '/contact' },
  ],
  services: [
    'Génération de leads B2C',
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
  const { t } = useI18n()
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(180deg, #0B1A38 0%, #060E1F 100%)' }}
    >
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 16px)',
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.9), transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(37,99,235,0.20)' }}
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
              <span className="font-heading font-bold text-xl text-white">
                Only<span style={{ color: '#60A5FA' }}>Cloz</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-white/55">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2.5">
              {([Linkedin, Twitter, Instagram] as const).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.20)'
                    e.currentTarget.style.borderColor = 'rgba(96,165,250,0.55)'
                    e.currentTarget.style.color = '#93C5FD'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5 text-white">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link, i) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200 text-white/55"
                    onMouseEnter={e => e.currentTarget.style.color = '#93C5FD'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span
                      className="h-px transition-all duration-300 group-hover:w-5"
                      style={{ width: '12px', background: 'rgba(96,165,250,0.7)' }}
                    />
                    {t.footer.nav[i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5 text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {t.footer.services.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/55">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xs font-bold uppercase tracking-widest mb-5 text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3.5">
              {[
                { icon: Mail,   text: 'contact@onlycloz.com' },
                { icon: Phone,  text: '+33 1 23 45 67 89' },
                { icon: MapPin, text: 'Paris, France' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/55">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.14)', border: '1px solid rgba(96,165,250,0.25)' }}
                  >
                    <Icon size={13} style={{ color: '#93C5FD' }} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium group transition-colors duration-200"
              style={{ color: '#93C5FD' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color = '#93C5FD'}
            >
              {t.footer.contactCta}
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Only<span style={{ color: '#60A5FA' }}>Cloz</span>. {t.footer.rights}
            </p>
            <div className="flex items-center gap-5">
              {t.footer.legal.map((l, i) => (
                <span
                  key={i}
                  className="text-2xs cursor-pointer transition-colors duration-200 text-white/40"
                  onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.color = 'rgba(255,255,255,0.75)'}
                  onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.color = 'rgba(255,255,255,0.4)'}
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
