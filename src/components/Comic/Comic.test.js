import React from 'react';
import { shallow } from 'enzyme';
import Comic from './Comic';
import 'jest-styled-components';

describe('Comic', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Comic />);
    expect(wrapper).toHaveLength(1);
  });
});
