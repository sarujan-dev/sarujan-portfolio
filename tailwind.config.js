/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0B0F17',
        cardDark: '#111827',
        accentCyan: '#06B6D4',
        accentBlue: '#3B82F6',
      }
    },
  },
  plugins: [],
}