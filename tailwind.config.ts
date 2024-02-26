import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        eduPrimary: {
          50: "#68dfb8",
          100: "#4fd9ac",
          200: "#35d4a0",
          300: "#1cce94",
          400: "#1cce94",
          500: "#03C988",
          600: "#03c988",
          700: "#03b57a",
          800: "#028d5f",
          900: "#027952",
        },
        eduSecondary: {
          50: "#8980ad",
          100: "#71669c",
          200: "#5a4d8c",
          300: "#42337b",
          400: "#2b1a6b",
          500: "#13005a",
          600: "#110051",
          700: "#0f0048",
          800: "#0d003f",
          900: "#0b0036",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        eduPrimary: {
          50: "#68dfb8",
          100: "#4fd9ac",
          200: "#35d4a0",
          300: "#1cce94",
          400: "#1cce94",
          500: "#03C988",
          600: "#03c988",
          700: "#03b57a",
          800: "#028d5f",
          900: "#027952",
        },
        eduSecondary: {
          50: "#8980ad",
          100: "#71669c",
          200: "#5a4d8c",
          300: "#42337b",
          400: "#2b1a6b",
          500: "#13005a",
          600: "#110051",
          700: "#0f0048",
          800: "#0d003f",
          900: "#0b0036",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
