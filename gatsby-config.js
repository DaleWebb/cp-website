module.exports = {
  pathPrefix: '/cp-website',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
};