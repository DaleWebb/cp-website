import React from "react"
import Link from "gatsby-link"

class BlogPostPreviewItem extends React.Component {
  render() {
    const post = this.props.post

    return (
      <div css={styles.container}>
        <div css={styles.featureImage}></div>
        <h3>Industry</h3>
        <h2>The Social Care Debate: The Home Care Hockey Stick</h2>
        <p css={{ fontWeight: `normal` }}>Sup</p>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 'calc(33% - (40px / 3))',
    marginBottom: '20px',
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
    backgroundColor: '#DDE5ED'
  }
};

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on PrismicDocument {
    type
  }
`
