import { useState } from 'react'
import Cover from './Cover'
import ComicInfo from './ComicInfo'

const Comic = ({ ...rest }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div data-selector="comic-wrapper">
      <Cover {...rest} {...{ visible, setVisible }} />
      <ComicInfo {...rest} {...{ visible, setVisible }} />
    </div>
  )
}

export default Comic
