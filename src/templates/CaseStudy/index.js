import React from 'react';

import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';

import DefaultLayout from '../DefaultLayout/';

import './CaseStudy.scss'

export default class CaseStudy extends React.Component {

  render() {

    const caseStudy = this.props.data.markdownRemark;
    const caseStudies = this.props.data.allMarkdownRemark.edges;

    return (
      <DefaultLayout id="case-study" itemscope itemtype="http://schema.org/Article">
        <Helmet>
          <title>{caseStudy.frontmatter.name} | CarePlanner</title>
          <meta name="description" content={caseStudy.frontmatter.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="{caseStudy.frontmatter.name} | CarePlanner" />
          <meta property="og:description" content={caseStudy.frontmatter.description} />
          <meta name="twitter:title" content="{caseStudy.frontmatter.name} | CarePlanner" />
          <meta name="twitter:description" content={caseStudy.frontmatter.description} />
        </Helmet>
        <style dangerouslySetInnerHTML={{ __html: '.cp-section-1::before { background: url(' + require('../../pages/case-studies/' + caseStudy.frontmatter.img.base) + '); }' }}></style>
        <div className="cp-section-1">
          <h5>Case Study</h5>
          <h1 itemprop="name">{caseStudy.frontmatter.name}</h1>
          <blockquote>"{caseStudy.frontmatter.quote.text}"</blockquote>
          <div className="cp-quote__header">
            <span className="placeholder"></span>
            <span className="cp-quote__author">{caseStudy.frontmatter.quote.name} - </span>
            <span className="cp-quote__company" itemprop="about"> {caseStudy.frontmatter.name}</span>
          </div>
        </div>
        <div className="cp-section-2">
          <div className="cp-column-1" itemprop="articleBody">
            <div className="cp-column-1__section-1" itemprop="articleSection">
              <h5>The Company</h5>
              <p>
                {caseStudy.frontmatter.body.company}
              </p>
            </div>
            <div className="cp-column-1__section-2" itemprop="articleSection">
              <h5>The Problem</h5>
              <p>
                {caseStudy.frontmatter.body.problem}
              </p>
            </div>
            <div className="cp-column-1__section-3" itemprop="articleSection">
              <h5>The Solution</h5>
              <p>
                {caseStudy.frontmatter.body.solution}
              </p>
            </div>
            <div className="cp-column-1__section-3" itemprop="articleSection">
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
        <div className="cp-section-3" itemscope itemtype="http://schema.org/ItemList">
          <div className="cp-container">
            <h2 onClick={() => navigateTo('/case-studies')}>More Case Studies</h2>
            {caseStudies.map(caseStudy =>
              <div className="cp-case-study" onClick={() => navigateTo(caseStudy.node.frontmatter.path)} itemprop="itemListElement">
                <div className="cp-case-study__inner">
                  <img className="cp-case-study__inner__img" src={require('../../pages/case-studies/' + caseStudy.node.frontmatter.img.base)} alt="Quote from {caseStudy.frontmatter.body.company}"/>
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
    allMarkdownRemark(
      limit: 4,
      filter: { frontmatter: { path: { regex: "/case-studies/", ne: $path }, draft: {eq: false} } }
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
