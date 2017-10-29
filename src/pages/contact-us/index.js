import React from 'react';

import { Helmet } from 'react-helmet';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';

export default class ContactUs extends React.Component {

  render() {

    return (
      <div>
        <Helmet title="Contact Us">
          <meta name="description" content="Talk to the team about how CarePlanner can work for you." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contact CarePlanner" />
          <meta property="og:description" content="Talk to the team about how CarePlanner can work for you." />
          <meta name="twitter:title" content="Contact CarePlanner" />
          <meta name="twitter:description" content="Talk to the team about how CarePlanner can work for you." />
        </Helmet>
        <div css={styles.section1}>
          <div css={globalStyles.container}>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div css={styles.section2}>
          <div css={globalStyles.container}>
            <div css={styles.column1}>
              <iframe id="62022480953351" style={{border: 0}}/>
              <script src="https://form.jotformeu.com/jsform/62022480953351"></script>
            </div>
            <div css={styles.column2}>
              <h2>Office</h2>
              <div css={styles.column2column}>
                <p>CarePlanner<br />11th Floor<br />Colston Tower<br />Bristol<br />BS1 4XE</p>
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
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    background: '#F4F8FC',
    [presets.Desktop]: {
      padding: '100px'
    },
    [presets.Tablet]: {
      padding: '100px'
    },
    [presets.Mobile]: {
      padding: '70px 50px'

    }
  },
  section2: {
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '50px 100px 100px 100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 100px)',
      padding: '50px 50px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 40px)',
      padding: '0px 20px'
    }
  },
  column1: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '40%',
      width: '40%',
      margin: '0 1%',
      height: '694px'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
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
      verticalAlign: 'top',
      maxWidth: '48%',
      width: '48%',
      margin: '0 5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
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
  column2column: {
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
      width: '100%',
    },
    [presets.Mobile]: {
      maxWidth: '100%',
      width: '100%',
    }
  }
}
