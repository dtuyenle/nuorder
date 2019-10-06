import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount } from 'enzyme';
import SearchIcon from '..';
import base64Image from '../base64Image';

describe('Input component', () => {
  it('should render Search Icon component', () => {
    const component = renderer.create(
      <SearchIcon />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should trigger onClick when click', () => {
    const mockFn = jest.fn();
    const component = mount(<SearchIcon onClick={mockFn} />);

    component.find('input').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have background image as search icon', () => {
    const component = renderer.create(
      <SearchIcon />,
    ).toJSON();

    expect(component).toHaveStyleRule('background-image', `url("${base64Image}")`);
  });
});
