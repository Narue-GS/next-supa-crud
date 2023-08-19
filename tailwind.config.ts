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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm':'200px',
        'md':'600px'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        grow: {
          '0%' : { height: '0%', overflow: 'hidden' },
          '100%' : { height: '100%', overflow: 'hidden'},
        },
        open: {
          '0%' : { width: '0%', overflow: 'hidden' },
          '100%' : { width: '25%', overflow: 'hidden'},
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'create-task': 'grow 0.5s linear forwards',
        'open-modal': 'open 0.1s linear forwards'
      },
    },
  },
  plugins: [],
}
export default config
