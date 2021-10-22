module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
