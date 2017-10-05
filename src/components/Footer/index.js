import React from 'react';
import Link from 'gatsby-link';

import presets from '../../utils/presets';

export default () => (
  <div css={styles.footer}>
    <div className="cp-container">
      <div css={styles.links}>
      <div css={styles.links.column}>
        <div css={styles.links.column.item}>
          <h5>
            <Link to="/features">Feature Highlights</Link>
          </h5>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/features#drag-and-drop-rostering">Drag and Drop Rostering</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/features#infinite-customisation">Infinite Customisation</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/features#invoicing-and-payments">Invoicing and Payments</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/features#call-monitoring">Call Monitoring</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/features#mobile-app">Mobile App</Link>
        </div>
      </div>
      <div css={styles.links.column}>
        <div css={styles.links.column.item}>
          <h5>
            <Link to="/case-studies">Case Studies</Link>
          </h5>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/case-studies/sos-homecare">SOS Homecare</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/case-studies/county-care">County Care</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/case-studies/proud-to-care">Proud To Care</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/case-studies/charlesworth-community-care">Charlesworth Community Care</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/case-studies/woodfield24">Woodfield24</Link>
        </div>
      </div>
      <div css={styles.links.column}>
        <div css={styles.links.column.item}>
          <h5>Company</h5>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div css={styles.links.column.item}>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
    <div css={styles.copyright}>
      © {new Date().getFullYear()} CarePlanner, All Rights Reserved
    </div>
  </div>
);

const styles = {
  footer: {
    textAlign: 'center',
    background: '#F4F8FC',
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 200px)',
      padding: '100px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 50px)',
      padding: '25px'
    }
  },
  copyright: {
    width: '100%',
    float: 'left',
    textAlign: 'center',
    margin: '40px 0 40px 0'
  },
  links: {
    margin: '40px 5%',
    width: '90%',
    column: {
      display: 'inline-block',
      verticalAlign: top,
      [presets.Desktop]: {
        width: '33%'
      },
      [presets.Tablet]: {
        width: '33%'
      },
      [presets.Mobile]: {
        width: '49%'
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
  }
}
