import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import Moment from 'react-moment';

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
          <h5><Moment format="dddd Do MMMM YYYY">{post.override_publication_date || this.props.data.prismicDocument.first_publication_date}</Moment></h5>
          <blockquote>{PrismicDOM.RichText.asText(post.excerpt)}</blockquote>
          {image}
        </div>
        <div css={styles.section2} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(post.body)}}></div>
        {nextPost && (
          <div css={styles.section3}>
            <h2 style={{textAlign: 'center'}}>Next Article</h2>
            <hr style={{ borderColor: '#DDE5ED', borderStyle: 'solid', height: 0 }}/>
            <BlogPostRowPreviewItem
              featureImage={nextPost.data.feature_image}
              permalink={nextPost.fields.permalink}
              title={nextPost.data.title}
              excerpt={nextPost.data.excerpt}
            />
          </div>
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
        fontSize: '18px',
        lineHeight: '35px',
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
  },
  section3: {
    background: '#F4F8FC',
    [presets.Desktop]: {
      padding: '50px 100px'
    },
    [presets.Tablet]: {
      padding: '50px'
    },
    [presets.Mobile]: {
      padding: '10px 10px'
    }
  }
}

export const pageQuery = graphql`
  query BlogPost($permalink: String!) {
    prismicDocument(type: { eq: "blog_post" }, fields: { permalink: { eq: $permalink } }) {
      first_publication_date
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
