import CreatorsType from './CreatorsType'
import ThumbnailType from './ThumbnailType'

type ComicProps = {
  id: number
  thumbnail: ThumbnailType
  title: string
  creators: CreatorsType
}

export default ComicProps
