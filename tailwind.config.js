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
        'light-blue': '#bee2fd',
        'light-gray': '#f8f9ff',
        'border-gray': '#d6d9e6',
        'border-blue': '#3b82f6',
      }
    },
  },
  plugins: [],
}
