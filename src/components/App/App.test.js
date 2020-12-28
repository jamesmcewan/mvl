import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a Router compnent', () => {
    expect(wrapper.find('Router')).toHaveLength(1)
  })

  it('includes pages', () => {
    expect(wrapper.find('Layout').length).toBeGreaterThanOrEqual(1)
  })
})
