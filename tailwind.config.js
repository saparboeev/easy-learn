/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgOrange': '#E8E7E5',
        'bgWhite': '#FFF',
        'bgNav': '#D9D7D4',
        'bgBrown': '#734E3F'
      }
    },
  },
  plugins: [],
}