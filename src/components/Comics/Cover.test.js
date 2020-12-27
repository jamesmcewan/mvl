import React from 'react'
import { shallow } from 'enzyme'
import Cover from './Cover'

jest.mock('../../functions/getCover')

describe('Cover', () => {
  const mockProps = {
    thumbnail: {},
    title: '',
    visible: false,
    setVisible: jest.fn()
  }

  const wrapper = shallow(<Cover {...mockProps} />)

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a button', () => {
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('renders a ProgressiveImage crashing', () => {
    expect(wrapper.find('ProgressiveImage')).toHaveLength(1)
  })
})
