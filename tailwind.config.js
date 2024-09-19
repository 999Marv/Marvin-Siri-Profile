/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#EF4551',
        cream: '#fef4f5',
        black: '#000000',
      },
      fontFamily: {
        sans: ['"Nanum Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
