import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        tulisan: ["'Heebo'", ...fontFamily.sans],
      },
      colors: {
        primary: "#09090b",
        secondary: "#fafafa",
        border: "#1c1c1e",
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
