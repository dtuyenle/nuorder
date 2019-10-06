import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import thm from '../../../helpers/theme';

/**
 * Component`Input`.
 */
const Input = styled.input`
  width: 100%;
  border: 4px solid ${thm.borderColor};
  border-radius: ${props => props.borderRadius};
  font-size: ${thm.fontSizes.delta};
  padding: ${props => props.padding};
  margin: ${props => props.margin};

  :focus {
    outline: none;
  }
`;

Input.propTypes = {
  /** Custom margin style to be override the default. */
  margin: PropTypes.string,
  /** Custom padding style to be override the default. */
  padding: PropTypes.string,
  /** Custom border-radius style to be override the default. */
  borderRadius: PropTypes.string,
};

Input.defaultProps = {
  margin: thm.sizeUnits(0),
  padding: `${thm.sizeUnits(2)}`,
  borderRadius: '2px 0px 0px 2px',
};

/** @component */
export default Input;
