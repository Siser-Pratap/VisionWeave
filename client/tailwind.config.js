/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'linear-gradient(to right , #16bffd, #cb3066)'
      },
      backgroundImage: {
        // 'secondary': 'linear-gradient(90deg, rgba(169,22,231,1) 12%, rgba(210,0,255,1) 55%, rgba(9,9,121,1) 93%)',
        // 'secondary':'radial-gradient(circle, rgba(169,22,231,1) 12%, rgba(210,0,255,1) 55%, rgba(9,9,121,1) 93%)',
        'secondary': 'linear-gradient(to right, #16bffd, #cb3066)',
        
        'tertiary': 'linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e)',
        
        "robot-pattern": "url('/images/bg.jpg')",
        "love":"url('/images/dignew.jpg')",
        


      },
      
    },
  },
  
  safelist: [
    'bg-[url("/images/bg.jpg")]',
    
  ],
  plugins: [require('daisyui'),],
});

