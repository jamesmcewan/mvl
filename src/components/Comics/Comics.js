import React from 'react';
import { isArray } from 'util';
import styled from 'styled-components';
import { Comic } from '..';

const StyledSection = styled.section`
  padding-top: 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  order: 2;
`;

const Comics = ({ comics, changeSpotlight }) => (
  <StyledSection>
    {isArray(comics) &&
      comics.map(comic => (
        <Comic
          {...comic}
          changeSpotlight={changeSpotlight}
          key={comic.id}
        />
      ))}
  </StyledSection>
);

export default Comics;
