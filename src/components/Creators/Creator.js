const Creator = (creator) => (
  <li
    className="list-none text-yellow-200"
    key={`${creator.name}-${creator.role}`}
  >
    {creator.name} - {creator.role}
  </li>
)

export default Creator
