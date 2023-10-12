/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#ffc222",
        primaryHover: "#eeac00",
        secondary: "#00a149",
        headingTextColor: "#808080",
        bodyTextColor: "#1e1d23",
        light: "#999999",
        dark: "#282828",
        border: "#e5e5e5",
        background: "#ffffff",
        backgroundHover: "#f7f7f7",
      },
      boxShadow: {
        list: "0 0 30px 0 rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};