import { handleActions } from 'redux-actions';
import {
  GET_COMICS,
  ERROR,
  OPEN_SPOTLIGHT,
  CLOSE_SPOTLIGHT,
} from '../actions/comics';
import { combineReducers } from 'redux';

const defaultState = {
  comics: [],
  isSpotlightVisible: false,
  comicsLoaded: false,
  spotlight: {},
};

const comics = handleActions(
  {
    [GET_COMICS]: (state, action) => action.payload,
    [ERROR]: (state, action) => action.payload,
    [OPEN_SPOTLIGHT]: (state, action) => action.payload,
    [CLOSE_SPOTLIGHT]: (state, action) => action.payload,
  },
  defaultState
);

const reducers = combineReducers({ comics });

export default reducers;
