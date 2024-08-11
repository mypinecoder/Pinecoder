/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
          'features-bg': "url('./src/assets/pexels-scottwebb-2824173.jpg')",
        },
      },
    },
  plugins: [],
}

