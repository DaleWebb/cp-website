import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostFeaturePreviewItem extends React.Component {

  generateBackgroundImageCss(url) {
    return Object.assign({}, styles.featureImage, {backgroundImage: `url(${url})`})
  }

  render() {

    const image = (this.props.featureImage) ? <div style={this.generateBackgroundImageCss(this.props.featureImage.url)}></div> : undefined;

    return (
      <div>
        <Link to={this.props.permalink}>
          {image}
          <h1>{PrismicDOM.RichText.asText(this.props.title)}</h1>
        </Link>
        <p style={styles.p}>{PrismicDOM.RichText.asText(this.props.excerpt)}</p>
        <Link to={this.props.permalink}>Read more...</Link>
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
  },
  p: {
    fontSize: '20px',
    lineHeight: '40px'
  }
};

export default BlogPostFeaturePreviewItem
