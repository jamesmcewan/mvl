import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toHaveLength(1);
  });
});
