/** @type {import('tailwindcss').Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#ffc222",
        primaryHover: "#eeac00",
        secondary: "#00a149",
        bodyTextColor: "#808080",
        heading: "#1e1d23",
        light: "#999999",
        dark: "#282828",
        border: "#e5e5e5",
        background: "#ffffff",
        backgroundHover: "#f7f7f7",
      },
      boxShadow: {
        list: "rgba(32, 58, 188, 0.09) 0px 3px 12px",
      },
    },
  },
  plugins: [],
};
