const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#297AFF',
        secondary: '#516c98'
      },
      boxShadow: {
        'md-top': '0 -2.5px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'md-center': '0 1px 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      screens: {
        'containerWidth': '896px',
        'hh': {'raw': '(hover: hover)'},
        'pf': {'raw': '(pointer: fine)'}
      },
      fontFamily: {
        //'sans': ['Font name here', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'tooltip': 'fade-in-out 3s ease-in infinite',
        'pot': 'fade-in 0.5s ease-in',
        'slide': 'slide-in 0.5s'
      },
      keyframes: {
        'fade-in-out': {
          '0%': {opacity: '0', filter: 'blur(12px)'},
          '3%': {opacity: '100', filter: 'blur(0)'},
          '50%': {opacity: '100', filter: 'blur(0)'},
          '95%': {opacity: '100', filter: 'blur(0)'},
          '100%': {opacity: '0', filter: 'blur(12px)'}
        },
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '100'}
        },
        'slide-in': {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(150px) scale(0)'}
        }
      }
    },
  },
  darkMode: 'class',
  plugins: []
}