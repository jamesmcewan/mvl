module.exports = {
  content: ["./src/**/*.{astro,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
