import React from 'react';

import presets from '../../utils/presets';

import BlogNavbar from '../../components/blog/navbar';
import BlogPostFeaturePreviewItem from '../../components/blog/post-feature-preview-item';
import BlogPostRowPreviewItem from '../../components/blog/post-row-preview-item';
import BlogPostImagePreviewItem from '../../components/blog/post-image-preview-item';
// import BlogPostTextPreviewItem from '../../components/blog/post-text-preview-item';
import BlogFooter from '../../components/blog/footer';

class BlogPostsIndex extends React.Component {
  render() {
    const { allPrismicDocument } = this.props.data

    return (
      <div>
      <BlogNavbar />
      <div css={styles.content}>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((node, id) => {
            switch(id) {
              case 0:
              return (
                <BlogPostFeaturePreviewItem
                  post={node}
                  key={id}
                />
              );
              case 1:
                return (
                  <BlogPostRowPreviewItem
                    post={node}
                    key={id}
                  />
                );
              return;
              default:
                if(true) {//if it has an image
                  return (
                    <BlogPostImagePreviewItem
                      post={node}
                      key={id}
                    />
                  );
                } else {
                  return (
                    <BlogPostTextPreviewItem
                      post={node}
                      key={id}
                    />
                  );
                }
              return;
            }
          })}
        </div>
        <BlogFooter />
      </div>
    );
  }
}

const styles = {
  content: {
    width: '1000px',
    margin: '145px auto 0 auto'
  }
}

export default BlogPostsIndex;

export const pageQuery = graphql`
  query BlogPostsIndexQuery {
    allPrismicDocument(
      filter: {
        type: { eq: "case_study" }
      }
    ) {
      edges {
        node {
          type
        }
      }
    }
  }
`;
