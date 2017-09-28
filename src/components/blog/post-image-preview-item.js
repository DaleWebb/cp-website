import React from "react"
import Link from "gatsby-link"

class BlogPostImagePreviewItem extends React.Component {
  render() {
    const post = this.props.post

    return (
      <div css={styles.container}>
        <div css={styles.featureImage}></div>
        <h3>Industry</h3>
        <h2>The Social Care Debate: The Home Care Hockey Stick</h2>
        <p>
          In the late 1990s and early 2000s, the discussion around climate change became dominated by something known as the ‘hockey stick graph’. Bear with me here…
        </p>
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

export default BlogPostImagePreviewItem

export const blogPostImagePreviewFragment = graphql`
  fragment BlogPostImagePreview_item on PrismicDocument {
    type
  }
`
