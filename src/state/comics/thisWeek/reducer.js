import { handleActions } from 'redux-actions';

import {
  THIS_WEEK_REQUESTED,
  THIS_WEEK_RECEIVED,
  THIS_WEEK_ERROR
} from './actions';

const thisWeek = handleActions(
  {
    [THIS_WEEK_REQUESTED]: () => [],
    [THIS_WEEK_RECEIVED]: (state, action) => action.payload,
    [THIS_WEEK_ERROR]: () => []
  },
  []
);

const thisWeekLoading = handleActions(
  {
    [THIS_WEEK_REQUESTED]: () => true,
    [THIS_WEEK_RECEIVED]: () => false,
    [THIS_WEEK_ERROR]: () => false
  },
  false
);

export { thisWeek, thisWeekLoading };
