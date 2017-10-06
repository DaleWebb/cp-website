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
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      'h1, h2, h4, h5, h6': {
        marginTop: rhythm(options.blockMarginBottom * 2),
        marginBottom: rhythm(options.blockMarginBottom),
        letterSpacing: `-0.0075em`,
      },
      'ul, ol': {
        marginTop: rhythm(options.blockMarginBottom),
      },
      h1: {
        ...scale(4 / 5),
      },
      h3: {
        ...scale(2 / 5),
        lineHeight: 1,
        marginTop: rhythm(options.blockMarginBottom),
        marginBottom: rhythm(options.blockMarginBottom / 2),
      },
      h4: {
        ...scale(1 / 5),
      },
      h5: {
        ...scale(0),
      },
      html: {
        fontSize: options.baseFontSize,
        maxWidth: '100%',
        width: '100%',
        overflowX: 'hidden'
      },
      body: {
        maxWidth: '100%',
        width: '100%',
        overflowX: 'hidden',
        margin: 0
      },
      '*': {
        boxSizing: 'initial'
      }
    }
  },
}

const typography = new Typography(options)

export default typography
