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
  },
  'blog_post': {
    path: '/blog/',
    template: path.resolve(`src/templates/BlogPost/index.js`)
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
          allPrismicDocument(
              sort: { order: DESC, fields: first_publication_date }
            ) {
            edges {
              node {
                slugs
                type
                fields {
                  permalink
                }
                data {
                  feature_name {
                    type
                    text
                  }
                  feature_tagline {
                    type
                    text
                  }
                  sell {
                    type
                    text
                  }

                  title {
                    type
                    text
                  }
                  excerpt {
                    type
                    text
                  }
                  feature_image {
                    url
                  }

                  key_stat_figure
                  key_stat_text
                  large_image {
                    url
                  }
                  summary {
                    type
                    text
                  }
                  company_name {
                    type
                    text
                  }
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

        const posts = result.data.allPrismicDocument.edges;

        posts.forEach((post, i) => {

          const node = post.node;

          const path = dataTemplateMap[node.type].path + node.slugs[0];

          let prev, next;

          let pastPosts = posts.slice(0, i);
          pastPosts.reverse();

          for(let prevPost of pastPosts) {
            if(prevPost.node.type === node.type && prevPost.node.fields.permalink !== node.fields.permalink) {
              prev = prevPost.node;
              break;
            }
          };

          let nextPosts = posts.slice(i, posts.length - 1);

          for(let nextPost of pastPosts) {
            if(nextPost.node.type === node.type && nextPost.node.fields.permalink !== node.fields.permalink) {
              next = nextPost.node;
              break;
            }
          };

          createPage({
            path,
            component: dataTemplateMap[node.type].template,
            context: {
              permalink: path,
              prev,
              next
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
