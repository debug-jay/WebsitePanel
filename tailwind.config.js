/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '350px',
        'screenO': '80vh',
      },
      width: {
        'closed-menu': '115rem',
        'open-menu': '103rem',
      }
    },
  },
  plugins: [],
}