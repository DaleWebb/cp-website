module.exports = {
  pathPrefix: '/cp-website',
  siteMetadata: {
    siteUrl: `https://dalewebb.github.io/cp-website`,
    gitRepo: `cp-website`
  },
  plugins: [
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `careplanner`,
        accessToken: `MC5XYmxqc3g4QUFMOFNXZm9E.77-977-9fhLvv73vv71eD--_ve-_ve-_vVbvv73vv71UL--_ve-_ve-_vRlbJu-_ve-_ve-_vUnvv70GFW59PQ`,
      },
    },
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
    },
    {
      resolve: `cookie-policy`,
      options: {
        "palette": {
          "popup": {
            "background": "#252e39"
          },
          "button": {
            "background": "#14a7d0"
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ]
};
