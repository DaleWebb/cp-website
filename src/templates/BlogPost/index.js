import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

import BlogPostRowPreviewItem from '../../components/post-row-preview-item';

export default class BlogPost extends React.Component {

  render() {

    const post = this.props.data.prismicDocument.data;

    const image = (post.feature_image) ? <img src={post.feature_image.url} css={styles.featureImage} /> : undefined;

    const nextPost = this.props.pathContext.next;

    return (
      <div>
        <Helmet title={PrismicDOM.RichText.asText(post.title)}></Helmet>
        <div css={styles.section1}>
          <h1>{PrismicDOM.RichText.asText(post.title)}</h1>
          <blockquote>{PrismicDOM.RichText.asText(post.excerpt)}</blockquote>
          {image}
        </div>
        <div css={styles.section2} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(post.body)}}></div>
        {nextPost && (
          <BlogPostRowPreviewItem
            featureImage={nextPost.data.feature_image}
            permalink={nextPost.fields.permalink}
            title={nextPost.data.title}
            excerpt={nextPost.data.excerpt}
          />
        )}
      </div>
    );
  }
};

const styles = {
  section1: {
    margin: '0 auto',
    marginTop: '60px',
    [presets.Desktop]: {
      width: '1000px',
      paddingTop: '50px'
    },
    [presets.Tablet]: {
      marginLeft: '100px',
      marginRight: '100px',
      paddingTop: '50px'
    },
    [presets.Mobile]: {
      marginLeft: '50px',
      marginRight: '50px',
      paddingTop: '50px'
    }
  },
  featureImage: {
    [presets.Desktop]: {
      width: '100%'
    },
    [presets.Tablet]: {
      width: 'calc(100% + 200px)',
      maxWidth: 'calc(100% + 200px)',
      marginBottom: '20px',
      marginLeft: '-100px',
      marginRight: '-100px'
    },
    [presets.Mobile]: {
      width: 'calc(100% + 100px)',
      maxWidth: 'calc(100% + 100px)',
      marginBottom: '20px',
      marginLeft: '-50px',
      marginRight: '-50px'
    }
  },
  section2: {
    margin: '0 auto',
    [presets.Desktop]: {
      width: '1000px',
      '> p': {
        fontSize: '20px',
        lineHeight: '40px',
        marginBottom: '40px'
      },
      '> .block-img': {
        textAlign: 'center'
      }
    },
    [presets.Tablet]: {
      marginLeft: '100px',
      marginRight: '100px',
      '> p': {
        fontSize: '18px',
        lineHeight: '35px',
        marginBottom: '40px'
      },
      '> .block-img': {
        textAlign: 'center'
      }
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      '> p': {
        marginLeft: '50px',
        marginRight: '50px',
        lineHeight: '30px',
        marginBottom: '40px'
      },
      '> .block-img': {
        textAlign: 'center',
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPost($permalink: String!) {
    prismicDocument(type: { eq: "blog_post" }, fields: { permalink: { eq: $permalink } }) {
      data {
        title {
          type
          text
        }
        excerpt {
          type
          text
        }
        body {
          type
          text
          url
        }
        feature_image {
          url
        }
      }
    }
  }
`
