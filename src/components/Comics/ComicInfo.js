import Creator from './Creator'

const ComicInfo = ({ isVisible, setIsVisible, title, creators, ...rest }) => (
  <div>
    <div>
      <h2 className="text-yellow-200 text-xl">{title}</h2>
      <ul className="p-0">
        {creators?.items?.map((creator) => (
          <Creator {...creator} key={creator.name} />
        ))}
      </ul>
      <button onClick={() => setIsVisible(!isVisible)}>close</button>
    </div>
  </div>
)

export default ComicInfo
