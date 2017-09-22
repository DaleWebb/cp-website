import React from "react"
import Link from "gatsby-link"

class BlogPostPreviewItem extends React.Component {
  render() {
    const post = this.props.post

    return (
      <div>
        <div css={styles.featureImage}></div>
        <div css={styles.articleContent}>
          <h3>Industry</h3>
          <h2>The Social Care Debate: The Home Care Hockey Stick</h2>
          <p css={{ fontWeight: `normal` }}>Sup</p>
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
    marginBottom: '20px',
    backgroundColor: '#DDE5ED'
  },
  articleContent: {
    display: 'inline-block',
    width: 'calc(50% - 70px)',
    height: '350px',
    maxHeight: '350px',
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
