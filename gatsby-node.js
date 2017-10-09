const path = require(`path`)
const slash = require(`slash`)
const _ = require(`lodash`)

const dataTemplateMap = {
  'case_study': {
    path: '/case-studies/',
    template: path.resolve(`src/templates/CaseStudy/index.js`)
  },
  'feature': {
    path: '/features/',
    template: path.resolve(`src/templates/Feature/index.js`)
  },
  'page': {
    path: '/',
    template: path.resolve(`src/templates/GenericPost/index.js`)
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Query for Prismic nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
          allPrismicDocument {
            edges {
              node {
                slugs
                type
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

        result.data.allPrismicDocument.edges.forEach(({ node }) => {

          const path = dataTemplateMap[node.type].path + node.slugs[0];

          createPage({
            path,
            component: dataTemplateMap[node.type].template,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              permalink: path,
            }
          })
        })
      })
    )
  })
}

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `PrismicDocument`) {
    const slug = node.data.permalink || node.slugs[0];
    const path = dataTemplateMap[node.type].path + slug;
    createNodeField({ node, name: `permalink`, value: path});
  }// else if (
  //   node.internal.type === `MarkdownRemark` &&
  //   typeof node.slug === `undefined`
  // ) {
  //   const fileNode = getNode(node.parent)
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: fileNode.fields.slug,
  //   })

    // if (node.frontmatter.tags) {
    //   const tagSlugs = node.frontmatter.tags.map(
    //     tag => `/tags/${_.kebabCase(tag)}/`
    //   )
    //   createNodeField({ node, name: `tagSlugs`, value: tagSlugs })
    // }
  // }
}
