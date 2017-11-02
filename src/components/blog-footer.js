import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div css={styles.container}>
    <div>
      <a href="https://twitter.com/careplannerltd" target="_blank" css={styles.socialIcon}>
        <img src={require('../assets/twitter-circle.png')} />
      </a>
      <a href="https://www.linkedin.com/company/3239311/" target="_blank" css={styles.socialIcon}>
        <img src={require('../assets/linkedin-circle.png')} />
      </a>
    </div>
    <div css={styles.copyright}>
      © {new Date().getFullYear()} CarePlanner, All Rights Reserved
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#F4F8FC'
  },
  socialIcon: {
    '> img': {
      height: '30px',
    },
    ':first-child': {
      '> img': {
        marginRight: '20px'
      }
    }
  },
  copyright: {
    marginTop: '20px'
  }
};
