module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#31426f',
        primarydark: '#202026',
        primarylight: '#FAFAFF',
      },
    },
  },
  plugins: [],
}