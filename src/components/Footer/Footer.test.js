import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import 'jest-styled-components';

describe('Footer', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
