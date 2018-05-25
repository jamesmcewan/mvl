import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mvl from '../../images/logo.svg';

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 1;
  bottom: 0;
  background: #151617 linear-gradient(#1a0f21, #151617 70%) no-repeat;
  padding: 0;
  display: flex;
  flex-flow: row wrap;

  @media screen and (min-width: 700px) {
    bottom: auto;
  }
`;

const StyledImg = styled.img`
  max-width: 150px;
`;

const StyledHeader = styled.header`
  flex-grow: 0;
  background: #1e1b2f;
  width: 100%;
  text-align: center;
  order: 1;

  @media screen and (min-width: 700px) {
    order: 0;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 13px 6px;
  flex-grow: 1;
  background: transparent;
  color: #6272a4;
  box-sizing: border-box;
  border: 0;
  text-align: center;
  text-decoration: none;

  @media screen and (min-width: 700px) {
    padding: 13px;
    font-size: 26px;
  }

  &[aria-current='true'] {
    color: #ff79c6;
  }
`;

const Navigation = () => (
  <StyledNav>
    <StyledHeader>
      <StyledImg src={mvl} alt="MVL" />
    </StyledHeader>
    <StyledLink to="/lastweek">Last week</StyledLink>
    <StyledLink to="/thisweek">This week</StyledLink>
    <StyledLink to="/nextweek">Next week</StyledLink>
  </StyledNav>
);

export default Navigation;
