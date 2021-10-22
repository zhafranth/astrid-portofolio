module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FEC0C5",
        "primary-light": "#FFFAFA",
        secondary: "#5A88FF",
        "secondary-light": "#BACDFC",
        black: "#262626",
        gray: "#D8D8D8",
      },
      keyframes: {
        moveInBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        moveInTop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        moveInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-10rem)",
          },
          "80%": {
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
      },
      animation: {
        "fade-bottom": "moveInBottom 0.7s ease-in-out",
        "fade-left": "moveInLeft 0.7s ease-in-out",
        "fade-top": "moveInTop 1s ease-in-out",
        button: "moveInBottom 0.7s ease-in-out 0.4s",
      },
    },
    fontFamily: {
      roboto: ["Roboto , sans-serif"],
      "ibm-serif": ["IBM Plex Serif , sans"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
