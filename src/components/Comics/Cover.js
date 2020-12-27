import ProgressiveImage from 'react-progressive-image'
import getCover from '../../functions/getCover'
import CoverImg from './CoverImg'
import placeHolder from '../../images/placeholder.jpg'

const Cover = ({ thumbnail, title, visible, setVisible }) => (
  <button
    class="p-0 m-0 bg-transparent border-none block w-full"
    onClick={() => setVisible(!visible)}
  >
    <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
      {(src) => <CoverImg src={src} alt={title} visible={visible} />}
    </ProgressiveImage>
  </button>
)

export default Cover
