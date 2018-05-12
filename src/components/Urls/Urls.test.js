import React from 'react';
import { mount } from 'enzyme';
import Urls from './Urls';
import 'jest-styled-components';

describe('Urls', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Urls />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Urls />);
    expect(wrapper).toMatchSnapshot();
  });
});
