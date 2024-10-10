/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage:{
      'bg-hero' : "url('../src/assets/bg-hero.jpg')"
    },
    extend: {
      colors: {
        blue :'rgba(6, 20, 56)',
        'primary-color': '#106EB0',
      'primary-orange':'#EC7000',
      'primary-gray':'#33303E',
      'second-gray' : '#4E4B59',
      'gray-phone' : '#F4F4F4',
      'txt-gray':'#FA7786',
      'opacity-gray':'rgba(100, 80, 57, 0.1)',
      'slate': '#94A3B8',
      }
    },
  },
  plugins: [],
}
;
