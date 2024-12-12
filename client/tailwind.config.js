/** @type {import('tailwindcss').Config} */
/* index.css or styles.css */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('bgImage.jpg')",
        vienaImg: "url('coffeeViena.png')",
      },
      fontSize: {
        "responsive-lg": "calc(1.100rem + 4.98vw)",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        festivo: ['"Festivo LC Basic"', "sans-serif"],
        konit: ["Konit", "sans-serif"],
        festivo: ["Festivo LC"],
      },
    },
    build: {
      assetsInlineLimit: 0, // Disable inlining to ensure proper handling
    },
  },
  plugins: [],
};
