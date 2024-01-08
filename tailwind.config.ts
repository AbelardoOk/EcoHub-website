import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alt: "var(--font-gluten)",
        sans: "var(--font-roboto)",
      },
      colors: {
        paleta: {
          verde: "#4CAF50",
          azul: "#2196F3",
          marrom: "#795548",
          cinza: "#9E9E9E",
          bege: "#e6e7e2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
