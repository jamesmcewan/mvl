import { handleActions } from 'redux-actions';
import {
  COMICS_REQUESTED,
  COMICS_RECEIVED,
  COMICS_REQUEST_ERROR
} from './actions';
import { combineReducers } from '../../../../../../Library/Caches/typescript/3.3/node_modules/redux';

const nextWeek = handleActions(
  {
    [COMICS_REQUESTED]: () => [],
    [COMICS_RECEIVED]: (state, action) => action.payload,
    [COMICS_REQUEST_ERROR]: () => []
  },
  []
);
const lastWeek = handleActions(
  {
    [COMICS_REQUESTED]: () => [],
    [COMICS_RECEIVED]: (state, action) => action.payload,
    [COMICS_REQUEST_ERROR]: () => []
  },
  []
);
const thisWeek = handleActions(
  {
    [COMICS_REQUESTED]: () => [],
    [COMICS_RECEIVED]: (state, action) => action.payload,
    [COMICS_REQUEST_ERROR]: () => []
  },
  []
);

const comics = combineReducers({
  nextWeek,
  lastWeek,
  thisWeek
});

export default comics;
