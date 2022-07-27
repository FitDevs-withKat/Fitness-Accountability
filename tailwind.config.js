/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#FBCA4D",
          secodary: "#F2934E",
          tertiary: "#F6EFC2",
        },
      },
    },
  },
  plugins: [],
};
