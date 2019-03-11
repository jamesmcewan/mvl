import { handleActions } from 'redux-actions';
import {
  COMICS_REQUESTED,
  COMICS_RECEIVED,
  COMICS_REQUEST_ERROR
} from './actions';

const comics = handleActions(
  {
    [COMICS_REQUESTED]: () => [],
    [COMICS_RECEIVED]: (state, action) => action.payload,
    [COMICS_REQUEST_ERROR]: () => []
  },
  []
);

export default comics;
