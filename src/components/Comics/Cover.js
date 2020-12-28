import ProgressiveImage from 'react-progressive-image'
import getCover from '../../functions/getCover'
import CoverImg from './CoverImg'
import placeHolder from '../../images/placeholder.jpg'

const Cover = ({ thumbnail, title, isVisible, setIsVisible }) => (
  <button
    className="p-0 m-0 bg-transparent border-none block w-full"
    onClick={() => setIsVisible(!isVisible)}
  >
    <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
      {(src) => <CoverImg src={src} alt={title} isVisible={isVisible} />}
    </ProgressiveImage>
  </button>
)

export default Cover
