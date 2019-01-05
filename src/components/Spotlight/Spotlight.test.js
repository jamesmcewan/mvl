import React from 'react';
import { mount } from 'enzyme';
import Spotlight from './Spotlight';
import 'jest-styled-components';

describe('Spotlight', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('should render without crashing', () => {
    const wrapper = mount(<Spotlight />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Spotlight />);
    expect(wrapper).toMatchSnapshot();
  });
});
