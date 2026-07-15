/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0066FF",
        "blue-marinho": "#0000AA",
        "gray-color": "#36454F",
        "green-claro": "#87DE87",
        "green-color": "#3B9C32"
      }
    },
  },
  plugins: [],
}

