import React from 'react';
import { shallow } from 'enzyme';
import Comics, { ComicsSection, WeekTitle } from './Comics';
import Loading from '../Loading/Loading';

describe('Comics', () => {
  const mockProps = {
    weekId: 'thisweek'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Comics {...mockProps} />);
    expect(wrapper).toHaveLength(1);
  });

  describe('when loading', () => {
    const wrapper = shallow(<Comics {...mockProps} isLoading />);

    it('does not include a WeekTitle component', () => {
      expect(wrapper.find(WeekTitle)).toHaveLength(0);
    });

    it('does not include a ComicsSection component', () => {
      expect(wrapper.find(ComicsSection)).toHaveLength(0);
    });

    it('includes a Loading component', () => {
      expect(wrapper.find(Loading)).toHaveLength(1);
    });
  });

  describe('when ready', () => {
    const wrapper = shallow(<Comics {...mockProps} Loading />);

    it('includes a WeekTitle component', () => {
      expect(wrapper.find(WeekTitle)).toHaveLength(1);
    });

    it('includes a ComicsSection component', () => {
      expect(wrapper.find(ComicsSection)).toHaveLength(1);
    });

    it('does not include a Loading component', () => {
      expect(wrapper.find(Loading)).toHaveLength(0);
    });
  });
});
