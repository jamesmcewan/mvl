import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

const creatorMap = creator => (
  <ListItem key={`${creator.name}-${creator.role}`}>
    {creator.name} - {creator.role}
  </ListItem>
);

const Creators = ({ items }) => {
  return <List>{items && items.map(creatorMap)}</List>;
};

Creators.propTypes = {
  items: PropTypes.array
};

export default Creators;
