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
          // COMO-Inspired Minimal Luxury Palette
          background: '#0F1416',
          paper: '#F7F4EE',
          ink: '#1A1A1A',
          muted: '#8A8A8A',
          accent: '#C4A572',
          border: '#000000',
        },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
      },
      maxWidth: {
        'container': '1280px',
        'content': '1040px',
        'narrow': '720px',
      },
      backdropBlur: {
        'luxury': '12px',
      },
      borderRadius: {
        'luxury': '2px',
      },
      borderWidth: {
        'hairline': '0.5px',
      },
    },
  },
  plugins: [],
};

export default config;
