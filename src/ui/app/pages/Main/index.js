import React, { Component } from "react";
import styled from 'styled-components';
import thm from '../../helpers/theme';
import Autocomplete from '../../components/smart/AutoComplete';
import { IssueProvider } from '../../context/issues';

const Title = styled.h1`
  font-size: ${thm.fontSizes.gamma};
  color: ${thm.lightTextColor};
  text-align: center;
`;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { pageData } = this.props;
    if (this.state.hasError) {
      return <Title>Something went wrong.</Title>;
    }

    return (
      <div>
        <Title>{pageData}</Title>
        <IssueProvider>
          <Autocomplete />
        </IssueProvider>
      </div>
    );
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;






