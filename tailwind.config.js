/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif' ],
        'open-Sans': ['"Open Sans"', 'sans-serif' ],
        'roboto':[ '"Roboto"', 'sans-serif'],
        'sans-serif':[ '"sans-serif"', 'Roboto'],
      },
    },
  },
  plugins: [],
}
