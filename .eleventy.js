/* eslint-disable */
const { format } = require('date-fns');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const tailwind = require('tailwindcss');
const postCss = require('postcss');

module.exports = function (eleventyConfig) {
	// Registering a async filter to all nunjuck templates
	// unfortunally it didn't saw the possiblity to register
	// 'global' async filters (say for all other templating engines
	// but I'm fine with this solution
	eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
		// Here is where the magic will happen
		postCss([
			tailwind({
				// config for tailwind goes here
				content: ['./_site/**/*.html', './src/**/*.{md,html,njk}'],
				// purge: false, // This is handled through postcss.config.js
				theme: {},
				plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
			}),
		])
			.process(cssCode)
			.then(
				(r) => done(null, r.css),
				(e) => done(e, null)
			);
	});

	// Publish later
	// This code adds a custom Eleventy collection named 'posts' that filters blog posts based on their frontmatter data and the current environment (production or development).
	eleventyConfig.addCollection('posts', (collection) => {
		// Check if draft is true in frontmatter - used to exclude from the collection
		const isLive = (post) => !post.data.draft;

		// Check if date of a post is set in the
		// TODO: This could probably be handled through a check on the frontmatter post.data.scheduled due to schedule(data) function in posts.11tydata.js
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

	// Pass through static assets
	eleventyConfig.addPassthroughCopy('src/views/robots.txt');

	// Collections
	// -----------------------------------------------------
	eleventyConfig.addCollection('allPosts', (collection) => {
		return collection.getFilteredByGlob('src/views/posts/*').filter((item) => item.inputPath !== './src/views/posts/index.njk');
	});

	// Return all the tags used in a collection - with heavy inspiration from eleventy-base-blog
	eleventyConfig.addFilter('getAllTags', (collection) => {
		let tagSet = new Set();
		for (let item of collection) {
			(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	// Filters
	// -----------------------------------------------------
	// A filter for the tag list – with heavy inspiration from eleventy-base-blog
	eleventyConfig.addFilter('filterTagList', function filterTagList(tags) {
		return (tags || []).filter((tag) => ['page', 'post'].indexOf(tag) === -1);
	});

	// Date filters
	// -----------------------------
	eleventyConfig.addFilter('datefmt', (contentDate) => {
		return format(contentDate, "LLL d'th' - yyyy");
	});

	// BrowserSync configuration
	eleventyConfig.setBrowserSyncConfig({
		files: ['_site/**/*'],
		open: true,
	});

	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);

	// Simplify directories
	return {
		dir: {
			input: 'src/views',
			output: '_site',
			layouts: '_includes/layouts',
		},
	};
};
