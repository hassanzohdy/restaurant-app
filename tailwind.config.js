/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          text: "#808080",
          orange: {
            100: "#f7f2e2",
            400: "#ffc222",
            500: "#eeac00",
          },
        },
      },
    },
  },
  plugins: [],
};
