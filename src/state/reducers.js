import { combineReducers } from 'redux';
import comics from './comics/reducer';

const reducers = combineReducers({ comics });

export default reducers;
