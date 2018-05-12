import React from 'react';
import { mount } from 'enzyme';
import Comic from './Comic';
import 'jest-styled-components';

describe('Comic', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Comic />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Comic />);
    expect(wrapper).toMatchSnapshot();
  });
});
