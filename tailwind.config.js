/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all src files are included
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a1a2e',
        'custom-grey': '#a1a1aa',
      },
    },
  },
  plugins: [],
};
