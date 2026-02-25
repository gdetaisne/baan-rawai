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
        // 2025 Modern Palette - Vibrant & Contemporary
        turquoise: '#00BFA5',
        coral: '#FF6B6B',
        gold: '#FFC43D',
        deep: '#121926',
        paper: '#FFFFFF',
        cream: '#FAF8F6',
        ink: '#1A1A1A',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['Lora', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
