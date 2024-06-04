import type { CreatorsType } from './CreatorsType'
import type { ThumbnailType } from './ThumbnailType'

export type ComicProps = {
  id: number
  thumbnail: ThumbnailType
  title: string
  creators: CreatorsType
}
