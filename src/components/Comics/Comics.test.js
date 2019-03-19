import React from 'react';
import { shallow } from 'enzyme';
import Comics from './Comics';
import ComicsSection from '../../styles/ComicsSection';
import Loading from '../Loading/Loading';

describe('Comics', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Comics />);
    expect(wrapper).toHaveLength(1);
  });

  describe('when loading', () => {
    const wrapper = shallow(<Comics isLoading />);

    it('does not include a ComicsSection component', () => {
      expect(wrapper.find(ComicsSection)).toHaveLength(0);
    });

    it('includes a Loading component', () => {
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });

  describe('when ready', () => {
    const wrapper = shallow(<Comics Loading />);

    it('includes a ComicsSection component', () => {
      expect(wrapper.find(ComicsSection)).toHaveLength(1);
    });

    it('does not include a Loading component', () => {
      expect(wrapper.find(Loading)).toHaveLength(0);
    });
  });
});
