/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Safelist critical responsive classes to prevent purging
  safelist: [
    'hidden',
    'block',
    'flex',
    'grid',
    'sm:block',
    'sm:hidden',
    'sm:flex',
    'md:block',
    'md:hidden',
    'md:flex',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'lg:block',
    'lg:hidden',
    'lg:flex',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
  ],
  theme: {
    extend: {
      colors: {
        // Professional medical palette inspired by Oak Street Health
        primary: {
          50: '#EFF8FF',
          100: '#DEF0FF',
          200: '#B6E3FF',
          300: '#75CEFF',
          400: '#2CB5FF',
          500: '#0099F7',
          600: '#007AD4',
          700: '#0061AB',
          800: '#00528D',
          900: '#064574',
          950: '#042C4D',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '1.15' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
