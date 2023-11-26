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
        'background-light': '#1F1739',
        'background-box': '#A29FB3',
        'background-boxlight': '#CECAE3',
        'text-normal': '#A29FB3',
        'text-dark': '#110D1E',
      },
      maxWidth: {
        content: '75rem',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(90%) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(90%) rotate(-360deg)',
          },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        orbit1: 'orbit 12s linear infinite',
        orbit2: 'orbit 16s linear infinite',
        orbit3: 'orbit 20s linear infinite',
        orbit4: 'orbit 24s linear infinite',
        orbit5: 'orbit 28s linear infinite',
        orbit6: 'orbit 32s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
