import React from 'react';
import { mount } from 'enzyme';
import Navigation from './Navigation';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
