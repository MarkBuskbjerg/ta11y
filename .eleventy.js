/* eslint-disable */

module.exports = function (eleventyConfig) {

	// Publish later

	eleventyConfig.addCollection('posts', collection => {
		// Check if draft is true in frontmatter - used to exclude from the collection
		const isLive = post => !post.data.draft && post.date <= new Date();
		const isIndex = post => !post.inputPath.includes('index.njk');
		// Return all posts - including drafts - when in development environment
		if (process.env.ELEVENTY_ENV !== 'production')
			return collection
				.getFilteredByGlob('**/*.njk')
				.filter(isIndex)
				.reverse();
		else {
			// TODO: Figure out a way to get only from posts folder
			return collection
				.getFilteredByGlob('**/*.njk')
				.filter(isLive)
				.filter(isIndex)
				.reverse();
		}
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
