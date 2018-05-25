import React from 'react';
import { mount } from 'enzyme';
import Loading from './Loading';
import 'jest-styled-components';

describe('Loading', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Loading />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
