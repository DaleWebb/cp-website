import React from 'react';

import DefaultLayout from '../templates/DefaultLayout/';

import './home/index.scss'

import screens from './home/screens.png';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      features: [
        {
          title: 'Drag and drop rostering',
          body: 'Organise your carers faster than before with our powerful visual rostering.'
        },
        {
          title: 'Call Monitoring',
          body: 'Know for certain that a carer has attended an appointment, and receive a warning if they haven\'t.'
        },
        {
          title: 'SMS, Emails and Mobile',
          body: 'Keep your carers in the loop with instant updates and notifications sent to their phones and inbox.'
        },
        {
          title: 'Banking-grade security',
          body: 'Your data is safe with us. We have a 256-bit encryption on sensitive information.'
        },
        {
          title: 'Invoicing and Payments',
          body: 'Produce beautiful invoices that reflect the image of your company.'
        },
        {
          title: 'Infinite customisation',
          body: 'You can manipulate CarePlanner to fit into your workflow and processes.'
        }
      ]
    };
  }

  features() {
    let features = [];

    this.state.features.forEach((feature, i) => {
      features.push(
        <div className="cp-feature" key={i}>
          <div className="placeholder placeholder-big"></div>
          <h5>{feature.title}</h5>
          <p>{feature.body}</p>
        </div>
      );
    });

    return features;
  }

  render() {

    return (
      <DefaultLayout id="home-page">
        <div className="cp-section-1">
          <div className="cp-container">
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
              {this.features()}
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
  }
};
