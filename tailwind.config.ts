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
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      animation: {
        floating: "floating 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
