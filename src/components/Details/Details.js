import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Details;
