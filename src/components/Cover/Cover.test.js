import React from 'react';
import { shallow } from 'enzyme';
import Cover, { CoverButton } from './Cover';
import ProgressiveImage from 'react-progressive-image';

jest.mock('../../functions/getCover');

describe('Cover', () => {
  const mockProps = {
    thumbnail: {},
    title: '',
    visible: false,
    setVisible: jest.fn()
  };

  const wrapper = shallow(<Cover {...mockProps} />);

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders a CoverButton', () => {
    expect(wrapper.find(CoverButton)).toHaveLength(1);
  });

  it('renders a ProgressiveImage crashing', () => {
    expect(wrapper.find(ProgressiveImage)).toHaveLength(1);
  });
});
