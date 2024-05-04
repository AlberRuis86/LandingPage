/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe5dfa",
        secondary: "#c600cf",
        borderPrimary: "#ff99fd",
      },
    },
  },
  plugins: [],
};
