const Creator = (creator) => (
  <li class="list-none" key={`${creator.name}-${creator.role}`}>
    {creator.name} - {creator.role}
  </li>
)

export default Creator
