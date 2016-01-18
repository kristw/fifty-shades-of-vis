var webpack = require('webpack');

module.exports = {
  module:{
    preLoaders: [
      // instrument only source files with Istanbul
      {
        test: /[^(spec)]\.js$/,
        loader: 'istanbul-instrumenter'
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ],
  },
  resolve: {
    modulesDirectories: ['src/bower_components']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};