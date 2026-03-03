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
        // Tropical sanctuary palette (locked)
        background: '#FAF9F6',
        surface: '#FFFFFF',
        paper: '#F5EFE6',
        ink: '#1F3D35',
        muted: '#6E7C76',
        accent: '#3E7C7A',
        clay: '#C96F4A',
        border: '#E6DDD0',
        'border-dark': '#CBBEAA',
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
