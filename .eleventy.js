/* eslint-disable */

module.exports = function (eleventyConfig) {
	// Publish later
	// This code adds a custom Eleventy collection named 'posts' that filters blog posts based on their frontmatter data and the current environment (production or development).

	eleventyConfig.addCollection('posts', (collection) => {
		// Check if draft is true in frontmatter - used to exclude from the collection
		const isLive = (post) => !post.data.draft;

		// Check if date of a post is set in the future
		const isScheduled = (post) => post.date <= new Date();

		// Removes the index.njk from the collection
		const isIndex = (post) => !post.inputPath.includes('index.njk');

		// If the current environment is not production (i.e., it is in development), return all posts, including drafts.
		if (process.env.ELEVENTY_ENV !== 'production') {
			return collection.getFilteredByGlob('**/*.njk').filter(isIndex).reverse();
		} else {
			// If the current environment is production, return only live, scheduled (not future-dated), and non-index posts.
			return collection.getFilteredByGlob('**/*.njk').filter(isLive).filter(isScheduled).filter(isIndex).reverse();
		}
	});

	// Layout aliases
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
	eleventyConfig.addLayoutAlias('single-post', 'layouts/single-post.njk');

	// BrowserSync configuration
	eleventyConfig.setBrowserSyncConfig({
		files: ['_site/**/*'],
		open: true,
	});

	// Simplify directories
	return {
		dir: {
			input: 'src/views',
			output: '_site',
		},
	};
};
