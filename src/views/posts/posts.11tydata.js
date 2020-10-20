module.exports = async () => {
	return {
		layout: 'single-post',
		tags: 'post',
		eleventyComputed: {
			permalink(data) {
				// TODO: Check if this is on production or development environment
				if (!data.draft) {
					// Return the original set permalink from frontmatter OR create a new slug for the post
					return data.permalink || '/posts/{{ title | slug }}/index.html';
				}
				return false;
			}
		}
	}
};
