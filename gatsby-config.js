module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby4-starter.wernerdigital.com",
    description: `Gatsby4 general purpose starter`,
    title: "Gatsby4 Starter",
    author: "wdt",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Gatsby4 general purpose starter`,
        short_name: `gatsby4-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/wernerdigital-hosted.png",
        cache_busting_mode: `none`
      },
    },
    {
        resolve: `gatsby-plugin-offline`,
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          }
        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

  ],
};
