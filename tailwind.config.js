/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#3d3d3d',
          600: '#4a4a4a',
          500: '#5c5c5c',
          400: '#7a7a7a',
        },
        accent: {
          DEFAULT: '#e8a838',
          light: '#f0be5c',
          dark: '#c8882a',
          50: 'rgba(232, 168, 56, 0.1)',
          100: 'rgba(232, 168, 56, 0.2)',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf8ef',
          200: '#f5ede0',
          300: '#e8ddd0',
        },
        light: {
          100: '#ffffff',
          200: '#f8f6f3',
          300: '#e8e4df',
          400: '#9a9590',
          500: '#6b6560',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
