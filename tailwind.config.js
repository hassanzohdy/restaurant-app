/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    flex: {
      custom: "0 0 auto",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      screens: {
        "2xl": "1400px",
      },
      colors: {
        primary: {
          text: "#808080",
          main: "#ffc222",
          hover: "#eeac00",
          light: "#f7f2e2",
        },
        "footer-paragraph": "#b0b0b0",
        secondary: "#00a149",
        headingTextColor: "#808080",
        bodyTextColor: "#1e1d23",
        light: "#999999",
        dark: "#282828",
        border: "#e5e5e5",
        backgroundHover: "#f7f7f7",
      },
      boxShadow: {
        list: "0 0 30px 0 rgba(0,0,0,.08)",
      },
      extend: {
        // that is animation class
        animation: {
          fade: "fadeOut 5s ease-in-out",
        },

        // that is actual animation
        keyframes: theme => ({
          fadeOut: {
            "0%": { backgroundColor: theme("colors.red.300") },
            "100%": { backgroundColor: theme("colors.transparent") },
          },
        }),
      },
    },
  },
  plugins: [],
};
