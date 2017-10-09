import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

export default class GenericPost extends React.Component {

  render() {

    const post = this.props.data.prismicDocument;

    return (
      <div>
        <Helmet title={PrismicDOM.RichText.asText(post.data.title)}></Helmet>
        <div css={styles.section1}>
          <h1>{PrismicDOM.RichText.asText(post.data.title)}</h1>
        </div>
        <div css={styles.section2} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(post.data.page_content)}}></div>
      </div>
    );
  }
};

const styles = {
  section1: {
    background: '#F4F8FC',
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 100px)',
      padding: '110px 50px 70px 50px'
    }
  },
  section2: {
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 200px)',
      padding: '0 50px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 100px)',
      padding: '0 20px',
      marginBottom: '60px'
    }
  }
}

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
