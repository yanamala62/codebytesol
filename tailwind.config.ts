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
          50:  '#EFF6FF',
          100: '#DBEAFE',
          300: '#93C5FD',
          500: '#2563EB',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        accent: {
          50:  '#FFF1F0',
          100: '#FFE4E1',
          500: '#FF6F61',
          600: '#E65B50',
        },
        bg: {
          primary:   '#F3F4F6',
          secondary: '#F9FAFB',
          tertiary:  '#FFFFFF',
        },
        surface: '#FFFFFF',
        border:  '#E5E7EB',
        text: {
          primary: '#111827',
          muted:   '#6B7280',
          faint:   '#9CA3AF',
        },
        hover: {
          bg: '#EFF6FF',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger:  '#EF4444',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF6F61 0%, #E65B50 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'gradient-nebula': 'radial-gradient(circle at top, #DBEAFE 0%, #F3F4F6 100%)',
      },
      boxShadow: {
        'soft': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        lg: '12px',
        md: '10px',
        sm: '8px',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
