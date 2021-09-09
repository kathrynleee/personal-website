const { white } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.sky,
      yellow: colors.amber,
      green: colors.teal,
      purple: colors.purple,
      pink: colors.rose,
      white: white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
