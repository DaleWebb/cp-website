import React from 'react';

import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';

import presets from '../../utils/presets';
import globalStyles from '../../utils/global-styles';
import { buttonStyle, buttonGroupStyle } from '../../components/button';

import PrismicDOM from 'prismic-dom';

export default class CaseStudy extends React.Component {

  render() {

    const caseStudy = this.props.data.prismicDocument;
    const caseStudies = this.props.data.allPrismicDocument.edges;

    return (
      <div itemScope itemType="http://schema.org/Article">
        <Helmet title={PrismicDOM.RichText.asText(caseStudy.data.company_name)}>
          <meta name="description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={PrismicDOM.RichText.asText(caseStudy.data.company_name) + " | CarePlanner"} />
          <meta property="og:description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
          <meta name="twitter:title" content={PrismicDOM.RichText.asText(caseStudy.data.company_name) + " | CarePlanner"} />
          <meta name="twitter:description" content={PrismicDOM.RichText.asText(caseStudy.data.company_description)} />
        </Helmet>
        <div css={[styles.section1, {'::before': { backgroundImage: 'url(' + caseStudy.data.large_image.url + ')' }}]}>
          <div css={globalStyles.container}>
            <h5>Case Study</h5>
            <h1 itemProp="name">{PrismicDOM.RichText.asText(caseStudy.data.company_name)}</h1>
            <blockquote>"{PrismicDOM.RichText.asText(caseStudy.data.quote)}"</blockquote>
            <div css={globalStyles.quoteHeader}>
              <span css={globalStyles.placeholder}></span>
              <span css={globalStyles.quoteAuthor}>{caseStudy.data.quote_author} - </span>
              <span css={globalStyles.quoteCompany} itemProp="about"> {PrismicDOM.RichText.asText(caseStudy.data.company_name)}</span>
            </div>
          </div>
        </div>
        <div css={styles.section2}>
          <div css={globalStyles.container}>
            <div css={styles.column1} itemProp="articleBody">
              <div itemProp="articleSection">
                <h2>The Company</h2>
                 <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.data.company_description)}}></div>
              </div>
              <div itemProp="articleSection">
                <h2>The Problem</h2>
                <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.data.problem)}}></div>
              </div>
              <div itemProp="articleSection">
                <h2>The Solution</h2>
                <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.data.solution)}}></div>
              </div>
              <div itemProp="articleSection">
                <h2>The Results</h2>
                <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.data.results)}}></div>
              </div>
            </div>
            <div css={styles.column2}>
              <div css={styles.caseStudyStat}>
                <div css={styles.caseStudyStatFigure}>{caseStudy.data.key_stat_figure}</div>
                <div css={styles.caseStudyStatDescription}>{caseStudy.data.key_stat_text}</div>
              </div>
              <blockquote>"{PrismicDOM.RichText.asText(caseStudy.data.quote)}"</blockquote>
              <div css={buttonGroupStyle.vertical}>
                <Link css={[buttonStyle.button, buttonStyle.filled, buttonStyle.large]} style={{display: 'block'}} to="/contact-us">Book a demo</Link>
              </div>
            </div>
          </div>
        </div>
        <div css={styles.section3} itemScope itemType="http://schema.org/ItemList">
          <div css={globalStyles.container}>
            <h2 onClick={() => navigateTo('/case-studies')}>More Case Studies</h2>
            {caseStudies.map(caseStudy =>
              <div css={styles.caseStudy} onClick={() => navigateTo(caseStudy.node.fields.permalink)} itemProp="itemListElement">
                <div css={styles.caseStudyInner}>
                  <img css={styles.caseStudyInnerImage} src={caseStudy.node.data.large_image.url} alt="Quote from {PrismicDOM.RichText.asText(caseStudy.node.data.company_description)}"/>
                  <h3 itemProp="name">{PrismicDOM.RichText.asText(caseStudy.node.data.company_name)}</h3>
                  <div css={styles.caseStudyInnerDescription} dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(caseStudy.node.data.summary)}}></div>
                  <Link to={caseStudy.node.fields.permalink}>Read Case Study...</Link>
                </div>
                <div css={styles.caseStudyStat}>
                  <div css={styles.caseStudyStatFigure}>{caseStudy.node.data.key_stat_figure}</div>
                  <div  css={styles.caseStudyStatDescription}>{caseStudy.node.data.key_stat_text}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

