const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", './js/load_js.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].min.css'}
          },
          'sass-loader'
        ]
      },
      {
        // test: /\.css$/,
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ],
      },
      {
        // test: /\.vue$/,
        // loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    // new VueLoaderPlugin(),
    // new CopyPlugin({
    // patterns: [
    //   // { from: './src/img', to: `${path.resolve(__dirname, 'dist')}/img` },
    //   // { from: './src/css/.', to: `${path.resolve(__dirname, 'dist')}/css` },
    //   // { from: './src/index.html', to: `${path.resolve(__dirname, 'dist')}/index.html` },
    //   // { from: 'other', to: 'public' },
    // ],
    // }),
    new CompressionPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};
