/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/layout/**/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/**/*.tsx',
    './src/components/shared/**/*.tsx',
    './src/components/shared/Form/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary400: '#37FB89',
        primary500: '#01CC56',
        primary600: '#00A947',
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
