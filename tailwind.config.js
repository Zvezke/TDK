/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('@tailwindcss/forms'),],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        "tdk-blue": {
          200: "#F5F7F9",
          300: "#E4ECF2",
          400: "#D1DBE3",
          700: "#1C3244",
          800: "#172B3B",
          cardBg: "#233E54",
        },
        "tdk-blue-light": {
          background: "#F5F9F9",
          backgroundDark: "#D1DEE3",
          dividers: "#B7C2C7",
          buttonsSubheadings: "#1C3244",
          headlines: "#111E2C",
          heros: "#DFEEF5",
          cardBg: "#D4D7D9",
        },
        "tdk-green": {
          300: "#E4EEF2",
          400: "#D1DEE3",
          700: "#17313B",
        },
        "tdk-yellow": {
          400: "#DFB45A",
        },
        "tdk-orange": {
          400: "#DE8F59",
        },
    },
    container: {
      center: true,
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   "tdk-blue": {
    //     200: "#F5F7F9",
    //     300: "#E4ECF2",
    //     400: "#D1DBE3",
    //     700: "#1C3244",
    //     800: "#172B3B",
    //     cardBg: "#233E54",
    //   },
    //   "tdk-blue-light": {
    //     background: "#F5F9F9",
    //     backgroundDark: "#D1DEE3",
    //     dividers: "#B7C2C7",
    //     buttonsSubheadings: "#1C3244",
    //     headlines: "#111E2C",
    //     heros: "#DFEEF5",
    //     cardBg: "#D4D7D9",
    //   },
    //   "tdk-green": {
    //     300: "#E4EEF2",
    //     400: "#D1DEE3",
    //     700: "#17313B",
    //   },
    //   "tdk-yellow": {
    //     400: "#DFB45A",
    //   },
    //   "tdk-orange": {
    //     400: "#DE8F59",
    //   },
    // },
  },
  darkMode: "class",
},
};

// // F5F9F9
// Dividers: B7C2C7
// Slightly darker bg: D1DEE3

// Headlines: 111E2C
// Buttons and subheadings: 1C3244
