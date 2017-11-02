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

    const maxElements = blogPosts.length < 10 ? blogPosts.length : 10;

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
              featureImage={node.data.feature_image}
              permalink={node.fields.permalink}
              title={node.data.title}
              excerpt={node.data.excerpt}
              date={node.data.override_publication_date || node.first_publication_date}
              key={i}
            />
            {divider}
          </div>
        );
        blogPostMarker++;
        break;
        case 1:
          node = blogPosts[blogPostMarker].node;
          elements.push(
            <div>
              <BlogPostRowPreviewItem
                featureImage={node.data.feature_image}
                permalink={node.fields.permalink}
                title={node.data.title}
                excerpt={node.data.excerpt}
                date={node.data.override_publication_date || node.first_publication_date}
                key={i}
              />
              {divider}
            </div>
          );
          blogPostMarker++;
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
              featureImage={node.data.feature_image}
              permalink={node.fields.permalink}
              title={node.data.title}
              excerpt={node.data.excerpt}
              date={node.data.override_publication_date || node.first_publication_date}
              key={i}
            />
          );
          blogPostMarker++;
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
      maxWidth: '1000px',
      margin: '50px auto'
    },
    [presets.Tablet]: {
      margin: '50px'
    },
    [presets.Mobile]: {
      margin: '50px'
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
          first_publication_date
          fields {
            permalink
          }
          data {
            title {
              type
              text
            }
            override_publication_date
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
