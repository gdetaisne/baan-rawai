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
        // Tropical sanctuary palette
        background: '#FAF9F6',   // Soft Coconut White
        surface: '#FFFFFF',      // Surface white
        paper: '#F5EFE6',        // Warm Sand
        ink: '#1F3D35',          // Deep Palm Green
        muted: '#6E7C76',        // Soft desaturated green-gray
        accent: '#3E7C7A',       // Ocean Teal
        clay: '#C96F4A',         // Sunset Clay
        border: '#E6DDD0',       // Warm sand border
        'border-dark': '#CBBEAA', // Darker sand border
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight:   '-0.02em',
        normal:  '0',
        wide:    '0.05em',
        wider:   '0.12em',
        widest:  '0.22em',
      },
      maxWidth: {
        container: '1360px',
        content:   '1100px',
        narrow:    '740px',
        text:      '620px',
      },
      borderRadius: {
        luxury: '1px',
      },
      borderWidth: {
        hairline: '0.5px',
      },
    },
  },
  plugins: [],
};

export default config;
