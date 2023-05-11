/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E8A8A',
          dark: '#007F7F',
          50: '#e6f2f2',
          100: '#b0d7d7',
          200: '#8ac4c4',
          300: '#54a9a9',
          400: '#339999',
          500: '#007f7f',
          600: '#007474',
          700: '#005a5a',
          800: '#004646',
          900: '#003535',
        },
        teal: {
          default: '#00a581',
          50: '#e6f6f2',
          100: '#b0e3d8',
          200: '#8ad6c5',
          300: '#54c3ab',
          400: '#33b79a',
          500: '#00a581',
          600: '#009675',
          700: '#00755c',
          800: '#005b47',
          900: '#004536',
        },
        grey: {
          DEFAULT: '#eaeaea',
          50: '#fdfdfd',
          100: '#f8f8f8',
          200: '#f5f5f5',
          300: '#f1f1f1',
          400: '#eeeeee',
          500: '#eaeaea',
          600: '#d5d5d5',
          700: '#a6a6a6',
          800: '#818181',
          900: '#626262',
        },
      },

      width: {
        menu: 64,
      },
      minWidth: {
        menu: 64,
      },
    },
    minWidth: {
      150: '150px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
