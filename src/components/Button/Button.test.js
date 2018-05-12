import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';
import 'jest-styled-components';

describe('Button', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
