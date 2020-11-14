import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cover from '../Cover/Cover';
import Info from '../Info/Info';

const ComicWrapper = styled.div`
  position: relative;
  border-radius: 50px;
  overflow: hidden;
`;

const Comic = ({ ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <ComicWrapper>
      <Cover {...rest} {...{ visible, setVisible }} />
      <Info {...rest} {...{ visible, setVisible }} />
    </ComicWrapper>
  );
};

Comic.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object
};

export { ComicWrapper };
export default Comic;
