import React from 'react'
import { shallow } from 'enzyme'
import { Router } from '@reach/router'
import Page from '../Page/Page'
import Routes from './Routes'

describe('Routes', () => {
  const wrapper = shallow(<Routes />)

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a Router compnent', () => {
    expect(wrapper.find(Router)).toHaveLength(1)
  })

  it('includes pages', () => {
    expect(wrapper.find(Page).length).toBeGreaterThanOrEqual(1)
  })
})
