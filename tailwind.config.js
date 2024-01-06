/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#242424',
        'main-gray': '#2D2E2E',
        'main-gray-light': '#575757',
        'pale-yellow': '#EAD27B',
        'light-blue': '#8FD3DB'
      },
    },
  },
  plugins: [],
}

