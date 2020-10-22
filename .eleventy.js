/* eslint-disable */
const dateFilter = require('./src/filters/datefilter.js');

module.exports = function (eleventyConfig) {

	// Import filters
	eleventyConfig.addFilter('dateFilter', dateFilter);

	// Publish later
	eleventyConfig.addCollection('posts', collection => {
		// Check if draft is true in frontmatter - used to exclude from the collection
		const isLive = post => !post.data.draft;
		// Check if date of a post is set in the future
		const isScheduled = post => post.date <= new Date();
		// Removes the index.njk from the collection
		const isIndex = post => !post.inputPath.includes('index.njk');

		if (process.env.ELEVENTY_ENV !== 'production') {
			// Return all posts - including drafts - when in development environment
			return collection
				.getFilteredByGlob('**/*.njk')
				.filter(isIndex)
				.reverse();
		} else {
			// Return the filtered and ready for production list of posts
			return collection
				.getFilteredByGlob('**/*.njk')
				.filter(isLive)
				.filter(isScheduled)
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
