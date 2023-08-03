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
        desktop: "url('../../img/pagi.webp')",
        "beams-0": "url('../../img/beams/0.png')",
        "beams-1": "url('../../img/beams/1.png')",
        "beams-4": "url('../../img/beams/4.png')",
        "beams-5": "url('../../img/beams/5.png')",
        "beams-6": "url('../../img/beams/6.png')",
        "beams-7": "url('../../img/beams/7.png')",
        "beams-8": "url('../../img/beams/8.png')",
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
