import React from 'react';

import Link from 'gatsby-link';

import { Helmet } from 'react-helmet';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';
import { buttonStyle, buttonGroupStyle } from '../../components/button';

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
        }
      ],
      features: [
        {
          title: 'Drag and drop rostering',
          icon: 'drag-and-drop-rostering.svg',
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
          icon: 'infinite-customisation.svg',
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
          icon: 'invoicing.svg',
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
          icon: 'call-monitoring.svg',
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
          icon: 'sms-emails-mobile.svg',
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
      <div>
        <Helmet title="Features"></Helmet>
        <div css={styles.section1}>
          <div css={globalStyles.container}>
            <div css={styles.column1}>
              <h1 css={globalStyles.sectionTitleTop}>Feature Highlights</h1>
              <p css={globalStyles.sectionDescriptionTop}>
                {`Learn about the crucial parts of CarePlanner that will help boost your growth.`}
              </p>
              <div>
                <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
              </div>
            </div>
            <div css={styles.column2}>
              {this.state.features.map(feature =>
                <h5 css={styles.column2feature}>
                  <a href={`#` + feature.link}>{feature.title}</a>
                </h5>
              )}
              <h5 css={styles.column2feature}>
                <a href="#everything-else">Everything Else</a>
              </h5>
            </div>
          </div>
        </div>
        <div css={styles.section2}>
          {this.state.features.map((feature, i) => {
            if(i % 2) {
              return (
                <div css={[styles.mainFeature, styles.mainFeature.left]} id={feature.link}>
                  <div css={styles.mainFeature.grid}>
                    <div css={globalStyles.placeholder}>
                      <img src={require(`./` + feature.icon)} />
                    </div>
                    <h5>{feature.title}</h5>
                    <h2>{feature.headline}</h2>
                    {feature.info.map(info =>
                      <p css={styles.mainFeature.info}>{info}</p>
                    )}
                    <div css={buttonGroupStyle.horizontal}>
                      <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                      <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
                    </div>
                  </div>
                  <div css={[styles.mainFeatureGraphic, styles.mainFeature.left[feature.graphicClass]]}>
                    <img src={require(`./` + feature.img)}/>
                  </div>
                </div>
              );
            } else {
              return (
                <div css={[styles.mainFeature, styles.mainFeature.right]} id={feature.link}>
                  <div css={[styles.mainFeatureGraphic, styles.mainFeature.right[feature.graphicClass]]}>
                    <img src={require(`./` + feature.img)}/>
                  </div>
                  <div css={styles.mainFeature.grid}>
                    <div css={globalStyles.placeholder}>
                      <img src={require(`./` + feature.icon)} />
                    </div>
                    <h5>{feature.title}</h5>
                    <h2>{feature.headline}</h2>
                    {feature.info.map(info =>
                      <p css={styles.mainFeature.info}>{info}</p>
                    )}
                    <div css={buttonGroupStyle.horizontal}>
                      <a css={[buttonStyle.button, buttonStyle.outline]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
                      <Link css={[buttonStyle.button, buttonStyle.filled]} to="/contact-us">Book a demo</Link>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div css={styles.section3} id="everything-else">
          <div css={globalStyles.container} style={{top: `-50px`}}>
            <h1>{`Everything Else...`}</h1>
            <div css={styles.section3.featureGrid}>
              {this.state.everythingElse.map(feature =>
                <div css={styles.section3.featureGrid.feature}>
                  <h5>{feature.title}</h5>
                  <p>{feature.body}</p>
                </div>
              )}
            </div>
            <div style={{textAlign: 'center'}}>
              <a css={[buttonStyle.button, buttonStyle.outline, buttonStyle.large]} href="https://www.youtube.com/embed/7oTDpRya7Ko?autoplay=1" target="_blank">Watch the video</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    position: 'relative',
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 50px)',
      marginBottom: '60px',
      padding: '110px 25px 50px 25px'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      opacity: .2,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right',
      backgroundImage: 'url(' + require('./section-1.png') + ')',
      [presets.Desktop]: {
        height: '200%',
        backgroundSize: '100%'
      },
      [presets.Tablet]: {
        height: '200%',
        backgroundSize: '100%'
      },
      [presets.Mobile]: {
        height: '100%',
        backgroundSize: 'cover'
      }
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: '-o-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: '-moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
      [presets.Desktop]: {
        height: '200%'
      },
      [presets.Tablet]: {
        height: '150%'
      },
      [presets.Mobile]: {
        height: '100%'
      }
    }
  },
  column1: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '40%',
      width: '40%',
      margin: '0 1%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '50%',
      width: '50%',
      margin: '0 1%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  column2: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '48%',
      width: '48%',
      margin: '0 5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      maxWidth: '38%',
      width: '38%',
      margin: '0 5%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  column2feature: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '50%',
      width: '50%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '100%',
      width: '100%'
    },
    [presets.Mobile]: {
      maxWidth: '100%',
      width: '100%'
    }
  },
  section2: {
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '50px 100px 100px 100px',
      marginBottom: '200px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 100px)',
      padding: '50px',
      marginBottom: '150px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 40px)',
      marginBottom: '120px',
      padding: '0 20px'
    }
  },
  mainFeature: {
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    alignItems: 'center',
    [presets.Desktop]: {
      flexFlow: 'row'
    },
    [presets.Tablet]: {
      flexFlow: 'row'
    },
    [presets.Mobile]: {
      flexFlow: 'column'
    },
    grid: {
      [presets.Desktop]: {
        maxWidth: '40%',
        padding: '100px 0'
      },
      [presets.Tablet]: {
        maxWidth: '40%',
        padding: '25px 0'
      },
      [presets.Mobile]: {
        padding: '50px 20px',
        order: 1
      }
    },
    left: {
      circle: {
        [presets.Desktop]: {
          left: '200px',
          marginLeft: '-100px'
        },
        [presets.Tablet]: {
          left: '200px',
          marginLeft: '-100px'
        },
        '& img': {
          borderRadius: '100%',
          '-webkit-box-shadow': 'inset 0px 0px 15px #888888',
          '-moz-box-shadow': 'inset 0px 0px 15px #888888',
          boxShadow: 'inset 0px 0px 15px #888888'
        }
      },
      frame: {
        [presets.Desktop]: {
          left: '100px'
        },
        [presets.Tablet]: {
          left: '100px'
        }
      },
      normal: {
        [presets.Desktop]: {
          left: '50px'
        },
        [presets.Tablet]: {
          left: '50px'
        }
      },
      info: {
        [presets.Desktop]: {
          margin: '20px 0 20px 10%'
        },
        [presets.Tablet]: {
          margin: '20px 0 20px 10%'
        }
      }
    },
    right: {
      circle: {
        [presets.Desktop]: {
          right: '200px',
          marginRight: '-100px'
        },
        [presets.Tablet]: {
          right: '200px',
          marginRight: '-100px'
        },
        '& img': {
          borderRadius: '100%',
          '-webkit-box-shadow': 'inset 0px 0px 15px #888888',
          '-moz-box-shadow': 'inset 0px 0px 15px #888888',
          boxShadow: 'inset 0px 0px 15px #888888'
        }
      },
      frame: {
        [presets.Desktop]: {
          right: '100px'
        },
        [presets.Tablet]: {
          right: '100px'
        }
      },
      normal: {
        [presets.Desktop]: {
          right: '50px'
        },
        [presets.Tablet]: {
          right: '50px'
        }
      }
    },
    info: {
      [presets.Desktop]: {
        display: 'inline-block',
        width: '40%',
        margin: '20px 10% 20px 0',
        verticalAlign: 'top'
      },
      [presets.Tablet]: {
        display: 'inline-block',
        width: '40%',
        margin: '20px 10% 20px 0',
        verticalAlign: 'top'
      }
    },

  },
  mainFeatureGraphic: {
    [presets.Desktop]: {
      position: 'relative',
      minWidth: '60%',
      textAlign: 'center'
    },
    [presets.Tablet]: {
      position: 'relative',
      minWidth: '60%',
      textAlign: 'center'
    },
    [presets.Mobile]: {
      order: 0,
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center'
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  section3: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#F4F8FC',
    [presets.Mobile]: {
      top: '30%'
    },
    '& h1': {
      textAlign: 'center'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      backgroundImage: 'url(' + require('../../assets/curve-top.svg') + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'top',
      backgroundPositionX: 'center',
      zIndex: -1,
      [presets.Desktop]: {
        top: '-30%',
        backgroundSize: 'cover'
      },
      [presets.Tablet]: {
        top: '-129px',
        backgroundSize: 'contain'
      },
      [presets.Mobile]: {
        top: '-125px',
        backgroundSize: 'contain'
      }
    },
    featureGrid: {
      [presets.Desktop]: {
        padding: '50px 100px'
      },
      [presets.Tablet]: {
        padding: '50px 100px'
      },
      [presets.Mobile]: {
        padding: '50px 20px'
      },
      feature: {
        [presets.Desktop]: {
          display: 'inline-block',
          verticalAlign: 'top',
          maxWidth: '20%',
          width: '20%',
          margin: '40px 2%'
        },
        [presets.Tablet]: {
          display: 'inline-block',
          verticalAlign: 'top',
          maxWidth: '25%',
          width: '25%',
          margin: '40px 3.5%'
        },
        [presets.Mobile]: {
          margin: '40px 15px'
        },
        placeholder: {
          [presets.Mobile]: {
            float: 'left',
            marginRight: '25px'
          }
        }
      }
    }
  },

};
