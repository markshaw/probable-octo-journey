const plugin = require('tailwindcss/plugin')

// Adds a variant that applies styles when a sibling element is focused
const focusedSiblingPlugin = plugin(function ({ addVariant }) {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`
    })
  })
})

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './tailwind/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      colors: {
        primary: {
          'brand-1': '#252e59',
          'brand-2': '#0097dc',
          'brand-3': '#f2c216',
          'brand-4': '#04bf68',
          'brand-5': '#55b3d9',
        },
        secondary: {
          'brand-1-dark': '#000a33',
          'brand-3-light': '#fffbcd',
          'brand-3-dark': '#cc6600',
          error: '#ff5533',
          'error-dark': '#de3700',
          highlight: '#ffff00',
        },
        interface: {
          'light-grey': '#F5F8FA',
          'light-grey-2': '#ECF2F7',
          'medium-grey': '#BED1DD',
          'medium-grey-2': '#91B0C2',
          'medium-grey-3': '#6F96AE',
          'dark-grey': '#636985',
          charcoal: '#484b58',
        },
        // old color names, deprecated
        'inclined-blue': '#252e59', // "Brand Color 1"
        'inclined-blue-bright': '#0097dc', // "Brand Color 2"
        'inclined-yellow': '#F2C216', // "Brand Color 3"
        'inclined-green': '#04BF68', // "Brand Color 4"
        'inclined-blue-light': '#55B3D9', // "Brand Color 5"
        'secondary-highlight': '#FFFBCD',
        'secondary-blue-dark': '#000A33', // "Brand Color 1 Dark"
        'secondary-red-dark': '#CC6600', // "Secondary Brand Color 3 dark"
        'secondary-yellow-light': '#FFFBCD', // "Secondary Brand Color 3 light"
        'light-grey': '#F5F8FA',
        'light-grey-2': '#ECF2F7',
        'medium-grey': '#BED1DD',
        'medium-grey-2': '#91B0C2',
        'medium-grey-3': '#6F96AE',
        'dark-grey': '#636985',
        charcoal: '#484B58',
      },
      letterSpacing: {
        1: '.01em',
        3: '.03em',
      },
      boxShadow: {
        inclined:
          '0 1px 2px rgba(0, 0, 0, 0.05), 0 6px 18px rgba(0, 151, 220, 0.2)',
        'inclined-lg':
          '0 1px 4px rgba(0, 0, 0, 0.2), 0 16px 24px rgba(0, 151, 220, 0.3)',
        callout:
          '0px 1px 2px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 151, 220, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    focusedSiblingPlugin,
  ],
}
