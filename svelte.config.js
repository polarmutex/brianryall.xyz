const sveltePreprocess = require('svelte-preprocess');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  preprocess: [
    sveltePreprocess({
      //default
      //postcss: {
      //  plugins: [require('autoprefixer')],
      //},
      sourceMap: !production,
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss-nesting")]
      }
    }),
  ],
};
