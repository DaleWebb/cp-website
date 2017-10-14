import Typography from 'typography';
import presets from './presets';

const options = {
  headerFontFamily: [
    `Circular Std`,
    `Helvetica Neue`,
    `Arial`,
    `sans-serif`,
  ],
  bodyFontFamily: [
    `Circular Std`,
    `Helvetica Neue`,
    `Arial`,
    `sans-serif`,
  ],
  monospaceFontFamily: [
    `Space Mono`,
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `Liberation Mono`,
    `Courier New`,
    `monospace`,
  ],
  baseFontSize: `15px`,
  baseLineHeight: 1.4,
  headerLineHeight: 1.075,
  headerColor: `#70A4DB`,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  includeNormalize: false,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      h1: {
        color: '#70A4DB',
        fontWeight: 'normal',
      },
      h2: {
        color: '#70A4DB',
        fontWeight: 'normal',
      },
      h3: {
        fontWeight: 'normal',
        color: '#70A4DB'
      },
      h4: {
        ...scale(1 / 5),
      },
      h5: {
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '25px',
        color: '#4F739A',
      },
      p: {
        margin: '10px 0',
        color: '#4A4A4A',
        lineHeight: '25px'
      },
      'b, strong': {
        color: '#9B9B9B'
      },
      a: {
        color: '#70A4DB',
        margin: '10px 0',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      hr: {
        margin: '40px 0'
      },
      blockquote: {
        padding: '10px 20px',
        margin: '0 0 20px',
        borderLeft: '5px solid #eee',
        color: '#4F739A'
      },
      html: {
        font: '',
        fontSize: options.baseFontSize,
        maxWidth: '100%',
        width: '100%',
        overflowX: 'hidden',
        boxSizing: 'initial'
      },
      body: {
        maxWidth: '100%',
        width: '100%',
        overflowX: 'hidden',
        margin: 0
      },
      li: {
        marginBottom: 0
      },
      '*': {
        boxSizing: 'initial'
      },
      [presets.Desktop]: {
        h1: {
          fontSize: '36px',
          lineHeight: '46px',
        },
        h2: {
          fontSize: '32px',
          lineHeight: '46px',
        },
        h3: {
          fontSize: '18px'
        },
        blockquote: {
          fontSize: '20px',
          lineHeight: '35px'
        }
      },
      [presets.Tablet]: {
        h1: {
          fontSize: '36px',
          lineHeight: '46px',
        },
        h2: {
          fontSize: '32px',
          lineHeight: '46px',
        },
        h3: {
          fontSize: '18px',
          margin: '10px 0'
        },
        blockquote: {
          fontSize: '18px',
          lineHeight: '30px'
        }
      },
      [presets.Mobile]: {
        h1: {
          fontSize: '24px',
          lineHeight: '40px',
        },
        h2: {
          fontSize: '24px',
          lineHeight: '40px',
        },
        h3: {
          fontSize: '16px',
          lineHeight: '30px',
          margin: '5px 0'
        },
        blockquote: {
          fontSize: '16px',
          lineHeight: '30px'
        }
      }
    }
  },
}

const typography = new Typography(options)

export default typography
