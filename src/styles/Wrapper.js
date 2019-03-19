import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  justify-content: center;
  grid-gap: ${props => props.theme.vSpacing};
  max-width: 600px;
`;

export default Wrapper;
