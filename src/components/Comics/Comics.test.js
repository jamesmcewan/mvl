import React from 'react';
import { mount } from 'enzyme';
import Comics from './Comics';
import 'jest-styled-components';

describe('Comics', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Comics />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Comics />);
    expect(wrapper).toMatchSnapshot();
  });
});
