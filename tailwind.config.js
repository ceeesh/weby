/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        regHalf: "rgb(200, 0, 255)",
      }
    },
  },
  plugins: [],
}

