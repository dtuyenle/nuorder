import styled, * as namedExports from 'styled-components';

// Mock out injectGlobal so that global css is not included in the js bundle
// If css gets included in the js bundle Jest will give warnings
// saying that it cannot read CSS files.
namedExports.injectGlobal = jest.fn();
namedExports.ServerStyleSheet = jest.fn(() => {
  return {
    collectStyles: jest.fn(() => 'ServerStyleSheet.collectStyles mock return value'),
    getStyleTags: jest.fn(() => 'ServerStyleSheet.getStyleTags mock return value'),
  };
});

module.exports.default = styled;
module.exports = namedExports;
