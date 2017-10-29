import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/cp-logo-blue.png';

import { buttonStyle, buttonGroupStyle } from './button';
import globalStyles from '../utils/global-styles';
import presets from '../utils/presets';

export default class Navbar extends React.Component {

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
      <nav css={style.navbar}>
        <div style={style.inner}>
          <div css={globalStyles.container}>
            <a css={style.hamburger} onClick={this.toggleMenu.bind(this)}>
              <span css={style.hamburgerIcon}></span>
            </a>
            <Link to="/">
              <img css={style.logo} src={logo}/>
            </Link>
            <div css={style.actions} {...{'data-navbar-open': !this.state.collapsed}}>
              <ul css={style.links}>
                <li>
                  <Link css={style.link} activeClassName="active" to="/features">Features</Link>
                </li>
                <li>
                  <Link css={style.link} activeClassName="active" to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link css={style.link} activeClassName="active" to="/blog">News</Link>
                </li>
                <li>
                  <Link css={style.link} activeClassName="active" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <div css={[buttonGroupStyle.horizontal, style.buttons]}>
                <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
};

const style = {
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px #DDE5ED',
    zIndex: '1000',
    [presets.Desktop]: {
      height: '80px'
    },
    [presets.Tablet]: {
      height: '60px'
    },
    [presets.Mobile]: {
      height: '60px'
    }
  },
  inner: {
    padding: '0 20px 0 20px'
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
      ':before, :after': {
        content: '" "',
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
      ':before, :after': {
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
    ':before': {
      top: '-10px'
    },
    ':after': {
      bottom: '-6px'
    }
  },
  actions: {
    [presets.Desktop]: {
      float: 'right'
    },
    [presets.Tablet]: {
      margin: '-3px -20px 0 -20px',
      overflowY: 'hidden',
      height: '0px',
      '-webkit-transition': 'height .2s ease-out',
      '-moz-transition': 'height .2s ease-out',
      '-ms-transition': 'height .2s ease-out',
      '-o-transition': 'height .2s ease-out',
      transition: 'height .2s ease-out',
      '&[data-navbar-open=true]': {
        height: '245px'
      }
    },
    [presets.Mobile]: {
      marginLeft: '-20px',
      marginRight: '-20px',
      background: 'rgba(255, 255, 255, .8)',
      boxShadow: '0 2px 4px #DDE5ED',
      overflowY: 'hidden',
      height: '0px',
      '-webkit-transition': 'height .2s ease-out',
      '-moz-transition': 'height .2s ease-out',
      '-ms-transition': 'height .2s ease-out',
      '-o-transition': 'height .2s ease-out',
      transition: 'height .2s ease-out',
      '&[data-navbar-open=true]': {
        height: '310px'
      }
    }
  },
  links: {
    margin: 0,
    padding: 0,
    [presets.Desktop]: {
      display: 'block',
      float: 'left',
      height: '100%',
      '& li': {
        float: 'left'
      }
    },
    [presets.Tablet]: {
      background: 'rgba(255, 255, 255, .8)',
      boxShadow: '0 2px 4px #DDE5ED'
    },
    [presets.Mobile]: {
      display: 'block',
      width: '100%'
    },
    '& li': {
      display: 'block'
    }
  },
  buttons: {
    padding: 0,
    [presets.Desktop]: {
      display: 'block',
      float: 'left',
      height: '100%',
      margin: '10px 0 10px 20px',
      '& li': {
        display: 'block',
        float: 'left'
      }
    },
    [presets.Tablet]: {
      position: 'absolute',
      top: 0,
      right: 0,
      '& li': {
        display: 'block',
        float: 'left'
      }
    },
    [presets.Mobile]: {
      display: 'block',
      height: '100%',
      marginLeft: '20px',
      '& li': {
        display: 'inline-block'
      }
    }
  },
  link: {
    display: 'block',
    color: '#4F739A',
    margin: 0,
    minWidth: '80px',
    textDecoration: 'none',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '-moz-transition': 'background .2s',
    '-o-transition': 'background .2s',
    '-webkit-transition': 'background .2s',
    transition: 'background .2s',
    [presets.Desktop]: {
      textAlign: 'center',
      padding: '30.5px 20px 30.5px 20px'
    },
    [presets.Tablet]: {
      textAlign: 'left',
      padding: '20.5px 12px 20.5px 12px'
    },
    [presets.Mobile]: {
      textAlign: 'left',
      padding: '20.5px 20px 20.5px 20px'
    },
    '&:hover, &:focus, &:active': {
      fontWeight: 'normal',
      background: '#F4F8FC'
    },
    '&.active': {
      fontWeight: 'bold',
      background: '#F4F8FC'
    }
  },
  logo: {
    position: 'relative',
    top: '13px',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    [presets.Desktop]: {
      top: '16px',
      height: '45px'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      top: '13px',
      left: '20px',
      height: '32px'
    },
    [presets.Mobile]: {
      display: 'inline-block',
      verticalAlign: 'top',
      top: '13px',
      left: 'calc(50% - 85px)',
      height: '32px'
    }
  }
};
