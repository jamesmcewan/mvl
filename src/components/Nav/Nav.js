import NavLink from '../NavLink/NavLink';

const MVLNav = (props) => <nav {...props} />;

const MVLNavList = (props) => <ul {...props} />;

const MVLNavListItem = (props) => <li {...props} />;

const isActive = (props, p2) => {
  return props.isCurrent
    ? { 'data-current': 'true' }
    : { 'data-current': 'false' };
};

const Nav = (props) => {
  return (
    <MVLNav>
      <MVLNavList>
        <MVLNavListItem>
          <NavLink to="/lastweek" getProps={isActive}>
            Last week
          </NavLink>
        </MVLNavListItem>
        <MVLNavListItem>
          <NavLink to="/" getProps={isActive}>
            This week
          </NavLink>
        </MVLNavListItem>
        <MVLNavListItem>
          <NavLink to="/nextweek" getProps={isActive}>
            Next week
          </NavLink>
        </MVLNavListItem>
      </MVLNavList>
    </MVLNav>
  );
};

export default Nav;
