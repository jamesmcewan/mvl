import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';
import 'jest-styled-components';

describe('Logo', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toHaveLength(1);
  });
});
