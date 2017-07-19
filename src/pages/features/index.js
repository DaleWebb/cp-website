import React from 'react';

import Link from 'gatsby-link';

import { Helmet } from 'react-helmet';

import DefaultLayout from '../../templates/DefaultLayout/';

import './Features.scss'

export default class Features extends React.Component {

  constructor() {
    super();
    this.state = {
      everythingElse: [
        {
          title: `CRM Functions`,
          body: `A secure space to store information about clients and carers.`
        },
        {
          title: `Sending Emails and SMS`,
          body: `Communicate key information to clients and staff directly from CarePlanner.`
        },
        {
          title: `Document Storage`,
          body: `Keep all your documents together in one secure system.`
        },
        {
          title: `Live Map`,
          body: `Get a holistic view of carers and clients in real-time, powered by Google Maps.`
        },
        {
          title: `Track Training and Skills`,
          body: `Record staff training and receive alerts for when renewal is due.`
        },
        {
          title: `Third-party Integrations`,
          body: `All data can be exported as CSV for manual integrations.`
        },
        {
          title: `Daily and Weekly Roster`,
          body: `Get a visual overview of how your clients and carers are scheduled over a day or week.`
        },
        {
          title: `Monthly Live-in`,
          body: ``
        }
      ],
      features: [
        {
          title: 'Drag and drop rostering',
          link: 'drag-and-drop-rostering',
          headline: `Roster Your Week In Minutes`,
          info: [
            `All the information you need to select the best carer for an appointment`,
            `Tweak appointment times and make carer changes with just a few clicks`,
            `Easy schedule creation for appointments on an on-going basis`,
            `Intuitive 'timeline' interface gives you a clear overview of your daily roster`
          ],
          graphicClass: `circle`,
          img: `drag-and-drop-rostering.gif`
        },
        {
          title: 'Infinite customisation',
          link: 'infinite-customisation',
          headline: `Configured For Your Business`,
          info: [
            `CarePlanner has been built to be flexible; if you have a unique requirement, please get in touch.`,
            `You can filter all the information by region, branch or geographical area.`,
            `Permissions can be set to control what users can access.`,
            `Franchises can be built around one system that grows with your business.`
          ],
          graphicClass: `circle`,
          img: `drag-and-drop-rostering.gif`
        },
        {
          title: 'Invoicing and Payments',
          link: 'invoicing-and-payments',
          headline: `Bill Customers and Pay Staff`,
          info: [
            `Produce professional invoices and timesheets complete with your company logo.`,
            `Easy integration with Sage, Sage Payroll or IRIS.`,
            `Customise how your invoice is presented, and what information is shown to your customers.`,
            `Keep track of unpaid and overdue invoices.`
          ],
          graphicClass: `frame`,
          img: `invoicing-and-payments.png`
        },
        {
          title: 'Call Monitoring',
          link: 'call-monitoring',
          headline: `Monitor Visits Safely and Securely`,
          info: [
            `No need to use any service user's landline.`,
            `No need for a smartphone`,
            `Works even with no mobile reception`,
            `Can be used completely securely just with handwritten timesheets`
          ],
          graphicClass: `normal`,
          img: `call-monitoring.jpg`
        },
        {
          title: 'Mobile App',
          link: 'mobile-app',
          headline: `Keep Carers Connected On The Go`,
          info: [
            `GPS navigation to a carer’s next appointment.`,
            `Carers know exactly where they need to be - and when.`,
            `Rota changes updated for carers in real-time.`
          ],
          graphicClass: `normal`,
          img: `mobile-app.gif`
        }
      ]
    };
  }

  render() {

    return (
      <DefaultLayout id="features">
        <Helmet title="Features"></Helmet>
        <div className="cp-section-1">
          <div className="cp-container">
            <div className="cp-column-1">
              <h1 className="cp-section__title--top">Feature Highlights</h1>
              <p className="cp-section__description--top">
                {`Learn about the crucial parts of CarePlanner that will help boost your growth.`}
              </p>
              <div className="cp-column-1__cta">
              <a className="cp-button cp-button--outline" href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
              <Link className="cp-button cp-button--filled" to="/contact-us">Book a demo</Link>
              </div>
            </div>
            <div className="cp-column-2">
              {this.state.features.map(feature =>
                <h5 className="cp-column-2__feature">
                  <a href={`#` + feature.link}>{feature.title}</a>
                </h5>
              )}
              <h5 className="cp-column-2__feature">
                <a href="#everything-else">Everything Else</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="cp-section-2">
          {this.state.features.map((feature, i) => {
            if(i % 2) {
              return (
                <div className="cp-section-2__feature--left" id={feature.link}>
                  <div className="cp-section-2__feature-info-grid">
                    <h5>{feature.title}</h5>
                    <h2>{feature.headline}</h2>
                    {feature.info.map(info =>
                      <p className="cp-section-2__feature-info">{info}</p>
                    )}
                    <div>
                      <Link className="cp-button cp-button--filled" to="/contact-us">Book a demo</Link>
                    </div>
                  </div>
                  <div className={"cp-section-2__feature-graphic cp-section-2__feature-graphic--" + feature.graphicClass}>
                    <img src={require(`./` + feature.img)}/>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="cp-section-2__feature--right" id={feature.link}>
                  <div className={"cp-section-2__feature-graphic cp-section-2__feature-graphic--" + feature.graphicClass}>
                    <img src={require(`./` + feature.img)}/>
                  </div>
                  <div className="cp-section-2__feature-info-grid">
                    <h5>{feature.title}</h5>
                    <h2>{feature.headline}</h2>
                    {feature.info.map(info =>
                      <p className="cp-section-2__feature-info">{info}</p>
                    )}
                    <div>
                      <Link className="cp-button cp-button--filled" to="/contact-us">Book a demo</Link>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className="cp-section-3" id="everything-else">
          <div className="cp-container" style={{top: `-50px`}}>
            <h1>{`Everything Else...`}</h1>
            <div className="cp-feature-grid">
              {this.state.everythingElse.map(feature =>
                <div className="cp-feature">
                  <h5>{feature.title}</h5>
                  <p>{feature.body}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
};
