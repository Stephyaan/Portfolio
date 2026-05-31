/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#f8f9fa',
        surface: '#ffffff',
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#5348CC'
        },
        secondary: '#FF6584',
        accent: '#ffd700',
        text: {
          DEFAULT: '#2D3436',
          muted: '#636E72'
        }
      },
      boxShadow: {
        'sm': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'md': '0 10px 20px rgba(0, 0, 0, 0.08)',
        'lg': '0 20px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
