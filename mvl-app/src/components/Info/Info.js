import React from 'react';
import styled from '@emotion/styled';
import Details from '../Details/Details';
import Creators from '../Creators/Creators';

const InfoWrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  top: 0;
  padding: 0 ${props => props.theme.gSpacing};
`;

const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.link};
  color: ${props => props.theme.darkbg};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 2rem;
  text-transform: uppercase;
  opacity: 0.8;
  padding: 4px;
`;

const Info = ({ visible, setVisible, creators, ...rest }) => {
  return (
    <InfoWrapper {...{ visible }}>
      <Details {...rest} />
      <Creators {...{ creators }} />
      <Button onClick={() => setVisible(!visible)}>close</Button>
    </InfoWrapper>
  );
};

export default Info;
