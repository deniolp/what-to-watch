const {join} = require('path');

const path = join(__dirname, 'public');

const entry = './src/index.tsx';
const output = {
  filename: 'bundle.js',
  path,
};

const contentBase = path;
const compress = false;
const hot = true;
const open = true;
const port = 1339;
const historyApiFallback = true;
const devServer = {contentBase, compress, hot, open, port, historyApiFallback};

const babelizing = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const tsLoader = {
  test: /\.(tsx|ts)?$/,
  loader: `ts-loader`
};

const rules = [babelizing, tsLoader];

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx']
};

module.exports = {
  entry,
  output,
  resolve,
  devServer,
  module: {rules},
  devtool: 'source-map',
};
