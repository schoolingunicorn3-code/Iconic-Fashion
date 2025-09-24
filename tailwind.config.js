/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#661217",
        cream: "#f8f5ed",
        cocoa: "#361e17"
      },
      fontFamily: {
        serif: ["'The Seasons'", "serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        "2xl": "1rem"
      }
    },
  },
  plugins: [],
};
