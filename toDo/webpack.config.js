const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Set to 'development' or 'production'
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
