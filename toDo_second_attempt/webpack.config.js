const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devServer: {
      static: './dist',
    },
    module: {
      rules: [
        {
          test: /\.css$/i, // Match CSS files
          use: ['style-loader', 'css-loader'], // Loaders for CSS
        },
      ],
    },
    mode: 'development',
  };
  