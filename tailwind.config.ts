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
        // Vibrant tropical palette
        ocean: {
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#75BDD5',
          400: '#47A7C7',
          500: '#0891B9', // Main ocean blue
          600: '#067494',
          700: '#04576F',
          800: '#023A4A',
          900: '#011D25',
        },
        sand: {
          50: '#FFFEF9',
          100: '#FEFDF3',
          200: '#FDFBE7',
          300: '#FCF9DB',
          400: '#FBF7CF',
          500: '#FAF5C3', // Warm sand
        },
        sunset: {
          400: '#FF6B6B', // Coral red
          500: '#FF8E53', // Sunset orange
          600: '#FFB347', // Warm peach
        },
        palm: '#2D5F4C', // Deep tropical green
        sky: '#87CEEB', // Bright sky blue
        dark: '#1A1A2E', // Deep navy
      },
      fontFamily: {
        display: ['var(--font-display)', 'DM Serif Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        fun: ['var(--font-fun)', 'Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0891B9 0%, #47A7C7 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF8E53 0%, #FFB347 100%)',
        'gradient-tropical': 'linear-gradient(135deg, #0891B9 0%, #2D5F4C 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'hard': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
