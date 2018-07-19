import React from 'react';
import styled from 'styled-components';
import { Creators } from '..';

const StyledDetailWrapper = styled.div`
  padding-bottom: 26px;
  margin: 0 13px;

  @media screen and (min-width: 700px) {
    padding: 0;
    margin: 0 6px 6px;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-left: 52px;
  }
`;

const StyledDetailHeading = styled.h2`
  font-family: 'Roboto Slab', serif;
  margin-top: 0;
  @media screen and (min-width: 1000px) {
    flex: 1 100%;
  }
`;

const StyledDiamondCode = styled.p`
  @media screen and (min-width: 1000px) {
    flex: 1 100%;
  }
`;

const StyledDetailDescription = styled.div`
  margin-bottom: 26px;

  @media screen and (min-width: 1000px) {
    max-width: 600px;
    margin-right: 52px;
  }
`;

const StyledDetailButton = styled.button`
  border: 1px solid #ff79c6;
  background: transparent;
  font-size: 18px;
  padding: 9px;
  border-radius: 10px;
  color: #ff79c6;
`;

const Detail = ({ title, description, creators, diamondCode, urls, close }) => (
  <StyledDetailWrapper>
    <StyledDetailHeading>{title}</StyledDetailHeading>
    <StyledDetailDescription
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <Creators {...{ creators }} />
    <StyledDiamondCode>{diamondCode}</StyledDiamondCode>
    <StyledDetailButton onClick={() => close()}>Close</StyledDetailButton>
  </StyledDetailWrapper>
);

Detail.defaultProps = {
  title: '',
  description: '',
  creators: [
    {
      name: '',
      role: '',
    },
  ],
  dates: [
    {
      date: '',
      type: '',
    },
  ],
  urls: [
    {
      url: '',
      type: '',
    },
  ],
};

export default Detail;
