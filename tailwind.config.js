/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "serif"],
        lato: ['"Lato"', "serif"],
        montserrat: ['"Montserrat"', "serif"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
      colors: {
        primary: "#FF2D5C",
        primarygrey: "#DFDFDF",
        placehold: "#C1C1C1",
        secgrey: "#848484",
        primblack: "#484848",
        oraonge: "#FF8924",
        secblack: "#161616",
        lightwhite: "#EFEFEF",
      },
      letterSpacing: {
        custom: "0.02em",
      },
      lineHeight: {
        custom: "15.23px",
      },
    },
  },
  plugins: [],
};
