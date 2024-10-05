/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#697598",
        darkGrey: "#373B47",
        neutralBlack: "#1F1F23",
        blue: "#003EFF",
        lightGreen: "#B6FDD3",
        lightRed: "#FFB7BD",
        lightGrey: "#D9D9E0",
        lightYellow: "#F8E39B",
        lightBlue: "#A1B8FF33"
      },
      background: {
        menuGradient: "linear-gradient(180deg, #DAF0FA 0%, #FFFCE2 100%) linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}