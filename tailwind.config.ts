import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0D1B2A',
        blue:    '#0057A8',
        'blue-dark': '#003D7A',
        'blue-light': '#EEF4FB',
        amber:   '#F7A800',
        'amber-dark': '#C98A00',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body:    ['var(--font-opensans)',   'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
