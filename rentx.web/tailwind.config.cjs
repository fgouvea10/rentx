/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/layout/**/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/components/shared/**/*.tsx',
    './src/components/shared/Form/**/*.tsx',
    './src/pages/auth/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary400: '#FB3737',
        primary500: '#DC1637',
        primary600: '#A90000',
        red500: '#DC1637',
        black: '#121214',
      },
      fontFamily: {
        sans: 'DM Sans, sans-serif',
      },
      borderRadius: {
        base: '4px',
      },
    },
  },
  plugins: [],
};
