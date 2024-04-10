const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './server.js', // Entry point for server-side code
  target: 'node', // Specify target as node
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js', // Output bundle for server code
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
