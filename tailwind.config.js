/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        tulisan: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#14b8a6",
      },
    },
  },
  plugins: [],
};
