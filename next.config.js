module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    }
    
    return config
  },
}