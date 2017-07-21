import React from 'react';
import Link from 'gatsby-link';

import './footer.scss';

export default () => (
  <div className="cp-footer">
    <div className="cp-footer__cta">
      <div className="cp-container">
        <h1>Discover more about CarePlanner</h1>
        <div className="cp-footer__cta__button">
          <Link className="cp-button cp-button--filled cp-button--large" to="/contact-us">Book a demo</Link>
        </div>
      </div>
    </div>
    <div className="cp-container">
      <div className="cp-footer__links">
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>
            <Link to="/features">Feature Highlights</Link>
          </h5>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/features#drag-and-drop-rostering">Drag and Drop Rostering</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/features#infinite-customisation">Infinite Customisation</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/features#invoicing-and-payments">Invoicing and Payments</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/features#call-monitoring">Call Monitoring</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/features#mobile-app">Mobile App</Link>
        </div>
      </div>
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>
            <Link to="/case-studies">Case Studies</Link>
          </h5>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/case-studies/sos-homecare">SOS Homecare</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/case-studies/county-care">County Care</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/case-studies/proud-to-care">Proud To Care</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/case-studies/charlesworth-community-care">Charlesworth Community Care</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/case-studies/woodfield24">Woodfield24</Link>
        </div>
      </div>
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>Company</h5>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        <div className="cp-footer__links__col__item">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
    <div className="cp-footer__copyright">
      © {new Date().getFullYear()} CarePlanner, All Rights Reserved
    </div>
  </div>
);
