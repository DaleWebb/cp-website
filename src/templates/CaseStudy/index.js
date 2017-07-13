import React from 'react';
import { navigateTo } from 'gatsby-link';

import DefaultLayout from '../DefaultLayout/';

import './CaseStudy.scss'

export default class CaseStudy extends React.Component {

  render() {

    const caseStudy = this.props.data.markdownRemark;

    return (
      <DefaultLayout id="case-study">
        <style dangerouslySetInnerHTML={{ __html: '.cp-section-1::before { background: url(' + require('../../pages/case-studies/' + caseStudy.frontmatter.img.base) + '); }' }}></style>
        <div className="cp-section-1">
          <h5>Case Study</h5>
          <h1>{caseStudy.frontmatter.name}</h1>
          <blockquote>"{caseStudy.frontmatter.quote.text}"</blockquote>
          <div className="cp-quote__header">
            <span className="placeholder"></span>
            <span className="cp-quote__author">{caseStudy.frontmatter.quote.name} - </span>
            <span className="cp-quote__company"> {caseStudy.frontmatter.name}</span>
          </div>
          <p>
          </p>
        </div>
        <div className="cp-section-2">
          <div className="cp-column-1">
            <div className="cp-column-1__section-1">
              <h5>The Company</h5>
              <p>
                {caseStudy.frontmatter.body.company}
              </p>
            </div>
            <div className="cp-column-1__section-2">
              <h5>The Problem</h5>
              <p>
                {caseStudy.frontmatter.body.problem}
              </p>
            </div>
            <div className="cp-column-1__section-3">
              <h5>The Solution</h5>
              <p>
                {caseStudy.frontmatter.body.solution}
              </p>
            </div>
            <div className="cp-column-1__section-3">
              <h5>The Results</h5>
              <p>
                {caseStudy.frontmatter.body.results}
              </p>
            </div>
          </div>
          <div className="cp-column-2">
            <div className="cp-case-study__stat">
              <div className="cp-case-study__stat__figure">{caseStudy.frontmatter.stat}</div>
              <div className="cp-case-study__stat__description">{caseStudy.frontmatter.statDescription}</div>
            </div>
            <blockquote>"{caseStudy.frontmatter.quote.text}"</blockquote>
          </div>
        </div>
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query CaseStudy($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        path
        img {
          base
        }
        description
        stat
        statDescription
        quote {
          name
          text
        }
        body {
          company
          problem
          solution
          results
        }
      }
    }
  }
`
