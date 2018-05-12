import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import 'jest-styled-components';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
