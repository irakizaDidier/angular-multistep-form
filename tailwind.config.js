/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'Denim': '#022959',
        'error': '#ee374a',
      }
    },
  },
  plugins: [],
}
