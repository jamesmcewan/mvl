import React from 'react';
import { mount } from 'enzyme';
import Creators from './Creators';
import 'jest-styled-components';

describe('Creators', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Creators />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Creators />);
    expect(wrapper).toMatchSnapshot();
  });
});
