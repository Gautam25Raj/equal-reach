/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
        'twitter-hover': '#1A8CD8',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.text-rainbow': {
          background:
            'var(--lgbtq-text, linear-gradient(270deg, #AE00EB 0%, #2A19F4 24.44%, #00E456 40.00%, #CEB800 60.00%, #EF6C00 80.00%, #F80029 100%))',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },

        '.btn-rainbow': {
          'border-radius': '50px',
          background:
            'var(--lgbtq-btn, linear-gradient(-90deg, #B100F4 0%, #5E00F8 14.29%, #363EFD 28.57%, #00C78B 42.86%, #95DB00 57.14%, #E2E700 71.43%, #FF8A00 85.71%, #F13A00 100%))',
        },
      });
    }),
  ],
};
