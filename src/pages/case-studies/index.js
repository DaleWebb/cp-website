import React from 'react';

import { navigateTo } from 'gatsby-link';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import PrismicDOM from 'prismic-dom';

import DefaultLayout from '../../templates/DefaultLayout/';

import presets from '../../utils/presets';

export default class CaseStudies extends React.Component {

  render() {
    const caseStudies = this.props.data.allPrismicDocument.edges;

    return (
      <DefaultLayout>
        <Helmet title="Case Studies">
          <meta name="description" content="Read why more companies are switching to CarePlanner." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Case Studies on CarePlanner" />
          <meta property="og:description" content="Read why more companies are switching to CarePlanner." />
          <meta name="twitter:title" content="Case Studies on CarePlanner" />
          <meta name="twitter:description" content="Read why more companies are switching to CarePlanner." />
        </Helmet>
        <div css={styles.section1}>
          <div className="cp-container">
            <h1>Case Studies</h1>
            <p className="cp-section__description--top">
              Read why more companies are switching to CarePlanner.
            </p>
          </div>
        </div>
        <div css={styles.section2} itemScope itemType="http://schema.org/ItemList">
          <div className="cp-container">
            {caseStudies.map(caseStudy =>
              <div css={styles.caseStudy} onClick={() => navigateTo(caseStudy.node.fields.permalink)} itemProp="itemListElement">
                <div css={styles.caseStudyInner}>
                  <img css={styles.caseStudyInnerImg} src={caseStudy.node.data.large_image.url} alt="Quote from {caseStudy.node.data.company_name.text}" />
                  <h3 itemProp="name">{PrismicDOM.RichText.asText(caseStudy.node.data.company_name)}</h3>
                  <div css={styles.caseStudyInnerDescription} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.node.data.summary)}}></div>
                  <Link to={caseStudy.node.fields.permalink}>Read Case Study...</Link>
                </div>
                <div css={styles.caseStudyStat}>
                  <div css={styles.caseStudyStatFigure}>{caseStudy.node.data.key_stat_figure}</div>
                  <div css={styles.caseStudyStatDescription}>{caseStudy.node.data.key_stat_text}</div>
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
`;

const styles = {
  section1: {
    background: '#F4F8FC',
    [presets.Desktop]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Tablet]: {
      width: 'calc(100% - 200px)',
      padding: '160px 100px 100px 100px'
    },
    [presets.Mobile]: {
      width: 'calc(100% - 100px)',
      padding: '150px 50px 70px 50px'
    }
  },
  section2: {
    [presets.Desktop]: {
      padding: '0 100px 50px',
      '&:hover > * > *': {
        opacity: .6
      },
      '&:hover > * > *:hover': {
        opacity: 1
      }
    },
    [presets.Tablet]: {
      paddingBottom: '50px'
    },
    [presets.Mobile]: {
      padding: '0 10px'
    },
  },
  caseStudy: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '22%',
      width: '22%',
      margin: '4% 1.3% 0 1.3%',
      '-moz-transition': 'opacity .2s',
      '-o-transition': 'opacity .2s',
      '-webkit-transition': 'opacity .2s',
      transition: 'opacity .2s'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '29%',
      width: '29%',
      margin: '4% 1.9% 0 1.9%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  caseStudyInner: {
    width: 'calc(100% - 40px)',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    [presets.Desktop]: {
      maxHeight: '324px',
      height: '324px'
    },
    [presets.Tablet]: {
      maxHeight: '324px',
      height: '324px',
    }
  },
  caseStudyInnerImg: {
    width: '100%'
  },
  caseStudyInnerDescription: {
    [presets.Desktop]: {
      maxHeight: '141px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    [presets.Tablet]: {
      maxHeight: '141px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  caseStudyStat: {
    width: 'calc(100% - 40px)',
    padding: '20px',
    background: '#F4F8FC',
    cursor: 'pointer',
    [presets.Desktop]: {
      height: '108px',
      maxHeight: '108px'
    },
    [presets.Tablet]: {
      height: '108px',
      maxHeight: '108px'
    }
  },
  caseStudyStatFigure: {
    fontSize: '36px',
    color: '#4F739A',
    textAlign: 'center',
    margin: '10px 0'
  },
  caseStudyStatDescription: {
    textAlign: 'center',
    margin: '10px'
  }
}
