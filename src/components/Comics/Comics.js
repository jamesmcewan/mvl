import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comic from '../Comic/Comic';
import Loading from '../Loading/Loading';

const ComicsSection = styled.section`
  display: grid;
  grid-gap: ${props => props.theme.gSpacing};

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WeekTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  margin: 0;

  @media (min-width: 1000px) {
    min-height: 90px;
  }

  @media (min-width: 1200px) {
    min-height: 120px;
  }
`;

const comicMap = comic => <Comic {...comic} key={comic.id} />;
const weekRm = weekId => weekId.replace('week', '');

const Comics = ({ comics, isLoading, weekId }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <WeekTitle>{`Comic releases for ${weekRm(weekId)} week`}</WeekTitle>
      <ComicsSection>{comics && comics.map(comicMap)}</ComicsSection>
    </>
  );
};

Comics.propTypes = {
  comics: PropTypes.array
};

export { WeekTitle, ComicsSection, comicMap };
export default Comics;
