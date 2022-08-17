/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '42px',
        1: '14px',
        2: '30px',
      },
    },
    container: {
      center: true,
      screens: {
        l: '1240px',
      },
      padding: {
        DEFAULT: '20px',
        l: '0px',
      },
    },
    screens: {
      s: { max: '1023px' },
      l: '1024px',
    },
    fontSize: {
      l: ['90px', '104px'],
      m: ['30px', '42px'],
      s: ['15px', '21px'],
    },
    boxShadow: {
      DEFAULT: '0px -6px 5px rgba(245, 245, 245, 0.17)',
    },

    borderWidth: {
      DEFAULT: '1px',
      1: '1px',
      2: '2px',
      4: '4px',
    },
    colors: {
      gray: {
        100: '#f5f5f5',
      },
      brown: {
        100: '#C8B2A7',
        200: '#9F8578',
        300: '#7A574B',
      },
      slate: {
        100: '#848891',
        200: '#5B6069',
        300: '#32353C',
        400: '#222021',
        500: '#1E0C06',
      },
      wood: {
        100: '#FFDBBB',
        200: '#FFC099',
        300: '#FB9E6E',
        400: '#E69679',
        500: '#E1764D',
        600: '#8E3921',
        700: '#6C200B',
        800: '#664033',
      },
      cloud: {
        100: '#B0B4BD',
        200: '#D5DCEE',
        300: '#A3B8D7',
        400: '#728BAD',
        500: '#5F7489',
      },
      oak: {
        100: '#F1DED0',
        200: '#D2C8C6',
        300: '#7D746D',
      },
    },
    fontFamily: {
      body: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      nav: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      title: [
        'KyivTypeSans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
  plugins: [],
}
