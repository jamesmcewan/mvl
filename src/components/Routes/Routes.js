import React from 'react';
import { Router } from '@reach/router';
import ThisWeek from '../ThisWeek/ThisWeek';
import NextWeek from '../NextWeek/NextWeek';
import LastWeek from '../LastWeek/LastWeek';

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
