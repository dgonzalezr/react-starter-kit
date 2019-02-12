const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel']
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: {
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[ext]'
              }
            }
          },
          {
            test: /\.(ttf|eot|woff2?)$/i,
            use: {
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/fonts/[name].[ext]'
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        })
      ]
    }
  ]);
};
