import React from 'react';

import { navigateTo } from 'gatsby-link';
import Link from 'gatsby-link';

import DefaultLayout from '../../templates/DefaultLayout/';

import './CaseStudies.scss'

import screens from '../home/screens.png';

export default class CaseStudies extends React.Component {

  render() {

    const caseStudies = this.props.data.allMarkdownRemark.edges;

    return (
      <DefaultLayout id="case-studies">
        <div className="cp-section-1">
          <h1>Case Studies</h1>
          <p className="cp-section__description--top">
            Read why more companies are switching to CarePlanner.
          </p>
        </div>
        <div className="cp-section-2">
          <div className="cp-container">
            {caseStudies.map(caseStudy =>
              <Link to={caseStudy.node.frontmatter.path}>
                <div className="cp-case-study">
                  <div className="cp-case-study__inner">
                    <img className="cp-case-study__inner__img" src={screens}/>
                    <h3>{caseStudy.node.frontmatter.name}</h3>
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
              </Link>
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
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            path
            description
            stat
            statDescription
          }
        }
      }
    }
  }
`
