module.exports = {
  content: [
    "./pages/index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
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
        'containerWidth': '896px'
      }
    },
  },
  plugins: [],
}