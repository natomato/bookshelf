//TODO: use path variable for file dirs join __dirname
module.exports = {
  entry: './app/Main.jsx',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
