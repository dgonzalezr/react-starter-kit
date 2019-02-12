const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');

/** Plugins */
// $FlowFixMe: There's no type definition for this npm package yet
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/** Importing Base Webpack */
const baseConfig = require('./webpack.config.base');

/** Helper */
const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

const prodConfiguration = env =>
  merge([
    {
      mode: 'production',
      output: {
        // The build folder.
        path: resolveApp('dist'),
        // Generated JS file names (with nested folders).
        // One main bundle, and one file per asynchronous chunk.
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        // Point sourcemap entries to original disk location (format as URL on Windows)
        devtoolModuleFilenameTemplate: info =>
          path.relative(resolveApp('src'), info.absoluteResourcePath).replace(/\\/g, '/')
        // TODO: inferred the "public path"
      },
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        },
        minimizer: [new UglifyJsPlugin()]
      },
      plugins: [
        // new OptimizeCssAssetsPlugin(),
        new Visualizer({
          filename: './statistics.html'
        })
      ]
    }
  ]);

module.exports = env => merge(baseConfig(env), prodConfiguration(env));
