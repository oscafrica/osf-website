// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontFamily: {
      display: ["source sans", "avenir", "gotham", "ubuntu"],
      body: ["source sans", "avenir", "gotham", "ubuntu"]
    },
    prefix: "oc-",
    extend: {
      colors: {
        white: "#FFFFFF",
        "dark-blue": {
          primary: "#283756",
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756"
        },
        orange: {
          primary: "#F79313",
          100: "#FFE0BC",
          200: "#F5C388",
          300: "#F9AA4F",
          400: "#F7931E"
        },
        gray: {
          primary: "464B54",
          100: "#F0F0F0",
          200: "#D6D6D6"
        },
        "light-green": {
          primary: "#F1F2D3",
          100: "#FCFDED",
          200: "#D7D9B4"
        },
        "dark-green": "#B2B396"
      },
      fontSize: {
        base: "1rem",
        h1: "2.25rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem"
      }
    }
  },
  variants: {},
  plugins: []
};