const styles = {
  section1: {
    position: 'relative',
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
      marginBottom: '60px',
      padding: '110px 50px 70px 50px'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '150%',
      opacity: '.4',
      zIndex: '-1',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundSize: 'auto 100%'
    },
    '::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      height: '150%',
      right: '0',
      zIndex: '-1',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [presets.Desktop]: {
        backgroundImage: '-webkit-linear-gradient(right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: '-o-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: '-moz-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)'
      },
      [presets.Tablet]: {
        backgroundImage: '-webkit-linear-gradient(right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: '-o-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: '-moz-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%)',
        backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)'
      },
      [presets.Mobile]: {
        backgroundImage: '-webkit-linear-gradient(right,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 90%)',
        backgroundImage: '-o-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 90%)',
        backgroundImage: '-moz-linear-gradient(left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 90%)',
        backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%)'
      }
    },
    '& blockquote': {
      [presets.Desktop]: {
        margin: '20px 0',
        maxWidth: '60%'
      },
      [presets.Tablet]: {
        margin: '20px 0'
      },
      [presets.Mobile]: {
        margin: '10px 0'
      }
    }
  },
  section2: {
    [presets.Desktop]: {
      padding: '0 100px 100px 100px'
    },
    [presets.Tablet]: {
      padding: '0 50px'
    },
    [presets.Mobile]: {
      marginBottom: '60px',
      padding: '0 20px'
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '150%',
      right: 0,
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [presets.Desktop]: {
        backgroundImage: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: '-o-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: '-moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)'
      },
      [presets.Tablet]: {
        backgroundImage: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: '-o-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: '-moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%)'
      },
      [presets.Mobile]: {
        backgroundImage: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)',
        backgroundImage: '-o-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)',
        backgroundImage: '-moz-linear-gradient(bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)'
      }
    }
  },
  column1: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '60%',
      width: '60%',
      margin: '0 1%',
      '& p': {
        fontSize: '18px',
        lineHeight: '35px',
        marginBottom: '40px'
      }
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '60%',
      width: '60%',
      margin: '0 1%',
      '& p': {
        fontSize: '18px',
        lineHeight: '35px',
        marginBottom: '40px'
      }
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  column2: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '28%',
      width: '28%',
      margin: '0 5%'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '28%',
      width: '28%',
      margin: '0 5%'
    },
    [presets.Mobile]: {
      maxWidth: '90%',
      width: '90%',
      margin: '5%'
    }
  },
  caseStudyStat: {
    width: 'calc(100% - 40px)',
    padding: '20px',
    margin: '40px 0',
    background: '#F4F8FC',
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
  },
  section3: {
    background: '#F4F8FC',
    [presets.Desktop]: {
      padding: '50px 100px'
    },
    [presets.Tablet]: {
      padding: '50px'
    },
    [presets.Mobile]: {
      padding: '10px 10px'
    },
    '& h2': {
      textAlign: 'center'
    },
    '&:hover > * > div': {
      opacity: .6
    },
    '&:hover > * > div:hover': {
      opacity: 1
    }
  },
  caseStudy: {
    [presets.Desktop]: {
      display: 'inline-block',
      verticalAlign: 'top',
      maxWidth: '24%',
      width: '24%',
      margin: '4% .5% 0 .5%',
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
      height: '324px'
    }
  },
  caseStudyInnerImage: {
    [presets.Desktop]: {
      width: '100%'
    },
    [presets.Tablet]: {
      width: '100%'
    },
    [presets.Mobile]: {
      display: 'none'
    }
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
      maxHeight: '108px',
      margin: '40px 0'
    },
    [presets.Tablet]: {
      height: '108px',
      maxHeight: '108px',
      margin: '40px 0'
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
