import React from 'react'
import { shallow } from 'enzyme'
import Creators from './Creators'

describe('Creators', () => {
  const wrapper = shallow(<Creators />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
