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
          <title>CarePlanner</title>
          <meta name="description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CarePlanner" />
          <meta property="og:description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
          <meta name="twitter:title" content="CarePlanner" />
          <meta name="twitter:description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
        </Helmet>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
