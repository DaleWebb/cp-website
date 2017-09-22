import React from "react"
import Link from "gatsby-link"

class BlogPostPreviewItem extends React.Component {
  render() {
    const post = this.props.post

    return (
      <div>
        <div css={styles.featureImage}></div>
        <h3>Industry</h3>
        <h2>The Social Care Debate: The Home Care Hockey Stick</h2>
        <p css={{ fontWeight: `normal` }}>Sup</p>
        <hr css={{ borderColor: '#DDE5ED', borderStyle: 'solid' }}/>
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
    backgroundColor: '#DDE5ED'
  }
};

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on PrismicDocument {
    type
  }
`
