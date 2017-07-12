import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import './CaseStudy.scss';
import '../../fonts/fonts.scss';

export default class CaseStudy extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}