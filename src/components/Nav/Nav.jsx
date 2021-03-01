import NavLink from './NavLink'
import NavListItem from './NavListItem'

const isActive = (props, p2) => {
  return props.isCurrent
    ? { 'data-current': 'true' }
    : { 'data-current': 'false' }
}

const Nav = (props) => (
  <nav>
    <ul>
      <NavListItem>
        <NavLink to="/lastweek" getProps={isActive}>
          Last week
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/" getProps={isActive}>
          This week
        </NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/nextweek" getProps={isActive}>
          Next week
        </NavLink>
      </NavListItem>
    </ul>
  </nav>
)

export default Nav
