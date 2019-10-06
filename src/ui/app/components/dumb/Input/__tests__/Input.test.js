import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '..';
import thm from '../../../../helpers/theme';

describe('Input component', () => {
  it('should render a default Input component', () => {
    const component = renderer.create(
      <Input />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have a 4px solid border and the appropriate color', () => {
    const component = renderer.create(
      <Input />,
    ).toJSON();

    expect(component).toHaveStyleRule('border', `4px solid ${thm.borderColor}`);
  });
});
