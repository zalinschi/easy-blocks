const autoprefixer = require('autoprefixer')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
var path = require('path')
const glob = require('glob')

module.exports = (env, argv) => {
  function isDevelopment () {
    return argv.mode === 'development'
  }

  var config = {
    entry: {
      editor: './src/editor.js',
      script: './src/script.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(
          {
            cssProcessorOptions: {
              map: {
                inline: false,
                annotation: true,
              },
            },
          }),
      ],
    },
    plugins: [
      new CleanPlugin(),
      new CopyPlugin({
        patterns: [
          { from: './src/prismjs/grammars', to: './prismjs/grammars' },
          { from: './src/prismjs/themes', to: './prismjs/themes' },
        ],
      }),
      new MiniCSSExtractPlugin({
        chunkFilename: '[id].css',
        filename: chunkData => {
          return chunkData.chunk.name == 'script' ? 'style.css' : '[name].css'
        },
      }),
    ],
    devtool: isDevelopment() ? 'cheap-module-source-map' : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-proposal-class-properties'],
              presets: [
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    'pragma': 'wp.element.createElement',
                    'pragmaFrag': 'wp.element.Fragment',
                    'development': isDevelopment(),
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer(),
                ],
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    externals: {
      jquery: 'jQuery',
      '@wordpress/blocks': ['wp', 'blocks'],
      '@wordpress/i18n': ['wp', 'i18n'],
      '@wordpress/editor': ['wp', 'editor'],
      '@wordpress/block-editor': ['wp', 'blockEditor'],
      '@wordpress/components': ['wp', 'components'],
      '@wordpress/element': ['wp', 'element'],
      '@wordpress/blob': ['wp', 'blob'],
      '@wordpress/data': ['wp', 'data'],
    },
  }
  return config
}