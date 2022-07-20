/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#FAFAFA",
        textIfLight: "#0D0E10",
        textIfLightDetail: "#222222",

        bgDark: "31F2C35",
        textIfDark: "#FEFFFD",
        textIfDarkDetail: "#B5C2CB",
      },
    },
  },
  plugins: [],
};
