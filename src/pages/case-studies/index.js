import React from 'react';

import { navigateTo } from 'gatsby-link';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import PrismicDOM from 'prismic-dom';

import DefaultLayout from '../../templates/DefaultLayout/';

import './CaseStudies.scss'

export default class CaseStudies extends React.Component {

  render() {
    const caseStudies = this.props.data.allPrismicDocument.edges;

    return (
      <DefaultLayout id="case-studies">
        <Helmet title="Case Studies">
          <meta name="description" content="Read why more companies are switching to CarePlanner." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Case Studies on CarePlanner" />
          <meta property="og:description" content="Read why more companies are switching to CarePlanner." />
          <meta name="twitter:title" content="Case Studies on CarePlanner" />
          <meta name="twitter:description" content="Read why more companies are switching to CarePlanner." />
        </Helmet>
        <div className="cp-section-1">
          <div className="cp-container">
            <h1>Case Studies</h1>
            <p className="cp-section__description--top">
              Read why more companies are switching to CarePlanner.
            </p>
          </div>
        </div>
        <div className="cp-section-2" itemScope itemType="http://schema.org/ItemList">
          <div className="cp-container">
            {caseStudies.map(caseStudy =>
              <div className="cp-case-study" onClick={() => navigateTo(caseStudy.node.fields.permalink)} itemProp="itemListElement">
                <div className="cp-case-study__inner">
                  <img className="cp-case-study__inner__img" src={caseStudy.node.data.large_image.url} alt="Quote from {caseStudy.node.data.company_name.text}" />
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
  query caseStudies {
    allPrismicDocument(filter: { type: { eq: "case_study" } }) {
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
          }
        }
      }
    }
  }
`
