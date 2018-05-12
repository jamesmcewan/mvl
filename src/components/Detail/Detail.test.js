import React from 'react';
import { mount } from 'enzyme';
import Detail from './Detail';
import 'jest-styled-components';

describe('Detail', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Detail />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<Detail />);
    expect(wrapper).toMatchSnapshot();
  });
});
