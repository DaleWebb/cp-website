import React from 'react';

import { Helmet } from 'react-helmet';

import presets from '../utils/presets';
import globalStyles from '../utils/global-styles';

export default class FourOhFour extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <Helmet title="Missing Page"></Helmet>
        <div css={styles.topBlock}>
          <h1>We cannot find that page...</h1>
          <p css={globalStyles.sectionDescriptionTop}>
            Click any of the links to learn more about CarePlanner.
          </p>
        </div>
      </div>
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
