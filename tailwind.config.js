module.exports = {
  purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}'

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Noto': ['Noto Sans JP', 'sans-serif'],
      'Slab': ['Roboto Slab', 'serif']
    },
    extend: {
      spacing: {

      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
