/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-mont)',
        secondary: 'var(--font-lato)',
      },
    },
    colors: {
      ...colors,
      half_white: '#F5F5F5',
      grey_light: '#EAEAEA',
      grey_dark: '#DDDDDD',
    },
  },
  plugins: [],
};
