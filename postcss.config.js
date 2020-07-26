const tailwindcss = require("tailwindcss");

// module.exports = {
//   plugins: [
//     ,
//     require("autoprefixer")
//   ]
// }
module.exports = {
  plugins: [
    require("postcss-import"),
    tailwindcss("./tailwind.config.js"),
    require("postcss-nested"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? [
          require("@fullhuman/postcss-purgecss"),
          {
            content: ["./src/**/{*.js, *.tsx}"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ["html", "body", "theme-light"],
          },
        ]
      : undefined,
    require("postcss-preset-env"),
  ],
};
