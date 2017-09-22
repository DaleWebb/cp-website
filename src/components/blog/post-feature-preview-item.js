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
        <p>
          In the late 1990s and early 2000s, the discussion around climate change became dominated by something known as the ‘hockey stick graph’. Bear with me here…
        </p>
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
