import React from 'react';

import { Helmet } from 'react-helmet';

import DefaultLayout from '../templates/DefaultLayout/';

import presets from '../utils/presets';

export default class FourOhFour extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <DefaultLayout>
        <Helmet title="Missing Page"></Helmet>
        <div css={styles.topBlock}>
          <h1>We cannot find that page...</h1>
          <p className="cp-section__description--top">
            Click any of the links to learn more about CarePlanner.
          </p>
        </div>
      </DefaultLayout>
    );
  }
};

const styles = {
  topBlock: {
    background: '#F4F8FC',
    width: '100%',
    [presets.Desktop]: {
      padding: '160px 100px 100px 100px'
    },
    [presets.Tablet]: {
      padding: '160px 100px 100px 100px'
    },
    [presets.Mobile]: {
      padding: '110px 50px 50px 50px'
    }
  }
};
