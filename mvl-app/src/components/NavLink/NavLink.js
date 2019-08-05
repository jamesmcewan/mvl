import styled from '@emotion/styled';
import { Link } from '@reach/router';

const NavLink = styled(Link)`
  background: rgba(0, 0, 0, 0.6);
  color: ${props => props.theme.navFg};
  padding: 26px 0;
  display: block;
  text-decoration: none;

  @media (min-width: 1000px) {
    padding: 13px 0;
  }

  &[data-current='true'] {
    background: rgba(0, 0, 0, 0.4);
  }

  &:hover {
    color: ${props => props.theme.linkHover};
  }
`;

export default NavLink;
