/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/*/.js",
  ],
  theme: {
    extend: {},
  },
  boxShadow: {
    "navbarShadow": "0rem 0.313rem 0.625rem 0rem #0000001A",
    "box": "0rem 0.625rem 0.375rem 0rem #B1B1B112",
  },
  plugins: [ require("flowbite/plugin"),],
}

