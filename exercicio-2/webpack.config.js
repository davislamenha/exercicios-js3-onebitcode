const path = require('path');

module.exports = {
  entry: {
    exercicio_2: './src/exercicio_2.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
  },
};
