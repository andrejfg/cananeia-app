/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}', './app/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: 'SpaceMono',
        roboto: 'Roboto_400Regular',
        roboto_semi: 'Roboto_500Medium',
        roboto_bold: 'Roboto_700Bold',
        choice: 'BetweenChoice',
      },
      colors: {
        link: '#368cd7',
        primary: '#0fb2d1',
        textInput: '#818188',
      },
    },
  },
  plugins: [],
}
