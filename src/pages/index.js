import React from 'react';

import DefaultLayout from '../templates/DefaultLayout/';

import './home/index.scss'

import screens from './home/screens.png';

export default () => (
    <DefaultLayout>
      <div className="cp-section-1">
        <div className="cp-container">
          <div className="cp-content">
            <h1 className="cp-section__title--top">Home care software that works</h1>
            <p className="cp-section__description--top">
              CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets.
            </p>
            <div>
              <a className="cp-button cp-button--outline">Watch the video</a>
              <a className="cp-button cp-button--filled">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-section-2">
        <div className="cp-screens">
          <img src={screens}/>
          <h3>Works on all modern browsers and devices</h3>
        </div>
        <div className="cp-container">
          <div className="cp-feature-aside">
            <div>
              <h2 className="cp-section__title">Feature Highlights</h2>
              <p className="cp-section__description">All the tools you need to help you focus on what you do best.</p>
              <a>Read More...</a>
              <hr />
            </div>
          </div>
          <div className="cp-feature-grid">
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
            <div className="cp-feature">
              <div className="placeholder placeholder-big"></div>
              <h5>Drag and Drop Rostering</h5>
              <p>Organise your carers faster than before with our powerful visual rostering.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-section-3">
        <div className="cp-container">
          <div className="cp-content">
            <blockquote>
              "I've now got more time to support staff, be face-to-face with clients and their families, and offer a truly personal service."
            </blockquote>
            <div className="cp-quote__header">
              <span className="placeholder"></span>
              <span className="cp-quote__author">Gary Hardman - </span>
              <span className="cp-quote__company">Proud To Care</span>
            </div>
            <div className="cp-footer__cta">
              <a className="cp-button cp-button--big cp-button--filled cp-button--light">Watch the video</a>
            </div>
            <div className="cp-footer__cta">
              <a className="cp-button cp-button--big cp-button--filled">Book a demo</a>
            </div>
            <div className="cp-footer__cta">
              <a className="cp-button cp-button--big cp-button--filled cp-button--light">Request a ringback</a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
);
