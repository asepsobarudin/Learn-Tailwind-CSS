/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/input.html"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s linear infinite',
        'rotate': 'rotate 3s linear infinite',
      },
      fontFamily: {
        'Poppins': 'Poppins'
      },
      keyframes : {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}
