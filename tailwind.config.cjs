/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E1EEFF',
          300: '#A5CCFF',
          DEFAULT: '#0360D9'
        }
      }
    }
  },
  plugins: []
}
