export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C79A9A',   // main client color
          secondary: '#B5695A', // deeper accent used before
          light: '#E7C8C6',     // soft blush background
          cream: '#F8F3F2',     // off-white warm base
          dark: '#2A2A2A',      // text contrast
          gold: '#D6B792',      // optional luxury accent
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
