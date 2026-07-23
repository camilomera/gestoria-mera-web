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
        midnight: {
          DEFAULT: '#191970',
          light: '#2a2a8a',
          dark: '#0f0f50',
          50: 'rgba(25, 25, 112, 0.05)',
          100: 'rgba(25, 25, 112, 0.1)',
          200: 'rgba(25, 25, 112, 0.2)',
        },
        mintcream: {
          DEFAULT: '#F2EEC4',
          light: '#F7F4D6',
          dark: '#E8E4B0',
        },
        // Alias 'mint' to 'mintcream' so existing classes (mint-50, mint-100, etc.) resolve
        mint: {
          50: '#F2EEC4',
          100: '#F5F1CC',
          200: '#EDE9B8',
          300: '#E5E0A5',
        },
        orange: {
          DEFAULT: '#ffa500',
          light: '#ffb833',
          dark: '#e69500',
          50: 'rgba(255, 165, 0, 0.1)',
          100: 'rgba(255, 165, 0, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite alternate',
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
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 165, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 165, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.4)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
