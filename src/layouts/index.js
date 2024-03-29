import React from 'react';

import { Helmet } from 'react-helmet';

import SalesNavbar from '../components/sales-navbar';
import SalesFooter from '../components/sales-footer';
import BlogNavbar from '../components/blog-navbar';
import BlogFooter from '../components/blog-footer';

import presets from '../utils/presets';

import '../fonts/fonts.scss';

export default class DefaultLayout extends React.Component {

  render() {

    //For staging on GitHub pages, find the sub-directory in the URL and extract it
    const isBlog = this.props.location.pathname.replace('/' + this.props.data.site.siteMetadata.gitRepo, '').slice(0, 5) === `/blog`;

    let Navbar = <SalesNavbar />;
    let Footer = <SalesFooter navigation={this.props.data.allPrismicDocument.edges}/>;

    if(isBlog) {
      Navbar = <BlogNavbar />;
      Footer = <BlogFooter />;
    }

    return (
      <div css={(isBlog) ? style.marginBlogSite : style.marginSalesSite}>
        <Helmet defaultTitle="Home care software that works" titleTemplate="%s | CarePlanner">
          <link rel="icon" href={require('../assets/favicon.ico')} type="image/x-icon"/>
          <meta name="description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CarePlanner" />
          <meta property="og:description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
          <meta name="twitter:title" content="CarePlanner" />
          <meta name="twitter:description" content="CarePlanner gives domiciliary home care agencies the power to plan and manage staff rosters, client schedules, invoicing and timesheets." />
        </Helmet>
        {Navbar}
        {this.props.children()}
        {Footer}
      </div>
    );
  }
};

const style = {
  marginSalesSite: {
    [presets.Desktop]: {
      paddingTop: '80px'
    },
    [presets.Tablet]: {
      paddingTop: '60px'
    },
    [presets.Mobile]: {
      paddingTop: '60px'
    }
  },
  marginBlogSite: {
    paddingTop: '60px'
  }
}

export const pageQuery = graphql`
  query navigation {
    site {
      siteMetadata {
        gitRepo
      }
    }
    allPrismicDocument(sort: { order: ASC, fields: [data___weight] }) {
      edges {
        node {
          type
          fields {
            permalink
          }
          data {
            feature_name {
              type
              text
            },
            title {
              type
              text
            }
            company_name {
              type
              text
            }
          }
        }
      }
    }
  }
`
