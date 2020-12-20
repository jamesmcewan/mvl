import mvl from '../../images/logo.svg';

const LogoHeader = ({ children }) => <header>{children}</header>;

const Logo = () => (
  <LogoHeader>
    <img src={mvl} alt="MVL" />
  </LogoHeader>
);

export default Logo;
