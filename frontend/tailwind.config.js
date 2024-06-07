import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PublishBtn: "#4D8A1C",
        MediumHomePageBG: "#F7F4ED",
      },
      width: {
        600: "600px",
        470: "470px",
        1300: "1300px",
        1000: "1000px",
        1208.75: "1208.75px",
        770: "770px",
        680: "680px",
      },
      height: {
        700: "700px",
        1376: "1376px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
