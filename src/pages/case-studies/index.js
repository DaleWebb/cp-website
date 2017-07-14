import React from 'react';

import { navigateTo } from 'gatsby-link';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import DefaultLayout from '../../templates/DefaultLayout/';

import './CaseStudies.scss'

import screens from '../home/screens.png';

export default class CaseStudies extends React.Component {

  render() {

    const caseStudies = this.props.data.allMarkdownRemark.edges;

    return (
      <DefaultLayout id="case-studies">
        <Helmet>
          <title>Case Studies | CarePlanner</title>
        </Helmet>
        <div className="cp-section-1">
          <h1>Case Studies</h1>
          <p className="cp-section__description--top">
            Read why more companies are switching to CarePlanner.
          </p>
        </div>
        <div className="cp-section-2" itemscope itemtype="http://schema.org/ItemList">
          <div className="cp-container">
            {caseStudies.map(caseStudy =>
              <div className="cp-case-study" onClick={() => navigateTo(caseStudy.node.frontmatter.path)} itemprop="itemListElement">
                <div className="cp-case-study__inner">
                  <img className="cp-case-study__inner__img" src={require('./' + caseStudy.node.frontmatter.img.base)} alt="Quote from {caseStudy.frontmatter.body.company}" />
                  <h3 itemprop="name">{caseStudy.node.frontmatter.name}</h3>
                  <div className="cp-case-study__inner__description">
                    <p>{caseStudy.node.frontmatter.description}</p>
                  </div>
                  <Link to={caseStudy.node.frontmatter.path}>Read Case Study...</Link>
                </div>
                <div className="cp-case-study__stat">
                  <div className="cp-case-study__stat__figure">{caseStudy.node.frontmatter.stat}</div>
                  <div className="cp-case-study__stat__description">{caseStudy.node.frontmatter.statDescription}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query caseStudies {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/case-studies/" }, draft: {eq: false} } }
    ) {
      edges {
        node {
          frontmatter {
            name
            path
            img {
              base
            }
            description
            stat
            statDescription
          }
        }
      }
    }
  }
`
