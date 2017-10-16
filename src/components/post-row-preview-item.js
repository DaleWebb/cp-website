import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostPreviewItem extends React.Component {

  generateBackgroundImageCss(url) {
    return Object.assign({}, styles.featureImage, {backgroundImage: `url(${url})`})
  }

  render() {

    const image = (this.props.featureImage) ? <div style={this.generateBackgroundImageCss(this.props.featureImage.url)}></div> : undefined;

    let articleContentStyle = (image) ? styles.articleContentWithImage : styles.articleContent;

    return (
      <div>
        <Link to={this.props.permalink}>
          {image}
        </Link>
        <div style={articleContentStyle}>
          <Link to={this.props.permalink}>
            <h2>{PrismicDOM.RichText.asText(this.props.title)}</h2>
          </Link>
          <p style={styles.p}>{PrismicDOM.RichText.asText(this.props.excerpt)}</p>
          <Link to={this.props.permalink}>Read more...</Link>
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
    fontSize: '18px',
    lineHeight: '35px'
  }
};

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on PrismicDocument {
    type
  }
`
