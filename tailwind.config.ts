import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#013369',
          light: '#1B48E0'
        },
        gray: {
          dark: '#ccc',
          mid: '#eee',
          light: '#fafafa'
        },
        textColor: '#333',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config

