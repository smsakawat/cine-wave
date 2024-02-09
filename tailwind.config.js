export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        'padding-inline': '1.25rem',
      },
      colors: {
        primary: '#10b981',
      },
    },
  },
  plugins: [],
};
