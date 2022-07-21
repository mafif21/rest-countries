/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textIfLight: "#0D0E10",
        textIfLightDetail: "#222222",

        textIfDark: "#FEFFFD",
        textIfDarkDetail: "#B5C2CB",
        elementDark: "#2B3743",
      },
    },
  },
  plugins: [],
};
