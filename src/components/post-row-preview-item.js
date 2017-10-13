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

    return (
      <div>
        <Link to={post.fields.permalink}>
          {image}
        </Link>
        <div style={styles.articleContent}>
          <Link to={post.fields.permalink}>
            <h2>{PrismicDOM.RichText.asText(post.data.title)}</h2>
          </Link>
          <p>{PrismicDOM.RichText.asText(post.data.excerpt)}</p>
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
  articleContent: {
    display: 'inline-block',
    width: 'calc(50% - 70px)',
    height: '280px',
    maxHeight: '280px',
    verticalAlign: 'top',
    padding: '35px'
  }
};

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on PrismicDocument {
    type
  }
`
