import ProgressiveImage from 'react-progressive-image'
import getCover from '../../functions/getCover'
import CoverButton from './CoverButton'
import CoverImg from './CoverImg'
import placeHolder from '../../images/placeholder.jpg'

const Cover = ({ thumbnail, title, visible, setVisible }) => (
  <CoverButton onClick={() => setVisible(!visible)}>
    <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
      {(src) => <CoverImg src={src} alt={title} visible={visible} />}
    </ProgressiveImage>
  </CoverButton>
)

export default Cover
