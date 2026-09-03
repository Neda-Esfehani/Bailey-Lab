import type { Config } from 'tailwindcss';

/**
 * Design tokens for the Bailey Lab site.
 *
 * To re-skin the site, change the values here — every component reads from
 * these tokens rather than hard-coded hex values.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Page backgrounds
        paper: '#FAFCFA',
        canvas: '#EEF5F0', // off-white section background
        // Typography — dark charcoal, not pure black
        ink: {
          DEFAULT: '#0B1510',
          soft: '#294238',
          muted: '#53695D',
          faint: '#84978B',
        },
        line: {
          DEFAULT: '#D8E5DC',
          strong: '#BFD2C4',
        },
        // Single restrained scientific accent (deep teal)
        accent: {
          50: '#ECFDF3',
          100: '#D1FAE0',
          200: '#A7F3C4',
          300: '#6EE7A0',
          400: '#34D476',
          500: '#16A85A',
          600: '#087A45', // primary — high contrast on white
          700: '#065C34',
          800: '#064A2C',
          900: '#04351F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
      maxWidth: {
        content: '76rem', // 1216px main container
        prose: '68ch',
      },
      borderRadius: {
        card: '0.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 21, 16, 0.04), 0 8px 24px -12px rgba(11, 21, 16, 0.12)',
        'card-hover': '0 2px 4px rgba(11, 21, 16, 0.05), 0 16px 40px -16px rgba(11, 21, 16, 0.20)',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
