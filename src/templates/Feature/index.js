import React from 'react';

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

export default class Feature extends React.Component {

  render() {

    const feature = this.props.data.prismicDocument.data;

    return (
      <div>
        <Helmet title={PrismicDOM.RichText.asText(feature.feature_name)}></Helmet>
        <div>
          <h1>{PrismicDOM.RichText.asText(feature.feature_name)}</h1>
        </div>
      </div>
    );
  }
};

const styles = {

}

export const pageQuery = graphql`
  query Feature($permalink: String!) {
    prismicDocument(type: { eq: "feature" }, fields: { permalink: { eq: $permalink } }) {
      data {
        feature_name {
          type
          text
        }
        feature_tagline {
          type
          text
        }
        sell {
          type
          text
        }
        feature_body_copy {
          type
          text
          spans {
            start
            end
            type
          }
        }
        feature_bullets {
          feature_bullet {
            type
            text
          }
        }
        features_sidebar {
          feature_text {
            type
            text
          }
        }
      }
    }
  }
`
