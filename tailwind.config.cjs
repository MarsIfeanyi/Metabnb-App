/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgFooter: "#1D1D1E",
        spanColor: "#a02279 ",
        dimBlack: "#434343",
        dimGray: "#CFD8DC",
        dimBlack2: "#333333",
      },

      fontFamily: {
        redRose: ["Red+Rose", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
