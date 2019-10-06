import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './pages/Main';
import Error from './pages/Error';

import './global-styles';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderPage() {
    const { pageData } = this.props;

    return (<Main
      pageData={pageData}
    />);
  }

  renderError() {
    const { statusCode } = this.props;
    return (<Error statusCode={statusCode} />);
  }

  render() {
    const { statusCode } = this.props;

    return statusCode ? this.renderError() : this.renderPage();
  }
}

App.propTypes = {
  pageData: PropTypes.string,
  cookies: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  statusCode: PropTypes.number,
};

App.defaultProps = {
  pageData: '',
  statusCode: null,
  cookies: undefined,
  location: undefined,
  history: undefined,
};

export default App;
