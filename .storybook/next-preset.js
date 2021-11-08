const path = require('path');

module.exports = {
    webpackFinal: async (baseConfig, options) => {
        const { module = {} } = baseConfig;
        const newConfig = {
            ...baseConfig,
            module: {
                ...module,
                rules: [...(module.rules || [])],
            },
        };
        // newConfig.module.rules.push({
        //     test: /\.(s*)css$/,
        //         loaders: 
        //         [
        //             'style-loader',
        //             'css-loader',
        //             'postcss-loader'
        //         ],
        //     // include: path.resolve(__dirname, '..'),
        //     });
        newConfig.resolve.modules = [
            path.resolve(__dirname, "../src"),
            "node_modules",
        ];
            
    return newConfig;
  },
};