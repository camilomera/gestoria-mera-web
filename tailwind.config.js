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
          900: '#0a0f1a',
          800: '#0f1520',
          700: '#131b2a',
          600: '#1a2332',
          500: '#1e2a3a',
          400: '#253344',
        },
        accent: {
          DEFAULT: '#3b9b8f',
          light: '#4db5a4',
          dark: '#2d7a70',
          50: 'rgba(59, 155, 143, 0.1)',
          100: 'rgba(59, 155, 143, 0.2)',
        },
        light: {
          100: '#ffffff',
          200: '#f0f2f5',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
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
