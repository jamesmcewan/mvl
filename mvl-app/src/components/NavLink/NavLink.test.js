import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink', () => {
  const wrapper = shallow(<NavLink />);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });
});
