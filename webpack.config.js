const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/client/index.tsx', // Assuming your main React file is here
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // You can add more loaders here for other file types
    ],
  },
};