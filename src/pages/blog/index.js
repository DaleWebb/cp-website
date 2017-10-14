import React from 'react';

import presets from '../../utils/presets';

import BlogPostFeaturePreviewItem from '../../components/post-feature-preview-item';
import BlogPostRowPreviewItem from '../../components/post-row-preview-item';
import BlogPostGridPreviewItem from '../../components/post-grid-preview-item';

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
          height: '500'
        }}
      />
    );
  }

  render() {
    const { allPrismicDocument } = this.props.data

    const twitterFeed = this.getTwitterTimelineElement();

    const blogPosts = allPrismicDocument.edges;

    // const maxElements = blogPosts.length < 10 ? blogPosts.length : 10;

    let maxElements = 10;

    let blogPostMarker = 0;

    const elements = [];

    for(let i = 0; i < maxElements; i++) {
      let node;
      let divider = (i < maxElements - 1) ? <hr style={styles.hr}/> : undefined
      switch(i) {
        case 0:
        node = blogPosts[blogPostMarker].node;
        elements.push(
          <div>
            <BlogPostFeaturePreviewItem
              post={node}
              key={i}
            />
            {divider}
          </div>
        );
        // blogPostMarker++;
        break;
        case 1:
          node = blogPosts[blogPostMarker].node;
          elements.push(
            <div>
              <BlogPostRowPreviewItem
                post={node}
                key={i}
              />
              {divider}
            </div>
          );
          // blogPostMarker++;
        break;
        case 3:
          elements.push(
            <div
              style={styles.twitterFeedWrapper}>
              {twitterFeed}
            </div>
          );
          break;
        default:
          node = blogPosts[blogPostMarker].node;
          elements.push(
            <BlogPostGridPreviewItem
              post={node}
              key={i}
            />
          );
          // blogPostMarker++;
        break;
      }
    }

    return (
      <div css={styles.content}>
          {elements}
      </div>
    );
  }
}

const styles = {
  content: {
    [presets.Desktop]: {
      width: '1000px',
      margin: '145px auto 0 auto'
    },
    [presets.Tablet]: {
      margin: '145px 50px 0 50px'
    },
    [presets.Mobile]: {
      margin: '60px 50px 50px 50px'
    }
  },
  hr: {
    borderColor: '#DDE5ED',
    borderStyle: 'solid',
    height: 0
  },
  twitterFeedWrapper: {
    display: 'inline-block',
    width: 'calc(33% - (40px / 3))',
    marginRight: 'calc(40px / 2)'
  }
}

export default BlogPostsIndex;

export const pageQuery = graphql`
  query BlogPostsIndexQuery {
    allPrismicDocument(
      filter: {
        type: { eq: "blog_post" }
      }
    ) {
      edges {
        node {
          fields {
            permalink
          }
          data {
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
          }
        }
      }
    }
  }
`;
