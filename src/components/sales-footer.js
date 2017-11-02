import React from 'react';
import Link from 'gatsby-link';

import presets from '../utils/presets';
import globalStyles from '../utils/global-styles';

import PrismicDOM from 'prismic-dom';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    let caseStudies = [];
    let features = [];

    this.props.navigation.map(node => {
      const item = node.node;
      switch(item.type) {
        case 'case_study':
          caseStudies.push({
            link: item.fields.permalink,
            title: PrismicDOM.RichText.asText(item.data.company_name)
          });
        break;
        case 'feature':
          features.push({
            link: item.fields.permalink,
            title: PrismicDOM.RichText.asText(item.data.feature_name)
          });
        break;
      }
    });

    this.state = {
      links: {
        features: features,
        caseStudies: caseStudies,
        company: [
          {link: "/terms-and-conditions", title: 'Terms and Conditions'},
          {link: "/contact-us", title: 'Contact Us'}
        ]
      }
    };
  }

  renderLink(data, i) {
    return (
      <div css={styles.item} key={i}>
        <Link to={data.link}>{data.title}</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div css={globalStyles.container}>
          <div style={styles.links}>
            <div css={styles.column}>
              <div css={styles.item}>
                <Link to="/features">
                  <h5>Features</h5>
                </Link>
              </div>
              {this.state.links.features.map(this.renderLink)}
            </div>
            <div css={styles.column}>
              <div css={styles.item}>
                <Link to="/case-studies">
                  <h5>Case Studies</h5>
                </Link>
              </div>
              {this.state.links.caseStudies.map(this.renderLink)}
            </div>
            <div css={styles.column}>
              <div css={styles.item}>
                <h5>Company</h5>
              </div>
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
