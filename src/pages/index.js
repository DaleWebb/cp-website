import React from 'react';

import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';

import PrismicDOM from 'prismic-dom';

import presets from '../utils/presets';
import globalStyles from '../utils/global-styles';
import { buttonStyle, buttonGroupStyle } from '../components/button';

export default class Home extends React.Component {

  constructor() {
    super();
  }

  render() {

    const features = this.props.data.allPrismicDocument.edges;

    return (
      <div>
        <Helmet title="Home Care Software"></Helmet>
        <div css={styles.section1}>
          <div css={globalStyles.container}>
            <h1 css={globalStyles.sectionTitleTop}>Home Care Software that Works</h1>
            <p css={globalStyles.sectionDescriptionTop}>
              CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoices, timesheets, reports and more...
            </p>
            <div css={buttonGroupStyle.horizontal} style={{textAlign: 'left'}}>
              <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
              <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
            </div>
          </div>
        </div>
        <div css={styles.section2}>
          <div css={globalStyles.container}>
            <div css={styles.featureAside}>
              <div>
                <h2 css={globalStyles.sectionTitle}>Feature Highlights</h2>
                <p css={globalStyles.sectionDescription}>All the tools you need to help you focus on providing the best care</p>
                <Link to="/features">Read More...</Link>
                <hr />
                <div css={buttonGroupStyle.vertical}>
                  <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                  <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
                </div>
              </div>
            </div>
            <div css={styles.featureGrid}>
              {features.map((featureEdge, i) => {
                if(i < 6) {
                  const feature = featureEdge.node.data;
                  return (
                    <div css={styles.feature}
                      onClick={() => navigateTo(featureEdge.node.fields.permalink)}
                      style={{cursor: 'pointer'}}>
                      <div css={globalStyles.placeholder}>
                        <img src={require(`../assets/feature-icon-placeholder.svg`)} />
                      </div>
                      <h5>{PrismicDOM.RichText.asText(feature.feature_name)}</h5>
                      <p>{PrismicDOM.RichText.asText(feature.sell)}</p>
                      <Link to={featureEdge.node.fields.permalink}>Learn more</Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div css={styles.section3}>
          <div css={globalStyles.container}>
            <div css={globalStyles.content}>
              <div css={styles.servicesGrid}>
                <div css={styles.service}>
                  <h2>Top Notch Support</h2>
                  <p>
                    {`You can call us as much as you like and you will get straight through to someone who can help. We don't charge any extra, and we're always happy to offer advice.`}
                  </p>
                </div>
                <div css={styles.service}>
                  <h2>Unbeatable Value</h2>
                  <p>
                    {`Pay as you go with no long term contracts, no 'upgrade' fees and no additional charge for core features. Everything is cloud-based, so there's no need for expensive servers or backups.`}
                  </p>
                </div>
                <div css={styles.service}>
                  <h2>Easy to use</h2>
                  <p>
                    {`CarePlanner is very user friendly, and you don't need to be trained to use it. If you do want training, be that online or on-site, simply get in touch and ask us.`}
                  </p>
                </div>
              </div>
              <div css={buttonGroupStyle.horizontal}>
                <a css={[buttonStyle.button, buttonStyle.outline, buttonStyle.large]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                <Link css={[buttonStyle.button, buttonStyle.filled, buttonStyle.large]} to="/contact-us">Book a demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    position: 'relative',
    height: '359px',
    [presets.Desktop]: {
      padding: '160px 100px 100px 100px'
    },
    [presets.Tablet]: {
      padding: '160px 100px 100px 100px'
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      padding: '90px 35px 90px 35px'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      background: 'url(' + require('../assets/section-background.png') + ') no-repeat top right'
    }
  },
  section2: {
    position: 'relative',
    minHeight: '500px',
    width: '100%',
    backgroundColor: '#F4F8FC',
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      backgroundImage: 'url(' + require('../assets/curve-top.svg') + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'top',
      zIndex: -1,
      [presets.Desktop]: {
        top: '-30%',
        backgroundPositionX: 'center'
      },
      [presets.Tablet]: {
        top: '-129px'
      },
      [presets.Mobile]: {
        top: '-125px'
      }
    },
    '::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      backgroundImage: 'url(' + require('../assets/curve-bottom.svg') + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'bottom',
      zIndex: -1,
      [presets.Desktop]: {
        bottom: '-30%',
        backgroundPositionX: 'center'
      },
      [presets.Tablet]: {
        bottom: '-129px'
      },
      [presets.Mobile]: {
        bottom: '-125px'
      }
    }
  },
  featureAside: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '14%',
      width: '14%',
      margin: '40px 0 0 5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '14%',
      width: '14%',
      margin: '40px 0 0 5%'
    },
    [presets.Mobile]: {
      margin: '0 35px'
    }
  },
  featureGrid: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '80%',
      width: '80%',
      '&:hover > *': {
        opacity: .6
      },
      '&:hover > *:hover': {
        opacity: 1
      }
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '80%',
      width: '80%'
    },
    [presets.Mobile]: {
      margin: '0 35px'
    }
  },
  feature: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '25%',
      width: '25%',
      margin: '40px 3.5%',
      '-moz-transition': 'opacity .2s',
      '-o-transition': 'opacity .2s',
      '-webkit-transition': 'opacity .2s',
      transition: 'opacity .2s'
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
    }
  },
  section3: {
    position: 'relative',
    width: '100%',
    [presets.Desktop]: {
      paddingTop: '100px'
    },
    [presets.Tablet]: {
      paddingTop: '57px'
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -3,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: 'url(' + require('../assets/section-3-background.png') + ')',
      opacity: .3
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -2,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: '-webkit-linear-gradient(top,rgba(255,255,255,0),rgba(255,255,255,1))',
      backgroundImage: '-o-linear-gradient(bottom,rgba(255,255,255,0),rgba(255,255,255,1))',
      backgroundImage: '-moz-linear-gradient(bottom,rgba(255,255,255,0),rgba(255,255,255,1))',
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))'
    }
  },
  servicesGrid: {
    marginBottom: '50px',
    [presets.Mobile]: {
      marginBottom: 0
    }
  },
  service: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '29%',
      margin: '0 1.5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '29%',
      margin: '0 1.5%'
    },
    [presets.Mobile]: {
      marginBottom: '40px'
    }
  }
}

export const pageQuery = graphql`
  query featureHighlights {
    allPrismicDocument(filter: { type: { eq: "feature" } }) {
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
            sell {
              type
              text
            }
          }
        }
      }
    }
  }
`;
