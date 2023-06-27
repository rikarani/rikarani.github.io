/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        tulisan: ["Nunito Sans", "Raleway", ...fontFamily.sans],
      },
      backgroundImage: {
        hp: "url('../../img/miyako.webp')",
        desktop: "url('../../img/towa.webp')",
      },
    },
  },
  plugins: [],
};
