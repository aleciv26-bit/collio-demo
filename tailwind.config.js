/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        wine: {
          50: '#FBF2F3',
          100: '#F5DEE0',
          200: '#E8B9BD',
          300: '#D58A91',
          400: '#B85964',
          500: '#8E2D3D',
          600: '#6B1F2E',
          700: '#561824',
          800: '#43141D',
          900: '#2E0E13',
        },
        olive: {
          50: '#F5F6EF',
          100: '#E8EBD6',
          200: '#CFD5AC',
          300: '#B0BA84',
          400: '#8E9B5F',
          500: '#6B7A4F',
          600: '#556B2F',
          700: '#445528',
          800: '#36431F',
          900: '#283318',
        },
        gold: {
          50: '#FBF7EA',
          100: '#F5EBC8',
          200: '#EDD58E',
          300: '#DDB85A',
          400: '#C9A24B',
          500: '#B8923A',
          600: '#9A7630',
          700: '#7B5C26',
          800: '#5E451D',
          900: '#422E15',
        },
        cream: {
          50: '#FCFAF5',
          100: '#F6F0E6',
          200: '#EDE3D2',
          300: '#E0D0B8',
          400: '#CBB798',
          500: '#B09977',
        },
        earth: {
          600: '#6B5746',
          700: '#5C4A3A',
          800: '#3A2E26',
          900: '#261D17',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.3s ease-out both',
        'slide-up': 'slide-up 0.35s cubic-bezier(0.16,1,0.3,1) both',
        'float-soft': 'float-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
