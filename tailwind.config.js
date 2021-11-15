/* eslint-disable quote-props */
module.exports = {
  purge: {
    enabled: true,
    content: ['./artquiz/**/*.html', './artquiz/**/*.scss', './artquiz/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'permament': ['"Permament marker", cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
