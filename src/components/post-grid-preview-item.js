import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

class BlogPostGridPreviewItem extends React.Component {

  generateBackgroundImageCss(url) {
    return Object.assign({}, styles.featureImage, {backgroundImage: `url(${url})`})
  }

  render() {
    const post = this.props.post;

    const image = (post.data.feature_image) ? <div style={this.generateBackgroundImageCss(post.data.feature_image.url)}></div> : undefined;

    return (
      <div css={styles.container}>
        <Link to={post.fields.permalink}>
          {image}
          <h3>{PrismicDOM.RichText.asText(post.data.title)}</h3>
        </Link>
        <p style={styles.p}>{PrismicDOM.RichText.asText(post.data.excerpt)}</p>
        <Link to={post.fields.permalink}>Read more...</Link>
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
