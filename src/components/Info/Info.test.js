import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe('Info', () => {
  const wrapper = shallow(<Info />);

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
