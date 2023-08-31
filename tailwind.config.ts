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
      fill: {
        html: "#E34F26",
        css: "#1572B6",
        javascript: "#F7DF1E",
        react: "#61DAFB",
        tailwind: "#06B6D4",
        php: "#777BB4",
        laravel: "#FF2D20",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, 15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        rotate: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        rotate: "rotate 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
