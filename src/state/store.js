import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { save, load } from 'redux-localstorage-simple';

const middleware = [thunk];

const store = createStore(
  reducers,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

export default store;
