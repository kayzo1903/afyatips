/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        'main' : '#ffffff', 
        'sec' : '#181A2A' ,
        'ter' : '#242535' ,
        'c1' : '#F4F4F5',
        'skin' : '#4B6BFB'
      }
    },
  },
  plugins: [],
}
