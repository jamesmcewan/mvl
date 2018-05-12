import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import camelCase from 'lodash.camelcase';
import mvl from '../../images/logo.svg';
import { isArray } from 'util';

const Nav = styled.nav`
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

const Img = styled.img`
  max-width: 150px;
`;

const Header = styled.header`
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
  <Nav>
    <Header>
      <Img src={mvl} alt="MVL" />
    </Header>
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
  </Nav>
);

export default Navigation;
