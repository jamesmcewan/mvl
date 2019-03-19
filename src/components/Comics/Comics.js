import React from 'react';
import PropTypes from 'prop-types';
import Comic from '../Comic/Comic';
import ComicsSection from '../../styles/ComicsSection';
import Loading from '../Loading/Loading';

const Comics = ({ comics, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

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
