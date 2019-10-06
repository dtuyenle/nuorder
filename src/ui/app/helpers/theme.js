import { injectGlobal } from 'styled-components';

const colors = {
  actionBlue: '#167AA7',
  actionOrange: '#F26822',
  blueGray: '#B2CCDB',
  brandBlue: '#68C5ED',
  brandOrange: '#FF9D28',
  lightBlue: '#ECF2F6',
  lightDarkBlue: '#C5D9E4',
  brandRed: '#E54747',
  darkestBlue: '#044D80',
  green: '#26A07D',
  lightGray: '#ECEFF0',
  lightDarkGray: '#D9E6ED',
  lightestBlue: '#E4F1FE',
  mediumGray: '#557B92',
  red: '#E22E2E',
  shadow: 'rgba(0, 0, 0, 0.1)',
  textBlack: '#363A41',
  textGray: '#637985',
  white: '#FFFFFF',
  whiteBlue: '#F7FAFB',
  yellow: '#F9BF3B',
};

const sizeUnitBase = 8; // px, multiply and interploated with px string to use
const sizeUnits = (multiplier, number = false) => (number ? multiplier * sizeUnitBase : `${multiplier * sizeUnitBase}px`);

const thm = {
  actionColor: colors.actionBlue,
  primaryColor: colors.actionBlue,
  secondaryColor: colors.brandBlue,
  negativeColor: colors.red,
  positiveColor: colors.green,
  fairColor: colors.actionOrange,
  calloutColor: colors.actionOrange,
  searchBorderColor: colors.brandOrange,
  lightCalloutColor: colors.brandOrange,
  calloutLinkColor: colors.yellow,
  lightBlueBackgroundColor: colors.lightBlue,
  darkTextColor: colors.textBlack,
  darkBackgroundColor: colors.textBlack,
  lightTextColor: colors.white,
  blankBackgroundColor: colors.white,
  grayTextColor: colors.textGray,
  grayHoverColor: colors.lightGray,
  footerLinkColor: colors.lightGray,
  borderColor: colors.blueGray,
  fadedActionColor: colors.blueGray,
  imagePlaceholderColor: colors.blueGray,
  mediaBorderColor: colors.lightGray,
  defaultBorderRadius: sizeUnits(0.35),
  transparentColor: 'transparent',
  actionHoverColor: colors.actionOrange,
  footerLinkHoverColor: colors.brandBlue,
  boxShadowColor: colors.shadow,
  pageTitleColor: colors.textBlack,
  headingPrimaryColor: colors.darkestBlue,
  breadCrumbIconColor: colors.darkestBlue,
  lightBackgroundColor: colors.whiteBlue,
  reviewStarFill: colors.yellow,
  thumbnailBorderColor: colors.lightDarkGray,
  thumbnailBackgroundColor: colors.lightDarkGray,
  compareTrayBorderColor: colors.lightDarkBlue,
  brand1: colors.darkestBlue,

  // Text Size Scale DEPRECATED
  xxxlarge: '48px',
  xxlarge: '36px',
  xlarge: '24px',
  large: '18px',
  regular: '16px',
  small: '14px',
  xsmall: '12px',

  // Text Size Scale CURRENT
  fontSizes: {
    alpha: '48px',
    beta: '36px',
    gamma: '24px',
    delta: '20px',
    epsilon: '16px',
    milli: '14px',
    micro: '12px',
  },

  maxContentWidth: '1024px',
  narrowWidth: '794px',
  wideWidth: '1200px',

  sizeUnits,

  serifFontFamily: 'Roboto Slab',
  serifFallbackFontFamily: 'Helvetica',
  serifSecondaryFallbackFontFamily: 'serif',
  fontFamily: 'Open Sans',
  fallbackFontFamily: 'Arial',
  secondaryFallbackFontFamily: 'sans-serif',
  fontWeight: {
    heavy: 600,
    light: 400,
  },
  sizes: {
    breakpoints: {
      xs: 0, // phone
      sm: 576,
      md: 768, // tablet
      lg: 992,
      xl: 1200,
    },
    containerWidth: {
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1140,
    },
    gutterWidth: 24,
  },
};

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Open Sans';
    font-display: fallback;
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'),
    local('OpenSans-Regular'),
    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2'), /* Modern Browsers */
    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff'); /* IE11 */
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Open Sans';
    font-display: fallback;
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'),
    local('OpenSans-Regular'),
    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2'), /* Modern Browsers */
    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff'); /* IE11 */
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Open Sans';
    font-display: fallback;
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'),
    local('OpenSans-Bold'),
    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2'), /* Modern Browsers */
    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format('woff'); /* IE11 */
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Open Sans';
    font-display: fallback;
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'),
    local('OpenSans-Bold'),
    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2'), /* Modern Browsers */
    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format('woff'); /* IE11 */
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Roboto Slab';
    font-display: fallback;
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Slab Regular'),
      local('RobotoSlab-Regular'),
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format('woff'); /* IE11 */
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto Slab';
    font-display: fallback;
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Slab Regular'),
      local('RobotoSlab-Regular'),
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format('woff'); /* IE11 */
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Roboto Slab';
    font-display: fallback;
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Slab Bold'),
      local('RobotoSlab-Bold'),
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CIwR2oefDofMY.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format('woff'); /* IE11 */
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto Slab';
    font-display: fallback;
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Slab Bold'),
      local('RobotoSlab-Bold'),
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwR2oefDo.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format('woff'); /* IE11 */
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  // Default font with fallbacks
  body {
    font-family: ${thm.fontFamily}, ${thm.fallbackFontFamily}, ${thm.secondaryFallbackFontFamily};
    color: ${thm.darkTextColor};
  }
`;

export default thm;
