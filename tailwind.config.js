/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.{liquid,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
