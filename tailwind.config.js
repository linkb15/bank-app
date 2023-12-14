/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'hsla(66, 98%, 77%, 1)',
        },
        mint: {
          DEFAULT: 'hsla(176, 24%, 76%, 1)',
        },
        purple: {
          DEFAULT: 'hsla(269, 15%, 67%, 1)',
        },
        gray: {
          from1: '#252525',
          to1: '#2C2C2C',
					1: "linear-gradient(180deg, #252525 0%, #2C2C2C 100%)",
          2: 'hsla(0, 0%, 13%, 1)',
          3: 'hsla(264, 3%, 48%, 1)',
        },
      },
      fontFamily: {
        sans: ['SF-Pro'],
      },
    },
  },
  plugins: [],
}
