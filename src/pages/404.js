import React from 'react';

import DefaultLayout from '../templates/DefaultLayout/';

import './404/404.scss'

export default class FourOhFour extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <DefaultLayout id="four-oh-four">
        <div className="cp-section-1">
          <h1>We cannot find that page...</h1>
          <p className="cp-section__description--top">
            Click any of the links to learn more about CarePlanner.
          </p>
        </div>
        <div className="cp-section-2">

        </div>
      </DefaultLayout>
    );
  }
};
