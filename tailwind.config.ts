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
          50: "#e5f8e3",
          100: "#cce9c8",
          200: "#99d4a1",
          300: "#66be79",
          400: "#33a952",
          500: "#009530",
          600: "#008229",
          700: "#00661d",
          800: "#004a12",
          900: "#002d06",
        },
        eduSecondary: {
          50: "#f4e5ef",
          100: "#e8ccd9",
          200: "#d199b3",
          300: "#b9668d",
          400: "#a13367",
          500: "#88004a",
          600: "#70003b",
          700: "#58002d",
          800: "#40001e",
          900: "#28000f",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
