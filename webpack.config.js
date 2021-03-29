const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const { mode = 'production' } = argv;
  const modeOption = mode === 'production' ? 'production' : 'development';
  const isProd = mode === 'production' ? true : false;

  const fileNames = '[contenthash]_[name]';
  const port = process.env.PORT;

  return {
    entry: './src/index.tsx',

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'awesome-typescript-loader',
        },

        {
          test: /\.(png|jpe?g|webp|git|svg|)$/i,
          use: [
            {
              loader: `img-optimize-loader`,
              options: {
                outputPath: 'images',
                name: '[contenthash:8].[ext]',
                compress: {
                  webp: true,
                  disableOnDevelopment: true,
                },
              },
            },
          ],
        },

        {
          test: /\.(ttf|eot|woff|svg|woff2)$/,
          loader: 'file-loader',
        },

        {
          test: /\.(ttf|eot|woff|svg|woff2)$/,
          loader: 'file-loader',
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'src/public', to: 'public' }],
      }),
    ],

    output: {
      publicPath: '/',
      filename: `${fileNames}.js`,
      path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
    },
  };
};
