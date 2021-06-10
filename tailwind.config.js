const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      gray: colors.trueGray,
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: {
          medium: '#0095f6'
        },
        black: {
          light: '#262626',
          faded: '#00000059',
        },
        gray: {
          base: '#616161',
          background: '#FAFAFA',
          primary: '#DBDBDB'
        },
        red: {
          primary: '#ED4956'
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
