import React from 'react';
import { mount } from 'enzyme';
import Navigation from './Navigation';
import 'jest-styled-components';

describe('Navigation', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Navigation />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
