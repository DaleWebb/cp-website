import React from 'react';
import Link from 'gatsby-link';

import presets from '../utils/presets';

import { buttonStyle } from './button';

export default class BlogNavbar extends React.Component {

  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleMenu() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const subnav = (
      <div css={styles.subnav}>
        <div css={styles.subnavInner}>
          <Link css={styles.subnavInnerLink} activeClassName="active" to="/features">Latest</Link>
          <Link css={styles.subnavInnerLink} activeClassName="active" to="/case-studies">Industry</Link>
        </div>
      </div>
    );

    return (
      <div css={styles.navbarContainer}>
        <nav css={styles.navbar}>
          <div css={styles.navbarInner}>
            <a css={styles.hamburger} onClick={this.toggleMenu.bind(this)}>
              <span css={styles.hamburgerIcon}></span>
            </a>
            <Link to="/blog">
              <div css={styles.logoContainer}>
                <img css={styles.logo} src={require('../assets/cp-logo-white.png')} />
                <div css={styles.logoBar}></div>
                <div css={styles.logoText}>News</div>
              </div>
            </Link>
            <div style={styles.rightNavContainer} >
              <a href="https://www.linkedin.com/company/3239311/" target="_blank">
                <img css={styles.navbarSocialIcon} src={require('../assets/linkedin-square-white.png')} />
              </a>
              <a href="https://twitter.com/careplannerltd" target="_blank">
                <img css={styles.navbarSocialIcon} src={require('../assets/twitter-white.png')} />
              </a>
              <Link css={[buttonStyle.button, buttonStyle.outline]} style={styles.navbarButton} to="/">Back to care-planner.co.uk</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  };
};

const styles = {
  navbarContainer: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1000',
    boxShadow: '0 2px 4px #DDE5ED'
  },
  navbar: {
    width: '100%',
    height: '60px',
    backgroundColor: '#70A4DB'
  },
  navbarInner: {
    width: '1000px',
    height: '100%',
    margin: '0 auto'
  },
  hamburger: {
    [presets.Desktop]: {
      display: 'none',
    },
    [presets.Tablet]: {
      display: 'inline-block',
      position: 'relative',
      height: '30px',
      width: '30px',
      margin: '15px 0',
    },
    [presets.Mobile]: {
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'relative',
      height: '30px',
      width: '30px',
      margin: '15px 0',
    }
  },
  hamburgerIcon: {
    [presets.Desktop]: {
      display: 'none'
    },
    [presets.Tablet]: {
      position: 'absolute',
      marginTop: '15px',
      display: 'inline-block',
      width: '30px',
      height: '2px',
      borderTop: '2px solid #4F739A',
      '-webkit-transition': 'border-color .1s',
      transition: 'border-color .1s',
      '::before, ::after': {
        content: '""',
        position: 'absolute',
        borderTop: '2px solid #4F739A',
        height: 0,
        left: 0,
        right: 0,
        '-webkit-transition': '-webkit-transform .2s',
        transition: '-webkit-transform .2s',
        transition: 'transform .2s',
        transition: 'transform .2s, -webkit-transform .2s',
      }
    },
    [presets.Mobile]: {
      position: 'absolute',
      marginTop: '15px',
      display: 'inline-block',
      width: '30px',
      height: '2px',
      borderTop: '2px solid #4F739A',
      '-webkit-transition': 'border-color .1s',
      transition: 'border-color .1s',
      '::before, ::after': {
        content: '""',
        position: 'absolute',
        borderTop: '2px solid #4F739A',
        height: 0,
        left: 0,
        right: 0,
        '-webkit-transition': '-webkit-transform .2s',
        transition: '-webkit-transform .2s',
        transition: 'transform .2s',
        transition: 'transform .2s, -webkit-transform .2s',
      }
    },
    '::before': {
      top: '-10px'
    },
    '::after': {
      bottom: '-6px'
    }
  },
  rightNavContainer: {
    float: 'right',
    marginTop: '9px',
    marginBottom: '8px'
  },
  navbarButton: {
    margin: 0,
    verticalAlign: 'middle'
  },
  subnav: {
    width: '100%',
    height: '48px',
    backgroundColor: '#F4F8FC'
  },
  subnavInner: {
    width: '1000px',
    height: '100%',
    margin: '0 auto'
  },
  subnavInnerLink: {
    display: 'block',
    float: 'left',
    color: '#4F739A',
    padding: '15px 20px 14px 0',
    margin: '0',
    minWidth: '80px',
    textDecoration: 'none',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none'
  },
  logo: {
    [presets.Desktop]: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      width: '134px',
      height: '32px',
      marginBottom: 0,
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'relative',
      top: '13px',
      left: '20px',
      width: '134px',
      height: '32px',
      marginBottom: 0,
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none'
    },
    [presets.Mobile]: {
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'relative',
      top: '13px',
      left: 'calc(50% - 85px)',
      width: '134px',
      height: '32px',
      marginBottom: 0,
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none'
    }
  },
  logoBar: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '32px',
    marginLeft: '15px',
    marginRight: '15px',
    borderLeft: '1px #FFFFFF solid'
  },
  logoText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: '#FFFFFF',
    fontSize: '20px'
  },
  logoContainer: {
    display: 'inline-block',
    marginTop: '14px',
    marginBottom: '14px',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none'
  },
  navbarSocialIcon: {
    height: '25px',
    marginRight: '35px',
    marginBottom: 0,
    verticalAlign: 'middle'
  }
};
