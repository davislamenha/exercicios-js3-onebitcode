const path = require('path');

module.exports = {
  entry: {
    exercicio_2: './src/exercicio_2.js',
    calc: './src/calc.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
