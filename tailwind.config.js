/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        larg: '50px'
      },
      spacing: {
        w_nav: '94%'
      },
      colors: {
        nav: '#1C1E2C;'
      }
    },
  },
  plugins: [],
}