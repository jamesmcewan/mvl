import React from 'react';
import mvl from '../../images/logo.svg';
import LogoHeader from '../../styles/LogoHeader';
import LogoImg from '../../styles/LogoImg';

const Logo = () => (
  <LogoHeader>
    <LogoImg src={mvl} alt="MVL" />
  </LogoHeader>
);

export default Logo;
