/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
      },
      backgroundImage: {
        // 'secondary': 'linear-gradient(90deg, rgba(169,22,231,1) 12%, rgba(210,0,255,1) 55%, rgba(9,9,121,1) 93%)',
        // 'secondary':'radial-gradient(circle, rgba(169,22,231,1) 12%, rgba(210,0,255,1) 55%, rgba(9,9,121,1) 93%)',
        'secondary': 'linear-gradient(to right, #16bffd, #cb3066)',
        
        'tertiary': 'linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e)',


      },
      
    },
  },
  plugins: [],
}

