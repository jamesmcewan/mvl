import Details from '@components/Details/Details'
import ComicProps from '../../types/ComicProps'
import ThumbnailType from '../../types/ThumbnailType'

const replaceHttp = (url: string) => url.replace('http', 'https')
const getCover = ({ path, extension }: ThumbnailType) =>
  `${replaceHttp(path)}.${extension}`

const Comic = ({ thumbnail, title, creators }: ComicProps) => {
  return (
    <div>
      <img
        className="rounded-md"
        src={getCover(thumbnail)}
        width="560"
        height="850"
        alt={title}
      />
      <Details title={title} creators={creators} />
    </div>
  )
}

export default Comic
