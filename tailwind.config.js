/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        tulisan: ["Nunito Sans", "Raleway", ...fontFamily.sans],
      },
      backgroundImage: {
        hp: "url('../../img/ls-hp-3.jpg')",
        desktop: "url('../../img/bg.jpg')",
      },
      brightness: {
        40: ".40",
      },
    },
  },
  plugins: [],
};
