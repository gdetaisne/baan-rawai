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
        // Ocean blue palette
        background: '#FFFFFF',
        surface:    '#FFFFFF',
        paper:      '#FFFFFF',
        ink:        '#1A2E3D',
        muted:      '#5A7080',
        accent:     '#2E6B8A',
        clay:       '#C96F4A',
        border:     '#D8E4EA',
        'border-dark': '#B8CDD6',
      },
      fontFamily: {
        display: ['"Ade Display"', 'Georgia', 'serif'],
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
