/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s linear infinite',
      },
      fontFamily: {
        'Poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}
