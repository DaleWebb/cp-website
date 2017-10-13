import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div css={styles.container}>
    <div>
      <a href="https://twitter.com/careplannerltd" target="_blank">
        <img src={require('../assets/twitter-circle.png')} css={styles.socialIcon} />
      </a>
      <a href="https://www.linkedin.com/company/3239311/" target="_blank">
        <img src={require('../assets/linkedin-circle.png')} css={styles.socialIcon} />
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
    marginTop: '50px',
    backgroundColor: '#F4F8FC'
  },
  socialIcon: {
    height: '30px',
    ':first-child': {
      marginRight: '20px'
    }
  },
  copyright: {
    marginTop: '20px'
  }
};
