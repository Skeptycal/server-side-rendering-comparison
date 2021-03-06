var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {

  entry: {
    'client.marko': './assets/src/app/index.marko',
    'client.react': './assets/src/client.react.js',
    'client.rax': './assets/src/client.rax.js',
    'client.preact': './assets/src/client.preact.js',
    'client.vue': './assets/src/client.vue.js',
    'client.inferno': './assets/src/client.inferno.js'
  },
  output: {
    filename: './assets/build/[name].bundle.js'
  },
  module: {
    loaders:[
      // react & rax & styles.js
      {
        test: /(rax|p?react|.)\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.inferno\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['babel-plugin-syntax-jsx', 'inferno']
        }
      },
      {
        test: /\.vue\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-0'],
          'plugins': [
            'transform-vue-jsx'
          ]
        }
      },
      {
        test: /\.marko$/,
        exclude: /node_modules/,
        loader: 'marko-loader'
      }
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'rax': 'window.Rax',
    'vue': 'window.Vue',
    'preact': 'window.preact',
    'inferno': 'window.Inferno'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
};