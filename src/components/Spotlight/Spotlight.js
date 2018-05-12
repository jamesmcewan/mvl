import React from 'react';
import styled, { css } from 'styled-components';
import Detail from '../Detail/Detail';

const SpotlightSection = styled.section`
  background: #151617 linear-gradient(#1a0f21, #151617 70%) no-repeat;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 52px;
  display: none;
  order: 1;

  @media screen and (min-width: 700px) {
    padding: 0;
  }

  ${props =>
    props.isSpotlightVisible &&
    css`
      display: block;
      @media screen and (min-width: 1000px) {
        display: flex;
        align-items: flex-start;
      }
    `};
`;

const SpotlightImg = styled.img`
  padding: 0;
  margin-bottom: 26px;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  background: transparent;
  height: 200px;
  object-fit: cover;
  object-position: left top;

  @media screen and (min-width: 700px) {
    height: 400px;
  }

  @media screen and (min-width: 1000px) {
    width: 450px;
    height: auto;
  }
`;

const Spotlight = ({
  title,
  description,
  thumbnail,
  close,
  creators,
  diamondCode,
  urls,
  isSpotlightVisible,
}) => {
  const { path, extension } = thumbnail;
  const detailProps = {
    title,
    description,
    creators,
    diamondCode,
    urls,
    close,
  };

  return (
    <SpotlightSection isSpotlightVisible={isSpotlightVisible}>
      <SpotlightImg src={`${path}.${extension}`} alt={title} />
      <Detail {...detailProps} />
    </SpotlightSection>
  );
};

Spotlight.defaultProps = {
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
  thumbnail: {
    path: '',
    extension: '',
  },
};

export default Spotlight;
