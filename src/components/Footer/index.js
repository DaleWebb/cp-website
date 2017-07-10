import React from 'react';
import Link from 'gatsby-link';

import './footer.scss';

export default () => (
  <div className="cp-footer">
    <div className="cp-container">
      <div className="cp-footer__links">
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>Feature Highlights</h5>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Drag and Drop Rostering</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Infinite Customisation</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Invoicing and Payments</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Call Monitoring</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Mobile App</a>
        </div>
      </div>
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>Case Studies</h5>
        </div>
        <div className="cp-footer__links__col__item">
          <a>SOS Homecare</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>County Care</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Proud To Care</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Charlesworth Community Care</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Woodfield24</a>
        </div>
      </div>
      <div className="cp-footer__links__col">
        <div className="cp-footer__links__col__item">
          <h5>Company</h5>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Terms</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Privacy Policy</a>
        </div>
        <div className="cp-footer__links__col__item">
          <a>Contact Us</a>
        </div>
      </div>
    </div>
    </div>
    <div className="cp-footer__copyright">
      © 2017 CarePlanner, All Rights Reserved
    </div>
  </div>
);
