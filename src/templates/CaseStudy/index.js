import React from 'react';

import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';

import PrismicDOM from 'prismic-dom';

import DefaultLayout from '../DefaultLayout/';

import './CaseStudy.scss'

export default class CaseStudy extends React.Component {

  render() {

    const caseStudy = this.props.data.prismicDocument;
    const caseStudies = this.props.data.allPrismicDocument.edges;

    return (
      <DefaultLayout id="case-study" itemScope itemType="http://schema.org/Article">
        <Helmet title={PrismicDOM.RichText.asText(caseStudy.data.company_name)}>
          <meta name="description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={PrismicDOM.RichText.asText(caseStudy.data.company_name) + " | CarePlanner"} />
          <meta property="og:description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
          <meta name="twitter:title" content={PrismicDOM.RichText.asText(caseStudy.data.company_name) + " | CarePlanner"} />
          <meta name="twitter:description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
        </Helmet>
        <style dangerouslySetInnerHTML={{ __html: '.cp-section-1::before { background: url(' + caseStudy.data.large_image.url + '); }' }}></style>
        <div className="cp-section-1">
          <div className="cp-container">
            <h5>Case Study</h5>
            <h1 itemProp="name">{PrismicDOM.RichText.asText(caseStudy.data.company_name)}</h1>
            <blockquote>"{PrismicDOM.RichText.asText(caseStudy.data.quote)}"</blockquote>
            <div className="cp-quote__header">
              <span className="placeholder"></span>
              <span className="cp-quote__author">{caseStudy.data.quote_author} - </span>
              <span className="cp-quote__company" itemProp="about"> {PrismicDOM.RichText.asText(caseStudy.data.company_name)}</span>
            </div>
          </div>
        </div>
        <div className="cp-section-2">
          <div className="cp-container">
            <div className="cp-column-1" itemProp="articleBody">
              <div className="cp-column-1__section-1" itemProp="articleSection">
                <h5>The Company</h5>
                 <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.data.company_description)}}></div>
              </div>
              <div className="cp-column-1__section-2" itemProp="articleSection">
                <h5>The Problem</h5>
                <p>
                   <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asText(caseStudy.data.problem)}}></div>
                </p>
              </div>
              <div className="cp-column-1__section-3" itemProp="articleSection">
                <h5>The Solution</h5>
                <p>
                   <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asText(caseStudy.data.solution)}}></div>
                </p>
              </div>
              <div className="cp-column-1__section-3" itemProp="articleSection">
                <h5>The Results</h5>
                <p>
                   <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asText(caseStudy.data.results)}}></div>
                </p>
              </div>
            </div>
            <div className="cp-column-2">
              <div className="cp-case-study__stat">
                <div className="cp-case-study__stat__figure">{caseStudy.data.key_stat_figure}</div>
                <div className="cp-case-study__stat__description">{caseStudy.data.key_stat_text}</div>
              </div>
              <blockquote>"{PrismicDOM.RichText.asText(caseStudy.data.quote)}"</blockquote>
              <div className="cp-button-group--vertical">
                <Link className="cp-button cp-button--filled cp-button--large" to="/contact-us">Book a demo</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-section-3" itemScope itemType="http://schema.org/ItemList">
          <div className="cp-container">
            <h2 onClick={() => navigateTo('/case-studies')}>More Case Studies</h2>
            {caseStudies.map(caseStudy =>
              <div className="cp-case-study" onClick={() => navigateTo(caseStudy.node.fields.permalink)} itemProp="itemListElement">
                <div className="cp-case-study__inner">
                  <img className="cp-case-study__inner__img" src={caseStudy.node.data.large_image.url} alt="Quote from {PrismicDOM.RichText.asText(caseStudy.node.data.company_description)}"/>
                  <h3 itemProp="name">{PrismicDOM.RichText.asText(caseStudy.node.data.company_name)}</h3>
                  <div className="cp-case-study__inner__description" dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.node.data.summary)}}></div>
                  <Link to={caseStudy.node.fields.permalink}>Read Case Study...</Link>
                </div>
                <div className="cp-case-study__stat">
                  <div className="cp-case-study__stat__figure">{caseStudy.node.data.key_stat_figure}</div>
                  <div className="cp-case-study__stat__description">{caseStudy.node.data.key_stat_text}</div>
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
  query CaseStudy($permalink: String!) {
    prismicDocument(fields: { permalink: { eq: $permalink } }) {
      fields {
        permalink
      }
      data {
        key_stat_figure
        key_stat_text
        large_image {
          url
        }
        summary {
          type
          text
        }
        company_name {
          type
          text
        }
        company_description {
          type
          text
        }
        quote {
          type
          text
        }
        quote_author
        problem {
          type
          text
        }
        solution {
          type
          text
        }
        results {
          type
          text
        }
      }
    }
    allPrismicDocument(
      limit: 4,
      filter: { type: { eq: "case_study" }, fields: { permalink: { ne: $permalink } } }
    ) {
      edges {
        node {
          fields {
            permalink
          }
          data {
            key_stat_figure
            key_stat_text
            large_image {
              url
            }
            summary {
              type
              text
            }
            company_name {
              type
              text
            }
            company_description {
              type
              text
            }
          }
        }
      }
    }
  }
`
