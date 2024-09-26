/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inteer: ['var(--font-inter)'],
        monno: ['var(--font-roboto-mono)'],
        fira: ['var(--font-fira)']
      },
      screens: {  
        'xxxs': '320px',
        'xxs': '375px',
        'xs': '425px', // Add a custom breakpoint for 425px
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px'
      },
    },
  },
  plugins: [],
};
