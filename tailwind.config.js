/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e50914',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
