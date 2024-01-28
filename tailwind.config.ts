import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero.jpg')",
        'avatar': "url('/avatar.jpeg')",
      },
      screens: {
        '768x1024': '400px',
      },
      fontFamily: {
        'levi': ['LeviReBrushed', 'sans-serif'],
        'Pacifico-Regular': ['Pacifico-Regular', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
export default config
