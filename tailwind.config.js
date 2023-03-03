/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    // this is for the new app dir in next 13
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
