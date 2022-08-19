const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkgray: "#171717",
        lightgray: "#525252",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
