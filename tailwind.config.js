/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat, sans-serif"]
      },
      colors: {
        'left-linear' : '#0275D8',
        'right-linear' : '#2995F3',
        'card-color' : '#1B1D2A',
        'hr-color' : '#262837',
        'bgcolor' : '#EAEAEA'
      },
      spacing : {
        '18' : '4.5rem'
      }
    },
  },
  plugins: [],
}
