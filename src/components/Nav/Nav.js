import NavLink from './NavLink'
import NavList from './NavList'
import NavListItem from './NavListItem'
import NavWrapper from './NavWrapper'

const isActive = (props, p2) => {
  return props.isCurrent
    ? { 'data-current': 'true' }
    : { 'data-current': 'false' }
}

const Nav = (props) => (
  <NavWrapper>
    <NavList>
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
    </NavList>
  </NavWrapper>
)

export default Nav
