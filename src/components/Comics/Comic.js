import { useState } from 'react'
import Cover from './Cover'
import ComicInfo from './ComicInfo'

const Comic = ({ ...rest }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div data-selector="comic-wrapper">
      <Cover {...rest} {...{ isVisible, setIsVisible }} />
      <ComicInfo {...rest} {...{ isVisible, setIsVisible }} />
    </div>
  )
}

export default Comic
