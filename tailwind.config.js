/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('../src/Assets/loginbg.png')",
        'home': "url('../src/Assets/jaundice.svg')",
        'wfptrn': "url('../src/Assets/whiteflowerptrn.svg')",
        'gfptrn': "url('../src/Assets/greenptrnbg.svg')"
      },
      fontFamily: {
        'ss': ['Source Sans Pro', 'sans-serif']
      }
    }
  },
  plugins: [],
}
