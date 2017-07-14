import React from 'react';
import { navigateTo } from 'gatsby-link';

import DefaultLayout from '../DefaultLayout/';

import './GenericPost.scss'

export default class GenericPost extends React.Component {

  render() {

    const post = this.props.data.markdownRemark;

    return (
      <DefaultLayout id="generic-post">
        <div className="cp-section-1">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div className="cp-section-2" dangerouslySetInnerHTML={{ __html: post.html}}></div>
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query GenericPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
