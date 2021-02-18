const autoProcess = require('svelte-preprocess');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    preprocess: autoProcess({
        sourceMap: dev,
        postcss: true
    }),
};
