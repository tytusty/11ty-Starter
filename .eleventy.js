module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/style.css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.setBrowserSyncConfig({ files: "./src/css/*.css" });
	eleventyConfig.addWatchTarget("./src/css/*");

	//eleventyConfig.setUseGitIgnore(false);
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
