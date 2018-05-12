import React from 'react';
import { isArray } from 'util';
import styled from 'styled-components';
import Comic from '../Comic/Comic';

const Section = styled.section`
  padding-top: 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  order: 2;
`;

const Comics = ({ comics, changeSpotlight, isSpotlightVisible }) => (
  <Section>
    {isArray(comics) &&
      comics.map(comic => (
        <Comic
          {...comic}
          changeSpotlight={changeSpotlight}
          key={comic.id}
          isSpotlightVisible={isSpotlightVisible}
        />
      ))}
  </Section>
);

export default Comics;
