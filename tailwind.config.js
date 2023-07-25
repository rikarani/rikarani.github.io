/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        tulisan: ["'Heebo'", ...fontFamily.sans],
      },
      backgroundImage: {
        hp: "url('../../img/mashiro.webp')",
        desktop: "url('../../img/nangid.webp')",
      },
      colors: {
        primary: "#181717", // github
        fesbuk: "#1877F2",
        ig: "#E4405F",
        discord: "#5865F2",
        wasap: "#25D366",
        linkedin: "#0A66C2",
      },
    },
  },
  plugins: [],
};
