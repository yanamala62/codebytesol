import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#E6FFFA',
          100: '#B2F5EA',
          300: '#4FD1C5',
          500: '#14B8A6',
          700: '#0F766E',
          900: '#134E4A',
        },
        accent: {
          300: '#C4B5FD',
          500: '#8B5CF6',
          700: '#6D28D9',
        },
        plasma: {
          500: '#EC4899',
          700: '#BE185D',
        },
        bg: {
          primary:   '#07090D',
          secondary: '#0F1218',
          tertiary:  '#161A23',
        },
        surface: '#1E222C',
        border:  '#2A2F3A',
        text: {
          primary: '#F5F7FA',
          muted:   '#9BA3B4',
          faint:   '#5C6473',
        },
      },
      backgroundImage: {
        'gradient-aurora': 'var(--gradient-aurora)',
        'gradient-nebula': 'var(--gradient-nebula)',
        'gradient-glass': 'var(--gradient-glass)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
