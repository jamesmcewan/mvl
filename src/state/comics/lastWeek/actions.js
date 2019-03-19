import { createAction } from 'redux-actions';
import getData from '../../../functions/getData';

const LAST_WEEK_REQUESTED = 'LAST_WEEK_REQUESTED';
const LAST_WEEK_RECEIVED = 'LAST_WEEK_RECEIVED';
const LAST_WEEK_ERROR = 'LAST_WEEK_ERROR';

const lastWeekRequested = createAction(LAST_WEEK_REQUESTED);
const lastWeekReceived = createAction(LAST_WEEK_RECEIVED);
const lastWeekError = createAction(LAST_WEEK_ERROR);

const requestLastWeek = () => async dispatch => {
  dispatch(lastWeekRequested());
  try {
    const data = await getData(process.env.REACT_APP_SOURCE, 'lastweek');
    dispatch(lastWeekReceived(await data));
  } catch (err) {
    dispatch(lastWeekError(err));
  }
};

export {
  LAST_WEEK_REQUESTED,
  LAST_WEEK_RECEIVED,
  LAST_WEEK_ERROR,
  lastWeekRequested,
  lastWeekReceived,
  lastWeekError,
  requestLastWeek
};
