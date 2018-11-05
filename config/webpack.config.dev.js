const webpack = require('webpack');
const merge = require('webpack-merge');

/** Importing Base Webpack */
const baseConfig = require('./webpack.config.base');

const devConfiguration = env =>
    merge([
        {
            devServer: {
                // Enable hot reloading without full page reloading
                hotOnly: true,
                // Local development environment runngin on http://127.0.0.1:3001
                port: 3001
            },
            devtool: 'inline-source-map',
            mode: 'development',
            plugins: [new webpack.HotModuleReplacementPlugin()]
        }
    ]);

module.exports = env => merge(baseConfig(env), devConfiguration(env));
