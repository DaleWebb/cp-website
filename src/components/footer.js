import React from 'react';
import Link from 'gatsby-link';

import presets from '../utils/presets';
import globalStyles from '../utils/global-styles';

export default class Footer extends React.Component {

  constructor() {
    super();
    this.state = {
      links: {
        features: [
          {
            url: "/features", title: 'Feature Highlights', header: true
          },
          {
            url: "/features#drag-and-drop-rostering", title: 'Drag and Drop Rostering'
          },
          {
            url: "/features#infinite-customisation", title: 'Infinite Customisation'
          },
          {
            url: "/features#invoicing-and-payments", title: 'Invoicing and Payments'
          },
          {
            url: "/features#call-monitoring", title: 'Call Monitoring'
          },
          {
            url: "/features#mobile-app", title: 'Mobile App'
          }
        ],
        caseStudies: [
          {url: "/case-studies", title: 'Case Studies', header: true},
          {url: "/case-studies/sos-homecare", title: 'SOS Homecare'},
          {url: "/case-studies/county-care", title: 'County Care'},
          {url: "/case-studies/proud-to-care", title: 'Proud To Care'},
          {url: "/case-studies/charlesworth-community-care", title: 'Charlesworth Community Care'},
          {url: "/case-studies/woodfield24", title: 'Woodfield24'}
        ],
        company: [
          {title: 'Company', header: true},
          {url: "/terms-and-conditions", title: 'Terms and Conditions'},
          {url: "/contact-us", title: 'Contact Us'}
        ]
      }
    };
  }

  renderLink(data) {
    const component = (<Link to={data.url}>{data.title}</Link>);
    return (
      <div css={styles.item}>
        {(data.header) ? <h5>{(data.link) ? component : data.title}</h5> : component}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div css={globalStyles.container}>
          <div style={styles.links}>
            <div css={styles.column}>
              {this.state.links.features.map(this.renderLink)}
            </div>
            <div css={styles.column}>
              {this.state.links.caseStudies.map(this.renderLink)}
            </div>
            <div css={styles.column}>
              {this.state.links.company.map(this.renderLink)}
            </div>
          </div>
        </div>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} CarePlanner, All Rights Reserved
        </div>
      </div>
    );
  }
}

const styles = {
  copyright: {
    width: '100%',
    float: 'left',
    textAlign: 'center',
    margin: '40px 0 40px 0'
  },
  links: {
    margin: '40px 5%',
    width: '90%',
  },
  column: {
    display: 'inline-block',
    verticalAlign: 'top',
    [presets.Desktop]: {
      width: '33%'
    },
    [presets.Tablet]: {
      width: '33%'
    },
    [presets.Mobile]: {
      width: '49%'
    }
  },
  item: {
    marginBottom: '20px',
    '> h5': {
      color: '#4F739A'
    },
    '> a': {
      color: '#4F739A',
      textDecoration: 'underline',
      [presets.Mobile]: {
        lineHeight: '24px'
      }
    }
  }
}
