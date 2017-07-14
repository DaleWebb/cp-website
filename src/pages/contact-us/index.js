import React from 'react';

import { Helmet } from 'react-helmet';

import DefaultLayout from '../../templates/DefaultLayout/';

import './ContactUs.scss'

export default class ContactUs extends React.Component {

  render() {

    return (
      <DefaultLayout id="contact-us">
        <Helmet>
          <title>Contact Us | CarePlanner</title>
          <meta name="description" content="Talk to the team about how CarePlanner can work for you." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contact Us | CarePlanner" />
          <meta property="og:description" content="Talk to the team about how CarePlanner can work for you." />
          <meta name="twitter:title" content="Contact Us | CarePlanner" />
          <meta name="twitter:description" content="Talk to the team about how CarePlanner can work for you." />
        </Helmet>
        <div className="cp-section-1">
          <h1>Contact Us</h1>
        </div>
        <div className="cp-section-2">
          <div className="cp-column-1">
            <iframe id="62022480953351" style={{border: 0}}/>
            <script src="https://form.jotformeu.com/jsform/62022480953351"></script>
          </div>
          <div className="cp-column-2">
            <h2>Offices</h2>
            <div className="cp-column-2__column-1">
              <p>Leadworks First Floor<br />Anchor Square<br />Harbourside<br />Bristol<br />BS1 5DB</p>
            </div>
            <div className="cp-column-2__column-2">
              <p>Leadworks First Floor<br />Anchor Square<br />Harbourside<br />Bristol<br />BS1 5DB</p>
            </div>
            <h2>Sales Enquiries</h2>
              <p>
                <b>Email: </b>
                <a href="mailto:enquiries@care-planner.co.uk">enquiries@care-planner.co.uk</a>
              </p>
              <p>
                <b>Phone: </b>
                <span>+44 (0) 117 214 0125</span>
              </p>
          </div>
        </div>
      </DefaultLayout>
    );
  }
};
