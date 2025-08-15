module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gradientStart: '#1e3a8a',
        gradientMid: '#6d28d9',
        gradientEnd: '#7c3aed',
      },
      boxShadow: { glass: '0 8px 32px rgba(31, 38, 135, 0.37)' },
    },
  },
  plugins: [],
};
