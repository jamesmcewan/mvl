import React from 'react';
import { Router } from '@reach/router';
import ThisWeek from '../../pages/ThisWeek/ThisWeek';
import NextWeek from '../../pages/NextWeek/NextWeek';
import LastWeek from '../../pages/LastWeek/LastWeek';

const Routes = props => {
  return (
    <Router>
      <ThisWeek path="/" />
      <NextWeek path="/nextweek" />
      <LastWeek path="/lastweek" />
    </Router>
  );
};

export default Routes;
