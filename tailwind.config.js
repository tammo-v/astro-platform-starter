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
            // Remove all boxes and default styles from block code
            pre: {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
            },
            // Inline code general styling
            code: {
              backgroundColor: 'transparent',
              color: '#1f2937', // Tailwind gray-800
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Inline code in paragraph
            'p > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Inline code in list
            'li > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Inline code in headings
            'h1 > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            'h2 > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Remove before/after quotation marks
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
