import React, { createContext } from 'react';
import debounce from 'lodash.debounce';
import { memoize } from '../helpers/utils';
import searchIssues from './api/searchIssues';

const fetchIssues = memoize(searchIssues);

const IssueContext = createContext();

class IssueProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      issues: [],
      selectedIssue: null,
      currIssueIndex: 0,
      showResult: false,
      searchIssue: this.searchIssue.bind(this),
      selectIssue: this.selectIssue.bind(this),
      onKeyDown: this.onKeyDown.bind(this),
      showResultList: this.showResultList.bind(this),
      hideResultList: this.hideResultList.bind(this),
    };
    this.updateIssues = debounce(this.updateIssues.bind(this), 500);
  }

  async updateIssues(searchTerm) {
    const issues = await fetchIssues(searchTerm);
    this.setState({ issues, showResult: true });
  }

  searchIssue(event) {
    const userInput = event.currentTarget.value;
    if (userInput.length === 0) {
      this.setState({ userInput, issues: [] });
    } else {
      this.setState({ userInput }, () => this.updateIssues(userInput));
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.selectIssue();
    }
    if (event.keyCode === 38) {
      this.prevIssue();
    }
    if (event.keyCode === 40) {
      this.nextIssue();
    }
  }

  showResultList() {
    const { issues } = this.state;
    if (issues.length > 0) {
      this.setState({ showResult: true });
    }
  }

  hideResultList() {
    this.setState({ showResult: false });
  }

  selectIssue(index) {
    console.log(index);
    const { issues, currIssueIndex } = this.state;
    const selectedIndex = typeof index !== undefined ? index : currIssueIndex;

    this.setState({
      currIssueIndex: selectedIndex,
      userInput: issues[selectedIndex].title,
      selectedIssue: issues[selectedIndex],
      showResult: false,
    });
  }

  prevIssue() {
    const { currIssueIndex } = this.state;
    this.setState({
      currIssueIndex: currIssueIndex === 0 ? currIssueIndex : currIssueIndex - 1,
    });
  }

  nextIssue() {
    const { issues, currIssueIndex } = this.state;
    this.setState({
      currIssueIndex: currIssueIndex === issues.length - 1 ? currIssueIndex : currIssueIndex + 1,
    });
  }

  render() {
    return (
      <IssueContext.Provider value={this.state}>
        {this.props.children}
      </IssueContext.Provider>
    );
  }
}

const IssueConsumer = IssueContext.Consumer;

export {
  IssueProvider,
  IssueConsumer
}