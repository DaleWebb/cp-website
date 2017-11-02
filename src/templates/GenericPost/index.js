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
      padding: '100px'
    },
    [presets.Tablet]: {
      padding: '100px'
    },
    [presets.Mobile]: {
      padding: '70px 50px'
    }
  },
  section2: {
    [presets.Desktop]: {
      padding: '100px',
      '& p, & li': {
        fontSize: '18px',
        lineHeight: '35px'
      },
      '& p': {
        marginBottom: '40px'
      },
      '& .block-img': {
        textAlign: 'center'
      }
    },
    [presets.Tablet]: {
      padding: '0 50px',
      '& p, & li': {
        fontSize: '18px',
        lineHeight: '35px'
      },
      '& p': {
        marginBottom: '40px'
      },
      '& .block-img': {
        textAlign: 'center'
      }
    },
    [presets.Mobile]: {
      padding: '0 20px',
      marginBottom: '60px',
      '& p, & li': {
        marginLeft: '50px',
        marginRight: '50px',
        lineHeight: '30px',
      },
      '& p': {
        marginBottom: '40px'
      },
      '& .block-img': {
        textAlign: 'center',
      }
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
