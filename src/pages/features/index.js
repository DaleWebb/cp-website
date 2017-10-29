import React from 'react';

import Link from 'gatsby-link';

import { Helmet } from 'react-helmet';

import PrismicDOM from 'prismic-dom';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';
import { buttonStyle, buttonGroupStyle } from '../../components/button';

import FeatureHeaderRight from '../../components/feature-header-right';
import FeatureHeaderLeft from '../../components/feature-header-left';

export default class Features extends React.Component {

  constructor() {
    super();
  }

  render() {

    const features = this.props.data.allPrismicDocument.edges;

    return (
      <div>
        <Helmet title="Features"></Helmet>
        <div css={styles.section1}>
          <div css={globalStyles.container}>
            <div css={styles.column1}>
              <h1 css={globalStyles.sectionTitleTop}>Feature Highlights</h1>
              <p css={globalStyles.sectionDescriptionTop}>
                {`Learn about the crucial parts of CarePlanner that will help boost your growth.`}
              </p>
              <div>
                <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
              </div>
            </div>
            <div css={styles.column2}>
              {features.map((feature, i) =>
                <h5 css={styles.column2feature} key={i}>
                  <Link to={feature.node.fields.permalink}>{PrismicDOM.RichText.asText(feature.node.data.feature_name)}</Link>
                </h5>
              )}
            </div>
          </div>
        </div>
        <div css={styles.section2}>
          {features.map((featureEdge, i) => {
            const feature = featureEdge.node.data;
            if(i % 2) {
              return (
                <FeatureHeaderLeft
                  key={i}
                  permalink={featureEdge.node.fields.permalink}
                  image={require(`./invoicing-and-payments.png`)}
                  icon={(feature.feature_icon.url) ? feature.feature_icon.url : require(`../../assets/feature-icon-placeholder.svg`)}
                  name={feature.feature_name}
                  tagline={feature.feature_tagline}
                  bullets={feature.feature_bullets}
                />
              );
            } else {
              return (
                <FeatureHeaderRight
                  key={i}
                  permalink={featureEdge.node.fields.permalink}
                  image={require(`./invoicing-and-payments.png`)}
                  icon={(feature.feature_icon.url) ? feature.feature_icon.url : require(`../../assets/feature-icon-placeholder.svg`)}
                  name={feature.feature_name}
                  tagline={feature.feature_tagline}
                  bullets={feature.feature_bullets}
                />
              )
            }
          })}
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    position: 'relative',
    [presets.Desktop]: {
      padding: '100px'
    },
    [presets.Tablet]: {
      padding: '100px'
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      padding: '50px 25px'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      opacity: .2,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right',
      backgroundImage: 'url(' + require('./section-1.png') + ')',
      [presets.Desktop]: {
        height: '200%',
        backgroundSize: '100%'
      },
      [presets.Tablet]: {
        height: '200%',
        backgroundSize: '100%'
      },
      [presets.Mobile]: {
        height: '100%',
        backgroundSize: 'cover'
      }
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: '-o-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: '-moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      [presets.Desktop]: {
        height: '200%'
      },
      [presets.Tablet]: {
        height: '150%'
      },
      [presets.Mobile]: {
        height: '100%'
      }
    }
  },
  column1: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '40%',
      width: '40%',
      margin: '0 1%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '50%',
      width: '50%',
      margin: '0 1%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  column2: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '48%',
      width: '48%',
      margin: '0 5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '38%',
      width: '38%',
      margin: '0 5%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  column2feature: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '50%',
      width: '50%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '100%',
      width: '100%'
    },
    [presets.Mobile]: {
      maxWidth: '100%',
      width: '100%'
    }
  },
  section2: {
    [presets.Desktop]: {
      padding: '50px 100px 100px 100px'
    },
    [presets.Tablet]: {
      padding: '50px'
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      padding: '0 20px'
    }
  },
  section3: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#F4F8FC',
    [presets.Mobile]: {
      top: '30%'
    },
    '& h1': {
      textAlign: 'center'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      backgroundImage: 'url(' + require('../../assets/curve-top.svg') + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'top',
      backgroundPositionX: 'center',
      zIndex: -1,
      [presets.Desktop]: {
        top: '-30%',
        backgroundSize: 'cover'
      },
      [presets.Tablet]: {
        top: '-129px',
        backgroundSize: 'contain'
      },
      [presets.Mobile]: {
        top: '-125px',
        backgroundSize: 'contain'
      }
    },
    featureGrid: {
      [presets.Desktop]: {
        padding: '50px 100px'
      },
      [presets.Tablet]: {
        padding: '50px 100px'
      },
      [presets.Mobile]: {
        padding: '50px 20px'
      },
      feature: {
        [presets.Desktop]: {
          display: 'inline-block',
          verticalAlign: 'top',
          maxWidth: '20%',
          width: '20%',
          margin: '40px 2%'
        },
        [presets.Tablet]: {
          display: 'inline-block',
          verticalAlign: 'top',
          maxWidth: '25%',
          width: '25%',
          margin: '40px 3.5%'
        },
        [presets.Mobile]: {
          margin: '40px 15px'
        },
        placeholder: {
          [presets.Mobile]: {
            float: 'left',
            marginRight: '25px'
          }
        }
      }
    }
  },

};

export const pageQuery = graphql`
  query features {
    allPrismicDocument(filter: { type: { eq: "feature" } }, sort: { order: ASC, fields: [data___weight] }) {
      edges {
        node {
          fields {
            permalink
          }
          data {
            feature_name {
              type
              text
            }
            feature_icon {
              url
            }
            feature_tagline {
              type
              text
            }
            feature_bullets {
              feature_bullet {
                type
                text
              }
            }
          }
        }
      }
    }
  }
`;
