/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#54bd95",
        secondary: "#191a15",
        backup: "#a6a6a6",
        color4: "#f9f8fe",
      },
    },
  },
  plugins: [],
};
