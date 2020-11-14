import React from 'react';
import styled from 'styled-components';
import Details from '../Details/Details';
import Creators from '../Creators/Creators';

const InfoWrapper = styled.div`
  opacity: ${(props) => (props.visible ? '1' : '0')};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  transition: opacity 1.5s;
`;

const InfoContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 10px;
  max-height: 600px;
  overflow: auto;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.link};
  color: ${(props) => props.theme.darkbg};
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 2rem;
  text-transform: uppercase;
  opacity: 0.8;
  padding: 4px;
`;

const Info = ({ visible, setVisible, creators, ...rest }) => {
  return (
    <InfoWrapper {...{ visible }}>
      <InfoContainer>
        <Details {...rest} />
        <Creators {...{ creators }} />
        <Button onClick={() => setVisible(!visible)}>close</Button>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default Info;
