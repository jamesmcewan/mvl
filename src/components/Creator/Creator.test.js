import React from 'react';
import { mount } from 'enzyme';
import Creator from './Creator';
import 'jest-styled-components';

describe('Creator', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Creator />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Creator />);
    expect(wrapper).toMatchSnapshot();
  });
});
