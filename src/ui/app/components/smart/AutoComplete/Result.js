import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IssueItem from './IssueItem';
import thm from '../../../helpers/theme';
import { IssueConsumer } from '../../../context/issues';

const IssueContainer = styled.ul`
  display: block;
  list-style: none;
  width: ${thm.sizeUnits(62.5)};
  margin: auto;
  position: relative;
  max-height: ${thm.sizeUnits(55.625)};
  overflow: auto;
`;

/**
 * Sub Component `Search Result List` used with AutoComplete.
 */

const SearchResult = React.memo(() => (
  <IssueConsumer>
    {({ issues, showResult }) => {
      return showResult ? (<IssueContainer>
        {issues.map((issue, index) => <IssueItem key={issue.node_id} index={index} issue={issue} />)}
      </IssueContainer>) : '';
    }}
  </IssueConsumer>
));

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

/** @component */
export default SearchResult;
