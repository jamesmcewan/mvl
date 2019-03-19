import { combineReducers } from 'redux';
import comics from './comics/reducers';

const reducers = combineReducers({ comics });

export default reducers;
