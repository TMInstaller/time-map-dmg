import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background-theme': '#110D1E',
        'background-light': '#1F1739',
        'background-box': '#A29FB3',
        'background-boxlight': '#CECAE3',
        'text-normal': '#A29FB3',
      },
      maxWidth: {
        content: '75rem',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        orbit1: {
          '0%': {
            transform: 'rotate(0deg) translateX(84%) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(84%) rotate(-360deg)',
          },
        },
        orbit2: {
          '0%': {
            transform: 'rotate(60deg) translateX(84%) rotate(-60deg)',
          },
          '100%': {
            transform: 'rotate(420deg) translateX(84%) rotate(-420deg)',
          },
        },
        orbit3: {
          '0%': {
            transform: 'rotate(120deg) translateX(84%) rotate(-120deg)',
          },
          '100%': {
            transform: 'rotate(480deg) translateX(84%) rotate(-480deg)',
          },
        },
        orbit4: {
          '0%': {
            transform: 'rotate(180deg) translateX(84%) rotate(-180deg)',
          },
          '100%': {
            transform: 'rotate(540deg) translateX(84%) rotate(-540deg)',
          },
        },
        orbit5: {
          '0%': {
            transform: 'rotate(240deg) translateX(84%) rotate(-240deg)',
          },
          '100%': {
            transform: 'rotate(600deg) translateX(84%) rotate(-600deg)',
          },
        },
        orbit6: {
          '0%': {
            transform: 'rotate(300deg) translateX(84%) rotate(-300deg)',
          },
          '100%': {
            transform: 'rotate(660deg) translateX(84%) rotate(-660deg)',
          },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        orbit1: 'orbit1 16s linear infinite',
        orbit2: 'orbit2 16s linear infinite',
        orbit3: 'orbit3 16s linear infinite',
        orbit4: 'orbit4 16s linear infinite',
        orbit5: 'orbit5 16s linear infinite',
        orbit6: 'orbit6 16s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
