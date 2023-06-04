// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  content: [
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.tsx"
  ],
  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
    },
    fontFamily: {
      display: ["source sans", "avenir", "gotham", "ubuntu", "anisette-std", "work-sans", "clash-display"],
      body: ["source sans", "avenir", "gotham", "ubuntu", "anisette-std", "work-sans", "clash-display"],
      avenir: ["avenir"],
      ubuntu: ["ubuntu"],
      anisette: ["anisette"],
      workSans: ["work-sans"],
      clashDisplay: ["clash-display"],
      humane: ["humane"]
    },
    prefix: "oc-",
    extend: {
      spacing: {
        "oc-10": "10px"
      },
      colors: {
        white: "#FFFFFF",
        "dark-blue": {
          primary: "#081E31",
          100: "#96ADDD",
          200: "#5A75AB",
          300: "#445984",
          400: "#283756",
          500: "#283756",
          600: "#283757"
        },
        "army-green": {
          primary: "#1B352D"
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
        primary: {
          "dark-blue": "#020212"
        },
        "dark-green": "#B2B396",
        "trans-gray": "rgba(10, 34, 55, 0.5)",
        "circle-gray": "#E7ECF8",
        brown: "#440101",
        "white-smoke": "#F4F4F4",
        "dark-purple": "#ff001a",
        "light-d": ":#f5b9ff",
        "light-blue": "#79FFBF",
        trans: "#bbfbff",
        "light-purple": "#ff02e6",
        "light-trans": "#d400ff"
      },
      fontSize: {
        h1: "2.25rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
        spo: "1.75rem",
        sec: "3.75rem",
        sship1: "4.95rem",
        sship2: "8.12rem"
      },
      lineHeight: {
        text: "22px"
      }
    }
  },
  variants: {},
  plugins: []
};
