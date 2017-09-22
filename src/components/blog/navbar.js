import React from 'react';
import Link from 'gatsby-link';

import presets from '../../utils/presets';

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
    return (
      <div css={styles.navbarContainer}>
        <nav css={styles.navbar}>
          <div css={styles.navbarInner}>
            <div className="cp-container">
              <a className="cp-navbar__hamburger" onClick={this.toggleMenu.bind(this)}>
                <span className="cp-navbar__hamburger__icon"></span>
              </a>
              <Link to="/blog">
                <img css={styles.logo} src={require('../../assets/cp-logo-white.png')} />
              </Link>
              <div css={{float: 'right'}} >
                <img css={styles.navbarSocialIcon} src={require('../../assets/linkedin-square-white.png')} />
                <img css={styles.navbarSocialIcon} src={require('../../assets/twitter-white.png')} />
                <Link className="cp-button cp-button--outline" to="/">Back to care-planner.co.uk</Link>
              </div>
            </div>
          </div>
        </nav>
        <div css={styles.subnav}>
          <div css={styles.subnavInner}>
            <Link css={styles.subnavInnerLink} activeClassName="active" to="/features">Latest</Link>
            <Link css={styles.subnavInnerLink} activeClassName="active" to="/case-studies">Industry</Link>
          </div>
        </div>
      </div>
    );
  };
};

const styles = {
  navbarContainer: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1000'
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
    padding: '16px 20px 16px 0',
    margin: '0',
    minWidth: '80px',
    textDecoration: 'none',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none'
  },
  logo: {
    [presets.Mobile]: {
      display: 'inline-block',
      verticalAlign: 'top',
      position: 'relative',
      top: '13px',
      left: 'calc(50% - 85px)',
      width: '134px',
      height: '32px',
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
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none'
    },
    [presets.Desktop]: {
      position: 'relative',
      top: '13px',
      width: '134px',
      height: '32px',
      userSelect: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none'
    }
  },
  navbarSocialIcon: {
    position: 'relative',
    top: '7px',
    height: '25px',
    marginRight: '35px'
  }
};
