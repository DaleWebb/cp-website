import React from 'react';

import { Helmet } from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './DefaultLayout.scss';
import '../../fonts/fonts.scss';

export default class DefaultLayout extends React.Component {

  render() {
    return (
      <div id={this.props.id}>
        <Helmet>
          <link rel="icon" href={require('./favicon.ico')} type="image/x-icon"/>
        </Helmet>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
