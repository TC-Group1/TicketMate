import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'field-height': '50px',
        'field-left': '45px',
        'field-top': '20px',
        'field-label-left': '25px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search-image": "./public/images/search.webp",
      },
      backgroundSize: { "5": "1.25rem" },
      backgroundColor: {
        'bg-primary': 'rgb(238, 238, 238)',
        'login-background': 'rgb(255, 255, 255)',
      },
      colors: {
        "light-blue": "rgb(174, 228, 237)",
        "aqua-blue": "rgb(95, 183, 207)",
        "light-purple": "rgb(90, 121, 200)",
        "dark-purple": "rgb(60, 51, 154)",
        "light-text": "rgb(255, 255, 255)",
        "dark-text": "rgb(0, 0, 0)",
        "light-border": "#C8CBD9",
        "input-back": "rgb(245, 246, 251)",
        "error-border": "#EF4444",
        "error-text": "#EF4444",
        "gray-dark": "#595959",
        'field-input-text': '#595959',
        'field-label-text': '#666666',
        'label-text': '#666666',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        'text-lg': '33px',
        'text-sm': '16px',
      },
      borderWidth: {
        'error': '1px',
      },
      borderRadius: {
        'field-input': '25px',
      },
      boxShadow: {
        'neumorphism': '-3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288)',
        'inset-neumorphism': 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73',
        'focus-neumorphism': 'inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73',
        'field-input': 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73',
        'field-input-focus': 'inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff73',
      },
      screens: {
        'sm': '500px',
        'xs': '375px',
      },
    },
  },
  plugins: [],
};

export default config;