import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Morari-inspired neutral palette
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F2ED',
          300: '#EFEAE3',
          400: '#E8E1D8',
          500: '#E0D7CC',
        },
        taupe: {
          100: '#E8E3DD',
          200: '#D4CEC5',
          300: '#C0B8AD',
          400: '#ACA295',
          500: '#988C7D',
          600: '#847665',
        },
        stone: {
          50: '#F9F8F6',
          100: '#F0EDE8',
          200: '#E1DBD1',
          300: '#CFC6B8',
          400: '#BDB19F',
          500: '#A99B86',
          600: '#8A7D6A',
          700: '#6B5F4E',
          800: '#4C4132',
          900: '#2D2316',
        },
        ink: '#1A1814',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
