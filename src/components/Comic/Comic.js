import React from 'react';
import styled, { css } from 'styled-components';
import placeHolder from '../../images/placeholder.jpg';
import ProgressiveImage from 'react-progressive-image';

const StyledComicButton = styled.button`
  padding: 0;
  margin: 0 3px 3px;
  margin-bottom: 26px;
  border: 0;
  background: transparent;

  @media screen and (min-width: 700px) {
    padding: 0;
    margin: 0 6px 6px;
    max-width: 240px;
  }

  ${props =>
    props.isSpotlightVisible &&
    css`
      max-width: 100px;
    `};
`;

const StyledImg = styled.img`
  width: 100%;
`;

function replaceHttp(url) {
  return url.replace('http', 'https');
}

const Comic = ({
  title,
  id,
  thumbnail,
  changeSpotlight,
  isSpotlightVisible,
}) => (
  <StyledComicButton
    onClick={e => changeSpotlight(e, id)}
    isSpotlightVisible={isSpotlightVisible}
  >
    <ProgressiveImage
      src={`${replaceHttp(thumbnail.path)}.${thumbnail.extension}`}
      placeholder={placeHolder}
    >
      {src => <StyledImg src={src} alt={title} />}
    </ProgressiveImage>
  </StyledComicButton>
);

Comic.defaultProps = {
  title: '',
  id: '',
  thumbnail: {
    path: '',
    extension: '',
  },
};

export default Comic;
