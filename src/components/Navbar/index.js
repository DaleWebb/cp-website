import React from 'react';
import Link from 'gatsby-link';

import './navbar.scss';
import logo from './logo.png';

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
      <nav className="cp-navbar">
        <div className="cp-navbar__inner">
          <div className="cp-container">
            <a className="cp-navbar__hamburger" onClick={this.toggleMenu.bind(this)}>
              <span className="cp-navbar__hamburger__icon"></span>
            </a>
            <Link to="/">
              <img className="cp-logo" src={logo}/>
            </Link>
            <div className="cp-navbar__actions" {...{'data-navbar-open': !this.state.collapsed}}>
              <ul className="cp-navbar__links">
                <li>
                  <Link className="cp-navbar__link" to="/features">Features</Link>
                </li>
                <li>
                  <Link className="cp-navbar__link" to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link className="cp-navbar__link" to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <ul className="cp-navbar__buttons">
                <li>
                  <Link className="cp-button cp-button--outline">Watch the video</Link>
                </li>
                <li>
                  <Link className="cp-button cp-button--filled" to="/contact-us">Book a demo</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  };
};
