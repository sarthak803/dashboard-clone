/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'custom-shadow': '0px 4px 4px 0px rgba(217,217,217,0.1)',
      },
      fontFamily: {
        'general-sans': ['General Sans', 'sans-serif'],
      },
      fontFamily: {
        'Satoshi': [ 'Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
