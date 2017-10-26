import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import news from '../Reducers/newsReducer';

const reducer = combineReducers({
  news,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
