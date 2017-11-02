import React from "react"
import Link from "gatsby-link"

import PrismicDOM from 'prismic-dom';

import presets from '../utils/presets';
import globalStyles from '../utils/global-styles';
import { buttonStyle, buttonGroupStyle } from '../components/button';

class FeatureHeaderRight extends React.Component {

  render() {

    const buttonText = [{type: this.props.name[0].type, text: this.props.name[0].text.toLowerCase()}];

    return (
      <div css={styles.mainFeature}>
        <div css={[styles.mainFeatureGraphic, styles.normal]}>
          <Link to={this.props.permalink}>
            <img src={this.props.image} />
          </Link>
        </div>
        <div>
          <Link to={this.props.permalink}>
            <div css={globalStyles.placeholder}>
              <img src={this.props.icon} />
            </div>
            <h5>{PrismicDOM.RichText.asText(this.props.name)}</h5>
            <h2>{PrismicDOM.RichText.asText(this.props.tagline)}</h2>
          </Link>
          {this.props.bullets.map((object, i) =>
            <p css={styles.info} key={i}>{PrismicDOM.RichText.asText(object.feature_bullet)}</p>
          )}
          <div css={buttonGroupStyle.horizontalLeft}>
            <Link css={[buttonStyle.button, buttonStyle.filled]} to={this.props.permalink} style={(!this.props.permalink) ? {display: 'none'} : undefined}>Learn more about {PrismicDOM.RichText.asText(buttonText)}</Link>
            <Link css={[buttonStyle.button, buttonStyle.outline]} to="/contact-us">Book a demo</Link>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  mainFeature: {
    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
    alignItems: 'center',
    [presets.Desktop]: {
      flexFlow: 'row',
      paddingTop: '50px',
      paddingBottom: '50px'
    },
    [presets.Tablet]: {
      flexFlow: 'row',
      paddingTop: '50px',
      paddingBottom: '50px'
    },
    [presets.Mobile]: {
      flexFlow: 'column'
    }
  },
  grid: {
    [presets.Desktop]: {
      maxWidth: '50%',
      padding: '100px 0'
    },
    [presets.Tablet]: {
      maxWidth: '50%',
      padding: '25px 0'
    },
    [presets.Mobile]: {
      padding: '50px 20px',
      order: 1
    }
  },
  circle: {
    [presets.Desktop]: {
      right: '200px',
      marginRight: '-100px'
    },
    [presets.Tablet]: {
      right: '200px',
      marginRight: '-100px'
    },
    '& img': {
      borderRadius: '100%',
      '-webkit-box-shadow': 'inset 0px 0px 15px #888888',
      '-moz-box-shadow': 'inset 0px 0px 15px #888888',
      boxShadow: 'inset 0px 0px 15px #888888'
    }
  },
  frame: {
    [presets.Desktop]: {
      right: '100px'
    },
    [presets.Tablet]: {
      right: '100px'
    }
  },
  normal: {
    [presets.Desktop]: {
      right: '100px'
    },
    [presets.Tablet]: {
      right: '100px'
    }
  },
  info: {
    [presets.Desktop]: {
      display: 'inline-block',
      width: '40%',
      margin: '20px 10% 20px 0',
      verticalAlign: 'top'
    },
    [presets.Tablet]: {
      display: 'inline-block',
      width: '40%',
      margin: '20px 10% 20px 0',
      verticalAlign: 'top'
    }
  },
  mainFeatureGraphic: {
    [presets.Desktop]: {
      position: 'relative',
      minWidth: '50%',
      textAlign: 'center'
    },
    [presets.Tablet]: {
      position: 'relative',
      minWidth: '50%',
      textAlign: 'center'
    },
    [presets.Mobile]: {
      order: 0,
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center'
    },
    '& img': {
      maxWidth: '100%'
    }
  }
};

export default FeatureHeaderRight
