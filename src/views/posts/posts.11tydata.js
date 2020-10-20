module.exports = async () => {
	return {
		layout: 'single-post',
		tags: 'post',
		eleventyComputed: {
			permalink(data) {
				// TODO: Check if this is on production or development environment
				// If NOT Production build, process all files in this directory 
				if (process.env.ELEVENTY_ENV !== 'production') {
					return data.permalink || '/posts/{{ title | slug }}/index.html';
				} else {
					if (!data.draft || new Date(data.date) <= new Date()) {
						// Return the original set permalink from frontmatter OR create a new slug for the post
						return data.permalink || '/posts/{{ title | slug }}/index.html';
					}
					return false;
				}
			}
		}
	}
};
