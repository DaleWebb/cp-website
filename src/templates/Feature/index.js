import React from 'react';
import Link from "gatsby-link"

import { Helmet } from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import PrismicDOM from 'prismic-dom';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

import { buttonStyle, buttonGroupStyle } from '../../components/button';

export default class Feature extends React.Component {

  render() {

    const feature = this.props.data.prismicDocument.data;

    return (
      <div>
        <Helmet title={PrismicDOM.RichText.asText(feature.feature_name)}></Helmet>
        <div css={styles.section1}>
        <div css={styles.mainFeature}>
          <div css={[styles.mainFeatureGraphic, styles.normal]}>
            <img src={require('../../assets/section-background.png')} />
          </div>
          <div>
            <div css={globalStyles.placeholder}>
              <img src={(feature.feature_icon.url) ? feature.feature_icon.url : require(`../../assets/feature-icon-placeholder.svg`)} />
            </div>
            <a href={feature.feature_permalink}>
              <h5>{PrismicDOM.RichText.asText(feature.feature_name)}</h5>
            </a>
            <a href={feature.feature_permalink}>
              <h2>{PrismicDOM.RichText.asText(feature.feature_tagline)}</h2>
            </a>
            <div css={styles.column1} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(feature.sell)}}></div>
            <div css={buttonGroupStyle.horizontalLeft}>
              <Link css={[buttonStyle.button, buttonStyle.outline]} to="/contact-us">Book a demo</Link>
            </div>
          </div>
        </div>
        </div>
        <div css={[styles.section2, globalStyles.container]}>
            <div css={styles.column1} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(feature.feature_body_copy)}}></div>
            <div css={styles.column2}>
              {feature.features_sidebar.map((a, i) => (
                <div key={i}>
                  <blockquote dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(a.feature_text)}}></blockquote>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    [presets.Desktop]: {
      padding: '100px'
    },
    [presets.Tablet]: {
      padding: '100px'
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      padding: '50px 25px'
    }
  },
  mainFeature: {
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    alignItems: 'center',
    [presets.Desktop]: {
      flexFlow: 'row'
    },
    [presets.Tablet]: {
      flexFlow: 'row'
    },
    [presets.Mobile]: {
      flexFlow: 'column'
    }
  },
  grid: {
    [presets.Desktop]: {
      maxWidth: '50%',
      padding: '100px 0'
    },
    [presets.Tablet]: {
      maxWidth: '50%',
      padding: '25px 0'
    },
    [presets.Mobile]: {
      padding: '50px 20px',
      order: 1
    }
  },
  circle: {
    [presets.Desktop]: {
      right: '200px',
      marginRight: '-100px'
    },
    [presets.Tablet]: {
      right: '200px',
      marginRight: '-100px'
    },
    '& img': {
      borderRadius: '100%',
      '-webkit-box-shadow': 'inset 0px 0px 15px #888888',
      '-moz-box-shadow': 'inset 0px 0px 15px #888888',
      boxShadow: 'inset 0px 0px 15px #888888'
    }
  },
  frame: {
    [presets.Desktop]: {
      right: '100px'
    },
    [presets.Tablet]: {
      right: '100px'
    }
  },
  normal: {
    [presets.Desktop]: {
      right: '100px'
    },
    [presets.Tablet]: {
      right: '100px'
    }
  },
  info: {
    [presets.Desktop]: {
      display: 'inline-block',
      width: '40%',
      margin: '20px 10% 20px 0',
      verticalAlign: 'top'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      width: '40%',
      margin: '20px 10% 20px 0',
      verticalAlign: 'top'
    }
  },
  mainFeatureGraphic: {
    [presets.Desktop]: {
      position: 'relative',
      minWidth: '50%',
      textAlign: 'center'
    },
    [presets.Tablet]: {
      position: 'relative',
      minWidth: '50%',
      textAlign: 'center'
    },
    [presets.Mobile]: {
      order: 0,
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center'
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    [presets.Desktop]: {
      padding: '0 100px 100px 100px',
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
      marginBottom: '60px',
      padding: '0 20px',
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
  },
  column1: {
    order: 0,
    [presets.Desktop]: {
      flexGrow: 2,
      '& p': {
        fontSize: '18px',
        lineHeight: '35px',
        marginBottom: '40px'
      }
    },
    [presets.Tablet]: {
      flexGrow: 2,
      '& p': {
        fontSize: '18px',
        lineHeight: '35px',
        marginBottom: '40px'
      }
    }
  },
  column2: {
    [presets.Desktop]: {
      order: 1,
      flexGrow: 1
    },
    [presets.Tablet]: {
      order: 1,
      flexGrow: 1
    }
  }
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
        feature_icon {
          url
        }
        feature_body_copy {
          type
          text
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
