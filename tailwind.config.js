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
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
