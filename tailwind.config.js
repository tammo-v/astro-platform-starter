/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
            },
            code: {
              backgroundColor: 'transparent',
              color: '#1f2937', // Tailwind gray-800
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
              fontSize: '1rem',
              fontWeight: '400',
            },
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
            'h1 > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
