/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#111111', // Dark Gray
        accent: '#3B82F6', // Blue (keeping as accent for now)
        text: '#FFFFFF', // White
        'dark-gray': '#1F1F1F', // Lighter gray for cards/sections
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
