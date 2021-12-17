const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpack: (config, { isServer }) => {
    if (config?.resolve) {
      if (!isServer && config.resolve.fallback) {
        config.resolve.fallback.fs = false;
      }
      config.resolve.modules = [
        path.resolve(__dirname, "../src"),
        "node_modules",
      ];
    }
    return config;
  },
};
