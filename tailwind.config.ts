import type { Config } from "tailwindcss";
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
        "beams-7": "url('../../img/beams/7.png')",
      },
      colors: {
        primary: "#181717", // github
      },
    },
  },
  plugins: [],
} satisfies Config;
