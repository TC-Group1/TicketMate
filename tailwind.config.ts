import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search-image": "./public/images/search.webp",
      },
      backgroundSize: { "5": "1.25rem" },
    },
    colors: {
      "primary-back": "rgb(238, 238, 238)",
      "light-blue": "rgb(174, 228, 237)",
      "aqua-blue": "rgb(95, 183, 207)",
      "light-purple": "rgb(90, 121, 200)",
      "dark-purple": "rgb(60, 51, 154)",
      "light-text": "#A3A3A3",
      "light-border": "#C8CBD9",
    },
  },
  plugins: [],
};
export default config;
