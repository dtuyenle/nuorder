import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import thm from '../../../helpers/theme';
import { IssueConsumer } from '../../../context/issues';

const Issue = styled.li`
  display: block;
  background: white;
  margin: ${thm.sizeUnits(1)} auto;
  padding: ${thm.sizeUnits(2)};
  font-size: ${thm.fontSizes.delta};
  width: 100%;
  border-radius: 2px;

  :hover {
    font-weight: 600;
    color: ${thm.calloutColor};
    cursor: pointer;
  }
`;

const IssueActive = styled(Issue)`
  background: whitesmoke;
  font-size: ${thm.fontSizes.delta};
  font-weight: 600;
`;

const Label = styled.span`
  font-size: ${thm.fontSizes.milli};
  color: #${props => props.color};
  margin-right: 2px;
`;

const getOptionLabels = option => {
  return (option.labels || []).map(label => (
    <Label key={label.id} color={label.color}>{label.name}</Label>
  ));
};

/**
 * Sub Component `Issue Item` used with AutoComplete.
 */
class IssueItem extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProp) {
    return this.props.issue.node_id !== nextProp.issue.node_id;
  }

  render() {
    const { issue, index } = this.props;
    return (<IssueConsumer>
      {({ currIssueIndex, selectIssue }) => {
        const IssueElem = currIssueIndex === index ? IssueActive : Issue;
        return (<IssueElem onClick={() => selectIssue(index)}>
          <p>{issue.title}</p>
          <p>{getOptionLabels(issue)}</p>
        </IssueElem>)
      }}
      </IssueConsumer>
    );
  }
}

IssueItem.propTypes = {
  issue: PropTypes.shape({
    node_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

IssueItem.defaultProps = {};

/** @component */
export default IssueItem;
