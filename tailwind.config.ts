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
        paper: '#FFFFFF',
        canvas: '#F7F7F5', // off-white section background
        // Typography — dark charcoal, not pure black
        ink: {
          DEFAULT: '#16191D',
          soft: '#3F464E',
          muted: '#69717B',
          faint: '#9AA1AA',
        },
        line: {
          DEFAULT: '#E5E5E1',
          strong: '#D3D3CE',
        },
        // Single restrained scientific accent (deep teal)
        accent: {
          50: '#EFF7F7',
          100: '#D6EBEB',
          200: '#AED7D8',
          300: '#7BBBBD',
          400: '#42979B',
          500: '#177B81',
          600: '#0F6169', // primary — 5.9:1 on white
          700: '#0C4D54',
          800: '#0A3D43',
          900: '#082F34',
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
        card: '0 1px 2px rgba(22, 25, 29, 0.04), 0 8px 24px -12px rgba(22, 25, 29, 0.12)',
        'card-hover': '0 2px 4px rgba(22, 25, 29, 0.05), 0 16px 40px -16px rgba(22, 25, 29, 0.20)',
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
