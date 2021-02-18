const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{ts,js,tsx,html,css,scss}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors:{
      primary: colors.orange,
      secondary: colors.amber,
      complementary: colors.yellow,
      white: colors.white,
      dark: '#282c35',
      grey: colors.trueGray,
      success: colors.green,
      error: colors.rose,
      warning: colors.yellow,
      info: colors.blue
    },
    fontFamily: {
      'display': ['Cinzel Decorative', 'display'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
