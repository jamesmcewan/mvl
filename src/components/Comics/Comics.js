import React from 'react';
import PropTypes from 'prop-types';
import Comic from '../Comic/Comic';
import ComicsSection from '../../styles/ComicsSection';

const Comics = ({ comics }) => {
  return (
    <ComicsSection>
      {comics && comics.map(comic => <Comic {...comic} key={comic.id} />)}
    </ComicsSection>
  );
};

Comics.propTypes = {
  comics: PropTypes.array
};

export default Comics;
