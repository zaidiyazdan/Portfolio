/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable the dark mode variant
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#f8f8f8", // Similar to neutral-200
          200: "#eeeeee", // Similar to neutral-300
          500: "#333333", // Similar to neutral-700
          700: "#000000", // Similar to neutral-900
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
