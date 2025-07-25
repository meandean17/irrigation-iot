const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new InjectManifest({
          swSrc: './src/sw.js',
          swDest: 'service-worker.js',
        }),
      ],
    },
  },
}; 