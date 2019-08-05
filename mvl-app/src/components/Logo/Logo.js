import React from 'react';
import styled from '@emotion/styled';
import mvl from '../../images/logo.svg';

const LogoHeader = styled.header`
  max-height: 50px;
  display: flex;
  justify-content: center;
  .block {
    fill: #0b011c;
  }
  .text {
    fill: #d801af;
  }
`;

const LogoImg = styled.img`
  width: 100%;
`;

const Logo = () => (
  <LogoHeader>
    <LogoImg src={mvl} alt="MVL" />
  </LogoHeader>
);

export default Logo;
