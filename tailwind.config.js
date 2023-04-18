// tailwind.config.js

// const plugin = require("tailwindcss/plugin");
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./_site/**/*.html', './src/**/*.{md,html,njk}'],
	purge: false, // This is handled through postcss.config.js
	theme: {},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
