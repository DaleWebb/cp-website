import React from 'react';

import { Helmet } from 'react-helmet';

import DefaultLayout from '../../templates/DefaultLayout/';

import './Features.scss'

export default class Features extends React.Component {

  render() {

    return (
      <DefaultLayout id="features">
        <Helmet>
          <title>Features | CarePlanner</title>
        </Helmet>
      </DefaultLayout>
    );
  }
};
