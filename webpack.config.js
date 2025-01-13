const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // Set mode to 'development' or 'production'
};
