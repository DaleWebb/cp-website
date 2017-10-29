import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import Moment from 'react-moment';

import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

import BlogPostRowPreviewItem from '../../components/post-row-preview-item';

export default class BlogPost extends React.Component {

  renderShareButtons() {

    const {
      FacebookShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      WhatsappShareButton,
      EmailShareButton,
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const LinkedinIcon = generateShareIcon('linkedin');
    const WhatsappIcon = generateShareIcon('whatsapp');
    const EmailIcon = generateShareIcon('email');

    const url = location.href;
    const title = this.props.data.prismicDocument.data.title[0].text;

    return (
      <div>
        <FacebookShareButton url={url} quote={title} style={styles.shareButton}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} style={styles.shareButton}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title} windowWidth={750} windowHeight={600} style={styles.shareButton}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <EmailShareButton subject={title} body={'Check out the article from CarePlanner at: ' + url} style={styles.shareButton}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
    );
  }

  render() {

    const post = this.props.data.prismicDocument.data;

    const image = (post.feature_image) ? <img src={post.feature_image.url} css={styles.featureImage} /> : undefined;

    const nextPost = this.props.pathContext.next;

    return (
      <div>
        <Helmet title={PrismicDOM.RichText.asText(post.title)}></Helmet>
        <div css={styles.section1}>
          <div style={{textAlign: 'right'}}>
            {this.renderShareButtons()}
          </div>
          <h1>{PrismicDOM.RichText.asText(post.title)}</h1>
          <h5><Moment format="dddd Do MMMM YYYY">{post.override_publication_date || this.props.data.prismicDocument.first_publication_date}</Moment></h5>
          <blockquote>{PrismicDOM.RichText.asText(post.excerpt)}</blockquote>
          {image}
        </div>
        <div css={styles.section2}>
          <div css={styles.section2Content} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(post.body)}}></div>
          <div style={{textAlign: 'center'}}>
            {this.renderShareButtons()}
          </div>
        </div>
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
    paddingTop: '25px',
    [presets.Desktop]: {
      maxWidth: '1000px'
    },
    [presets.Tablet]: {
      marginLeft: '100px',
      marginRight: '100px'
    },
    [presets.Mobile]: {
      marginLeft: '50px',
      marginRight: '50px'
    }
  },
  shareButton: {
    display: 'inline-block',
    marginLeft: '7.5px',
    marginRight: '7.5px',
    cursor: 'pointer'
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
    marginBottom: '60px',
    [presets.Desktop]: {
      width: '1000px'
    },
    [presets.Tablet]: {
      marginLeft: '100px',
      marginRight: '100px'
    }
  },
  section2Content: {
    [presets.Desktop]: {
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
