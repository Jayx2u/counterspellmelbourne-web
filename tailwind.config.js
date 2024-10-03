/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: '#00FFBF',
        mag: '#D046D6',
        pink: '#FF4186',
        blue: '#5BE2FA',
        lightpurp: '#90A8E1',
        darkpurp: '#443D87',
        dark: '#202F53',
        darker: '#0A081E',
        whitepurp: '#CFD8ED'
      },
      screens: {
        'xs': '480px',
        '3xl': '2000px',
      },
      maxWidth: {
        '8xl': '90rem',

      }
    },
  },
  plugins: [],
}

