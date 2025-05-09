/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // full reset for all inline and block code
            pre: {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
            },
            code: {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'p > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            'li > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase }) {
      addBase({
        'code': {
          all: 'unset',
          fontFamily: 'monospace',
          fontSize: '1rem',
          color: '#1f2937',
        },
      });
    }),
  ],
};
