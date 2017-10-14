import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostPreviewItem extends React.Component {

  generateBackgroundImageCss(url) {
    return Object.assign({}, styles.featureImage, {backgroundImage: `url(${url})`})
  }

  render() {
    const post = this.props.post;

    const image = (post.data.feature_image) ? <div style={this.generateBackgroundImageCss(post.data.feature_image.url)}></div> : undefined;

    let articleContentStyle = (image) ? styles.articleContentWithImage : styles.articleContent;

    return (
      <div>
        <Link to={post.fields.permalink}>
          {image}
        </Link>
        <div style={articleContentStyle}>
          <Link to={post.fields.permalink}>
            <h2>{PrismicDOM.RichText.asText(post.data.title)}</h2>
          </Link>
          <p style={styles.p}>{PrismicDOM.RichText.asText(post.data.excerpt)}</p>
          <Link to={post.fields.permalink}>Read more...</Link>
        </div>
      </div>
    )
  }
}

const styles = {
  featureImage: {
    display: 'inline-block',
    width: '50%',
    height: '350px',
    maxHeight: '350px',
    verticalAlign: 'top',
    backgroundColor: '#DDE5ED',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  articleContentWithImage: {
    display: 'inline-block',
    width: 'calc(50% - 70px)',
    height: '280px',
    maxHeight: '280px',
    verticalAlign: 'top',
    padding: '35px'
  },
  articleContent: {
    width: '100%'
  },
  p: {
    fontSize: '20px',
    lineHeight: '40px'
  }
};

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on PrismicDocument {
    type
  }
`
