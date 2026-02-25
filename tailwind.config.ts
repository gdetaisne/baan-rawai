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
        background: '#F7F5F2',
        cream: '#F9F7F4',
        ink: '#101415',
        'ink-green': '#1F2A28',
        clay: '#D6C2B0',
        'dusty-blue': '#7A8A8F',
        coral: '#C96A4A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
