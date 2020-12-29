import Creator from './Creator'

const Creators = ({ creators }) => (
  <ul className="p-0">
    {creators?.items?.map((creator) => (
      <Creator {...creator} key={creator.name} />
    ))}
  </ul>
)

export default Creators
