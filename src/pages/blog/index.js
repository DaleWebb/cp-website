import React from 'react';

import presets from '../../utils/presets';

import BlogNavbar from '../../components/blog/navbar';
import BlogPostFeaturePreviewItem from '../../components/blog/post-feature-preview-item';
import BlogPostRowPreviewItem from '../../components/blog/post-row-preview-item';
import BlogPostImagePreviewItem from '../../components/blog/post-image-preview-item';
// import BlogPostTextPreviewItem from '../../components/blog/post-text-preview-item';
import BlogFooter from '../../components/blog/footer';

import { Timeline, Tweet } from 'react-twitter-widgets';

class BlogPostsIndex extends React.Component {

  getTwitterTimelineElement() {
    return (
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'careplannerltd'
        }}
        options={{
          username: 'CarePlannerLtd',
          height: '400'
        }}
      />
    );
  }

  render() {
    const { allPrismicDocument } = this.props.data

    const twitterFeed = this.getTwitterTimelineElement();

    allPrismicDocument.edges.splice(twitterFeed, 3);

    return (
      <div>
      <BlogNavbar />
      <div css={styles.content}>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((node, id) => {
            switch(id) {
              case 0:
              return (
                <div>
                  <BlogPostFeaturePreviewItem
                    post={node}
                    key={id}
                  />
                  <hr css={{ borderColor: '#DDE5ED', borderStyle: 'solid' }}/>
                </div>
              );
              case 1:
                return (
                  <div>
                    <BlogPostRowPreviewItem
                      post={node}
                      key={id}
                    />
                    <hr css={{ borderColor: '#DDE5ED', borderStyle: 'solid' }}/>
                  </div>
                );
              return;
              case 3:
                return (
                  <div
                    css={{
                      display: 'inline-block',
                      width: 'calc(33% - (40px / 3))',
                      marginRight: 'calc(40px / 2)'
                    }}>
                    {twitterFeed}
                  </div>
                );
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
