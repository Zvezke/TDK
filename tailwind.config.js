/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
    container: {
      center: true,
    },
    plugins: [],
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "tdk-blue": {
        200: "#F5F7F9",
        300: "#E4ECF2",
        400: "#D1DBE3",
        700: "#1C3244",
        800: "#172B3B",
      },
      "tdk-green": {
        300: "#E4EEF2",
        400: "#D1DEE3",
        700: "#17313B",
      },
    },
  },
  darkMode: "class",
};
