const glob = require('glob');
const path = require('path');
const fs = require('fs');
const svelte = require('svelte/compiler');
const { mdsvex } = require('mdsvex');

const plugin = {
  name: 'elderjs-plugin-mdsvex',
  description: 'Allows mdsvex files to be processed with elderjs',
  init: async (plugin) => {
    // used to store the data from the specified routes.
    plugin.mdsvex = {};
    plugin.requests = [];
    plugin.references = {};

    const { openPattern, closePattern } = plugin.settings.shortcodes;

    if (plugin.config && Array.isArray(plugin.config.routes) && plugin.config.routes.length > 0) {
      for (const route of plugin.config.routes) {
        plugin.mdsvex[route] = [];
        const mdsvexInRoute = path.resolve(plugin.settings.srcDir, './routes/', route);
        const mdsvexFiles = glob.sync(`${mdsvexInRoute}/**/*.svx`);

        for (const file of mdsvexFiles) {
          let source = fs.readFileSync(file, 'utf-8');

          // This will give you a valid svelte component
          const preprocessed = await svelte.preprocess(source, mdsvex(plugin.config.mdsvex_opts));

          // Now you can compile it if you wish
          const compiled = svelte.compile(preprocessed, plugin.config.compiler_options);
        }
      }
    }
  },
  config: {
    routes: [],
    mdsvexOptions: {},
    compiler_options: {},
  },
};

module.exports = plugin;
exports.default = plugin;
