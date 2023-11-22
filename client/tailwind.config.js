/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary: '#1266dd',
        tertiary: '#f73859',
        'transparent-30': 'rgba(0,0,0,0.3)',
        'transparent-70': 'rgba(0,0,0,0.7)',
      },
      textColor: {
        primary: '#333333'
      },
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      }
    },
  },
  plugins: [],
}