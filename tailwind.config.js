export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── OnlyCloz violet palette ── */
        brand: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',   /* violet-light — use for text/icons */
          500: '#7C3AED',   /* violet — primary CTAs */
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E1065',
        },
        /* ── Rose-lilas accent ── */
        rose: {
          400: '#F0ABFC',
          500: '#E879F9',
          600: '#D946EF',
        },
        /* ── Dark surfaces (violet-tinted) ── */
        dark: {
          700: '#150E2E',
          800: '#0D0820',
          900: '#05020F',
        },
        /* ── Gold (kept for testimonial stars) ── */
        gold: {
          400: '#fbd045',
          500: '#fbd75b',
        },
      },

      // fontFamily: {
      //   sans:    ['Inter', 'system-ui', 'sans-serif'],
      //   heading: ['Syne', 'Inter', 'sans-serif'],
      // },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },

      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },

      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      boxShadow: {
        'glow-sm':   '0 0 20px rgba(124,58,237,0.25), 0 0 50px rgba(124,58,237,0.08)',
        'glow-md':   '0 0 40px rgba(124,58,237,0.30), 0 0 90px rgba(124,58,237,0.10)',
        'glow-lg':   '0 0 60px rgba(124,58,237,0.35), 0 0 140px rgba(124,58,237,0.12)',
        'glow-rose': '0 0 30px rgba(240,171,252,0.20), 0 0 70px rgba(192,132,252,0.08)',
        'card':      '0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(167,139,250,0.06)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(167,139,250,0.10)',
      },

      backgroundImage: {
        'gradient-violet': 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
        'gradient-lilas':  'linear-gradient(135deg, #A78BFA 0%, #F0ABFC 100%)',
        'gradient-dark':   'linear-gradient(160deg, #150E2E 0%, #05020F 100%)',
      },

      animation: {
        'scan':       'scan 7s ease-in-out infinite',
        'marquee':    'marquee 28s linear infinite',
        'orb-1':      'orb-1 14s ease-in-out infinite',
        'orb-2':      'orb-2 18s ease-in-out infinite',
        'orb-3':      'orb-3 22s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.6s ease-out infinite',
        'shimmer':    'shimmer 1.8s linear infinite',
        'fade-up':    'fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
      },

      keyframes: {
        scan: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
}