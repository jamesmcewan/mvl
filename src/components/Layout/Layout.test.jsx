import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout', () => {
  const wrapper = shallow(<Layout />)

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a Wrapper component', () => {
    expect(wrapper.find('[data-selector="wrapper"]')).toHaveLength(1)
  })

  it('renders a Logo component', () => {
    expect(wrapper.find('Logo')).toHaveLength(1)
  })

  it('renders a Page component', () => {
    expect(wrapper.find('Page')).toHaveLength(1)
  })

  it('renders a Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1)
  })

  it('renders a Nav component', () => {
    expect(wrapper.find('Nav')).toHaveLength(1)
  })
})
