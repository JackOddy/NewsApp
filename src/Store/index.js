import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import number from '../Reducers/counterReducer';

const reducer = combineReducers({
  number,
});

export default createStore(
  reducer,
  compose(applyMiddleware(thunk))
);
