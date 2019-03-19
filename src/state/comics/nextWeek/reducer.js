import { handleActions } from 'redux-actions';

import {
  NEXT_WEEK_REQUESTED,
  NEXT_WEEK_RECEIVED,
  NEXT_WEEK_ERROR
} from './actions';

const nextWeek = handleActions(
  {
    [NEXT_WEEK_REQUESTED]: () => [],
    [NEXT_WEEK_RECEIVED]: (state, action) => action.payload,
    [NEXT_WEEK_ERROR]: () => []
  },
  []
);

const nextWeekLoading = handleActions(
  {
    [NEXT_WEEK_REQUESTED]: () => true,
    [NEXT_WEEK_RECEIVED]: () => false,
    [NEXT_WEEK_ERROR]: () => false
  },
  false
);

export { nextWeek, nextWeekLoading };
