const path = require('path'); // Import path once
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin once

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Regex for .ts or .tsx files
        use: 'ts-loader', // Use ts-loader for transpiling TypeScript files
        exclude: /node_modules/, // Exclude node_modules
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add this rule
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions in imports
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
    }),
  ],
  devServer: {
    static: './dist', // Serve files from 'dist'
    compress: true,
    port: 9000, // Serve on port 9000
  },
  mode: 'development', // Set the mode to development
};
