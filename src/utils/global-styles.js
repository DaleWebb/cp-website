import presets from './presets';

export default {
  container: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    [presets.Desktop]: {
      maxWidth: '1404px'
    },
    [presets.Tablet]: {
      maxWidth: '991px'
    },
    [presets.Mobile]: {
      maxWidth: '767px'
    }
  },
  content: {
    [presets.Desktop]: {
      padding: '157px 70px 100px 70px'
    },
    [presets.Tablet]: {
      padding: '100px 35px'
    },
    [presets.Mobile]: {
      padding: '100px 35px'
    }
  },
  sectionTitleTop: {
    color: '#70A4DB',
    fontWeight: 'normal',
    margin: '10px 0 0 0',
    [presets.Desktop]: {
     fontSize: '36px',
     lineHeight: '46px'
     },
     [presets.Tablet]: {
       fontSize: '36px',
       lineHeight: '46px'
     },
     [presets.Mobile]: {
       fontSize: '24px',
       lineHeight: '40px'
     }
   },
  sectionDescriptionTop: {
    color: '#9b9b9b',
    fontWeight: 'normal',
    margin: '15px 0',
    [presets.Desktop]: {
      fontSize: '20px',
      lineHeight: '35px',
      maxWidth: '537px',
    },
    [presets.Tablet]: {
      fontSize: '20px',
      lineHeight: '35px',
      maxWidth: '537px',
    },
    [presets.Mobile]: {
      fontSize: '16px',
      lineHeight: '30px',
    }
  },
  sectionTitle: {
    color: '#70A4DB',
    fontWeight: 'normal',
    margin: '10px 0 0 0',
    [presets.Desktop]: {
      fontSize: '24px',
      lineHeight: '35px',
    },
    [presets.Tablet]: {
      fontSize: '24px',
      lineHeight: '35px',
    },
    [presets.Mobile]: {
      fontSize: '24px',
      lineHeight: '35px',
    }
  },
  sectionDescription: {
    color: '#4F739A',
    lineHeight: '20px',
    margin: '20px 0'
  },
  placeholder: {
    height: '50px',
    marginBottom: '15px'
  },
  quoteHeader: {
    marginBottom: '30px'
  },
  quoteAuthor: {
    display: 'inline-block',
    paddingTop: '12.5px',
    paddingBottom: '12.5px',
    fontSize: '16px',
    color: '#4F739A'
  },
  quoteCompany: {
    display: 'inline-block',
    paddingTop: '12.5px',
    paddingBottom: '12.5px',
    fontSize: '16px',
    color: '#4F739A',
    fontWeight: 'bold'
  }
};
