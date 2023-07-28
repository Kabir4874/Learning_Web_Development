/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var( --primary-color)",
        "sm-text-color": "var( --small-text-color)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-primary": "var(--bg-primary)",
      },
      backgroundImage: {
        "hero-img": "url('/image/hero_1.jpg.webp')",
      },
    },
  },
  plugins: [],
};
