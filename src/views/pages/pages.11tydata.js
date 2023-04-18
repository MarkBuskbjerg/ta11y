module.exports = async () => {
	return {
		layout: 'page',
		tags: 'page',
		eleventyComputed: {
			permalink: (data) => {
				return data.page.filePathStem.replace('/pages/', '/') + '.html';
			},
		},
	};
};
