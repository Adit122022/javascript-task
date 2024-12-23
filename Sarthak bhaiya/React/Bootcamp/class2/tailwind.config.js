/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shadows: ['"Shadows Into Light"', 'cursive'],
      },
    },
  },
  plugins: [],
}

