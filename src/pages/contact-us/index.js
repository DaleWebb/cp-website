import React from 'react';

import DefaultLayout from '../../templates/DefaultLayout/';

import './ContactUs.scss'

export default class ContactUs extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://form.jotformeu.com/jsform/62022480953351";
        script.async = true;

        document.body.appendChild(script);
    }

  render() {

    return (
      <DefaultLayout id="contact-us">
        <div className="cp-section-1">
          <h1>Contact Us</h1>
        </div>
        <div className="cp-section-2">
          <div className="cp-column-1">
            <iframe id="62022480953351" style={{border: 0}}/>
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
