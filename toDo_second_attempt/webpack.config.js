const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans the dist folder on each build
  },
  devServer: {
    static: './dist', // Directory for static files
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
    ],
  },
  mode: 'development', // Use 'production' for the final build
};
