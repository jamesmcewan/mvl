import styled from 'styled-components';

const ComicButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  display: block;
  min-height: ${props => props.theme.minCoverHeight};
`;

export default ComicButton;
