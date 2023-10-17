/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#99DBDC",
        secondary: "#16355A",
        tertiary: "#317C9F",
        fourth: "#6e6e6e"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        cardlight:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        heading: ['GillSansHeavy','sans-serif'],
        body: ['GillSans','serif'],
        bodyItalic: ['GillSansItalic','serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

