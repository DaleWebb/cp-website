import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostGridPreviewItem extends React.Component {

  generateBackgroundImageCss(url) {
    return Object.assign({}, styles.featureImage, {backgroundImage: `url(${url})`})
  }

  render() {

    const image = (this.props.featureImage) ? <div style={this.generateBackgroundImageCss(this.props.featureImage.url)}></div> : undefined;

    return (
      <div css={styles.container}>
        <Link to={this.props.permalink}>
          {image}
          <h3>{PrismicDOM.RichText.asText(this.props.title)}</h3>
        </Link>
        <p style={styles.p}>{PrismicDOM.RichText.asText(this.props.excerpt)}</p>
        <Link to={this.props.permalink}>Read more...</Link>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 'calc(33% - (40px / 3))',
    maxHeight: '500px',
    marginBottom: '100px',
    marginRight: 'calc(40px / 2)',
    ':nth-child(3n + 2)': {
      marginRight: '0'
    }
  },
  featureImage: {
    width: '100%',
    height: '175px',
    maxHeight: '175px',
    marginBottom: '20px',
    backgroundColor: '#DDE5ED',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

export default BlogPostGridPreviewItem

export const blogPostGridPreviewFragment = graphql`
  fragment BlogPostGridPreview_item on PrismicDocument {
    type
  }
`
