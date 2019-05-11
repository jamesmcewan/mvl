import React from 'react';
import { Router } from '@reach/router';
import Page from '../Page/Page';

const Routes = props => {
  return (
    <Router>
      <Page path="/" weekId="thisweek" />
      <Page path="/:weekId" />
    </Router>
  );
};

export default Routes;
