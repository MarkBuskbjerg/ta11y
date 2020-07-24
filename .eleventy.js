const pluginTOC = require('eleventy-plugin-toc');
/* eslint-disable */

module.exports = function (eleventyConfig) {
	// Layout aliases
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

	eleventyConfig.setBrowserSyncConfig({
		files: ['public/**/*'],
		open: true,
	});

	eleventyConfig.addPlugin(pluginTOC);

	return {
		dir: {
			input: 'src/views',
			output: 'public',
		},
	};
};
