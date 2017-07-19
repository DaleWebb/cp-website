import React from 'react';

import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';

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
          link: 'drag-and-drop-rostering',
          body: 'Organise your carers faster than before with our powerful visual rostering.'
        },
        {
          title: 'Call Monitoring',
          link: 'call-monitoring',
          body: 'Know for certain that a carer has attended an appointment, and receive a warning if they haven\'t.'
        },
        {
          title: 'SMS, Emails and Mobile',
          link: 'mobile-app',
          body: 'Keep your carers in the loop with instant updates and notifications sent to their phones and inbox.'
        },
        {
          title: 'Banking-grade security',
          body: 'Your data is safe with us. We have a 256-bit encryption on sensitive information.'
        },
        {
          title: 'Invoicing and Payments',
          link: 'invoicing-and-payments',
          body: 'Produce beautiful invoices that reflect the image of your company.'
        },
        {
          title: 'Infinite customisation',
          link: 'infinite-customisation',
          body: 'You can manipulate CarePlanner to fit into your workflow and processes.'
        }
      ]
    };
  }

  render() {

    return (
      <DefaultLayout id="home-page">
        <Helmet title="Home"></Helmet>
        <div className="cp-section-1">
          <div className="cp-container">
            <h1 className="cp-section__title--top">Home care software that works</h1>
            <p className="cp-section__description--top">
              CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets.
            </p>
            <div>
              <a className="cp-button cp-button--outline" href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
              <Link className="cp-button cp-button--filled" to="/contact-us">Book a demo</Link>
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
                <Link to="/features">Read More...</Link>
                <hr />
              </div>
            </div>
            <div className="cp-feature-grid">
              {this.state.features.map(feature =>
                  <div className="cp-feature"
                    onClick={() => {
                      if(feature.link) {
                        navigateTo('/features#' + feature.link);
                      }
                    }}
                    style={(feature.link !== undefined) ? {cursor: 'pointer'} : {}}>
                    <div className="placeholder placeholder-big"></div>
                    <h5>{feature.title}</h5>
                    <p>{feature.body}</p>
                  </div>
              )}
            </div>
          </div>
        </div>
        <div className="cp-section-3">
          <div className="cp-container">
            <div className="cp-content">
              <div className="cp-services-grid">
                <div className="cp-services-grid__service">
                  <h2>Top Notch Support</h2>
                  <p className="cp-section__description--top">
                    {`You can call us as much as you like and you will get straight through to someone who can help.`}
                  </p>
                </div>
                <div className="cp-services-grid__service">
                  <h2>Unbeatable Value</h2>
                  <p className="cp-section__description--top">
                    {`Pay as you go with no long term contracts, no 'upgrade' fees and no additional charge for core features.`}
                  </p>
                </div>
                <div className="cp-services-grid__service">
                  <h2>Easy to use</h2>
                  <p className="cp-section__description--top">
                    {`CarePlanner is very user friendly, and you don't need to be trained to use it.`}
                  </p>
                </div>
              </div>
              <blockquote>
                "I've now got more time to support staff, be face-to-face with clients and their families, and offer a truly personal service."
              </blockquote>
              <div className="cp-quote__header">
                <span className="placeholder"></span>
                <span className="cp-quote__author">Gary Hardman - </span>
                <span className="cp-quote__company">Proud To Care</span>
              </div>
              <div className="cp-footer__cta">
                <a className="cp-button cp-button--big cp-button--filled cp-button--light" href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
              </div>
              <div className="cp-footer__cta">
                <Link className="cp-button cp-button--big cp-button--filled" to="/contact-us">Book a demo</Link>
              </div>
              <div className="cp-footer__cta">
                <Link className="cp-button cp-button--big cp-button--filled cp-button--light" to="/contact-us">Request a ringback</Link>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
};
