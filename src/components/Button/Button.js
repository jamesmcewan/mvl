import React from 'react';
import camelCase from 'lodash.camelcase';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-size: 16px;
  padding: 13px 6px;
  flex-grow: 1;
  background: transparent;
  color: #6272a4;
  box-sizing: border-box;
  border: 0;

  @media screen and (min-width: 700px) {
    padding: 13px;
    font-size: 26px;
  }

  ${props =>
    props.current &&
    css`
      color: #ff79c6;
    `};
`;

const Button = ({ dateDescriptor, handleClick, current }) => (
  <StyledButton
    {...{current}}
    onClick={e => handleClick(e, camelCase(dateDescriptor))}
  >
    {dateDescriptor}
  </StyledButton>
);

export default Button;
