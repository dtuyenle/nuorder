import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageData, statusCode,
    } = this.props;
    return (
      <div>test</div>
    );
  }
}

ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;
