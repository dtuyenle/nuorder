import React from 'react';
import styled from 'styled-components';
import thm from '../../../../helpers/theme';
import base64Image from './base64Image';

const IconInput = styled.input`
  height: 100%;
  width: ${thm.sizeUnits(4)};
  position: absolute;
  top: 25%;
  right: ${thm.sizeUnits(1)};
  opacity: 0.2;
  background-color: transparent;
  border: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url("${base64Image}");

  :hover {
    outline: none;
    opacity: 0.4;
    cursor: pointer;
  }

  :focus {
    outline: none;
    opacity: 0.6;
  }
`;

/**
 * Component `Search Icon Button`.
 */
const SearchIcon = React.memo((props) => <IconInput {...props} />);

SearchIcon.propTypes = {};

SearchIcon.defaultProps = {};

/** @component */
export default SearchIcon;
