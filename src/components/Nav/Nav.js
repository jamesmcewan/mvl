import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <Link to="/lastweek">Last week</Link>
      <Link to="/">This week</Link>
      <Link to="/nextweek">Next week</Link>
    </nav>
  );
};

export default Nav;
