import React from 'react'
import { shallow } from 'enzyme'
import Comics from './Comics'

describe('Comics', () => {
  const mockProps = {
    weekId: 'thisweek'
  }

  it('should render without crashing', () => {
    const wrapper = shallow(<Comics {...mockProps} />)
    expect(wrapper).toHaveLength(1)
  })

  describe('when loading', () => {
    const wrapper = shallow(<Comics {...mockProps} isLoading />)

    it('does not include a WeekTitle component', () => {
      expect(wrapper.find('h1')).toHaveLength(0)
    })

    it('does not include a ComicsSection component', () => {
      expect(wrapper.find('section')).toHaveLength(0)
    })

    it('includes a Loading component', () => {
      expect(wrapper.find('Loading')).toHaveLength(1)
    })
  })

  // describe('when ready', () => {
  //   const wrapper = shallow(<Comics {...mockProps} Loading />)

  //   it('includes a WeekTitle component', () => {
  //     expect(wrapper.find('h1')).toHaveLength(1)
  //   })

  //   it('includes a ComicsSection component', () => {
  //     expect(wrapper.find('section')).toHaveLength(1)
  //   })

  //   it('does not include a Loading component', () => {
  //     expect(wrapper.find('Loading')).toHaveLength(0)
  //   })
  // })
})
