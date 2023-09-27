/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
  "./src/**/*.{html,js,jsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#54595F',
        secondary: '#FFCA32',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(),require('flowbite/plugin')],
}
