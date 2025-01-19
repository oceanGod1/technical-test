/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        customW1: "20.69rem",
        customW2: "26.81rem",
        customW3: "29.3rem",
        customW4: "21.25rem",
        customW5: "9rem",
        customW6: "25.5rem",
        customW7: "39.575rem",
        customW8: "34rem",
        customW9: "3.75rem",
        customW10: "37.5rem",
        customW11: "1.625rem",
        customW12: "20.4rem",
      },
      height: {
        customH1: "33.18rem",
        customH2: "3.75rem",
        customH3: "37.5rem",
      },
      padding: {
        customP1: "1.875rem",
      },
      borderRadius: {
        customRadius1: "2.5rem",
        customRadius2: "0.625rem",
        customRadius3: "1.25rem",
      },
      boxShadow: {
        customBS1: "0px 4px 9px #00000015",
      },
      fontFamily: {
        customFont: ["Inter", "Calibri", "sans-serif"],
      },
      fontSize: {
        customFS1: "2.5rem",
        customFS2: "3.125rem",
        customFS3: "1.75rem",
        customFS4: "1.875rem",
        customFS5: "0.8125rem",
      },
      lineHeight: {
        customLH1: "3.81rem",
        customLH2: "3.75rem",
        customLH3: "3.78rem",
        customLH4: "2.1rem",
        customLH5: "1.875rem",
        customLH6: "1.36rem",
        customLH7: "4.56rem",
        customLH8: "2.27rem",
        customLH9: "1.687rem",
      },
      colors: {
        primary: "#54bd95",
        primaryLight1: "#85dab9",
        primaryLight2: "#6bc2a1",
        secondary: "#191a15",
        backup: "#a6a6a6",
        color4: "#f9f8fe",
        color5: "#a9a7b6",
        color6: "#4535af",
        color7: "#ffaa94",
        color8: "#fbc75e",
        color9: "#f8f8fa",
        color10: "#f9fafb",
      },
      backgroundImage: {
        customBG1:
          "radial-gradient(farthest-side at 100px 5%, #85dab935 20%, #00000003 60%)",
        customBG2:
          "radial-gradient(farthest-side at 100% 65%, #85dab935 35%, transparent 80%)",
        customBG3:
          "radial-gradient(farthest-side at 100px 35%, #fee2e256 20%, transparent 60%)",
        customBG4:
          "radial-gradient(farthest-side at 100% 75%, #85dab956 20%, transparent 60%)",
      },
      rotate: {
        15: "15deg",
      },
      gridTemplateRows: {
        customRows1: "auto 1fr",
        customRows2: "auto auto",
      },
      gridTemplateColumns: {
        customCols1: "auto 1fr auto",
        customCols2: "auto 1fr",
      },
    },
  },
  plugins: [],
};
