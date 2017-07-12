const path = require(`path`)
const slash = require(`slash`)
const _ = require(`lodash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const caseStudyTemplate = path.resolve(`src/templates/CaseStudy/index.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;

          let template;

          if(_.includes(path, `/case-studies/`)) {
            template = slash(caseStudyTemplate);
          }

          createPage({
            path,
            component: template,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
            }
          })
        })
      })
    )
  })
}
