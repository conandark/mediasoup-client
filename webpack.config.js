module.exports = [
  {
      entry: './lib/index.js',
      output: {
        path: __dirname,
        filename: 'mediasoup.js',
        libraryTarget: 'commonjs2',
        library: 'mediasoup'
      }
  }
];