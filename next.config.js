const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    // images: {
    //   domains: ['storage.googleapis.com'],
    // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    }

    // config.rules = [...config.rules, 
      // async function (src) {
      //   const callback = this.async()
      //   const {content, data} = matter(src)
      //   const code = `export const frontMatter = ${stringifyObject(data)}
      //   ${content}`
      //   console.log(code);
      //   return callback(null, code)
      // }
    // ]
    
    return config
  },
  // rules: [
  //   {
  //     test: /\.mdx?$/,
  //     use: [
  //       'babel-loader',
  //       '@mdx-js/loader',
  //     ]
  //   }
  // ]
})