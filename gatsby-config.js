module.exports = {
  pathPrefix: '/cp-website',
  siteMetadata: {
    siteUrl: `https://dalewebb.github.io/cp-website`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }

              allSitePage(
                filter: {
                  path: {regex: "/^((?!404).)*$/"}
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-5875SRQ`,
      },
    }
  ]
};
