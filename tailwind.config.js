const production = !process.env.ROLLUP_WATCH;

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      'gruvbox-dark-bg': '#282828',
      'gruvbox-dark-fg': '#ebdbb2',
      'gruvbox-dark-red': '#cc241d',
      'gruvbox-dark-green': '#98971a',
      'gruvbox-dark-yellow': '#d79921',
      'gruvbox-dark-blue': '#458588',
      'gruvbox-dark-purple': '#b16286',
      'gruvbox-dark-aqua': '#689d6a',
      'gruvbox-dark-grey': '#a89984',
      'gruvbox-dark-orange': '#d65d0e',
      'gruvbox-light-bg': '#fbf1c7',
      'gruvbox-light-fg': '#3c3836',
      'gruvbox-light-red': '#cc241d',
      'gruvbox-light-green': '#98971a',
      'gruvbox-light-yellow': '#d79921',
      'gruvbox-light-blue': '#4585588',
      'gruvbox-light-purple': '#b16286',
      'gruvbox-light-aqua': '#689d6a',
      'gruvbox-light-grey': '#7c6f64',
      'gruvbox-light-orange': '#d65d0e',
    },
  },
  purge: {
    content: [
      './src/**/*.svelte',
      // may also want to include base index.html
    ],
    options: {
      keyframes: true,
    },
    enabled: production, // disable purge in dev
  },
};
