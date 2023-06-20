import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
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
} satisfies Config;
