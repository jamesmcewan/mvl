import React from 'react';
import { shallow } from 'enzyme';
import Comic from './Comic';
import 'jest-styled-components';

const mockProps = {
  thumbnail: {
    path: '',
    extension: ''
  }
};

describe('Comic', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Comic {...mockProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
