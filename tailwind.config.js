/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // tells Tailwind to scan all source files
    "./public/index.html"         // optional: includes static HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};