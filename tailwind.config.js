/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
      'primary-bg': '#FDE8C4',
      'highlight': '#E56D6A',
      'block': '#FFFFFF',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'block': '0 10px 25px rgba(0,0,0,0.1)',
        'menu': '0 5px 15px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        'menu': '1.5rem',
        'block': '1rem',
      },
    },
  },
  plugins: [],
}
