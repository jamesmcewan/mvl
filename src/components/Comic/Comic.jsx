import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Details from '../Details/Details';

const replaceHttp = (url) => url.replace('http', 'https');
const getCover = ({ path, extension }) => `${replaceHttp(path)}.${extension}`;

const Comic = (props) => {
  return (
    <div>
      <img loading="lazy" src={getCover(props.thumbnail)} alt={props.title} />
      <Details {...props} />
    </div>
  );
};

Comic.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object
};

export default Comic;
