/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"
],
  theme: {
    
    extend: {
      colors: {
        'primary':'#800020',
        'secondary': '#ffffff',
        'chocolate': '#333333',
        'bgcolor':'#eeeeee',
        'hover':'#666666',
        'btlinks':'#799c79',
        "tcolor":'#333333',
        
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: []
}

