const dotenv = require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: `IceCremeCore`,
    description: `The home of Supreme.Icecreme`,
    author: `Supreme.Icecreme`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `icecremecore`,
        short_name: `icc`,
        start_url: `/`,
        background_color: `#e3292a`,
        theme_color: `#e3292a`,
        display: `minimal-ui`,
        icon: `src/images/SupremeIcecreme.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xucp5pnnv1sk`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
