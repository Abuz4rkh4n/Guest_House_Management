/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "Outfit",
      },
      colors: {
        "custom-green": "#46BF68",
        "custom-blue": "#5FC7E9",
        "custom-red": "#EA3C53",
        "text-grey": "#36454F",
        "button-yellow": "#FFE145",
        "custom-white": "#FDFCFA",
      },
      fontSize: {
        "2.5-rem": "3.5rem",
        "2rem": "3rem",
      },
      height: {
        "100vh": "100vh",
      },
      width: {
        "65vw": "65vw",
        90: "25rem",
        "30vw": "30vw",
      },
    },
  },
  plugins: [],
};
