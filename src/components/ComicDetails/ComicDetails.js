import Creator from '../Creators/Creator'
import Creators from '../Creators/Creators'

const ComicDetails = ({
  isVisible,
  setIsVisible,
  title,
  creators,
  ...rest
}) => (
  <div>
    <div>
      <h2 className="text-yellow-200 text-xl">{title}</h2>
      <Creators creators={creators} />
      <button onClick={() => setIsVisible(!isVisible)}>close</button>
    </div>
  </div>
)

export default ComicDetails
