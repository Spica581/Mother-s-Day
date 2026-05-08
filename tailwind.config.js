/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush:    '#FFF0F5',
        rose:     '#FF6B9D',
        petal:    '#FFB6C1',
        bloom:    '#FF8FAB',
        cream:    '#FFF8F0',
        plum:     '#4A2C3D',
        mauve:    '#C9748B',
        lavender: '#FFDEE9',
        gold:     '#F4C3A1',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        script:  ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'float-slow':     'float 8s ease-in-out 1s infinite',
        'pulse-soft':     'pulseSoft 3s ease-in-out infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'spin-slow':      'spin 20s linear infinite',
        'heartbeat':      'heartbeat 1.5s ease-in-out infinite',
        'fade-in-up':     'fadeInUp 1s ease forwards',
        'twinkle':        'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-15px) rotate(3deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1,   transform: 'scale(1)' },
          '50%':      { opacity: 0.7, transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%':      { transform: 'scale(1.3)' },
          '28%':      { transform: 'scale(1)' },
          '42%':      { transform: 'scale(1.3)' },
          '70%':      { transform: 'scale(1)' },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%':      { opacity: 1,   transform: 'scale(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rose-shimmer':    'linear-gradient(90deg, #FF6B9D 0%, #FFB6C1 25%, #FFF0F5 50%, #FFB6C1 75%, #FF6B9D 100%)',
      },
    },
  },
  plugins: [],
}
