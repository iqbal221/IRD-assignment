/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#264373",
      pink: "#8382EB",
      white: "#FFFFFF",
      gray: "#999999",
      cyan: "#6462F0",
      violet: "#9190E9",
    },
  },
  plugins: [require("daisyui")],
};
