/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#197BBD',
        secondary: '#DBEEFA',
        customGray: '#4C4C4C',
        lightGray: '#878787',
        lighterGray: '#C4C4C4',
        black: '#262626'
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwindcss-aria-attributes')]
};
