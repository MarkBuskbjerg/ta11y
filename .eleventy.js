/* eslint-disable */

module.exports = function (eleventyConfig) {

	// Publish later

	eleventyConfig.addCollection('posts', collection => {
		// Check if draft is true in frontmatter - used to exclude from the collection
		const isLive = post => !post.data.draft;
		// TODO: Check if this is on production or development environment
		// TODO: Figure out a way to get only from posts folder
		return collection.getFilteredByGlob('**/*.njk')
			.filter(isLive)
			.filter(item => !item.inputPath.includes('index.njk'))
			.reverse();
	});


	// Layout aliases
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
	eleventyConfig.addLayoutAlias('single-post', 'layouts/single-post.njk');

	// BrowserSync configuration
	eleventyConfig.setBrowserSyncConfig({
		files: ['public/**/*'],
		open: true,
	});

	// Simplify directories
	return {
		dir: {
			input: 'src/views',
			output: 'public',
		},
	};
};
