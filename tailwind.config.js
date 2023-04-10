/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",

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
        burtons: "burtons",
        dmsans: "DM Sans",
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        typing: "typing 3s steps(35), blink 1s ease-in-out 7s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};