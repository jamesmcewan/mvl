import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  margin-bottom: 120px;
`;

const Footer = ({ attributionText }) => (
  <StyledFooter>
    <p>{attributionText}</p>
  </StyledFooter>
);

export default Footer;
