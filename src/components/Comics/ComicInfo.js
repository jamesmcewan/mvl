import Creator from './Creator'

const ComicInfo = ({ visible, setVisible, title, creators, ...rest }) => (
  <div {...{ visible }}>
    <div>
      <h2 class="text-yellow-200 text-xl">{title}</h2>
      <ul class="p-0">
        {creators?.items?.map((creator) => (
          <Creator {...creator} key={creator.name} />
        ))}
      </ul>
      <button onClick={() => setVisible(!visible)}>close</button>
    </div>
  </div>
)

export default ComicInfo
