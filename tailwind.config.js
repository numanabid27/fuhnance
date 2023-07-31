/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#0068B6',
        'white': '#fff',
        'grey' : '#ADADAD',
        'dark' : '#242A38',
        'black' : '#000814',
        'darkblue' : '#111827'
      },
      fontSize: {
        'xl': ['72px'],
        'lg': ['40px'],
        'md': ['24px'],
        'sm': ['18px'],
        'xs': ['32px']
      },
    }
  },
  plugins: [],
}

