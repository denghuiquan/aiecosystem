require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  singleTypes: ['general'],
  collectionTypes: ['post', 'tag']
  // 这是适合gatsby-source-api@1.0.3的配置
  // collectionTypes2: [
  //   {
  //     name: 'Post',
  //     endpoint: 'api/posts'
  //   },
  //   {
  //     name: 'Tag',
  //     endpoint: 'tags'
  //   }
  // ]
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    description: 'The best website builder tools is gatsby',
    author: 'denghuiquan',
    title: `AiEcosystem`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-less',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown',
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'json',
        path: `${__dirname}/json/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'xml',
        path: `${__dirname}/xml/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              withWebp: true
              // quality: 80
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig
    },
    {
      resolve: 'gatsby-source-mystrapi',
      options: strapiConfig
    },
    'gatsby-transformer-xml'
  ]
}
