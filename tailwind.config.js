// @ts-check
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './src/**/*.{js,ts,html}'],
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1600px',
    },
    extend: {
      lineHeight: {
        'theme-120': '1.2',
        'theme-140': '1.4',
      },
      letterSpacing: {
        'theme-tight-0.02': '-0.02em',
        'theme-tight-0.04': '-0.04em',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: {
          dark: '#020110',
          'violet-light': '#A79FC3',
          'white-main': '#EEE9FF',
          'white-50': '#696883',
        },
      },
      spacing: {
        4.5: '1.125rem',
      },
      animation: {
        'scroll-background': 'scroll-background 10s linear infinite',
        anim1: 'anim1 5s linear infinite',
        anim2: 'anim2 15s linear infinite',
        'animation-3': 'animation-3 1s linear infinite',
        'animation-4': 'animation-4 1s linear infinite',
      },
      keyframes: {
        'scroll-background': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        anim1: {
          '0%': { transform: 'scale(0.9) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(-10deg)' },
          '100%': { transform: 'scale(0.9) rotate(0deg)' },
        },
        anim2: {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(0.9)' },
        },
        'animation-3': {
          '0%': { transform: 'translate(0%,-50%)' },
          '50%': { transform: 'translate(-20%,-50%)' },
          '100%': { transform: 'translate(0%,-50%)' },
        },
        'animation-4': {
          '0%': { transform: 'translate(0%,-50%)' },
          '50%': { transform: 'translate(20%,-50%)' },
          '100%': { transform: 'translate(0%,-50%)' },
        },
      },
    },
  },
  plugins: [],
}
