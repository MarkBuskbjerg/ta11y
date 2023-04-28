const fs = require("fs");

module.exports = async () => {
  return {
    layout: "single-post",
    eleventyComputed: {
      permalink(data) {
        const isScheduled = new Date(data.date) > new Date();
        const isDraft = !data.draft;
        if (process.env.ELEVENTY_ENV !== "production") {
          // If NOT Production build, process all files in this directory
          return data.permalink || "/posts/{{ title | slug }}/index.html";
        } else {
          // If production build, exclude drafts and scheduled posts
          if (isDraft || !isScheduled) {
            return data.permalink || "/posts/{{ title | slug }}/index.html";
          }
          return false;
        }
      },
      scheduled(data) {
        const isScheduled = new Date(data.date) > new Date();
        return isScheduled;
      },
    },
  };
};
