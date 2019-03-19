import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';
import 'jest-styled-components';

describe('Loading', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toHaveLength(1);
  });
});