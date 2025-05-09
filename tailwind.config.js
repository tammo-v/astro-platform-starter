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
              padding: '0',
              borderRadius: '0',
              boxShadow: 'none',
              color: '#1f2937', // Tailwind gray-800
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
