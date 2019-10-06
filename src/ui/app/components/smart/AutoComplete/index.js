import React from 'react';
import styled from 'styled-components';
import thm from '../../../helpers/theme';
import { IssueConsumer } from '../../../context/issues';
import SearchIcon from '../../dumb/Icons/SearchIcon';
import SearchResult from './Result';
import Input from '../../dumb/Input';

const Search = styled.div`
  width: ${thm.sizeUnits(62.5)};
  margin: ${thm.sizeUnits(3)} auto 0;
  text-align: right;
  position: relative;
`;

const Autocomplete = React.memo(() => (
  <React.Fragment>
    <IssueConsumer>
        {({ userInput, onKeyDown, showResultList, hideResultList, searchIssue }) => (
          <Search>
            <Input
              type="text"
              padding={`${thm.sizeUnits(2)} ${thm.sizeUnits(6)} ${thm.sizeUnits(2)} ${thm.sizeUnits(2)}`}
              value={userInput}
              onFocus={showResultList}
              onChange={searchIssue}
              onKeyDown={onKeyDown}
            />
            <SearchIcon onClick={hideResultList}/>
          </Search>
        )}
      </IssueConsumer>
    <SearchResult />
  </React.Fragment>
));

Autocomplete.propTypes = {};

Autocomplete.defaultProps = {};

export default Autocomplete;
