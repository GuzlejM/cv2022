module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
      '4xl': ['40px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
