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
          <p>
            In the late 1990s and early 2000s, the discussion around climate change became dominated by something known as the ‘hockey stick graph’. Bear with me here…
          </p>
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
    backgroundColor: '#DDE5ED'
  },
  articleContent: {
    display: 'inline-block',
    width: 'calc(50% - 70px)',
    height: '280px',
    maxHeight: '280px',
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
