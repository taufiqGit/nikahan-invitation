module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      'transparent': 'transparent',
      'coklat-muda': '#916529',
      'kuning-muda': '#E3C251',
      'gold': '#927A3A',
      'black': '#0B0B0B',
      'white': '#fff'
    }),    
    borderColor: (theme) => ({
      // ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
      'coklat-muda': '#916529',
      'kuning-muda': '#E3C251'
    }),
    textColor: {
      'white': '#fff',
      'coklat-muda': '#916529',
      'kuning-tua': '#E3C251',
      'gold': '#927A3A',
      'danger': '#e3342f',
    },
    placeholderColor: {
      'coklat-muda': '#916529',
    },
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        Quicksand: ['Quicksand', 'serif'],
        DancingScript: ['Dancing Script', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif'],
        JosefinSlab: ['Josefin Slab', 'serif'],
        Playball: ['Playball', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
