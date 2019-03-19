import { createAction } from 'redux-actions';
import getData from '../../../functions/getData';

const NEXT_WEEK_REQUESTED = 'NEXT_WEEK_REQUESTED';
const NEXT_WEEK_RECEIVED = 'NEXT_WEEK_RECEIVED';
const NEXT_WEEK_ERROR = 'NEXT_WEEK_ERROR';

const nextWeekRequested = createAction(NEXT_WEEK_REQUESTED);
const nextWeekReceived = createAction(NEXT_WEEK_RECEIVED);
const nextWeekError = createAction(NEXT_WEEK_ERROR);

const requestNextWeek = () => async dispatch => {
  dispatch(nextWeekRequested());
  try {
    const data = await getData(process.env.REACT_APP_SOURCE, 'nextweek');
    dispatch(nextWeekReceived(await data));
  } catch (err) {
    dispatch(nextWeekError(err));
  }
};

export {
  NEXT_WEEK_REQUESTED,
  NEXT_WEEK_RECEIVED,
  NEXT_WEEK_ERROR,
  nextWeekRequested,
  nextWeekReceived,
  nextWeekError,
  requestNextWeek
};
