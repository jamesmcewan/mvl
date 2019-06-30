import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('Details', () => {
  const wrapper = shallow(<Details />);

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
