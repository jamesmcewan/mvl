import { handleActions } from 'redux-actions';

import {
  LAST_WEEK_REQUESTED,
  LAST_WEEK_RECEIVED,
  LAST_WEEK_ERROR
} from './actions';

const lastWeek = handleActions(
  {
    [LAST_WEEK_REQUESTED]: () => [],
    [LAST_WEEK_RECEIVED]: (state, action) => action.payload,
    [LAST_WEEK_ERROR]: () => []
  },
  []
);

const lastWeekLoading = handleActions(
  {
    [LAST_WEEK_REQUESTED]: () => true,
    [LAST_WEEK_RECEIVED]: () => false,
    [LAST_WEEK_ERROR]: () => false
  },
  false
);

export { lastWeek, lastWeekLoading };
