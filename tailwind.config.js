module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        muli: ['Muli', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#000033',
        'blue-secondary': '#2676ff',
        'blue-tertiary': '#03034bab',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
