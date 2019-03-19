import styled from 'styled-components';

const ComicsSection = styled.section`
  display: grid;
  grid-gap: ${props => props.theme.gSpacing};
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`;

export default ComicsSection;
