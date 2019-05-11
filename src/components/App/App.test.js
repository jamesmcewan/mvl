import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import Routes from '../Routes/Routes';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('includes a ThemeProvider', () => {
    expect(wrapper.find(ThemeProvider)).toHaveLength(1);
  });

  it('includes GlobalStyle', () => {
    expect(wrapper.find(GlobalStyle)).toHaveLength(1);
  });

  it('includes Routes', () => {
    expect(wrapper.find(Routes)).toHaveLength(1);
  });
});
