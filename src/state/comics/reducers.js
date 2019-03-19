import { combineReducers } from 'redux';
import { lastWeek, lastWeekLoading } from './lastWeek/reducer';
import { nextWeek, nextWeekLoading } from './nextWeek/reducer';
import { thisWeek, thisWeekLoading } from './thisWeek/reducer';

const comics = combineReducers({
  nextWeek,
  nextWeekLoading,
  lastWeek,
  lastWeekLoading,
  thisWeek,
  thisWeekLoading
});

export default comics;
