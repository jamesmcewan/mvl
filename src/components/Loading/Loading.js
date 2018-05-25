import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  margin: 52px auto;
`;

const Gear = styled.div`
  animation: ${rotate360} 2s linear infinite;
  font-size:100px;
  width:100px;
`

const Loading = () => (
  <LoadingContainer>
    <Gear>⚙</Gear>
  </LoadingContainer>
);

export default Loading;
