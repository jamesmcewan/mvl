import React from 'react';
import NavList from '../../styles/NavList';
import NavListItem from '../../styles/NavListItem';
import NavLink from '../../styles/NavLink';

const Nav = props => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLink to="/lastweek">Last week</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/">This week</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/nextweek">Next week</NavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Nav;
