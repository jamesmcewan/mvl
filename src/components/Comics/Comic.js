import { useState } from 'react'
import Cover from '../Cover/Cover'
import ComicDetails from '../ComicDetails/ComicDetails'

const Comic = ({ ...rest }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div data-selector="comic-wrapper">
      <Cover {...rest} {...{ isVisible, setIsVisible }} />
      <ComicDetails {...rest} {...{ isVisible, setIsVisible }} />
    </div>
  )
}

export default Comic
