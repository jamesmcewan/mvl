import { combineReducers } from 'redux';
import { comics, isLoading } from './comics/reducers';

const reducers = combineReducers({ comics, isLoading });

export default reducers;
