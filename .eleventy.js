/* eslint-disable */

module.exports = function (eleventyConfig) {
	// Layout aliases
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
	eleventyConfig.addLayoutAlias('single-post', 'layouts/single-post.njk');

	eleventyConfig.setBrowserSyncConfig({
		files: ['public/**/*'],
		open: true,
	});

	return {
		dir: {
			input: 'src/views',
			output: 'public',
		},
	};
};
