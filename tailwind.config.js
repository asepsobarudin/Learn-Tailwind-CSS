/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/input.html"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s linear infinite',
        'rotate': 'rotate 3s linear infinite',
        'slide': 'slide 12s steps(4) infinite',
        'typing': 'typing 3s steps(10) infinite'
      },
      fontFamily: {
        'Poppins': 'Poppins'
      },
      keyframes : {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide': {
          '100%': {top: '-360px'}
        },
        'typing': {
          '40%, 60%': {left: 'calc(100% + 30px)'},
          '100%': {left: '0'}
        }
      }
    },
  },
  plugins: [],
}
