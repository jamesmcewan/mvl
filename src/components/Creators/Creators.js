import React from 'react';
import styled from 'styled-components';
import { isArray } from 'util';
import Creator from '../Creator/Creator';

const StyledCreatorsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledCreatorsHeading = styled.h3`
  margin-top: 0;
  font-size: 22px;
`;

const Creators = ({ creators }) => (
  <div>
    <StyledCreatorsHeading>Creative team</StyledCreatorsHeading>
    <StyledCreatorsList>
      {isArray(creators) &&
        creators.map(creator => (
          <Creator {...creator} key={`c-${creator.name}`} />
        ))}
    </StyledCreatorsList>
  </div>
);

Creators.defaultProps = {
  creators: [
    {
      name: '',
      role: '',
    },
  ],
};

export default Creators;
