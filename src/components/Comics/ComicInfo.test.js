import React from 'react'
import { shallow } from 'enzyme'
import ComicInfo from './ComicInfo'

describe('ComicInfo', () => {
  const wrapper = shallow(<ComicInfo />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})

// describe('ComicInfoContainer', () => {
//   const wrapper = shallow(<ComicInfoContainer />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })

// describe('ComicInfoWrapper', () => {
//   const wrapper = shallow(<ComicInfoWrapper />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })

// describe('ComicInfoButton', () => {
//   const wrapper = shallow(<ComicInfoButton />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })
