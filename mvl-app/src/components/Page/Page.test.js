import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo/Logo';
import Comics from '../Comics/Comics';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { Page, Wrapper } from './Page';

describe('Page', () => {
  const wrapper = shallow(<Page />);

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Wrapper component', () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('renders a Logo component', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it('renders a Comics component', () => {
    expect(wrapper.find(Comics)).toHaveLength(1);
  });

  it('renders a Footer component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('renders a Nav component', () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
});
