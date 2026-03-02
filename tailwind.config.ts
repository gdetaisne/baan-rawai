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
        // Mer d'Andaman — Light palette with Thai sea blue accent
        background: '#FAFAFA',   // White main background
        surface:    '#FFFFFF',   // Pure white surfaces
        paper:      '#F5F5F3',   // Stone white — alternate sections
        ink:        '#1A1916',   // Near-black — primary text
        muted:      '#7A766E',   // Warm gray — secondary text
        accent:     '#1E7A8C',   // Andaman Sea teal — CTAs, labels
        border:     '#DDE8EA',   // Light sea-gray border
        'border-dark': '#B8CED3', // Stronger border
      },
      fontFamily: {
        display: ['Cormorant', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
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
