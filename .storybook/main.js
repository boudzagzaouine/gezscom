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
  presets: [path.resolve(__dirname, "./next-preset.js")],
  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: true,
  //       esModuleInterop: true,
  //     },
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) =>
  //       prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
  //   },
  // },
  webpackFinal: (config) => {
    return {
      ...config,
      node: {
        ...config.node,
        //bugfix next-i18n
        fs: "empty",
      },
    };
  },
  // "core": {
  //   "builder": "webpack5"
  // },
};
