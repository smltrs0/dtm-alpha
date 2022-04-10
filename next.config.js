
module.exports = {
    webpack(config, options) {
      config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/sounds/'
          }
        },
      });
      return config;
    },
  }
