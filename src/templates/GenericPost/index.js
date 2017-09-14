import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import DefaultLayout from '../DefaultLayout/';

import './GenericPost.scss'

export default class GenericPost extends React.Component {

  render() {

    const post = this.props.data.prismicDocument;

    return (
      <DefaultLayout id="generic-post">
        <Helmet title={PrismicDOM.RichText.asText(post.data.title)}></Helmet>
        <div className="cp-section-1">
          <h1>{PrismicDOM.RichText.asText(post.data.title)}</h1>
        </div>
        <div className="cp-section-2" dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(post.data.page_content)}}></div>
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query GenericPost($permalink: String!) {
    prismicDocument(type: { eq: "page" }, fields: { permalink: { eq: $permalink } }) {
      data {
        title {
          type
          text
        }
        page_content {
          type
          text
        }
      }
    }
  }
`
