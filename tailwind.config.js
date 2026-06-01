/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headline: '#1a1d23',
        body: '#3d4459',
        muted: '#6b7390',
        primary: '#02aab0',
        secondary: '#00cdac',
        bg: {
          pure: '#ffffff',
          snow: '#f8f9fb',
          mist: '#eef0f4',
        },
        border: {
          silver: '#e2e5ec',
          glass: 'rgba(2,170,176,0.2)'
        },
        accent: {
          wash: '#f0fafa',
          text: '#02aab0'
        }
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
