import React from 'react';
import { shallow } from 'enzyme';
import Comics from './Comics';
import 'jest-styled-components';

describe('Comics', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Comics />);
    expect(wrapper).toHaveLength(1);
  });
});
