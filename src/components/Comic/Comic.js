import React from 'react';
import PropTypes from 'prop-types';
import placeHolder from '../../images/placeholder.jpg';
import ProgressiveImage from 'react-progressive-image';
import getCover from '../../functions/getCover';
import Img from '../../styles/Img';
import ComicButton from '../../styles/ComicButton';

const Comic = ({ title, thumbnail }) => (
  <ComicButton>
    <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
      {src => <Img src={src} alt={title} />}
    </ProgressiveImage>
  </ComicButton>
);

Comic.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object
};

export default Comic;
