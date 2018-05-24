import React from 'react';
import styled from 'styled-components';
import { Button } from '..';
import camelCase from 'lodash.camelcase';
import mvl from '../../images/logo.svg';
import { isArray } from 'util';

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

const Navigation = ({ dateDescriptor, dateDescriptors, handleClick }) => (
  <StyledNav>
    <StyledHeader>
      <StyledImg src={mvl} alt="MVL" />
    </StyledHeader>
    {isArray(dateDescriptors) &&
      dateDescriptors.map(d => {
        const current = camelCase(d) === dateDescriptor;
        return (
          <Button
            key={`button-${d}`}
            dateDescriptor={d}
            handleClick={handleClick}
            current={current}
          />
        );
      })}
  </StyledNav>
);

export default Navigation;
