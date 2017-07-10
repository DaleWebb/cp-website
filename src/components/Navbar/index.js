import React from 'react';
import Link from 'gatsby-link';

import './navbar.scss';
import logo from './logo.png';

export default () => (
  <nav className="cp-navbar">
    <div className="cp-navbar__inner">
      <div className="cp-container">
        <Link to="#" className="cp-navbar__hamburger">
          <span className="cp-navbar__hamburger__icon"></span>
        </Link>
        <img className="cp-logo" src={logo}/>
        <div className="cp-navbar__actions">
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
              <Link className="cp-button cp-button--filled">Book a demo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);
