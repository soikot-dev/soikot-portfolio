/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#9f9f9f',
        heading: '#fff',
        primary: '#eb5d3a',
        lighter: '#ccc',
        subtitle: '#ccc',
        black: '#000',
        border: 'rgba(119, 119, 125, 0.2)',
        buttonBorder: 'rgba(119, 119, 125, 0.2)',
        bodyBg: '#000',
        greyBg: '#121214',
      },
    },
  },
  plugins: [],
};
