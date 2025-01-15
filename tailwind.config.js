/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Inter", "Calibri", "sans-serif"],
      },
      colors: {
        primary: "#54bd95",
        secondary: "#191a15",
        backup: "#a6a6a6",
        color4: "#f9f8fe",
        color5: "#a9a7b6",
      },
    },
  },
  plugins: [],
};
