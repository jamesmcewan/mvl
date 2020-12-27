import React from 'react'
import { shallow } from 'enzyme'
import Info from './Info'

describe('Info', () => {
  const wrapper = shallow(<Info />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})

// describe('InfoContainer', () => {
//   const wrapper = shallow(<InfoContainer />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })

// describe('InfoWrapper', () => {
//   const wrapper = shallow(<InfoWrapper />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })

// describe('InfoButton', () => {
//   const wrapper = shallow(<InfoButton />)

//   it('should render without crashing', () => {
//     expect(wrapper).toHaveLength(1)
//   })
// })
