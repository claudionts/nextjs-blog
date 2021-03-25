const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    loader: 'imgix',
    path: '/images',
  },
  webpack: (config, { defaultLoaders, webpack  }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
        },
      ],
    })

    return config
  },
})