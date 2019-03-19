import { createAction } from 'redux-actions';
import getData from '../../../functions/getData';

const THIS_WEEK_REQUESTED = 'THIS_WEEK_REQUESTED';
const THIS_WEEK_RECEIVED = 'THIS_WEEK_RECEIVED';
const THIS_WEEK_ERROR = 'THIS_WEEK_ERROR';

const thisWeekRequested = createAction(THIS_WEEK_REQUESTED);
const thisWeekReceived = createAction(THIS_WEEK_RECEIVED);
const thisWeekError = createAction(THIS_WEEK_ERROR);

const requestThisWeek = () => async dispatch => {
  dispatch(thisWeekRequested());
  try {
    const data = await getData(process.env.REACT_APP_SOURCE, 'thisweek');
    dispatch(thisWeekReceived(await data));
  } catch (err) {
    dispatch(thisWeekError(err));
  }
};

export {
  THIS_WEEK_REQUESTED,
  THIS_WEEK_RECEIVED,
  THIS_WEEK_ERROR,
  thisWeekRequested,
  thisWeekReceived,
  thisWeekError,
  requestThisWeek
};
