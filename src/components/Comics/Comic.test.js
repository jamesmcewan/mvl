import React from 'react'
import { shallow } from 'enzyme'
import Comic from './Comic'

const mockProps = {
  thumbnail: {
    path: '',
    extension: ''
  }
}

describe('Comic', () => {
  const wrapper = shallow(<Comic {...mockProps} />)

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders a wrapper div', () => {
    expect(wrapper.find('[data-selector="comic-wrapper"]')).toHaveLength(1)
  })

  it('renders a Cover component', () => {
    expect(wrapper.find('Cover')).toHaveLength(1)
  })

  it('renders an Details component', () => {
    expect(wrapper.find('ComicDetails')).toHaveLength(1)
  })
})
