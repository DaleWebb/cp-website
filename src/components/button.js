import presets from '../utils/presets';

const buttonStyle = {
  button: {
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    padding: '10px 20px',
    fontWeight: 'normal',
    textDecoration: 'none',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '-moz-transition': 'background .2s, color .2s, border-color .2s',
    '-o-transition': 'background .2s, color .2s, border-color .2s',
    '-webkit-transition': 'background .2s, color .2s, border-color .2s',
    transition: 'background .2s, color .2s, border-color .2s',
    [presets.Desktop]: {
      margin: '10px 20px 10px 0'
    },
    [presets.Tablet]: {
      margin: '10px 20px 10px 0'
    },
    [presets.Mobile]: {
      margin: '10px 10px 10px 0'
    },
    '&:hover, &:focus, &:active': {
      fontWeight: 'normal',
    }
  },
  large: {
    [presets.Desktop]: {
      padding: '20px 40px',
      fontSize: '20px',
    },
    [presets.Tablet]: {
      padding: '20px 35px',
      fontSize: '18px',
    }
  },
  outline: {
    color: '#70A4DB',
    background: '#FFFFFF',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#70A4DB',
    '&:hover, &:focus, &:active': {
      color: '#4F739A',
      borderColor: '#4F739A',
    }
  },
  filled: {
    color: '#ffffff',
    background: '#70a4db',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#70A4DB',
    '&:hover, &:focus, &:active': {
      background: '#4F739A',
      borderColor: '#4F739A',
    }
  }
};

const buttonGroupStyle = {
  horizontal: {
    textAlign: 'center',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '> *': {
      display: 'inline-block',
      margin: '9px 15px 9px 0'
    },
    '> *:last-child': {
      margin: 0
    }
  },
  horizontalLeft: {
    textAlign: 'left',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '> *': {
      display: 'inline-block',
      margin: '9px 15px 9px 0'
    },
    '> *:last-child': {
      margin: 0
    }
  },
  horizontalRight: {
    textAlign: 'right',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '> *': {
      display: 'inline-block',
      margin: '9px 15px 9px 0'
    },
    '> *:last-child': {
      margin: 0
    }
  },
  vertical: {
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '> *': {
      display: 'block',
      margin: '0 0 15px 0'
    }
  }
}

export {
  buttonStyle,
  buttonGroupStyle
};
