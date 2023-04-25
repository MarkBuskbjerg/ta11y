const path = require("path");

module.exports = async () => {
  return {
    layout: "page",
    tags: "page",
    eleventyComputed: {
      permalink: (data) => {
        const rootPath = path.join(__dirname, "../");
        const pagePath = path.relative(rootPath, data.page.inputPath);
        return "/" + path.parse(pagePath).name + "/";
      },
    },
  };
};
