/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgFooter: "#1D1D1E",
        spanColor: "#a02279 ",
        dimBlack: "#434343",
      },

      fontFamily: {
        redRose: ["Red+Rose", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
