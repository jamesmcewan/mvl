import React from 'react';
import styled from 'styled-components';
import NavLink from '../NavLink/NavLink';

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;

  @media (min-width: 1000px) {
    position: static;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;

const NavListItem = styled.li`
  list-style-type: none;
  text-align: center;
  background: ${props => props.theme.navBg};
`;

const isActive = (props, p2) => {
  return props.isCurrent
    ? { 'data-current': 'true' }
    : { 'data-current': 'false' };
};

const Nav = props => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};

export default Nav;
