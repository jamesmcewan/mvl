import styled from 'styled-components';

const NavListItem = styled.li`
  list-style-type: none;
  text-align: center;
  background: ${props => props.theme.navBg};
`;

export default NavListItem;
