const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#297AFF",
        secondary: "#516c98",
      },
      boxShadow: {
        "md-top":
          "0 -2.5px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        "md-center":
          "0 1px 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      screens: {
        containerWidth: "896px",
        hh: { raw: "(hover: hover)" },
        pf: { raw: "(pointer: fine)" },
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        tooltip: "fade-in-out 3s ease-in infinite",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-in-fast": "fade-in 0.25s",
        "fade-out": "fade-out 0.5s ease-in forwards",
        "fade-out-slow": "fade-out-slow 3s ease-in forwards",
        slide: "slide-in 0.5s",
        breathe: "breathe 6s infinite",
      },
      keyframes: {
        "fade-in-out": {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "3%": { opacity: "100", filter: "blur(0)" },
          "50%": { opacity: "100", filter: "blur(0)" },
          "95%": { opacity: "100", filter: "blur(0)" },
          "100%": { opacity: "0", filter: "blur(12px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        "fade-out": {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        "fade-out-slow": {
          "0%": {
            "box-shadow":
              "0.5px 0 1px 0 rgba(255, 255, 255, 0.2), -0.3px 0 1px 0 rgba(3, 3, 3, 0.2);",
            "backdrop-filter": "blur(3px)",
            background: "rgba( 255, 255, 255, 0.2 )",
          },
          "100%": {
            "box-shadow":
              "0.5px 0 1px 0 rgba(255, 255, 255, 0), -0.3px 0 6px 0 rgba(3, 3, 3, 0);",
            "backdrop-filter": "blur(0)",
            background: "rgba( 255, 255, 255, 0 )",
          },
        },
        "slide-in": {
          "0%": { transform: "translateX(0px)", opacity: "100" },
          "90%": { transform: "translateX(175px) scale(0)", opacity: "0" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "100" },
        },
        breathe: {
          "0%": { transform: "rotate(1.5deg) scale(1)", opacity: "0.75" },
          "50%": { transform: "rotate(-1.5deg) scale(1.1)", opacity: "0.5" },
          "100%": { transform: "rotate(1.5deg) scale(1)", opacity: "0.75" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
