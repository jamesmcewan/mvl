import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  const wrapper = shallow(<Nav />);

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
