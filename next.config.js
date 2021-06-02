const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages, {fileExtensions: ["jpg", "jpeg", "png", "gif"],}]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          },
        },
      ],
    });
    return config;
  },
});
