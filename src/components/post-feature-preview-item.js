import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostFeaturePreviewItem extends React.Component {

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
          <h2>{PrismicDOM.RichText.asText(post.data.title)}</h2>
        </Link>
        <p>{PrismicDOM.RichText.asText(post.data.excerpt)}</p>
        <Link to={post.fields.permalink}>Read more...</Link>
      </div>
    )
  }
}

const styles = {
  featureImage: {
    width: '100%',
    height: '350px',
    maxHeight: '350px',
    marginBottom: '20px',
    backgroundColor: '#DDE5ED',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

export default BlogPostFeaturePreviewItem
