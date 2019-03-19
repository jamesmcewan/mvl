import styled from 'styled-components';
import { Link } from '@reach/router';

const NavLink = styled(Link)`
  background: ${props =>
    props.isCurrent ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.6)'};
  color: ${props => props.theme.navFg};
  padding: 13px 0;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.linkHover};
  }
`;

export default NavLink;
