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
            // Block code: remove gray background and radius
            pre: {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
            },
            // Inline code (default)
            code: {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Inline code in paragraphs
            'p > code': {
              backgroundColor: 'transparent',
              color: '#1f2937',
              padding: '0',
              borderRadius: '0',
              fontSize: '1rem',
              fontWeight: '400',
            },
            // Inline code in list items
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
            // Remove quotation marks before/after inline code
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
