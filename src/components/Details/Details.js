import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Details;
