/** @type {import('tailwindcss').Config} */
module.exports = {
  // no need to change content on wordpress theme development
  content: [
    './*.{html,js,php,css}',
    './**/*.{html,js,php,css}'
  ],
  theme: {
    extend: {
      // Theme Typography
      fontFamily: {
        primaryFont: "'Poppins', sans-serif",
        secondaryFont: "'Samsung Sharp Sans'",
      },
      // Theme Colors
      colors: {
        primaryColor: "#0362fc",
        secondaryColor: "#c70421",
        themeBlack: "#1a1a1a",
      },
    },
    // Media Queries
    screens: {
      'window1400': {max: '1400px'}, // media (max-width: 1400px)
      'window1300': {max: '1300px'}, // media (max-width: 1300px)
      'window1200': {max: '1200px'}, // media (max-width: 1200px)
      'window1090': {max: '1090px'}, // media (max-width: 1090px)
      'window1024': {max: '1024px'}, // media (max-width: 1024px)
      'window1000': {max: '1000px'}, // media (max-width: 1000px)
      'window800': {max: '800px'}, // media (max-width: 800px)
      'window600': {max: '600px'}, // media (max-width: 600px)
    }
  },
  plugins: [],
}