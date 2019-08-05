import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ProgressiveImage from 'react-progressive-image';
import placeHolder from '../../images/placeholder.jpg';
import getCover from '../../functions/getCover';

const CoverButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  opacity: ${props => (props.visible ? '0.2' : '1')};
`;

const Cover = ({ thumbnail, title, visible, setVisible }) => {
  return (
    <CoverButton onClick={() => setVisible(!visible)}>
      <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
        {src => <Img src={src} alt={title} visible={visible} />}
      </ProgressiveImage>
    </CoverButton>
  );
};

Cover.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};

export { CoverButton, Img };
export default Cover;
